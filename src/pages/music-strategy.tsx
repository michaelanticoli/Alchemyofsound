import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Music2, BarChart3, Radio, Sparkles, BriefcaseBusiness, Layers3, Disc3, AudioWaveform, BrainCircuit, Link as LinkIcon } from "lucide-react";

const sharedCaseStudies = [
  {
    title: "Audio strategy across brand, culture, and platform",
    subtitle: "Agency-side leadership shaped by Havas, Battery, and cross-functional campaign environments",
    summary:
      "Built strategy at the intersection of audience behavior, creative systems, cultural positioning, and music-led storytelling. The through-line across agency, brand, and experimental work has been the same: make the signal legible, make the story compelling, and make the execution useful.",
    bullets: [
      "Developed strategic frameworks that connected brand narrative, audience segmentation, and creative rollout planning.",
      "Bridged creative, production, and business stakeholders without flattening the work into generic marketing language.",
      "Approached sound not as decoration, but as an architectural layer of identity, recall, and emotional positioning.",
    ],
    impact:
      "Strong fit for roles where editorial thinking, campaign systems, audio, and platform intelligence need to live in the same room."
  },
  {
    title: "Paid media and performance-facing strategy at CPB",
    subtitle: "Campaign support, optimization thinking, and cross-channel literacy",
    summary:
      "Supported multi-platform paid campaigns spanning Meta, TikTok, YouTube, and LinkedIn Ads, contributing to reporting, optimization, and creative iteration workflows. This work sharpened the ability to read performance without becoming enslaved to vanity metrics.",
    bullets: [
      "Worked across paid social and platform-native distribution environments.",
      "Collaborated with analytics and design functions to interpret signals and support better creative decisions.",
      "Helped drive measurable engagement improvements through iteration, performance reading, and integrated planning.",
    ],
    impact:
      "Gives credibility with teams that need someone who can speak both editorial/creative and performance/operations."
  },
  {
    title: "Moon Tuner and Quantumelodic systems development",
    subtitle: "Original IP at the edge of music, systems thinking, identity, and emerging technology",
    summary:
      "Built a body of independent work translating abstract systems into structured experiences: harmonic identity frameworks, music-led narrative engines, symbolic patterning interfaces, and audience-facing creative products. Beneath the conceptual layer is a very practical ability: turning complex symbolic material into usable content systems.",
    bullets: [
      "Designed frameworks that map identity, timing, and emotional patterning into legible narrative outputs.",
      "Developed original products, books, reports, and prototypes under resource constraints without losing conceptual rigor.",
      "Demonstrated founder-level initiative, product intuition, and the ability to build a differentiated point of view rather than mimic the market.",
    ],
    impact:
      "Useful proof that the candidate is not only employable, but capable of originating frameworks, product directions, and future-facing concepts."
  },
  {
    title: "Music production, sonic identity, and narrative composition",
    subtitle: "Artist, producer, strategist, and world-builder in one practice",
    summary:
      "Years of songwriting, piano work, sound design, artist development, and creative direction inform a more nuanced understanding of how people relate to music: not just as content, but as memory, identity, ritual, and social signal.",
    bullets: [
      "Released original work and developed multiple music-forward creative identities and worlds.",
      "Produced for artists and projects requiring taste, technical fluency, emotional intelligence, and narrative cohesion.",
      "Brings an unusually credible point of view when discussing artist storytelling, fan engagement, and music discovery ecosystems.",
    ],
    impact:
      "This is the piece that keeps the strategy from sounding abstract. The music literacy is real."
  },
];

const proofBlocks = [
  {
    icon: BarChart3,
    title: "Performance literacy",
    text:
      "Comfortable reading campaign data, audience response patterns, and platform behavior without reducing the work to sterile dashboards. Knows how to translate metrics into creative decisions."
  },
  {
    icon: Radio,
    title: "Music ecosystem fluency",
    text:
      "Understands music not only as art, but as metadata, storytelling infrastructure, audience identity, and distribution context."
  },
  {
    icon: Layers3,
    title: "Systems thinking",
    text:
      "Able to organize messy interdisciplinary material into structured frameworks, narratives, and product directions that teams can actually use."
  },
  {
    icon: AudioWaveform,
    title: "Audio-first sensibility",
    text:
      "Brings real songwriter-producer credibility to conversations around artist development, sonic branding, editorial positioning, and audience emotion."
  },
];

const experiments = [
  {
    name: "Sonic DNA",
    desc: "A concept system for translating personal or symbolic inputs into musical signatures and identity-layered sonic outputs."
  },
  {
    name: "Quantumelodic MetaSystem",
    desc: "An original interdisciplinary framework connecting music theory, pattern recognition, symbolic mapping, and narrative interpretation."
  },
  {
    name: "Natal Harmonic Generator",
    desc: "A precision-oriented concept for generating harmonic relationships from cyclical conditions and converting them into musically meaningful structures."
  },
  {
    name: "Lyric and resonance analysis tools",
    desc: "Product concepts centered on helping users extract meaning, reflection, and narrative identity from songs and sound-based experiences."
  },
];

const links = {
  portfolio: "https://strategically-yours.created.app",
  linkedin: "https://www.linkedin.com/in/michael-anticoli",
  website: "https://michaelanticoli.com",
};

function SectionHeading({ eyebrow, title, body }) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      <p className="text-base md:text-lg leading-7 text-zinc-600">{body}</p>
    </div>
  );
}

export default function MusicPlatformStrategyMicrosite() {

  const introCards = useMemo(
    () => [
      {
        title: "What I bring",
        body:
          "Not metaphysics. Not just music. Not generic marketing. I bring pattern recognition, cultural sensitivity, strategic framing, sonic intelligence, and the ability to turn complicated creative territory into something clear, useful, and commercially relevant."
      },
      {
        title: "What makes this credible",
        body:
          "Agency experience, performance literacy, real music-making experience, product-minded experimentation, and a portfolio of original systems built without institutional scaffolding."
      },
      {
        title: "Why this works now",
        body:
          "Because more teams are looking for people who can connect audience behavior, creative systems, identity, and platform-native storytelling without losing either the creative spark or the strategic rigor."
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="rounded-full px-4 py-1 text-xs uppercase tracking-[0.24em]">Music platform strategy</Badge>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl md:leading-[1.02]">
                A strategic creative working across music, culture, sound, and audience systems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
                I work at the intersection of music, audience behavior, creative systems, and cultural storytelling. My interest is not just in what people hear, but in how music is framed, surfaced, sequenced, and made meaningful.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={links.website} target="_blank" rel="noreferrer">
                  michaelanticoli.com <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href={links.portfolio} target="_blank" rel="noreferrer">
                  View portfolio
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-6">
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {introCards.map((card) => (
                <Card key={card.title} className="rounded-3xl border-zinc-200 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-zinc-600">{card.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex items-stretch"
          >
            <Card className="w-full rounded-[2rem] border-zinc-200 bg-zinc-950 text-white shadow-2xl shadow-zinc-200">
              <CardHeader className="space-y-4 pb-2">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Disc3 className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.25em]">Perspective</span>
                </div>
                <CardTitle className="text-3xl leading-tight">How I think about the work</CardTitle>
                <CardDescription className="text-base leading-7 text-zinc-300">
                  I do not think of music as just content. I think about it as culture, identity, context, emotional memory, and behavior. The work that interests me most lives in the space between editorial instinct, audience understanding, platform logic, and creative direction.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-3">
                  {[
                    "Editorial and content strategy",
                    "Artist storytelling and music discovery",
                    "Audience insight translated into programming",
                    "Cross-functional value across creative, analytics, and platform teams",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-zinc-100">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-zinc-400">
                    <BrainCircuit className="h-4 w-4" /> Core thesis
                  </div>
                  <p className="text-sm leading-7 text-zinc-200">
                    I am strongest when the work requires someone who can think like a strategist, hear like a musician, interpret like a cultural analyst, and build like a founder. That combination allows me to contribute across disciplines without losing clarity or focus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where I add value"
          body="My strongest work tends to happen in rooms that need strategy, cultural sensitivity, creative direction, and systems thinking to coexist rather than compete."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {proofBlocks.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-3xl border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
                    <Icon className="h-6 w-6 text-zinc-700" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-zinc-600">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Emerging concepts"
              title="Systems and ideas in development"
              body="Alongside client and agency work, I have continued building original concepts that explore music, identity, narrative systems, and new forms of audience interaction."
            />
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-lg">
              <div className="mb-4 flex items-center gap-3 text-zinc-300">
                <Sparkles className="h-5 w-5" />
                <div className="text-sm uppercase tracking-[0.25em]">Point of view</div>
              </div>
              <p className="text-base leading-8 text-zinc-200">
                My work has evolved across strategy, sound, storytelling, systems, and product thinking. As a result, I tend to be most useful in environments that need synthesis, structure, and range rather than a narrow single-lane specialist.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {experiments.map((exp) => (
              <Card key={exp.name} className="rounded-3xl border-zinc-200 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{exp.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-zinc-600">{exp.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Closing"
              title="What I bring to the table"
              body="I bring a strategic point of view shaped by music fluency, platform awareness, editorial instinct, cultural intelligence, and the ability to translate abstract creative ideas into something useful and actionable."
            />
            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <div className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">Plainly stated</div>
              <p className="text-lg leading-8 text-zinc-800">
                I am not presenting myself as a generic marketer. My background spans music, strategy, systems thinking, storytelling, and audience behavior. I tend to be most useful in environments that need someone who can connect creative instinct with structure, cultural fluency with business goals, and big-picture thinking with execution.
              </p>
            </div>
          </div>

          <Card className="rounded-[2rem] border-zinc-200 bg-zinc-950 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Relevant links</CardTitle>
              <CardDescription className="text-zinc-300 text-base leading-7">
                Selected links, work, and portfolio destinations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7">
              <a href={links.website} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10">
                <span>michaelanticoli.com</span>
                <LinkIcon className="h-4 w-4" />
              </a>
              <a href={links.portfolio} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10">
                <span>strategically-yours.created.app</span>
                <LinkIcon className="h-4 w-4" />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10">
                <span>linkedin.com/in/michael-anticoli</span>
                <LinkIcon className="h-4 w-4" />
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-zinc-300">
                Additional writing, case studies, and experimental work available upon request.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
