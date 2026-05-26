import { useState } from "react";
import { useGithubActivity } from "../hooks/useGithubActivity";
import ActivitySidebar from "./activity/ActivitySidebar";
import ActivityTooltip from "./activity/ActivityTooltip";
import ContributionPanel from "./activity/ContributionPanel";
import FocusPanel from "./activity/FocusPanel";
import StackPanel from "./activity/StackPanel";
import UpdatePanel from "./activity/UpdatePanel";

export default function Activity() {
  const [tooltip, setTooltip] = useState(null);
  const { heatmap, newestTime, visibleRepos } = useGithubActivity();

  const showTooltip = (text, element) => {
    setTooltip({ text, rect: element.getBoundingClientRect() });
  };

  return (
    <section className="activity-section" id="activity" aria-label="GitHub activity and stack breakdown">
      <div className="activity-window">
        <ActivitySidebar />

        <div className="activity-main">
          <ContributionPanel heatmap={heatmap} onShowTooltip={showTooltip} onHideTooltip={() => setTooltip(null)} />
          <FocusPanel />
          <UpdatePanel newestTime={newestTime} repos={visibleRepos} />
          <StackPanel />
        </div>
      </div>
      <ActivityTooltip tooltip={tooltip} />
    </section>
  );
}
