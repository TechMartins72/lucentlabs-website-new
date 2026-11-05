"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";
import { CONTACT_EMAIL, faqs } from "../utils";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper pb-20 text-ink md:pb-28 lg:pb-32">
      <div className="container-x">
        <div className="grid gap-12 pt-20 md:pt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div data-fx="pin">
              <Eyebrow tone="magenta">FAQ</Eyebrow>
              <h2 className="heading mt-5">Questions, answered.</h2>
              <p className="mt-6 max-w-sm text-ink/60">
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-ink underline underline-offset-4">
                  Email the team
                </Link>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="border-t border-ink/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-lg font-medium md:text-xl">{f.q}</span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                          isOpen ? "rotate-45 border-transparent bg-ink text-white" : "border-ink/20"
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <div
                      id={`faq-${i}`}
                      className={`grid transition-[grid-template-rows] duration-500 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 leading-relaxed text-ink/65">{f.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Faq;
