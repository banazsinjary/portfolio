import "./Components.css";
import "./SwitchText";
import SwitchText from "./SwitchText";
import Lottie from "lottie-react";
import plant from "./plantlottie.json";

function Landing() {
  return (
    <>
      <section className="section-sizing" id="land">
        <div id="landing">
          <div id="landing-text">
            <p>Hey I'm Banaz</p>
            <p>I'm a blend of data scientist, machine learning engineer</p>
            <p>{<SwitchText></SwitchText>}</p>
          </div>
          <div id="landing-animation">
            <Lottie loop={true} animationData={plant} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
