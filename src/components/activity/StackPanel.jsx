import { stackBreakdown } from "../../data/skills";

export default function StackPanel() {
  return (
    <article className="activity-panel stack-panel">
      <h2>STACK BREAKDOWN</h2>
      <ul>
        {stackBreakdown.map((item) => (
          <li style={{ "--value": `${item.value}%` }} key={item.name}>
            <span className={item.className}></span>
            <strong>{item.name}</strong>
            <em>{item.value}%</em>
          </li>
        ))}
      </ul>
    </article>
  );
}
