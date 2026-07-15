import { motion, useScroll, useTransform } from "motion/react";
import { LunarPhase } from "../components/LunarPhase";
import { ProjectCard } from "../components/ProjectCard";
import { SkillOrbit } from "../components/SkillOrbit";
import { Methodology } from "../components/Methodology";
import { Frameworks } from "../components/Frameworks";
import { Personae } from "../components/Personae";
import { QuantumelodicInteractive } from "../components/quantum/QuantumelodicInteractive";
import { SparkleTrail } from "../components/SparkleTrail";
import { ContactModal } from "../components/ContactModal";
import {
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Globe,
  ArrowRight,
  Instagram,
  Settings,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export default function Portfolio() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.95],
  );

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        // Fetch list of images
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b5eacdbd/images`, {
            headers: {
                Authorization: `Bearer ${publicAnonKey}`,
            },
        });
        const data = await response.json();
        
        if (data.success && data.files && data.files.length > 0) {
            // Look for an image named "profile" (ignoring extension)
            const profileFile = data.files.find((f: any) => f.name.toLowerCase().startsWith("profile"));
            
            if (profileFile) {
                // Get signed URL
                const urlResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b5eacdbd/images/${profileFile.name}`, {
                    headers: {
                        Authorization: `Bearer ${publicAnonKey}`,
                    },
                });
                const urlData = await urlResponse.json();
                if (urlData.success) {
                    setProfileImage(urlData.url);
                }
            }
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };
    
    fetchProfileImage();
  }, []);

  const projects = [
    {
      title: "Natal Harmonic Generator",
      category: "Precision Astronomy / Sound Design",
      description:
        "Swiss Ephemeris-grade astronomical engine transforming astrological blueprints into personalized harmonic frequencies, sacred scales, and immersive sound rituals with arc-minute precision.",
      href: "https://sonic-dna.created.app/",
    },
    {
      title: "Sonic DNA",
      category: "Generative Art / Audio",
      description:
        "Identity system that translates biometric and biological inputs into unique sonic signatures, exploring the mathematical relationship between organic data and sound.",
      href: "https://neon-paletas-601558.netlify.app",
    },
    {
      title: "Chromatune",
      category: "Synesthesia Tool",
      description:
        "Web-based instrument for spectrum-to-frequency translation. Investigates the physics of light and sound as parallel expressions of harmonic law.",
      href: "https://orange-chamois-768607.hostingersite.com",
    },
    {
      title: "The Manhasset Revue",
      category: "Human-AI Composition",
      description:
        "A full album conceived and completed in a single day—every lyric, melody, and arrangement authored by hand, then realized through AI generation. A study in creative velocity and human-machine collaboration.",
      href: "https://on.soundcloud.com/6TA7R5E558Yrcrfv73",
    },
  ];

  const skills = [
    "Generative AI",
    "Python",
    "Sonic Narratives",
    "Semiotics",
    "HTML",
    "A/B Testing",
    "Music Theory",
    "Sound Design",
    "Next.js",
    "JavaScript",
    "SQL",
    "Strategy",
    "Logic Pro",
    "Trans-DAW",
    "Cultural Immersion",
    "Content",
    "API Integration",
    "Songcrafting",
  ];

  return (
    <div
      className="relative min-h-screen bg-black text-white"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <LunarPhase />
            <span className="tracking-widest uppercase">
              MICHAEL ANTICOLI
            </span>
          </motion.div>

          <div className="flex items-center gap-8">
            <motion.a
              href="#work"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              Work
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="text-muted-foreground hover:text-white transition-colors tracking-wide"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-2 mb-8 text-muted-foreground tracking-[0.2em] uppercase text-sm font-medium"
          >
            <Sparkles className="w-5 h-5" />
            <span>
              Creative Technologist · Brand Alchemist · Sonic
              Innovator
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Building bridges between
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Sound, Symbolism, & Code
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto tracking-wide leading-relaxed">
            Exploring the architecture of meaning through
            strategy, sound, and systems of consciousness.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </motion.section>

      <Methodology />

      <Frameworks />

      {/* Featured Work Section */}
      <section
        id="work"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            A curated collection of projects spanning systems
            design, machine learning, and interface innovation.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </section>

      <Personae />

      {/* Everything Is Singing — Book Feature */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Background field */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_60%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* Left — identity block */}
            <div className="p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono">Published Work</span>
                </div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-3">Michael Anticoli</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-none mb-6">
                  Everything<br />Is Singing
                </h2>
                <p className="text-white/50 text-sm font-mono uppercase tracking-widest mb-8">
                  Sound · Resonance · Frequency · Physics · Music
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  A unified theory of vibration — tracing the harmonic laws that govern acoustics, perception, and meaning from the subatomic to the cosmic. The theoretical framework underlying the entire practice.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <a
                  href="https://everything-is-singing.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-widest hover:bg-white/90 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Read Online
                </a>
                <a
                  href="https://a.co/d/08BE56CB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs font-mono uppercase tracking-widest hover:bg-white/10 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Order on Amazon
                </a>
              </div>
            </div>

            {/* Right — cover + data field */}
            <div className="p-10 md:p-16 flex flex-col justify-center gap-8">
              {/* Book cover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <img
                  src="https://everything-is-singing.lovable.app/assets/book-cover-DUvZDZ_C.jpg"
                  alt="Everything Is Singing — book cover"
                  className="w-48 md:w-56 rounded-lg shadow-2xl shadow-black/60 ring-1 ring-white/10"
                />
              </motion.div>

              {[
                { glyph: "∿", label: "Acoustic Physics", body: "The mathematics of wave propagation, resonance chambers, and the standing waves that give matter its apparent solidity." },
                { glyph: "◈", label: "Harmonic Perception", body: "How the nervous system decodes frequency ratios into emotion, memory, and felt meaning — the neuroscience of listening." },
                { glyph: "⊕", label: "Cosmic Resonance", body: "Kepler's music of the spheres reframed through modern astrophysics — orbital frequencies as macro-scale harmonic law." },
              ].map(({ glyph, label, body }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-5"
                >
                  <span className="text-2xl text-white/20 leading-none mt-0.5 font-mono">{glyph}</span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5">{label}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Technical Constellation
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Technologies and tools orbiting my practice
          </p>
        </motion.div>

        <SkillOrbit skills={skills} />
      </section>

      {/* Quantumelodic Interactive Lab — supplementary */}
      <QuantumelodicInteractive />

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-8">
              About Michael
            </h2>

            {profileImage && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 overflow-hidden rounded-xl border border-white/10"
                >
                    <img 
                        src={profileImage} 
                        alt="Michael Anticoli" 
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
            )}

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Michael Anticoli is a creative technologist and
                interdisciplinary strategist working at the
                intersection of music, systems design, and
                metaphysical philosophy.
              </p>
              <p>
                He views astrology not as fatalism, but as
                "Archetypal Systems Architecture"—a rigorous
                framework of pattern recognition. By treating
                celestial mechanics as a dataset of human
                potential, he builds tools that translate
                abstract energetic patterns into tangible,
                interactive narratives.
              </p>
              <p>
                Orchestrating the unseen, I explore the sonic continuum where frequency meets narrative. My practice in sonic branding and poetic structure treats audio not as accompaniment, but as a primary architectural element—designing soundscapes and lyrical frameworks that resonate with the subconscious geometries of the audience, ensuring every vibration aligns with the overarching systemic intent.
              </p>
              <p>
                Currently developing the{" "}
                <strong className="font-semibold">
                  Quantumelodic MetaSystem
                </strong>
                , a methodology that synthesizes music theory,
                harmonic geometry, and AI-driven content
                strategy to create modern instruments for
                ancient concepts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
              Expertise
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "AI-Assisted Content Architecture",
                  desc: "Designing and implementing generative AI workflows using OpenAI, Claude, Suno, and Runway.",
                },
                {
                  title: "Metaphysical Data Strategy",
                  desc: "Architecting narrative systems that utilize astrological data as a template for human archetypal analysis.",
                },
                {
                  title: "Music Production",
                  desc: "Mastery of all major DAWs (Logic, Ableton, Pro Tools, Cubase), MIDI orchestration, and experimental plugin development.",
                },
                {
                  title: "Narrative Architecture",
                  desc: "Copywriting, authorship, and songwriting that leverage metaphor to translate complex theoretical frameworks into accessible, resonant concepts.",
                },
                {
                  title: "Web Architecture",
                  desc: "Building web applications with Flask, Node.js, Next.js, and Supabase.",
                },
                {
                  title: "Brand Strategy",
                  desc: "Creative direction, messaging architecture, and systems thinking.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="border-l-2 border-white/20 pl-6"
                >
                  <h3 className="text-lg md:text-xl mb-2 font-medium tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative"
        >
          {/* Sparkle Trail Effect */}
          <SparkleTrail />

          <h2 className="text-5xl md:text-8xl tracking-tighter mb-12 relative z-10">
            Let's Create
            <br />
            Something Stellar
          </h2>

          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Open to collaborations, consulting opportunities,
            and conversations about technology and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/michaelanticoli"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/michael-anticoli"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://moontuner.xyz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                title="MoonTuner"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/quantumelodies"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-muted-foreground">
          <div className="flex items-center gap-3">
            <LunarPhase />
            <span>© 2026 — Crafted by a human being.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm tracking-widest uppercase">
              Michael Anticoli • V1.0
            </div>
            <Link 
              to="/admin/audio"
              className="opacity-30 hover:opacity-100 transition-opacity group"
              title="Asset Admin"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}