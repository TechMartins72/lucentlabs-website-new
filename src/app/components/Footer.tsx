import Image from "next/image";
import Link from "next/link";
import { chains, links, socials } from "../utils";

const Footer = () => {
  return (
    <footer className="bg-ink pt-20">
      <div className="container-x">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image src="/lucentlab_vector_dark.png" alt="Lucent Labs" width={210} height={26} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Lucent Labs builds Web3 applications and decentralized financial protocols, transforming bold ideas
              into impactful blockchain solutions.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <Link
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-magenta hover:text-magenta"
                >
                  <s.icon />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Navigate</p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.url}>
                  <Link href={l.url} className="text-sm text-white/70 transition hover:text-white">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Ecosystems</p>
            <ul className="mt-5 space-y-3">
              {chains.map((c) => (
                <li key={c} className="text-sm text-white/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Lucent Labs. All rights reserved.</p>
          <p>Building the future of decentralized finance.</p>
        </div>
      </div>
      <div className="overflow-hidden" aria-hidden>
        <p data-fx="rise" className="text-gradient select-none text-center text-[19vw] font-semibold leading-[0.8] tracking-[-0.06em] opacity-90">
          lucent labs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
