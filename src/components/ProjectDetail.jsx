import { useBackButtonVisibility } from "../hooks/useBackButtonVisibility";
import { SvgIcon } from "./icons";
import ProjectBreakdown from "./project-detail/ProjectBreakdown";
import ProjectDetailHero from "./project-detail/ProjectDetailHero";
import ProjectGallery from "./project-detail/ProjectGallery";
import ProjectInfoCards from "./project-detail/ProjectInfoCards";
import ProjectLifecycle from "./project-detail/ProjectLifecycle";

export default function ProjectDetail({ project, onClose }) {
  const isBackHidden = useBackButtonVisibility();

  if (!project) return null;

  return (
    <section className="project-detail detail-visible" id={`project-${project.id}`}>
      <button className={`detail-back ${isBackHidden ? "back-hidden" : ""}`} type="button" onClick={onClose}>
        <SvgIcon name="arrowLeft" />
        <span>Back</span>
      </button>

      <div className="detail-layout">
        <ProjectDetailHero project={project} />
        <ProjectInfoCards project={project} />
      </div>

      {project.detail.lifecycle && <ProjectLifecycle />}
      <ProjectBreakdown project={project} />
      <ProjectGallery project={project} />
    </section>
  );
}
