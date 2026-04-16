import { motion } from "motion/react";
import {
  ArrowUpRight,
  AudioWaveform,
  BarChart3,
  BrainCircuit,
  Disc3,
  Layers3,
  Music2,
  Radio,
  Sparkles,
} from "lucide-react";
import { RelatedPages } from "../components/RelatedPages";
import { SiteNav } from "../components/SiteNav";
import { Badge } from "../components/ui/badge";

const globalNavLinks = [
  { label: "Home", href: "/" },
  { label: "Strategy", href: "/strategy/" },
  { label: "Music Strategy", href: "/music-strategy/" },
  { label: "Audio", href: "/audio-lab/" },
  { label: "Contact", href: "mailto:michaelanticoli@gmail.com" },
];

const introCards = [
  {
    title: "Audience-aware thinking",
    body:
      "The work starts with how listeners actually encounter music: context, timing, platform behavior, emotional framing, and the way identity shapes attention.",
  },
  {
    title: "Editorial + strategic range",
    body:
      "I bridge music fluency with strategy language, turning creative instinct into frameworks that editorial, brand, platform, and partnership teams can use.",
  },
  {
    title: "Built from practice",
    body:
      "This perspective comes from real songwriting, production, artist development, systems building, and campaign-facing strategy work—not theory at a distance.",
  },
];

const proofBlocks = [
  {
    icon: BarChart3,
    title: "Performance literacy",
    text:
      "Comfortable reading audience response, campaign data, and platform patterns without flattening music into sterile dashboards.",
  },
  {
    icon: Radio,
    title: "Music ecosystem fluency",
    text:
      "Understands music as culture, metadata, memory, identity signal, editorial programming, and distribution context all at once.",
  },
  {
    icon: Layers3,
    title: "Systems thinking",
    text:
      "Able to organize interdisciplinary material into structures, narratives, and decision-ready frameworks that teams can build from.",
  },
  {
    icon: AudioWaveform,
    title: "Audio-first credibility",
    text:
      "Brings real producer-songwriter perspective to conversations around artist development, sonic identity, fan behavior, and storytelling.",
  },
];

const caseStudies = [
  {
    title: "Agency-side strategy across brand, culture, and platform",
    subtitle: "Havas, Battery, and cross-functional campaign environments",
    summary:
      "Built strategy at the intersection of audience behavior, cultural positioning, creative systems, and music-led storytelling. The through-line was always the same: make the signal legible, the story compelling, and the execution useful.",
    bullets: [
      "Connected brand narrative, audience segmentation, and creative rollout planning.",
      "Bridged creative, production, and business stakeholders without reducing the work to generic marketing language.",
      "Approached sound as an architectural layer of identity, recall, and emotional positioning.",
    ],
  },
  {
    title: "Paid media and performance-facing thinking at CPB",
    subtitle: "Optimization, reporting, and cross-channel pattern reading",
    summary:
      "Supported campaign environments spanning Meta, TikTok, YouTube, and LinkedIn Ads, contributing to reporting, iteration, and creative decision-making. The result was stronger platform fluency without losing sight of story and meaning.",
    bullets: [
      "Worked across paid social and platform-native distribution environments.",
      "Collaborated with analytics and design functions to interpret signals and improve creative decisions.",
      "Built credibility with teams that need editorial instinct and operational awareness in the same person.",
    ],
  },
  {
    title: "Independent systems development",
    subtitle: "Moon Tuner, Quantumelodic, and music-led product concepts",
    summary:
      "Built a body of original work translating symbolic or abstract systems into structured experiences: harmonic identity frameworks, narrative engines, and audience-facing concepts rooted in music and meaning.",
    bullets: [
      "Designed frameworks mapping identity, timing, and emotional patterning into legible outputs.",
      "Developed products, reports, and prototypes under resource constraints without losing conceptual rigor.",
      "Demonstrated founder-level initiative, product intuition, and differentiated point of view.",
    ],
  },
];

const experiments = [
  "Sonic DNA and identity-layered music systems",
  "Quantumelodic narrative and pattern frameworks",
  "Artist storytelling and fan resonance concepts",
  "Music discovery and editorial positioning tools",
];

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body: string;
}

function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="text-xs uppercase tracking-[0.28em] text-white/40">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-6xl tracking-tight">{title}</h2>
      <p className="text-base md:text-lg leading-relaxed text-white/65">{body}</p>
    </div>
  );
}

export default function MusicStrategy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav links={globalNavLinks} theme="dark" />

      <main className="px-6 lg:px-12 pt-32 pb-16">
        <section className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.11),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-chart-2/10 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <Badge className="rounded-full px-4 py-1 text-xs uppercase tracking-[0.24em]">
                  Music strategy
                </Badge>
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/45">
                  <Sparkles className="w-4 h-4" />
                  <span>Audience systems • Editorial framing • Sonic storytelling</span>
                </div>
                <h1 className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tight leading-[1.02]">
                  Music strategy shaped for audience behavior, culture, and platform reality.
                </h1>
                <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-white/65">
                  I work where music, audience insight, creative systems, and sonic identity intersect.
                  The focus is not just what people hear, but how music is framed, surfaced, sequenced,
                  and made meaningful inside real-world contexts.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/strategy/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
                >
                  See marketing strategy
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-anticoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {introCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="text-lg font-medium">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-black/40 p-8"
            >
              <div className="flex items-center gap-3 text-white/45">
                <Disc3 className="w-5 h-5" />
                <span className="text-sm uppercase tracking-[0.25em]">Core perspective</span>
              </div>

              <h2 className="mt-5 text-3xl tracking-tight">
                Music is not just content. It is behavior, memory, and identity.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/65">
                The work that interests me most lives between editorial instinct, audience
                understanding, platform logic, and creative direction. I am strongest when a team
                needs someone who can think like a strategist, hear like a musician, and structure
                complexity into something usable.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Editorial and content strategy",
                  "Artist storytelling and discovery systems",
                  "Audience insight translated into programming",
                  "Cross-functional value across creative, analytics, and platform teams",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-relaxed text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/45">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Working thesis</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  The most valuable contribution is often synthesis: connecting sonic intuition,
                  cultural fluency, audience behavior, and execution realities without losing the
                  human texture of the work.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Where I add value"
            body="This page sits beside the broader strategy and audio pages as the part of the practice focused most directly on music, audience, programming, and platform-native storytelling."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofBlocks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-10">
          <SectionHeading
            eyebrow="Selected proof"
            title="Experience translated into music strategy"
            body="The through-line across agency, platform, and independent work has been the ability to connect story, sound, and structure without losing practical usefulness."
          />

          <div className="mt-12 space-y-5">
            {caseStudies.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                      <Music2 className="w-4 h-4" />
                      <span>{item.subtitle}</span>
                    </div>
                    <h3 className="mt-4 text-2xl md:text-3xl tracking-tight">{item.title}</h3>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-white/70">{item.summary}</p>
                    <ul className="mt-5 space-y-3 list-disc pl-5 text-sm md:text-base leading-relaxed text-white/65">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Original concepts"
                title="Systems and ideas still in motion"
                body="Alongside client and agency work, I keep building original concepts that explore music, identity, symbolic systems, and new forms of audience interaction."
              />

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-3 text-white/45">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-[0.25em]">Point of view</span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  The value here is range with structure: strategy, music fluency, storytelling,
                  systems thinking, and product-minded experimentation working together rather than
                  competing for space.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {experiments.map((experiment) => (
                <div
                  key={experiment}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    In development
                  </div>
                  <p className="mt-3 text-lg leading-relaxed">{experiment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RelatedPages
        title="Move between the connected pages."
        body="I chose a `/music-strategy/` route instead of a new subdomain so this page could stay inside the same navigation system, visual language, and visitor journey."
        links={[
          {
            eyebrow: "Adjacent page",
            title: "Strategy",
            description:
              "See the broader strategy profile across brand, audience, and performance work.",
            to: "/strategy/",
          },
          {
            eyebrow: "Adjacent page",
            title: "Audio Lab",
            description:
              "Go deeper into the technical evaluation and communication side of the audio practice.",
            to: "/audio-lab/",
          },
        ]}
      />
    </div>
  );
}
