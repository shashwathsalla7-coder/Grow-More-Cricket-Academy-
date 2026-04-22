import g1 from "@/assets/photo-batsman-stance.jpg";
import g2 from "@/assets/photo-batsman-shot.jpg";
import g3 from "@/assets/photo-academy-ground.jpg";

const images = [
  { src: g3, alt: "Grow More Cricket Academy ground and nets in LB Nagar", wide: true },
  { src: g1, alt: "Young batsman in stance during net practice" },
  { src: g2, alt: "Student playing a cricket shot at the academy" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="bg-gradient-dark py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Gallery</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Inside the <span className="text-gradient-primary">academy</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Real moments from training sessions and matches at our LB Nagar ground.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 shadow-card ${
                img.wide ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className={`w-full object-cover transition-bounce group-hover:scale-105 ${
                  img.wide ? "aspect-[4/3] lg:aspect-square" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
