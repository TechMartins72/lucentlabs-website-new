import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { engagementModels, processSteps } from "../utils";

const HowWeWork = () => {
  return (
    <section id="process" className="bg-paper py-20 text-ink md:py-28 lg:py-32">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow tone="magenta">How we work</Eyebrow>
            <h2 className="heading mt-5">
              From first call to mainnet, <span className="font-medium">in four steps.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg text-ink/60 lg:justify-self-end">
            A clear process with something tangible at every stage — so you always know what&apos;s been
            built, what&apos;s next and what it costs.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Progress line (desktop) — draws in on scroll */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-ink/10 lg:block" aria-hidden>
            <div data-fx="draw" className="h-full w-full origin-left bg-brand-gradient" />
          </div>
          {/* Progress line (mobile) */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-ink/10 lg:hidden" aria-hidden />

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} className="relative pl-16 lg:pl-0">
                <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-paper text-sm font-medium lg:relative">
                  <span className="text-gradient">0{i + 1}</span>
                </span>
                <h3 className="text-2xl font-light tracking-tight lg:mt-8">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.desc}</p>
                <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">You get</p>
                  <ul className="mt-3 space-y-2">
                    {step.outcome.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Engagement models */}
        <Reveal className="mt-20 overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid lg:grid-cols-[0.9fr_2fr]">
            <div className="relative flex flex-col justify-between gap-8 p-8 md:p-10">
              <div className="bg-cross pointer-events-none absolute inset-0" aria-hidden />
              <div className="relative">
                <p className="eyebrow text-azure">Ways to work with us</p>
                <h3 className="mt-4 text-3xl font-light tracking-tight">Pick the model that fits your stage.</h3>
              </div>
              <Link href="#contact" className="link-arrow relative text-white">
                Start with a discovery call <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
              {engagementModels.map((m) => (
                <div key={m.title} className="bg-ink-2 p-8">
                  <h4 className="text-lg font-medium">{m.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowWeWork;
