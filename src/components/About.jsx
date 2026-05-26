import { techRows } from "../data/skills";
import { WindowDots } from "./icons";

export default function About() {
  return (
    <article className="ios-card about-card">
      <header className="ios-bar">
        <WindowDots />
        <span className="done-button">Done</span>
      </header>

      <div className="message-time">Today, 11:56 PM</div>
      <h2>Hi! I'm Akhmad</h2>

      <div className="about-copy">
        <p>
          I'm a <strong>tech enthusiast</strong> who loves building clean <strong>web experiences</strong> and learning new things through code.
        </p>
        <p>
          I enjoy creating <strong>web apps, interactive interfaces, and digital experiences</strong> that feel useful, simple, and polished.
        </p>
        <p>
          <em>Currently open to</em> <strong>internships &amp; freelance projects.</strong>
        </p>
      </div>

      <div className="tech-panel" aria-label="Tech stack">
        <p>TECHSTACK</p>
        {techRows.map((row, index) => (
          <div className="tech-marquee" aria-hidden="true" key={index}>
            <div className={`tech-track ${index === 0 ? "to-left" : "to-right"}`}>
              {[...row, ...row].map((skill, skillIndex) => (
                <span className={`tech-logo ${skill.className}`} key={`${skill.name}-${skillIndex}`}>
                  <img src={skill.icon} alt="" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
