import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { chains } from "../utils";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 md:pt-40">
      {/* Brand pattern + glow */}
      {/* <div className="bg-cross mask-fade-b pointer-events-none absolute inset-0" aria-hidden /> */}
      <div
        data-speed="clamp(0.6)"
        className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full opacity-40 blur-[140px] bg-brand-gradient"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-14 pb-20 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
        <div data-fx="hero-fade">
          <Reveal>
            <Eyebrow>Web3 development agency</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              We build the future of <span className="text-gradient font-normal">decentralized finance.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Lucent Labs designs, develops and deploys secure, scalable DeFi applications and financial
              protocols — turning ambitious ideas into real-world products across six blockchains.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn-primary">
              Start a project <ArrowUpRight size={16} />
            </Link>
            <Link href="#orderbook" className="btn-ghost">
              Explore Orderbook on CKB <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="relative aspect-square" data-speed="clamp(0.85)">
            <div className="absolute inset-8 rounded-[3rem] border border-white/10 bg-white/[0.02]" />
            <div className="absolute inset-0 grid place-items-center">
              <Image
                src="/brand-symbol.png"
                alt=""
                width={300}
                height={306}
                priority
                className="animate-float drop-shadow-[0_30px_60px_rgba(226,44,146,0.35)]"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -left-4 top-16 rounded-2xl border border-white/10 bg-ink-2/90 px-4 py-3 backdrop-blur">
              <p className="text-[11px] uppercase tracking-widest text-white/40">Now building</p>
              <p className="mt-1 text-sm font-medium">Orderbook · Nervos CKB</p>
            </div>
            <div className="absolute -right-2 bottom-16 rounded-2xl border border-white/10 bg-ink-2/90 px-4 py-3 backdrop-blur">
              <p className="text-[11px] uppercase tracking-widest text-white/40">Shipped on</p>
              <p className="mt-1 text-sm font-medium">6 blockchains</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Ecosystems strip */}
      <div className="relative border-y border-white/10 bg-ink">
        <div className="container-x flex flex-col items-start gap-4 py-7 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Ecosystems we&apos;ve built on
          </p>
          <div className="marquee mask-fade-x w-full overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {[...chains, ...chains].map((chain, i) => (
                <span
                  key={i}
                  aria-hidden={i >= chains.length}
                  className="flex items-center gap-10 pr-10 text-2xl font-light tracking-tight text-white/80 md:text-3xl"
                >
                  {chain}
                  <span className="text-lg text-magenta">+</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
