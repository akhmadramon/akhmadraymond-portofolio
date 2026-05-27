export function SvgIcon({ name }) {
  const brandIcons = {
    github: "https://cdn.simpleicons.org/github/181717",
    instagram: "https://cdn.simpleicons.org/instagram/000000",
    linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg",
    tiktok: "https://cdn.simpleicons.org/tiktok/000000",
  };

  if (brandIcons[name]) {
    return <img className="brand-icon" src={brandIcons[name]} alt="" aria-hidden="true" />;
  }

  const paths = {
    download: [
      "M12 3v11m0 0 4-4m-4 4-4-4",
      "M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2",
    ],
    arrowRight: ["M5 12h14", "m13 6 6 6-6 6"],
    arrowLeft: ["m15 18-6-6 6-6"],
    external: ["M7 17 17 7", "M8 7h9v9"],
    share: ["M12 16V4", "m8 8 4-4 4 4", "M5 12v7h14v-7"],
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {(paths[name] || []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function WindowDots() {
  return (
    <div className="window-dots" aria-hidden="true">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
    </div>
  );
}
