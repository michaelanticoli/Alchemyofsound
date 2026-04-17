import { motion } from "motion/react";
import {
  ArrowUpRight,
  AudioLines,
  Briefcase,
  Sparkles,
  Waves,
} from "lucide-react";
import { RelatedPages } from "../components/RelatedPages";
import { SiteNav } from "../components/SiteNav";

const services = [
  {
    icon: AudioLines,
    title: "Sonic Branding",
    description:
      "Helping brands develop distinct sonic identities that increase recognition, emotional connection, and memorability.",
  },
  {
    icon: Waves,
    title: "Music Strategy",
    description:
      "Helping platforms, artists, and campaigns use music with greater intention across content, audience engagement, and brand storytelling.",
  },
  {
    icon: Sparkles,
    title: "Artist Development",
    description:
      "Supporting artists with narrative positioning, sonic direction, world-building, and long-term identity development.",
  },
  {
    icon: Briefcase,
    title: "Audio Direction",
    description:
      "Creative oversight for music selection, sound design, voice, mood, tone, and emotional pacing.",
  },
];

const areasOfWork = [
  {
    title: "Brand Sound Systems",
    description:
      "Identity structures that make brands feel coherent, recognizable, and emotionally legible.",
    items: [
      "Sonic logos",
      "Brand playlists",
      "Campaign sound direction",
      "Audio identity frameworks",
    ],
  },
  {
    title: "Artist & Music Projects",
    description:
      "Creative development work that sharpens both the sound and the story around it.",
    items: [
      "Songwriting",
      "Production",
      "Piano and composition",
      "Artist identity and narrative development",
    ],
  },
  {
    title: "Platform & Content Strategy",
    description:
      "Strategic audio thinking for audience behavior, discovery, and content ecosystems.",
    items: [
      "Music discovery concepts",
      "Playlist and editorial thinking",
      "Audience behavior",
      "Content ecosystems",
    ],
  },
  {
    title: "Experimental Concepts",
    description:
      "Original systems translated into commercially relevant language and clearer strategic use cases.",
    items: [
      "Sonic identity systems translating personal or brand characteristics into sound",
      "Music, identity, and audience frameworks exploring emotional response",
      "Experimental music-personalization concepts built around cyclical and symbolic inputs",
      "Interactive sound experiences and lyric analysis tools",
    ],
  },
];

const credibility = [
  {
    title: "Agency-side strategic grounding",
    description:
      "Experience across brand strategy, campaign thinking, and audience insight keeps the work commercially aware, not purely aesthetic.",
  },
  {
    title: "Deep music practice",
    description:
      "Years of songwriting, production, piano, and sound design inform decisions about tone, structure, pacing, and emotional memory.",
  },
  {
    title: "Independent concept building",
    description:
      "Original products and frameworks developed end-to-end, from idea and positioning to interface, language, and user experience.",
  },
  {
    title: "Business and culture fluency",
    description:
      "An ability to connect creative direction with positioning, audience response, and the larger system a brand or artist lives inside.",
  },
];

const closingPoints = [
  "It creates recognition.",
  "It shapes perception.",
  "It builds trust.",
  "It gives people something to remember.",
];

const sectionLabel =
  "text-xs font-medium uppercase tracking-[0.22em] text-white/45";

const globalNavLinks = [
  { label: "Home", href: "/" },
  { label: "Strategy", href: "/strategy/" },
  { label: "Music Strategy", href: "/music-strategy/" },
  { label: "Audio", href: "/audio-lab/" },
  { label: "Contact", href: "mailto:michaelanticoli@gmail.com" },
];

export default function AudioLab() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav links={globalNavLinks} theme="dark" />
      <main className="px-6 lg:px-12 pt-32 pb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-16 md:px-12 md:py-20 lg:px-16"
          >
            <div className="absolute inset-y-0 right-0 hidden w-[34rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_58%)] lg:block" />

            <div className="relative z-10 max-w-5xl">
              <div className="mb-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-white/52">
                <AudioLines className="h-4 w-4" />
                <span>Audio Strategy · Sonic Branding · Music Direction</span>
              </div>

              <h1 className="max-w-5xl text-5xl font-medium tracking-tight leading-[0.96] md:text-7xl lg:text-[5.5rem]">
                Sound is not decoration.
                <br />
                It is identity, memory, emotion, and recall.
              </h1>

              <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-white/68 md:text-xl">
                <p>
                  I help brands, artists, and platforms use sound more
                  intentionally.
                </p>
                <p>
                  My work spans sonic branding, music strategy, artist
                  storytelling, audio direction, and cultural positioning.
                </p>
                <p>
                  Whether the goal is a brand identity, a campaign, an artist
                  world, or a more emotionally intelligent customer experience,
                  I approach sound as a strategic layer rather than an
                  afterthought.
                </p>
              </div>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#selected-work"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
                >
                  View Work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:michaelanticoli@gmail.com?subject=Audio%20Strategy%20Project"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
                >
                  Discuss a Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://audio.michaelanticoli.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white/82 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Listen to Selected Audio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.section>

          <section id="what-i-do" className="grid gap-8 px-1 py-24 lg:grid-cols-[240px_1fr]">
            <div>
              <p className={sectionLabel}>What I Do</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
                Sonic Strategy & Creative Direction
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                  >
                    <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/80">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/65">
                      {service.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section
            id="philosophy"
            className="grid gap-8 border-t border-white/10 px-1 py-24 lg:grid-cols-[240px_1fr]"
          >
            <div>
              <p className={sectionLabel}>Approach</p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65 }}
                className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-8 md:p-12"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  A more thoughtful approach to sound.
                </p>
                <blockquote className="mt-6 max-w-4xl text-3xl font-medium tracking-tight leading-tight text-white md:text-5xl">
                  “Sound often carries the emotional memory of an experience.”
                </blockquote>
                <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-5 text-lg leading-relaxed text-white/66">
                    <p>
                      Many teams treat sound as the last layer added at the end
                      of a project.
                    </p>
                    <p>I think the opposite is true.</p>
                    <p>
                      Sound shapes how something feels, how long it lingers, and
                      whether people remember it at all.
                    </p>
                    <p>
                      That is why I approach music and audio not just as creative
                      outputs, but as systems of meaning, mood, identity, and
                      recall.
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-6">
                    <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/40">
                      <AudioLines className="h-4 w-4" />
                      <span>Strategic lens</span>
                    </div>
                    <ul className="space-y-4 text-sm uppercase tracking-[0.16em] text-white/70">
                      <li>Identity before ornament</li>
                      <li>Emotion before decoration</li>
                      <li>Recall before novelty</li>
                      <li>Meaning before noise</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="selected-work"
            className="grid gap-8 border-t border-white/10 px-1 py-24 lg:grid-cols-[240px_1fr]"
          >
            <div>
              <p className={sectionLabel}>Selected Areas of Work</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Audio Lab remains part of the URL, but the framing here stays
                focused on strategic value.
              </p>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {areasOfWork.map((area, index) => (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                        {index === 3 ? "Lab Concepts" : "Selected Work"}
                      </p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight">
                        {area.title}
                      </h3>
                    </div>
                    <Waves className="mt-1 h-5 w-5 text-white/28" />
                  </div>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/62">
                    {area.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-white/76">
                    {area.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/45" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section
            id="proof"
            className="grid gap-8 border-t border-white/10 px-1 py-24 lg:grid-cols-[240px_1fr]"
          >
            <div>
              <p className={sectionLabel}>Proof / Credibility</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                A background that bridges strategy and sound.
              </h2>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                {credibility.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                  >
                    <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/78">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>

              <div className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Why it matters
                </p>
                <p className="mt-4 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-white md:text-3xl">
                  The value is not simply making things sound better. It is
                  helping brands, artists, and platforms sound more intentional,
                  more coherent, and more memorable.
                </p>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="border-t border-white/10 px-1 pb-6 pt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Closing
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-tight leading-tight md:text-6xl">
                The right sound does more than fill space.
              </h2>

              <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="space-y-3 text-lg leading-relaxed text-white/68">
                    {closingPoints.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                    <p className="pt-4 text-white/88">
                      That is the work I am interested in.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-6 md:p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                    Soft inquiry
                  </p>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/64">
                    If you are building a brand system, refining an artist
                    identity, shaping a campaign, or rethinking how sound works
                    inside an experience, I am open to the conversation.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href="mailto:michaelanticoli@gmail.com?subject=Audio%20Strategy%20Inquiry"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
                    >
                      Discuss a Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/michael-anticoli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <RelatedPages
        title="Move between strategy, music, and audio without leaving the flow."
        body="The site now treats these pages as connected facets of one practice rather than isolated destinations."
        links={[
          {
            eyebrow: "Strategy profile",
            title: "Strategy",
            description:
              "Audience insight, cultural intelligence, and performance-minded brand strategy.",
            to: "/strategy/",
          },
          {
            eyebrow: "New page",
            title: "Music Strategy",
            description:
              "A dedicated page for music-led platform thinking, editorial framing, and sonic storytelling.",
            to: "/music-strategy/",
          },
        ]}
      />
    </div>
  );
}
