import Reveal, { Eyebrow } from "./Reveal";
import { stats, values } from "../utils";

const AboutUs = () => {
  return (
    <section id="about" className="section-y relative bg-paper text-ink">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="magenta">About us</Eyebrow>
            <h2 className="heading mt-5">
              The future isn&apos;t something to observe. <span className="font-medium">It&apos;s something to build.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-ink/70 lg:pt-12">
            <p>
              Lucent Labs is a Web3 development agency building the next generation of decentralized
              applications and financial infrastructure. We partner with innovators and organizations to
              design, develop and deploy secure, scalable blockchain solutions that unlock new possibilities
              in finance.
            </p>
            <p>
              With expertise across Cardano, Midnight, Nervos CKB, Ethereum, Solana and TRON, we specialise in
              DeFi applications and blockchain-based financial protocols — transforming ambitious ideas into
              products that advance decentralized technology.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 border-t border-ink/10 lg:mt-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`border-b border-ink/10 py-8 pr-6 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
                i % 2 === 1 ? "border-l border-ink/10 pl-6 lg:pl-8" : ""
              }`}
            >
              <p className="text-5xl font-light tracking-tight md:text-6xl">
                <span className="text-gradient tabular-nums" data-fx="count">
                  {s.value}
                </span>
              </p>
              <p className="mt-3 max-w-[14rem] text-sm text-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 80}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(32,30,30,0.35)]"
            >
              <span className="text-xs font-semibold text-ink/30">0{i + 1}</span>
              <h3 className="mt-10 text-xl font-medium">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.desc}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
