import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Reveal, { Eyebrow } from "./Reveal";
import { orderbookFeatures, X_URL } from "../utils";

// Illustrative depth for the product mock — not live market data.
const asks = [
  { price: "0.01298", size: "182,400", w: 0.42 },
  { price: "0.01294", size: "96,120", w: 0.24 },
  { price: "0.01291", size: "240,800", w: 0.62 },
  { price: "0.01288", size: "131,050", w: 0.33 },
  { price: "0.01285", size: "58,300", w: 0.16 },
];
const bids = [
  { price: "0.01281", size: "74,900", w: 0.2 },
  { price: "0.01278", size: "205,600", w: 0.55 },
  { price: "0.01275", size: "120,330", w: 0.31 },
  { price: "0.01271", size: "310,000", w: 0.8 },
  { price: "0.01268", size: "142,700", w: 0.38 },
];

function Row({
  price,
  size,
  w,
  side,
  i,
}: {
  price: string;
  size: string;
  w: number;
  side: "ask" | "bid";
  i: number;
}) {
  return (
    <div className="relative grid grid-cols-2 px-5 py-1.5 font-mono text-xs md:text-[13px]">
      <span
        className={`depth-bar absolute inset-y-0.5 right-0 w-full ${side === "ask" ? "bg-magenta/15" : "bg-azure/15"}`}
        style={{ "--w": w, "--dur": `${3 + (i % 3)}s` } as React.CSSProperties}
        aria-hidden
      />
      <span
        className={`relative ${side === "ask" ? "text-magenta" : "text-azure"}`}
      >
        {price}
      </span>
      <span className="relative text-right text-white/70">{size}</span>
    </div>
  );
}

function OrderbookMock() {
  return (
    <div className="relative" data-fx="tilt">
      <div
        className="absolute -inset-6 rounded-[2.5rem] bg-brand-gradient opacity-25 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold">
              CKB
            </span>
            <div>
              <p className="text-sm font-medium">CKB / xUDT</p>
              <p className="text-[11px] text-white/40">Nervos Layer 1</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-azure/15 px-3 py-1 text-[11px] font-medium text-azure">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-azure" />{" "}
            Prototype
          </span>
        </div>
        <div className="grid grid-cols-2 px-5 pb-1 pt-3 text-[11px] uppercase tracking-wider text-white/35">
          <span>Price</span>
          <span className="text-right">Size</span>
        </div>
        {asks.map((r, i) => (
          <Row key={r.price} {...r} side="ask" i={i} />
        ))}
        <div className="my-1 flex items-center justify-between border-y border-white/10 bg-white/[0.03] px-5 py-3">
          <span className="font-mono text-lg">0.01283</span>
          <span className="text-[11px] text-white/40">Spread 0.00004</span>
        </div>
        {bids.map((r, i) => (
          <Row key={r.price} {...r} side="bid" i={i + 2} />
        ))}
        <div className="grid grid-cols-2 gap-2 p-4">
          <span className="rounded-xl bg-azure/90 py-2.5 text-center text-sm font-medium">
            Place bid
          </span>
          <span className="rounded-xl bg-magenta/90 py-2.5 text-center text-sm font-medium">
            Place ask
          </span>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] text-white/30">
        Illustrative interface · figures are not live data
      </p>
    </div>
  );
}

const Orderbook = () => {
  return (
    <section
      id="orderbook"
      className="section-y relative overflow-hidden bg-ink"
    >
      {/* <div className="bg-cross pointer-events-none absolute inset-0 opacity-60" aria-hidden /> */}
      <div className="container-x relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Our product</Eyebrow>
            <h2 className="heading mt-5 max-w-3xl">
              Orderbook — a native order-book exchange for{" "}
              <span className="text-gradient font-normal">Nervos CKB.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={100} className="order-2 lg:order-1">
            <p className="text-lg leading-relaxed text-white/65">
              When we joined the Nervos community, we wanted to explore what
              DeFi could look like on CKB. A native DEX felt like the right
              place to start. Orderbook brings limit-order trading to Nervos —
              built around CKB&apos;s Cell model, so orders live on-chain and
              traders keep custody until a trade settles.
            </p>

            <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {orderbookFeatures.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-azure/40 text-azure">
                    <Check size={14} />
                  </span>
                  <div>
                    <h3 className="font-medium">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaXTwitter /> Follow the build
              </Link>
              <Link href="#contact" className="btn-ghost">
                Partner with us on CKB <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={200}
            className="order-1 mx-auto w-full max-w-md lg:order-2"
          >
            <OrderbookMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Orderbook;
