import { useEffect, useMemo, useState } from "react";

const githubUser = "akhmadramon";
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
const fullDateFormatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric" });

function getDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function getStartOfWeek(date) {
  const nextDate = new Date(date);
  nextDate.setHours(0, 0, 0, 0);
  nextDate.setDate(nextDate.getDate() - nextDate.getDay());
  return nextDate;
}

function getContributionLevel(count, apiLevel = 0) {
  if (apiLevel > 0) return `level-${Math.min(apiLevel, 4)}`;
  if (count >= 5) return "level-4";
  if (count >= 3) return "level-3";
  if (count >= 2) return "level-2";
  if (count >= 1) return "level-1";
  return "";
}

function fallbackContributions() {
  return Array.from({ length: 154 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (153 - index));
    const count = index % 9 === 0 ? 4 : index % 5 === 0 ? 2 : index % 3 === 0 ? 1 : 0;
    return { date: getDateKey(date), count, level: count };
  });
}

export function formatUpdatedDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Updated recently";
  return `Updated ${fullDateFormatter.format(date)}`;
}

export function useGithubActivity() {
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState(fallbackContributions);

  useEffect(() => {
    let isMounted = true;

    async function loadGithubActivity() {
      try {
        const [reposResponse, contributionsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=8`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}?y=last`),
        ]);
        const [reposData, contributionData] = await Promise.all([reposResponse.json(), contributionsResponse.json()]);

        if (!isMounted) return;
        if (Array.isArray(reposData)) setRepos(reposData);
        if (Array.isArray(contributionData.contributions)) setContributions(contributionData.contributions);
      } catch {
        if (isMounted) setContributions(fallbackContributions());
      }
    }

    loadGithubActivity();
    return () => {
      isMounted = false;
    };
  }, []);

  const heatmap = useMemo(() => {
    const today = new Date();
    const weekCount = 22;
    const startCursor = new Date(today);
    startCursor.setDate(today.getDate() - (weekCount * 7 - 1));
    const startDate = getStartOfWeek(startCursor);
    const contributionMap = new Map(contributions.map((item) => [item.date, item]));
    const cells = [];
    let total = 0;

    for (let week = 0; week < weekCount; week += 1) {
      for (let day = 0; day < 7; day += 1) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);
        const contribution = contributionMap.get(getDateKey(date));
        const count = contribution?.count || 0;
        total += count;
        cells.push({
          date,
          count,
          level: getContributionLevel(count, contribution?.level),
          label: `${count === 1 ? "1 contribution" : `${count} contributions`} on ${fullDateFormatter.format(date)}`,
        });
      }
    }

    const months = [];
    let previousMonth = "";
    for (let week = 0; week < weekCount; week += 1) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7);
      const month = monthFormatter.format(date);
      if (month !== previousMonth) {
        months.push(month);
        previousMonth = month;
      }
    }

    return { cells, months, total };
  }, [contributions]);

  const visibleRepos = useMemo(() => repos.filter((repo) => !repo.fork).slice(0, 4), [repos]);
  const newestTime = useMemo(
    () => Math.max(...visibleRepos.map((repo) => new Date(repo.pushed_at).getTime()), Date.now()),
    [visibleRepos],
  );

  return { heatmap, newestTime, visibleRepos };
}
