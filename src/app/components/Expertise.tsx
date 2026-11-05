"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { expertise } from "../utils";

const Expertise = () => {
  const [active, setActive] = useState(expertise[0].id);
  const current = expertise.find((e) => e.id === active) ?? expertise[0];

  return (
    <section id="expertise" className="section-y bg-paper text-ink">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow tone="magenta">What we do</Eyebrow>
            <h2 className="heading mt-5">Core expertise</h2>
          </div>
          <p className="max-w-lg text-lg text-ink/60 lg:justify-self-end">
            From the first contract to the last pixel of the interface — one team that understands both the
            protocol and the product.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Tabs */}
          <div role="tablist" aria-label="Expertise areas" className="flex flex-col">
            {expertise.map((e, i) => {
              const isActive = e.id === active;
              return (
                <button
                  key={e.id}
                  role="tab"
                  id={`tab-${e.id}`}
                  aria-selected={isActive}
                  aria-controls="expertise-panel"
                  onClick={() => setActive(e.id)}
                  className={`group flex items-center gap-5 border-b border-ink/10 py-6 text-left transition ${
                    isActive ? "text-ink" : "text-ink/40 hover:text-ink/70"
                  }`}
                >
                  <span className={`text-sm tabular-nums ${isActive ? "text-magenta" : ""}`}>0{i + 1}</span>
                  <span className="flex-1 text-2xl font-light tracking-tight md:text-3xl">{e.title}</span>
                  <ArrowRight
                    size={22}
                    className={`transition ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-50"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            id="expertise-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10"
          >
            <div className="bg-cross pointer-events-none absolute inset-0" aria-hidden />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-gradient opacity-30 blur-3xl" aria-hidden />
            <div key={current.id} className="relative animate-[fadeIn_.4s_ease]">
              <p className="text-lg leading-relaxed text-white/70">{current.summary}</p>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
                {current.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 bg-ink-2 px-5 py-4 text-sm">
                    <span className="text-magenta">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="link-arrow mt-8 text-azure">
                Discuss your {current.title.toLowerCase()} project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
};

export default Expertise;
