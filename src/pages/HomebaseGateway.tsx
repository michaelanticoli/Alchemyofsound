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
    <main className="min-h-screen bg-black text-white px-6 py-16 lg:px-12 flex items-center">
      <div className="max-w-4xl mx-auto w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-white/55">Keystone Hub</p>
        <h1 className="mt-5 text-4xl md:text-6xl tracking-tight leading-[1.04]">
          michaelanticoli.com now routes through the new Homebase.
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-3xl">
          The latest primary homepage is hosted at anticoli-homebase.netlify.app. You will be
          routed there shortly, while this repository continues to host the connected strategy,
          music, audio, and portfolio pages.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={HOMEBASE_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-black transition-colors hover:bg-white/90"
          >
            Open Homebase Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
          >
            Stay in this repository
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/65">
          <Clock3 className="h-3.5 w-3.5" />
          <span>{redirectLabel}</span>
        </div>

        <nav aria-label="Internal site destinations" className="mt-10 grid gap-3 md:grid-cols-3 text-sm">
          <a
            aria-label="Go to Marketing and Strategy page"
            className="rounded-2xl border border-white/10 p-4 hover:bg-white/5 transition-colors"
            href="/strategy/"
          >
            Marketing &amp; Strategy
          </a>
          <a
            aria-label="Go to Music Strategy page"
            className="rounded-2xl border border-white/10 p-4 hover:bg-white/5 transition-colors"
            href="/music-strategy/"
          >
            Music Strategy
          </a>
          <a
            aria-label="Go to Audio Lab page"
            className="rounded-2xl border border-white/10 p-4 hover:bg-white/5 transition-colors"
            href="/audio-lab/"
          >
            Audio Lab
          </a>
        </nav>
      </div>
    </main>
  );
}
