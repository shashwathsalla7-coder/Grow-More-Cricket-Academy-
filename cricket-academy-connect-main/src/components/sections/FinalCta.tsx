import { CtaButtons } from "@/components/CtaButtons";

export const FinalCta = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0 -z-10 pitch-stripes opacity-30" />
      <div className="absolute -left-20 top-10 -z-10 h-60 w-60 rounded-full bg-primary-glow/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 -z-10 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">
            Limited Slots Open
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-6xl">
            Give your child the right cricket training
          </h2>
          <p className="mt-5 text-lg opacity-90 sm:text-xl">
            Talk to our head coach today. No forms. No waiting. Just a quick call.
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <CtaButtons size="xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
