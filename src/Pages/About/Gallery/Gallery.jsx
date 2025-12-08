import "./Gallery.css";
import museum from "../../../assets/museum.png";
import outdoors from "../../../assets/outdoors.png";
import art from "../../../assets/art.png";
import mystory from "../../../assets/mystory.png";

const images = [
  { src: museum, alt: "Museum visit" },
  { src: outdoors, alt: "Outdoors" },
  { src: art, alt: "Art project" },
  { src: mystory, alt: "Personal story" },
];

const Gallery = () => {
  return (
    <section className="about-gallery" aria-label="About me gallery">
      <h3 className="gallery-title">More About Me</h3>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <figure key={i} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
