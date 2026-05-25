const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
const roleText = document.querySelector("#roleText");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!roleText) return;

  const currentRole = roles[roleIndex];
  const nextText = isDeleting
    ? currentRole.slice(0, Math.max(charIndex - 1, 0))
    : currentRole.slice(0, charIndex + 1);

  roleText.textContent = nextText;
  charIndex = nextText.length;

  let delay = isDeleting ? 46 : 82;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 280;
  }

  window.setTimeout(typeRole, delay);
}

typeRole();

const githubUser = "akhmadramon";
const githubMonths = document.querySelector("[data-github-months]");
const githubHeatmap = document.querySelector("[data-github-heatmap]");
const githubTotal = document.querySelector("[data-github-total]");
const githubDate = document.querySelector("[data-github-date]");
const githubMonthLabel = document.querySelector("[data-github-month-label]");
const githubUpdates = document.querySelector("[data-github-updates]");
const githubRepos = document.querySelector("[data-github-repos]");
const contributionTooltip = document.createElement("div");
contributionTooltip.className = "contribution-tooltip";
contributionTooltip.hidden = true;
document.body.append(contributionTooltip);

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

function formatUpdatedDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Updated recently";

  return `Updated ${fullDateFormatter.format(date)}`;
}

function formatContributionText(count, date) {
  const contributionText = count === 1 ? "1 contribution" : `${count} contributions`;
  return `${contributionText} on ${fullDateFormatter.format(date)}`;
}

function showContributionTooltip(cell) {
  const text = cell.dataset.tooltip;
  if (!text) return;

  const rect = cell.getBoundingClientRect();
  contributionTooltip.textContent = text;
  contributionTooltip.hidden = false;

  const tooltipRect = contributionTooltip.getBoundingClientRect();
  const left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  const top = rect.top - tooltipRect.height - 10;

  contributionTooltip.style.left = `${Math.max(8, Math.min(left, window.innerWidth - tooltipRect.width - 8))}px`;
  contributionTooltip.style.top = `${Math.max(8, top)}px`;
}

function hideContributionTooltip() {
  contributionTooltip.hidden = true;
}

function renderGithubMonths(startDate, weekCount) {
  if (!githubMonths) return;

  const monthLabels = [];
  let previousMonth = "";

  for (let week = 0; week < weekCount; week += 1) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + week * 7);
    const month = monthFormatter.format(date);

    if (month !== previousMonth) {
      monthLabels.push(month);
      previousMonth = month;
    }
  }

  githubMonths.replaceChildren(...monthLabels.map((month) => {
    const item = document.createElement("span");
    item.textContent = month;
    return item;
  }));
}

function renderGithubHeatmap(contributionData) {
  if (!githubHeatmap) return;

  const today = new Date();
  const weekCount = 22;
  const startCursor = new Date(today);
  startCursor.setDate(today.getDate() - (weekCount * 7 - 1));
  const startDate = getStartOfWeek(startCursor);
  const contributionMap = new Map();

  contributionData.contributions?.forEach((item) => {
    contributionMap.set(item.date, item);
  });

  const cells = [];
  let total = 0;

  for (let week = 0; week < weekCount; week += 1) {
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7 + day);
      const contribution = contributionMap.get(getDateKey(date));
      const count = contribution?.count || 0;
      total += count;

      const cell = document.createElement("span");
      const level = getContributionLevel(count, contribution?.level);

      if (level) cell.className = level;
      cell.tabIndex = 0;
      cell.dataset.tooltip = formatContributionText(count, date);
      cell.setAttribute("aria-label", cell.dataset.tooltip);
      cell.addEventListener("mouseenter", () => showContributionTooltip(cell));
      cell.addEventListener("mouseleave", hideContributionTooltip);
      cell.addEventListener("focus", () => showContributionTooltip(cell));
      cell.addEventListener("blur", hideContributionTooltip);
      cells.push(cell);
    }
  }

  renderGithubMonths(startDate, weekCount);
  githubHeatmap.replaceChildren(...cells);

  if (githubTotal) {
    githubTotal.textContent = `${total} contributions in the last 5 months`;
  }
}

function renderGithubRepos(repos) {
  if (!githubUpdates || !githubRepos) return;

  const visibleRepos = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5);

  const newestTime = Math.max(...visibleRepos.map((repo) => new Date(repo.pushed_at).getTime()), Date.now());

  githubUpdates.replaceChildren(...visibleRepos.slice(0, 4).flatMap((repo) => {
    const item = document.createElement("div");
    const row = document.createElement("a");
    const name = document.createElement("strong");
    const updated = document.createElement("span");
    const bar = document.createElement("i");
    const ageInDays = Math.max((newestTime - new Date(repo.pushed_at).getTime()) / 86400000, 0);
    const barWidth = Math.max(30, 96 - ageInDays * 2.4);

    item.className = "repo-update-item";
    row.href = repo.html_url;
    row.target = "_blank";
    row.rel = "noopener noreferrer";
    name.textContent = repo.name;
    updated.textContent = formatUpdatedDate(repo.pushed_at);
    row.append(name, updated);
    bar.style.setProperty("--bar", `${Math.round(barWidth)}%`);
    item.append(row, bar);

    return [item];
  }));

  githubRepos.replaceChildren(...visibleRepos.slice(0, 3).map((repo) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const check = document.createElement("span");
    const name = document.createElement("span");
    const language = document.createElement("em");
    const date = document.createElement("small");

    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    check.className = "repo-check";
    name.textContent = repo.name;
    language.textContent = repo.language || "Public";
    date.textContent = fullDateFormatter.format(new Date(repo.pushed_at));
    link.append(check, name);
    item.append(link, language, date);

    return item;
  }));
}

async function loadGithubActivity() {
  if (!githubHeatmap && !githubUpdates) return;

  try {
    const [reposResponse, contributionsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=100`),
      fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}`),
    ]);

    if (!reposResponse.ok || !contributionsResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const [repos, contributionData] = await Promise.all([
      reposResponse.json(),
      contributionsResponse.json(),
    ]);

    renderGithubHeatmap(contributionData);
    renderGithubRepos(repos);

    if (githubDate) {
      githubDate.textContent = `${new Date().getFullYear()}`;
    }

    if (githubMonthLabel) {
      githubMonthLabel.textContent = `${monthFormatter.format(new Date())} ${new Date().getFullYear()}`;
    }
  } catch (error) {
    if (githubTotal) githubTotal.textContent = "GitHub activity is unavailable right now";
    if (githubUpdates) githubUpdates.textContent = "Unable to load recent updates.";
    githubRepos?.replaceChildren();
  }
}

loadGithubActivity();

const workTabs = document.querySelectorAll("[data-work-tab]");
const workPanels = document.querySelectorAll("[data-work-panel]");
const workTabsShell = document.querySelector(".work-tabs");

workTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.workTab;
    workTabsShell?.classList.toggle("is-uiux", target === "uiux");

    workTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    workPanels.forEach((panel) => {
      panel.hidden = panel.dataset.workPanel !== target;
    });
  });
});

const projectOpeners = document.querySelectorAll("[data-project-open]");
const projectClosers = document.querySelectorAll("[data-project-close]");
const projectDetails = document.querySelectorAll(".project-detail");
let lastDetailScrollY = 0;

function getActiveBackButton() {
  return document.querySelector(".project-detail:not([hidden]) [data-project-close]");
}

function setBackHidden(isHidden) {
  getActiveBackButton()?.classList.toggle("back-hidden", isHidden);
}

function resetBackButtons() {
  projectClosers.forEach((button) => {
    button.classList.remove("back-hidden");
  });
}

function openProjectDetail(projectId) {
  const detail = document.querySelector(`#project-${projectId}`);
  if (!detail) return;

  projectDetails.forEach((item) => {
    item.classList.remove("detail-visible");
    item.hidden = item !== detail;
  });

  document.body.classList.add("detail-open");
  resetBackButtons();
  lastDetailScrollY = 0;
  detail.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      detail.classList.add("detail-visible");
    });
  });
}

function closeProjectDetail() {
  const activeDetail = document.querySelector(".project-detail.detail-visible");

  if (!activeDetail) {
    document.body.classList.remove("detail-open");
    resetBackButtons();
    return;
  }

  activeDetail.classList.remove("detail-visible");

  window.setTimeout(() => {
    projectDetails.forEach((item) => {
      item.hidden = true;
    });

    document.body.classList.remove("detail-open");
    resetBackButtons();
    document.querySelector(".work-section")?.scrollIntoView({ behavior: "smooth" });
  }, 260);
}

function updateDetailBackVisibility() {
  if (!document.body.classList.contains("detail-open") || !getActiveBackButton()) return;

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 0 || currentScrollY < lastDetailScrollY) {
    setBackHidden(false);
  } else if (currentScrollY > lastDetailScrollY) {
    setBackHidden(true);
  }

  lastDetailScrollY = currentScrollY;
}

function handleDetailWheel(event) {
  if (!document.body.classList.contains("detail-open") || !getActiveBackButton()) return;

  if (event.deltaY < 0) {
    setBackHidden(false);
  } else if (event.deltaY > 0) {
    setBackHidden(true);
  }
}

function routeProjectHash() {
  const projectMatch = window.location.hash.match(/^#\/project\/(.+)$/);

  if (projectMatch) {
    openProjectDetail(projectMatch[1]);
    return;
  }

  closeProjectDetail();
}

projectOpeners.forEach((opener) => {
  opener.addEventListener("click", (event) => {
    const targetHash = `#/project/${opener.dataset.projectOpen}`;

    if (window.location.hash === targetHash) {
      event.preventDefault();
      routeProjectHash();
    }
  });
});

projectClosers.forEach((closer) => {
  closer.addEventListener("click", () => {
    window.location.hash = "#work";
  });
});

window.addEventListener("hashchange", routeProjectHash);
window.addEventListener("scroll", updateDetailBackVisibility, { passive: true });
window.addEventListener("wheel", handleDetailWheel, { passive: true, capture: true });
routeProjectHash();
