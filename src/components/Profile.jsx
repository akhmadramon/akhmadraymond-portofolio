import About from "./About";
import Experience from "./Experience";

export default function Profile() {
  return (
    <section className="profile-section" aria-label="Short about and experience">
      <About />
      <Experience />
    </section>
  );
}
