export function SvgIcon({ name }) {
  const paths = {
    download: [
      "M12 3v11m0 0 4-4m-4 4-4-4",
      "M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2",
    ],
    linkedin: [
      "M8 10v7",
      "M8 7v.01",
      "M12 17v-7",
      "M12 13.2c0-2.1 4-2.4 4 1.1V17",
    ],
    github: [
      "M15 22v-3.4a3 3 0 0 0-.8-2.4c2.8-.3 5.8-1.4 5.8-6.3a4.9 4.9 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.4 0C6.4 2.9 5.4 3.2 5.4 3.2a4.5 4.5 0 0 0-.1 3.3A4.9 4.9 0 0 0 4 9.9c0 4.9 3 6 5.8 6.3a2.6 2.6 0 0 0-.8 1.9V22",
      "M9 18c-3 .9-3.6-1.2-5-2",
    ],
    instagram: ["M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"],
    tiktok: ["M14 3v11.2a4.2 4.2 0 1 1-4.2-4.2", "M14 6.5c1.2 2.4 3 3.7 5 3.9"],
    arrowRight: ["M5 12h14", "m13 6 6 6-6 6"],
    arrowLeft: ["m15 18-6-6 6-6"],
    external: ["M7 17 17 7", "M8 7h9v9"],
    share: ["M12 16V4", "m8 8 4-4 4 4", "M5 12v7h14v-7"],
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "linkedin" && <rect x="3" y="3" width="18" height="18" rx="4" />}
      {name === "instagram" && (
        <>
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </>
      )}
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
