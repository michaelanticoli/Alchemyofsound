import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";

const HOMEBASE_URL = "https://anticoli-homebase.netlify.app/";
const REDIRECT_DELAY_SECONDS = 3;

export default function HomebaseGateway() {
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_DELAY_SECONDS);

  useEffect(() => {
    const redirectTimeout = window.setTimeout(() => {
      window.location.assign(HOMEBASE_URL);
    }, REDIRECT_DELAY_SECONDS * 1000);

    const countdownInterval = window.setInterval(() => {
      setSecondsRemaining((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimeout);
      window.clearInterval(countdownInterval);
    };
  }, []);

  const redirectLabel = useMemo(() => {
    if (secondsRemaining <= 0) {
      return "Redirecting now…";
    }
    return `Redirecting in ${secondsRemaining}s…`;
  }, [secondsRemaining]);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f4f1eb] px-6 py-16 text-[#111111] lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(123,79,47,0.18),_transparent_72%)]" />
        <div className="absolute right-[-7rem] top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(33,70,139,0.12),_transparent_72%)]" />
        <div className="absolute bottom-[-9rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(17,17,17,0.08),_transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/78 p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-sm md:p-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(123,79,47,0.45),rgba(33,70,139,0.32),transparent)]" />
        <p className="text-xs uppercase tracking-[0.24em] text-[#7b4f2f]">Keystone Hub</p>
        <h1 className="mt-5 text-4xl md:text-6xl tracking-tight leading-[1.04]">
          This site, michaelanticoli.com, now routes through the new Homebase.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg">
          The latest primary homepage is hosted at anticoli-homebase.netlify.app. You will be
          routed there shortly, while this repository continues to host the connected strategy,
          music, audio, and portfolio pages.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={HOMEBASE_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-black/85"
          >
            Open Homebase Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/12 bg-white/70 px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-black transition-colors hover:bg-black/[0.03]"
          >
            View Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#7b4f2f]/15 bg-[#7b4f2f]/[0.06] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#5d493b]">
          <Clock3 className="h-3.5 w-3.5" />
          <span>{redirectLabel}</span>
        </div>

        <nav aria-label="Internal site destinations" className="mt-10 grid gap-3 md:grid-cols-3 text-sm">
          <a
            aria-label="Open internal Marketing and Strategy page on michaelanticoli.com"
            className="rounded-2xl border border-black/10 bg-white/55 p-4 text-black/80 transition-colors hover:bg-white/85"
            href="/strategy/"
          >
            Marketing &amp; Strategy
          </a>
          <a
            aria-label="Open internal Music Strategy page on michaelanticoli.com"
            className="rounded-2xl border border-[#7b4f2f]/12 bg-[#7b4f2f]/[0.045] p-4 text-black/80 transition-colors hover:bg-[#7b4f2f]/[0.08]"
            href="/music-strategy/"
          >
            Music Strategy
          </a>
          <a
            aria-label="Open internal Audio Lab page on michaelanticoli.com"
            className="rounded-2xl border border-[#21468b]/12 bg-[#21468b]/[0.04] p-4 text-black/80 transition-colors hover:bg-[#21468b]/[0.08]"
            href="/audio-lab/"
          >
            Audio Lab
          </a>
        </nav>
      </div>
    </main>
  );
}
