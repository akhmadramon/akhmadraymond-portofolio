import { SvgIcon } from "../icons";

export default function ProjectDetailHero({ project }) {
  return (
    <div className="detail-hero">
      <figure className={`detail-preview ${project.detail.phonePreview ? "phone-preview" : ""}`}>
        <img src={project.image} alt={`${project.title} project preview`} />
      </figure>

      <h2>{project.title}</h2>
      <p>{project.detail.summary}</p>

      <div className="detail-stats" aria-label="Project facts">
        {project.detail.stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>

      <div className="detail-stack" aria-label={project.category === "web" ? "Technology used" : "Design tools used"}>
        {project.tools.map((tool) => (
          <span key={tool.name}>
            <img src={tool.icon} alt="" />
            {tool.name.toUpperCase().replace("ADOBE ", "")}
          </span>
        ))}
      </div>

      {project.detail.website && (
        <a className="detail-website-link" href={project.detail.website} target="_blank" rel="noopener noreferrer">
          View Website
          <SvgIcon name="external" />
        </a>
      )}

      <div className="detail-scroll">KEEP SCROLLING</div>
    </div>
  );
}
