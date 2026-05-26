import { lifecycleSteps } from "../../data/projects";
import LifecycleIcon from "./LifecycleIcon";

export default function ProjectLifecycle() {
  return (
    <section className="lifecycle-section" aria-labelledby="lifecycle-title">
      <h2 id="lifecycle-title">Production Lifecycle</h2>
      <div className="lifecycle-track" aria-label="Project production phases">
        {lifecycleSteps.map((step) => (
          <article className="lifecycle-step" key={step.phase}>
            <div className={`lifecycle-icon ${step.color}`}>
              <LifecycleIcon />
            </div>
            <div>
              <p>{step.phase}</p>
              <h3>{step.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
