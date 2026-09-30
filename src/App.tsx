import "./App.css";
import { useState } from "react";
import NavBar from "./assets/components/NavBar.tsx";
import Landing from "./assets/components/Landing.tsx";
import AboutMe from "./assets/components/AboutMe.tsx";
import Projects from "./assets/components/Projects.tsx";
import Cases from "./assets/components/Cases.tsx";
import Footer from "./assets/components/Footer.tsx";

function App() {
  const [tab, setTab] = useState<"projects" | "cases">("projects");

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <Landing></Landing>

      <div className="section-sizing work-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "projects"}
          className={`work-tab ${tab === "projects" ? "active" : ""}`}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>
        <span className="work-tab-divider" aria-hidden="true">|</span>
        <button
          role="tab"
          aria-selected={tab === "cases"}
          className={`work-tab ${tab === "cases" ? "active" : ""}`}
          onClick={() => setTab("cases")}
        >
          Product Case Studies
        </button>
      </div>

      {tab === "projects" ? <Projects></Projects> : <Cases></Cases>}

      <AboutMe></AboutMe>

      <Footer></Footer>
    </>
  );
}

export default App;