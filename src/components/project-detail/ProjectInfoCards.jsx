export default function ProjectInfoCards({ project }) {
  return (
    <div className="detail-info">
      <article className="detail-card">
        <p className="detail-time">Today, 11:24 PM</p>
        <h3>{project.detail.cardTitle}</h3>
        <ul>
          {project.detail.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="detail-card">
        <p className="detail-time">Project Summary - Key Outcomes</p>
        <h3>Impact &amp; Outcome</h3>
        <p>{project.detail.outcome}</p>
      </article>
    </div>
  );
}
