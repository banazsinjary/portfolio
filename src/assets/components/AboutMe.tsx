import "./Components.css";
import { useState } from "react";
import me from "../abtmeimg.jpeg";

function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="section-sizing" id="about">
      <div className="about-me-content">
        <div className="about-me-left">
          <div className="about-me-title">A Little More About Me</div>
          <img src={me} className="about-me-image" alt="Banaz" />
        </div>
        <div className="about-me-right">
          <p>
            Hey there! I'm Banaz, a recent graduate with a Master's in Data
            Science and AI from San Francisco State University, where I also
            earned my Bachelor's in Computer Science. 🎓 My thesis explored
            how time-based nudges in virtual reality can support wellbeing,
            which got me hooked on research that puts people first.
          </p>
          <br />
          {expanded ? (
            <>
              <p>
                Beyond work, I find solace in exploring the great outdoors
                and conquering hiking trails. 🌲 I'm currently training for my
                first half marathon 🏃‍♀️ and working toward my dream of doing
                the Machu Picchu trek. ⛰️ When I'm not out in search of
                adventure, I can be found with my cat Sage in my lap, watching
                New Girl reruns. 🐱📺
              </p>
              <br />
              <button className="read-more-button" onClick={handleToggle}>
                Read less...
              </button>
            </>
          ) : (
            <button className="read-more-button" onClick={handleToggle}>
              Read more...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;