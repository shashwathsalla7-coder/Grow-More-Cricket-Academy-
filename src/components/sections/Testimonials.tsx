import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "The coaches are very supportive and focus on both skills and discipline.",
    name: "Ramesh K.",
    role: "Parent",
  },
  {
    quote: "Great environment for kids to learn professional cricket skills.",
    name: "Sunitha R.",
    role: "Parent",
  },
  {
    quote: "My child's confidence improved a lot after joining.",
    name: "Vijay M.",
    role: "Parent",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            What parents <span className="text-gradient-primary">are saying</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              4.9 average from 65+ reviews
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-border/60 bg-gradient-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50"
            >
              <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-primary p-1.5 text-primary-foreground shadow-glow" />
              <div className="mb-3 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4">
                <p className="font-display font-extrabold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
