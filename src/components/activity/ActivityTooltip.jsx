export default function ActivityTooltip({ tooltip }) {
  if (!tooltip) return null;

  return (
    <div
      className="contribution-tooltip"
      style={{
        left: `${Math.max(8, Math.min(tooltip.rect.left + tooltip.rect.width / 2 - 90, window.innerWidth - 188))}px`,
        top: `${Math.max(8, tooltip.rect.top - 42)}px`,
      }}
    >
      {tooltip.text}
    </div>
  );
}
