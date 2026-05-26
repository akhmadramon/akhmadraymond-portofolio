export default function ProjectBreakdown({ project }) {
  if (!project.detail.breakdowns) return null;

  return (
    <section className={`breakdown-section ${project.detail.breakdownClass || ""}`} aria-labelledby={`${project.id}-breakdown-title`}>
      <div className="breakdown-heading">
        <p>PAGE BREAKDOWN</p>
      </div>

      {project.detail.breakdowns.map((item) => (
        <article className="breakdown-item" key={item.title}>
          <div className="breakdown-copy">
            <p>{item.section}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
          <div className="breakdown-media">
            <img className="breakdown-media-desktop" src={item.desktop} alt={`${item.alt} desktop preview`} />
            <img className="breakdown-media-phone" src={item.phone} alt={`${item.alt} mobile preview`} />
          </div>
        </article>
      ))}
    </section>
  );
}
