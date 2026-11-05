import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { advisorsDetails, leader, teamDetails } from "../utils";
import { TeamDetails } from "../utils/types";

function SocialLinks({ person, size = "sm" }: { person: TeamDetails; size?: "sm" | "md" }) {
  return (
    <div className="flex gap-2">
      {person.socials.map((s) => (
        <Link
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`grid place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-azure hover:text-azure ${
            size === "md" ? "h-10 w-10" : "h-8 w-8 text-sm"
          }`}
        >
          <s.icon />
        </Link>
      ))}
    </div>
  );
}

function PersonCard({ person, i }: { person: TeamDetails; i: number }) {
  return (
    <Reveal delay={i * 70} className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-3">
        <Image
          src={person.imageUrl}
          alt={person.name}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="text-lg font-medium">{person.name}</h3>
            <p className="mt-1 text-xs text-white/60">{person.role}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="text-sm leading-relaxed text-white/50">{person.about}</p>
        <SocialLinks person={person} />
      </div>
    </Reveal>
  );
}

const OurTeam = () => {
  return (
    <section id="team" className="section-y relative overflow-hidden bg-ink">
      <div className="container-x">
        <Reveal>
          <Eyebrow>Team</Eyebrow>
          <h2 className="heading mt-5">Our leader</h2>
        </Reveal>

        {/* Leader feature */}
        <div className="mt-14 grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative aspect-square h-full w-full lg:aspect-auto lg:min-h-[520px]">
            <div className="absolute inset-0 bg-brand-gradient opacity-90" />
            <div className="bg-cross absolute inset-0" />
            <Image
              src={leader.imageUrl}
              alt={leader.name}
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              data-fx="parallax-img"
              className="object-cover object-top grayscale"
            />
          </Reveal>
          <Reveal delay={120} className="p-8 pt-0 md:p-12 lg:pl-0">
            <Quote className="text-magenta" size={36} />
            <p className="mt-6 text-2xl font-light leading-snug tracking-tight md:text-3xl">
              Passionate about advancing decentralized technology, engineering well-structured, high-quality
              systems and continuously pushing boundaries — both in technology and with my team.
            </p>
            <div className="mt-8 h-px w-16 bg-brand-gradient" />
            <h3 className="mt-8 text-2xl font-medium">{leader.name}</h3>
            <p className="mt-1 text-sm text-azure">{leader.role}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55">{leader.about}</p>
            <div className="mt-8">
              <SocialLinks person={leader} size="md" />
            </div>
          </Reveal>
        </div>

        {/* Team */}
        <Reveal className="mt-24 flex items-end justify-between gap-6">
          <h3 className="text-3xl font-light tracking-tight md:text-4xl">The engineers</h3>
          <p className="hidden max-w-sm text-sm text-white/50 md:block">
            Smart contract and full-stack specialists across Aiken, Compact, Rust and Go.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamDetails.map((p, i) => (
            <PersonCard key={p.name} person={p} i={i} />
          ))}
        </div>

        {/* Advisors */}
        <Reveal className="mt-24">
          <h3 className="text-3xl font-light tracking-tight md:text-4xl">Advisors</h3>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {advisorsDetails.map((a, i) => (
            <Reveal
              key={a.name}
              delay={i * 80}
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-ink-2 p-5"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-ink-3">
                <Image src={a.imageUrl} alt={a.name} fill sizes="80px" className="object-cover object-top grayscale" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium">{a.name}</h4>
                <p className="text-sm text-white/50">
                  {a.role} · {a.about}
                </p>
              </div>
              <SocialLinks person={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
