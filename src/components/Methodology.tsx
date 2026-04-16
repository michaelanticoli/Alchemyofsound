import { motion } from "motion/react";

export function Methodology() {
  const capabilities = [
    {
      title: "Brand Strategy",
      description:
        "Positioning, messaging, audience insight, and campaign thinking for brands, founders, and emerging products.",
    },
    {
      title: "Sonic Branding",
      description:
        "Using music, sound, and emotional recall to create stronger brand identity and memorability.",
    },
    {
      title: "Music Platform Strategy",
      description:
        "Editorial thinking, audience behavior, artist storytelling, and music discovery systems.",
    },
    {
      title: "Creative Direction",
      description:
        "Helping shape the look, feel, language, and emotional logic behind campaigns, experiences, and brands.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-14"
      >
        <div className="text-white/50 uppercase tracking-[0.25em] text-sm font-medium font-mono mb-6">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
          Clear ways I can help.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          My work spans brand strategy, sonic identity, music platform thinking,
          content systems, and creative direction. I build frameworks,
          campaigns, and experiences that help people understand who they are,
          what they offer, and why it matters.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {capabilities.map((capability, index) => (
          <motion.article
            key={capability.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">
              {capability.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              {capability.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
