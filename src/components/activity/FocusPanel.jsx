import { focusAreas } from "../../data/skills";

export default function FocusPanel() {
  return (
    <article className="activity-panel focus-panel">
      <h2>FOCUS AREAS</h2>
      <div className="focus-orbit" aria-label="Focus areas">
        {focusAreas.map((area) => (
          <span className={`focus-logo ${area.className}`} key={area.name}>
            <img src={area.icon} alt={area.name} />
          </span>
        ))}
      </div>
    </article>
  );
}
