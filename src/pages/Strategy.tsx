import { motion } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  LineChart,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { LunarPhase } from "../components/LunarPhase";
import { RelatedPages } from "../components/RelatedPages";
import { SiteNav } from "../components/SiteNav";

const pillars = [
  {
    icon: Users,
    title: "Cultural + Audience Intelligence",
    description:
      "Trend mapping, audience synthesis, and competitive signal analysis translated into strategic direction teams can execute.",
  },
  {
    icon: Waves,
    title: "Sonic Strategy with Business Context",
    description:
      "Sonic identity and campaign positioning frameworks that connect creative direction to measurable marketing objectives.",
  },
  {
    icon: LineChart,
    title: "Measurement-Led Optimization",
    description:
      "Cross-channel performance analysis to improve engagement, conversion efficiency, and brand lift.",
  },
  {
    icon: Briefcase,
    title: "Cross-Functional Execution",
    description:
      "Decision-ready strategy narratives for creative, account, media, and stakeholder teams—without bloated jargon.",
  },
];

const experience = [
  {
    title: "Brand Strategy & Marketing Consultant",
    period: "2020–Present",
    description:
      "Designed audience-informed campaign frameworks and optimization recommendations across entertainment, consumer products, and digital platforms.",
  },
  {
    title: "Agency Strategy / Marketing Support (CPB + agency environments)",
    period: "Past Roles / Contract",
    description:
      "Contributed to campaign positioning, multicultural strategy, audience analysis, and research-to-brief translation for national initiatives.",
  },
  {
    title: "Founder / Product Developer — MoonTuner & Quantumelodic",
    period: "2021–Present",
    description:
      "Built audio-centered product concepts combining personalization logic, UX strategy, and retention-focused content systems.",
  },
  {
    title: "Music Production / Audio Strategy",
    period: "2015–Present",
    description:
      "Produced sound-driven creative work centered on storytelling, cultural relevance, and audience response.",
  },
];

const globalNavLinks = [
  { label: "Home", href: "/" },
  { label: "Marketing & Strategy", href: "/strategy/" },
  { label: "Music Strategy", href: "/music-strategy/" },
  { label: "Audio", href: "/audio-lab/" },
  { label: "Contact", href: "mailto:michaelanticoli@gmail.com" },
];

export default function Strategy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav links={globalNavLinks} theme="light" />

      <section className="min-h-screen relative overflow-hidden flex items-center px-6 lg:px-12 pt-24">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-chart-1/15 blur-3xl" />
          <div className="absolute bottom-12 -right-20 w-96 h-96 rounded-full bg-chart-2/15 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-6xl mx-auto w-full text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-chart-1/10 via-chart-4/10 to-chart-2/10 blur-3xl -z-10"
          />

          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground tracking-[0.2em] uppercase text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Strategy • Sonic Marketing • Cultural Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Strategy that makes sound
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              move culture—and business
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto tracking-wide leading-relaxed">
            I help brands transform sonic identity into measurable growth through audience insight,
            cultural strategy, and performance-informed campaign planning.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:michaelanticoli@gmail.com?subject=Strategy%20Conversation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-anticoli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full hover:bg-accent transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">What I Bring</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            I operate at the intersection of sound, story, and strategy—bridging creative ambition
            with clear business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-xl border border-border bg-card/70 backdrop-blur-sm transition-colors hover:bg-accent/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full border border-border bg-accent/60 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Experience Snapshot</h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border-l-2 border-border pl-6"
            >
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">{item.title}</h3>
              <p className="text-sm tracking-wide uppercase text-muted-foreground mt-1">{item.period}</p>
              <p className="text-muted-foreground mt-3 text-base md:text-lg leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-12 rounded-xl border border-border bg-gradient-to-r from-chart-1/10 via-chart-4/10 to-chart-2/10"
        >
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">How I approach the work</h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl">
            I work best where sonic expression, cultural relevance, and strategic outcomes need to
            reinforce each other. My approach is culture-first, evidence-backed, and designed to
            build long-term brand equity while helping teams make sharper campaign decisions in the
            present.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl tracking-tighter mb-8"
        >
          Let's build what sound can do for brands.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Open to strategic collaborations at the intersection of sonic identity, audience insight,
          and performance-informed marketing.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          href="mailto:michaelanticoli@gmail.com?subject=Strategy%20Conversation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          michaelanticoli@gmail.com
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </section>

      <RelatedPages
        theme="light"
        title="See the adjacent parts of the practice."
        body="This strategy profile now sits inside a connected set of pages covering brand strategy, music strategy, and audio systems work."
        links={[
          {
            eyebrow: "New page",
            title: "Music Strategy",
            description:
              "Explore the audience, editorial, and sonic storytelling side of the work in a dedicated music strategy profile.",
            to: "/music-strategy/",
          },
          {
            eyebrow: "Audio detail",
            title: "Audio Lab",
            description:
              "See the evaluation framework and technical writing approach behind the audio practice.",
            to: "/audio-lab/",
          },
        ]}
      />

      <footer className="border-t border-border py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground">
          <div className="flex items-center gap-3">
            <LunarPhase />
            <span>© 2026 — Michael Anticoli</span>
          </div>
          <div className="text-sm tracking-widest uppercase">Strategy Profile</div>
        </div>
      </footer>
    </div>
  );
}
