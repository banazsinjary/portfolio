import "./Components.css";
import SwitchText from "./SwitchText";

function Landing() {
  return (
    <>
      <section className="section-sizing" id="land">
        <div id="landing">
          <div id="landing-text">
            <p>Hey I'm Banaz</p>
            <p>I'm a blend of data analyst, researcher, project planner</p>
            <SwitchText />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;