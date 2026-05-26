import { experiences } from "../data/experiences";
import { SvgIcon } from "./icons";

export default function Experience() {
  return (
    <article className="ios-card experience-card">
      <header className="ios-bar experience-bar">
        <SvgIcon name="arrowLeft" />
        <div className="experience-actions">
          <SvgIcon name="share" />
          <span className="done-button">Done</span>
        </div>
      </header>

      <h2>Experience</h2>

      <div className="experience-list">
        {experiences.map((item) => (
          <section className="experience-item" key={item.company}>
            <div>
              <h3>{item.company}</h3>
              <p className="role">{item.role}</p>
            </div>
            <time>{item.period}</time>
            <p>{item.description}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
