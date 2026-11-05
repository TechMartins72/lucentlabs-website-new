import Reveal, { Eyebrow } from "./Reveal";
import { testimonials } from "../utils";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-y bg-paper text-ink">
      <div className="container-x">
        <Reveal>
          <Eyebrow tone="magenta">Client comments</Eyebrow>
          <h2 className="heading mt-5">What our clients say</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className={`flex flex-col justify-between rounded-3xl p-8 ${
                i === 1 ? "bg-ink text-white md:-translate-y-6" : "border border-ink/10 bg-white"
              }`}
            >
              <div>
                <span className="text-gradient text-6xl font-light leading-none">&ldquo;</span>
                <p className={`mt-2 text-lg leading-relaxed ${i === 1 ? "text-white/85" : "text-ink/80"}`}>
                  {t.quote}
                </p>
              </div>
              <div className={`mt-10 flex items-center gap-4 border-t pt-6 ${i === 1 ? "border-white/10" : "border-ink/10"}`}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className={`text-sm ${i === 1 ? "text-white/50" : "text-ink/50"}`}>{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
