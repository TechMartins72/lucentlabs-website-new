"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links } from "../utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-xl border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link href="#top" aria-label="Lucent Labs home" onClick={() => setOpen(false)}>
          <Image src="/lucentlab_vector_dark.png" alt="Lucent Labs" width={190} height={23} priority />
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="block rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="btn-primary hidden h-10 px-5 sm:inline-flex">
            Start a project <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex h-[calc(100svh-4.5rem)] flex-col justify-between pb-10 pt-6" aria-label="Mobile">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.url} className="border-b border-white/10">
                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-3xl font-light"
                >
                  {link.title}
                  <ArrowUpRight className="text-white/40" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
            Start a project <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
