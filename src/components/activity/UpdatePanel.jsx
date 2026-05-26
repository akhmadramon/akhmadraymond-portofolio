import { formatUpdatedDate } from "../../hooks/useGithubActivity";

function FeedIcon({ type }) {
  return (
    <span className="feed-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        {type === "updates" ? (
          <>
            <path d="M7 7h4v4H7z" />
            <path d="M13 13h4v4h-4z" />
            <path d="M11 9h3a2 2 0 0 1 2 2v2" />
            <path d="M7 11v2a2 2 0 0 0 2 2h4" />
          </>
        ) : (
          <>
            <path d="M6 4h12v16H6z" />
            <path d="M9 17h6" />
          </>
        )}
      </svg>
    </span>
  );
}

function RecentUpdate({ repo, newestTime }) {
  const ageInDays = Math.max((newestTime - new Date(repo.pushed_at).getTime()) / 86400000, 0);
  const barWidth = Math.max(30, 96 - ageInDays * 2.4);

  return (
    <div className="repo-update-item">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <strong>{repo.name}</strong>
        <span>{formatUpdatedDate(repo.pushed_at)}</span>
      </a>
      <i style={{ width: `${barWidth}%` }}></i>
    </div>
  );
}

function RepoLink({ repo }) {
  return (
    <li>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <span className="repo-check"></span>
        <span>{repo.name}</span>
        <em>{repo.language || "Code"}</em>
        <small>{formatUpdatedDate(repo.pushed_at)}</small>
      </a>
    </li>
  );
}

export default function UpdatePanel({ newestTime, repos }) {
  return (
    <article className="activity-panel update-panel">
      <h2>CONTRIBUTION ACTIVITY</h2>
      <div className="activity-month-row">
        <strong>May 2026</strong>
        <span></span>
      </div>

      <div className="activity-feed">
        <section className="activity-feed-group">
          <FeedIcon type="updates" />
          <div>
            <h3>Recent Updates</h3>
            <div className="repo-bars">
              {repos.map((repo) => (
                <RecentUpdate repo={repo} newestTime={newestTime} key={repo.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="activity-feed-group">
          <FeedIcon />
          <div>
            <h3>Repositories</h3>
            <ul>
              {repos.map((repo) => (
                <RepoLink repo={repo} key={repo.id} />
              ))}
            </ul>
          </div>
        </section>
      </div>

      <a className="show-more-activity" href="https://github.com/akhmadramon" target="_blank" rel="noopener noreferrer">
        Show more activity
      </a>
    </article>
  );
}
