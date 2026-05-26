import { SvgIcon } from "./icons";

export default function ProjectCard({ project, onOpen }) {
  const openProject = () => onOpen(project.id);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <article
      className={`project-card ${project.reverse ? "project-card-reverse" : ""}`}
      role="link"
      tabIndex={0}
      aria-label={`Explore ${project.title} project`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
    >
      <figure className="project-media">
        <img src={project.image} alt={project.imageAlt} />
      </figure>
      <div className="project-content">
        <p className="project-meta">{project.meta}</p>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-tech" aria-label={project.category === "web" ? "Technology used" : "Design tools used"}>
          {project.tools.map((tool) => (
            <span key={tool.name}>
              <img src={tool.icon} alt={tool.name} />
            </span>
          ))}
        </div>
        <div className="project-link" aria-hidden="true">
          <span className="project-link-full">Explore Project</span>
          <span className="project-link-short">View</span>
          <SvgIcon name="arrowRight" />
        </div>
      </div>
    </article>
  );
}
