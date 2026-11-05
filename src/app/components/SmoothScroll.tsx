"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const HEADER_OFFSET = 72;

/**
 * Smooth scrolling (ScrollSmoother) + the site's subtle scroll-linked effects.
 * Elements opt in with:
 *   data-speed="clamp(0.9)"   parallax (ScrollSmoother effects)
 *   data-fx="hero-fade"       content drifts up and fades as the hero leaves
 *   data-fx="count"           number counts up once on enter
 *   data-fx="tilt"            settles from a slight 3D tilt while scrolling in
 *   data-fx="parallax-img"    image drifts inside its frame
 *   data-fx="scale-in"        grows from 94% to full size while scrolling in
 *   data-fx="rise"            rises into place (footer wordmark)
 *   data-fx="draw"            line draws left→right while scrolling through
 *   data-fx="pin"             stays pinned beside its column on desktop
 * Scrubbed effects trigger on the element's parent so the tween never moves its own trigger.
 * Never put data-speed / data-fx on an element that already has a CSS transform (e.g. .reveal).
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 1024px)",
        },
        (ctx) => {
          const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
          const q = gsap.utils.selector(wrapper);

          const smoother = motion
            ? ScrollSmoother.create({
                wrapper: wrapper.current!,
                content: "#smooth-content",
                smooth: 1.1,
                effects: true,
                smoothTouch: false,
                normalizeScroll: false,
              })
            : null;

          // In-page anchor links → smooth scroll with header offset.
          const onClick = (e: MouseEvent) => {
            const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute("href")!.slice(1);
            const target = id ? document.getElementById(id) : null;
            if (!target) return;
            e.preventDefault();
            history.replaceState(null, "", `#${id}`);
            if (smoother) smoother.scrollTo(target, true, `top ${id === "top" ? 0 : HEADER_OFFSET}px`);
            else window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - HEADER_OFFSET });
          };
          document.addEventListener("click", onClick);

          if (smoother && location.hash) {
            const t = document.getElementById(location.hash.slice(1));
            if (t) requestAnimationFrame(() => smoother.scrollTo(t, false, `top ${HEADER_OFFSET}px`));
          }

          if (motion) {
            // Hero copy drifts up and fades as you scroll past it.
            q<HTMLElement>('[data-fx="hero-fade"]').forEach((el) => {
              gsap.to(el, {
                y: -80,
                opacity: 0.25,
                ease: "none",
                scrollTrigger: { trigger: el.parentElement, start: "top 15%", end: "bottom top", scrub: true },
              });
            });

            // Stats count up once.
            q<HTMLElement>('[data-fx="count"]').forEach((el) => {
              const raw = el.textContent ?? "";
              const end = parseFloat(raw);
              if (Number.isNaN(end)) return;
              const suffix = raw.replace(/^[\d.]+/, "");
              const obj = { v: 0 };
              el.textContent = `0${suffix}`;
              gsap.to(obj, {
                v: end,
                duration: 1.4,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = `${Math.round(obj.v)}${suffix}`;
                },
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              });
            });

            // Product mock settles from a gentle tilt.
            q<HTMLElement>('[data-fx="tilt"]').forEach((el) => {
              gsap.fromTo(
                el,
                { rotateX: 10, rotateZ: -2, y: 40, transformPerspective: 1200 },
                {
                  rotateX: 0,
                  rotateZ: 0,
                  y: 0,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "center 55%", scrub: true },
                },
              );
            });

            // Images drift inside their frames.
            q<HTMLElement>('[data-fx="parallax-img"]').forEach((el) => {
              gsap.fromTo(
                el,
                { yPercent: -6, scale: 1.12 },
                {
                  yPercent: 6,
                  scale: 1.12,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
                },
              );
            });

            // Contact card eases up to full size.
            q<HTMLElement>('[data-fx="scale-in"]').forEach((el) => {
              gsap.fromTo(
                el,
                { scale: 0.94 },
                {
                  scale: 1,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "top 40%", scrub: true },
                },
              );
            });

            // Process line draws across as the steps scroll through.
            q<HTMLElement>('[data-fx="draw"]').forEach((el) => {
              gsap.fromTo(
                el,
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top 85%", end: "top 30%", scrub: true },
                },
              );
            });

            // Footer wordmark rises in.
            q<HTMLElement>('[data-fx="rise"]').forEach((el) => {
              gsap.fromTo(
                el,
                { yPercent: 45 },
                {
                  yPercent: 0,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom bottom", scrub: true },
                },
              );
            });
          }

          // FAQ heading stays beside the questions (CSS sticky doesn't work inside ScrollSmoother).
          if (desktop) {
            q<HTMLElement>('[data-fx="pin"]').forEach((el) => {
              const column = el.parentElement!;
              ScrollTrigger.create({
                trigger: el,
                start: `top ${HEADER_OFFSET + 40}px`,
                end: () => `+=${Math.max(0, column.offsetHeight - el.offsetHeight)}`,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
            });
          }

          return () => {
            document.removeEventListener("click", onClick);
            smoother?.kill();
          };
        },
      );
    },
    { scope: wrapper },
  );

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
