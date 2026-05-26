import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";

function getProjectIdFromHash() {
  return window.location.hash.match(/^#\/project\/(.+)$/)?.[1] || null;
}

export function useProjectRoute() {
  const [activeProjectId, setActiveProjectId] = useState(getProjectIdFromHash);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId),
    [activeProjectId],
  );

  useEffect(() => {
    const handleHashChange = () => setActiveProjectId(getProjectIdFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeProject) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeProject]);

  const openProject = (projectId) => {
    window.location.hash = `/project/${projectId}`;
    setActiveProjectId(projectId);
  };

  const closeProject = () => {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    setActiveProjectId(null);

    // Wait until the project list is visible again before scrolling to it.
    window.requestAnimationFrame(() => {
      document.querySelector(".work-section")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return { activeProject, closeProject, openProject };
}
