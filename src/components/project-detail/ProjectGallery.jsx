export default function ProjectGallery({ project }) {
  if (!project.detail.gallery) return null;

  return (
    <section className="mobile-gallery-section" aria-labelledby={`${project.id}-gallery-title`}>
      <div className="breakdown-heading">
        <p>SCREEN BREAKDOWN</p>
      </div>
      <h2 id={`${project.id}-gallery-title`}>{project.detail.galleryTitle}</h2>
      <div className="mobile-gallery">
        {project.detail.gallery.map((screen) => (
          <article key={screen.title}>
            <img src={screen.image} alt={screen.alt} />
            <h3>{screen.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
