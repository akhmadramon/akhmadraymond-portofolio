import Activity from "./components/Activity";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import { useProjectRoute } from "./hooks/useProjectRoute";

export default function App() {
  const { activeProject, closeProject, openProject } = useProjectRoute();

  if (activeProject) {
    return <ProjectDetail project={activeProject} onClose={closeProject} />;
  }

  return (
    <>
      <Hero />
      <Profile />
      <Projects onOpenProject={openProject} />
      <Activity />
      <Footer />
    </>
  );
}
