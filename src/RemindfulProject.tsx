import "./Projects.css";
import NavBar from "./assets/components/NavBar";

function RemindfulProject() {
  return (
    <>
      <NavBar></NavBar>
      <div className="project-container">
        <div className="project-description"></div>
        <div className="project-tools"></div>
        <div className="project-goals"></div>
        <div className="project-process"></div>
        <div className="project-stack"></div>
      </div>
    </>
  );
}

export default RemindfulProject;
