import { SvgIcon, WindowDots } from "../icons";

export default function ActivitySidebar() {
  return (
    <aside className="activity-sidebar">
      <WindowDots />
      <p>ACTIVITY</p>
      <a href="https://github.com/akhmadramon" target="_blank" rel="noopener noreferrer">
        <SvgIcon name="github" />
        GitHub
      </a>
    </aside>
  );
}
