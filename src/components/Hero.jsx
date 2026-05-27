import { useEffect, useState } from "react";
import { SvgIcon } from "./icons";

const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];

function useTypedRole() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      const currentRole = roles[roleIndex];
      const nextText = isDeleting
        ? currentRole.slice(0, Math.max(charIndex - 1, 0))
        : currentRole.slice(0, charIndex + 1);

      setText(nextText);
      charIndex = nextText.length;

      let delay = isDeleting ? 46 : 82;
      if (!isDeleting && charIndex === currentRole.length) {
        delay = 1200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 280;
      }

      timer = window.setTimeout(tick, delay);
    };

    tick();
    return () => window.clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const role = useTypedRole();

  return (
    <main className="hero" aria-label="Akhmad Raymond portfolio introduction">
      <section className="hero-copy">
        <h1>
          Hi, I'm Akhmad
          <br />
          Raymond
        </h1>

        <div className="terminal-card" aria-label="Current role">
          <div className="terminal-topbar">
            <div className="window-dots" aria-hidden="true">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <p>Role - zsh</p>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">~ $</span> role
            </p>
            <p className="typed-line">
              <span>{role}</span>
              <span className="caret"></span>
            </p>
          </div>
        </div>

        <nav className="social-actions" aria-label="Portfolio links">
          <a
            className="resume-button"
            href="https://drive.google.com/file/d/1PII6BM6n7c7MmK6BFZ83Vh28aQBKXzAW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="resume-label">Resume</span>
            <span className="resume-extra" aria-hidden="true">
              Download
            </span>
            <SvgIcon name="download" />
          </a>

          <span className="icon-button" style={{ "--open-width": "118px" }} aria-label="LinkedIn">
            <SvgIcon name="linkedin" />
            <span>soon</span>
          </span>

          <a className="icon-button" style={{ "--open-width": "208px" }} href="https://github.com/akhmadramon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <SvgIcon name="github" />
            <span>@akhmadramon</span>
          </a>

          <a className="icon-button" style={{ "--open-width": "220px" }} href="https://www.instagram.com/akhmadraymond?igsh=em4yejJ1Y3U5MWJ6" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <SvgIcon name="instagram" />
            <span>@akhmadraymond</span>
          </a>

          <a className="icon-button" style={{ "--open-width": "220px" }} href="https://www.tiktok.com/@akhmadraymond?_r=1&_t=ZS-96d8VD2bDeP" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            <SvgIcon name="tiktok" />
            <span>@akhmadraymond</span>
          </a>
        </nav>
      </section>

      <section className="photo-stack" aria-label="Akhmad Raymond photos">
        <figure className="polaroid layer back-left">
          <img src="/Assets/Landing Page Picture/Photo1.jpg" alt="" />
        </figure>
        <figure className="polaroid layer back-right">
          <img src="/Assets/Landing Page Picture/Photo2.jpg" alt="" />
        </figure>
        <figure className="polaroid main-photo">
          <img src="/Assets/Landing Page Picture/Photo3.jpg" alt="Akhmad Raymond standing on a beach" />
          <figcaption>Tech Enthusiast | English Enthusiast</figcaption>
        </figure>
      </section>
    </main>
  );
}
