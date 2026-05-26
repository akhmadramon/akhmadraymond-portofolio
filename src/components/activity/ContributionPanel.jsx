export default function ContributionPanel({ heatmap, onShowTooltip, onHideTooltip }) {
  return (
    <article className="activity-panel contribution-panel">
      <div className="panel-title">
        <h2>CONTRIBUTIONS</h2>
        <span></span>
      </div>

      <div className="contribution-months" aria-hidden="true">
        {heatmap.months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>

      <div className="contribution-grid" aria-label="Contribution heatmap">
        <span className="day">Mon</span>
        <span className="day">Wed</span>
        <span className="day">Fri</span>
        <div className="heatmap" aria-hidden="true">
          {heatmap.cells.map((cell) => (
            <span
              className={cell.level}
              tabIndex={0}
              aria-label={cell.label}
              key={cell.date.toISOString()}
              onMouseEnter={(event) => onShowTooltip(cell.label, event.currentTarget)}
              onMouseLeave={onHideTooltip}
              onFocus={(event) => onShowTooltip(cell.label, event.currentTarget)}
              onBlur={onHideTooltip}
            ></span>
          ))}
        </div>
      </div>

      <div className="contribution-footer">
        <p>{heatmap.total} contributions in the last 5 months</p>
        <div>
          <span>Less</span>
          <i></i>
          <i className="level-1"></i>
          <i className="level-2"></i>
          <i className="level-3"></i>
          <i className="level-4"></i>
          <span>More</span>
        </div>
      </div>
    </article>
  );
}
