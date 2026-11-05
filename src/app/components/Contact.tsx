import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Reveal from "./Reveal";
import { CONTACT_EMAIL, X_URL } from "../utils";

const Contact = () => {
  return (
    <section id="contact" className="bg-paper px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink" data-fx="scale-in">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" aria-hidden />
        <div className="bg-cross absolute inset-0" aria-hidden />
        <div className="container-x relative py-20 md:py-28">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-white/80">Let&apos;s build</p>
            <h2 className="display mt-6 text-5xl md:text-7xl lg:text-8xl">Have a project in mind?</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Tell us what you&apos;re building and let&apos;s discuss how we can bring your Web3 vision to life.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={`mailto:${CONTACT_EMAIL}`} className="btn h-14 bg-white px-8 text-base text-ink hover:bg-ink hover:text-white">
              Start a project <ArrowUpRight size={18} />
            </Link>
            <Link href={X_URL} target="_blank" rel="noopener noreferrer" className="btn h-14 border border-white/40 px-8 text-base hover:bg-white/10">
              <FaXTwitter /> DM us on X
            </Link>
            <span className="text-sm text-white/80 sm:ml-4">or write to {CONTACT_EMAIL}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
