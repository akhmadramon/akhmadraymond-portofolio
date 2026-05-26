import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const tabs = [
  { id: "web", label: "Web Development" },
  { id: "uiux", label: "UI/UX Design" },
];

export default function Projects({ onOpenProject }) {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="work-heading">
        <h2 id="work-title">Selected Work</h2>
        <p>A collection of digital experiences, crafted with purpose.</p>
      </div>

      <div className={`work-tabs ${activeTab === "uiux" ? "is-uiux" : ""}`} aria-label="Project categories">
        {tabs.map((tab) => (
          <button
            className={`work-tab ${activeTab === tab.id ? "active" : ""}`}
            type="button"
            aria-pressed={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div className={`work-list ${activeTab === tab.id ? "active" : ""}`} hidden={activeTab !== tab.id} key={tab.id}>
          {projects
            .filter((project) => project.category === tab.id)
            .map((project) => (
              <ProjectCard project={project} onOpen={onOpenProject} key={project.id} />
            ))}
        </div>
      ))}
    </section>
  );
}
