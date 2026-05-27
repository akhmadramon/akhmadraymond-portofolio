import { useState } from "react";
import Activity from "./components/Activity";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import { projects } from "./data/projects";
import { useProjectRoute } from "./hooks/useProjectRoute";

export default function App() {
  const { activeProject, closeProject, openProject } = useProjectRoute();
  const [activeProjectTab, setActiveProjectTab] = useState("web");

  const handleOpenProject = (projectId) => {
    const project = projects.find((item) => item.id === projectId);
    if (project) setActiveProjectTab(project.category);
    openProject(projectId);
  };

  if (activeProject) {
    return <ProjectDetail project={activeProject} onClose={closeProject} />;
  }

  return (
    <>
      <Hero />
      <Profile />
      <Projects activeTab={activeProjectTab} onChangeTab={setActiveProjectTab} onOpenProject={handleOpenProject} />
      <Activity />
      <Footer />
    </>
  );
}
