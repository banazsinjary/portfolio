import "./Components.css";
import React, { useState } from 'react';
import me from "../liloleme.png";

function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <section className="about-me-section" id="about">
      <div className="about-me-content">
        <div className="about-me-left">
          <div className="about-me-title">A Little More About Me</div>
          <img src={me} className="about-me-image" />
        </div>
        <div className="about-me-right">
          <p>
            Hey there! I'm Banaz, a recent graduate with a Bachelors of Science
            in Computer Science from San Francisco State University. 🎓 During
            my two-year-long front-end development internship, I delved into the
            wonderful world of TypeScript and Litelement frameworks, mastering
            the art of crafting dynamic and user-friendly web experiences. 💻
            APIs and maintaining legacy code? No problemo! 
          </p>
          <br/>
          {expanded ? (
            <>
              <p>
                Beyond coding, I find solace in exploring the great outdoors and conquering hiking trails.
                Nature fuels my creativity and inspires my problem-solving skills.
                🌲 When I'm not immersed in the tech world, you'll find me
                perfecting my yoga poses, finding my zen on the mat. 🧘 And did I
                mention I'm a coffee aficionado? As a skilled barista, I create
                delicious caffeinated wonders to kickstart the day. ☕
              </p>
              <br/>
              <p>
                With an innate curiosity and a passion for continuous learning, I thrive in
                fast-paced environments that fuel my hunger for growth. I embrace
                challenges with open arms, always seeking opportunities to expand my
                knowledge and skill set. 🚀
              </p>
              <br/>
              <p>
                Join me on this exciting journey as we explore the intersections of technology, nature, and
                self-expression. Let's create something incredible together!
              </p>
              <br/>
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
