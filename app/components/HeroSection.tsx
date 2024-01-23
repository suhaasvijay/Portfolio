import Description from "./Description";
import Experience from "./Experience";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OnGoingProjects from "./OnGoingProjects";
import Projects from "./Projects";
import ToolsAndTechnologies from "./ToolsAndTechnologies";

export default function HeroSection() {
  return (
    <div>
      <NavBar />
      <Description />
      <Projects />
      <OnGoingProjects />
      <ToolsAndTechnologies />
      <Experience />
      <Footer />
    </div>
  )
}
