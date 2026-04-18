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
import { SiteNav } from "../components/SiteNav";
import { Link } from "react-router";
import {
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Globe,
  Instagram,
  Settings,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const homepageNavLinks = [
  { label: "Work", href: "#work" },
  { label: "Strategy", href: "/strategy/" },
  { label: "Music Strategy", href: "/music-strategy/" },
  { label: "Audio", href: "/audio-lab/" },
  {
    label: "Strategy Portfolio",
    href: "https://strategy.michaelanticoli.com",
    external: true,
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:michaelanticoli@gmail.com" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
        "Experimental music-personalization system designed to translate cyclical patterns and symbolic inputs into sound, scale, and mood.",
      href: "https://sonic-dna.created.app/",
    },
    {
      title: "Quantumelodic Oracle",
      category: "AI / LLM",
      description:
        "Experimental decision-support tool designed to help creatives, founders, and strategists generate more original ideas and break out of repetitive thinking patterns.",
      href: "https://serene-alpaca-2bfbd6.netlify.app",
    },
    {
      title: "Sonic DNA",
      category: "Generative Art / Audio",
      description:
        "Sonic identity system translating personal or brand characteristics into unique sound signatures for storytelling, branding, and audience engagement.",
      href: "https://neon-paletas-601558.netlify.app",
    },
    {
      title: "Chromatune",
      category: "Synesthesia Tool",
      description:
        "Web-based instrument for spectrum-to-frequency translation. Investigates the physics of light and sound as parallel expressions of harmonic law.",
      href: "https://chromatuner.vercel.app",
    },
    {
      title: "Music Strategy",
      category: "Audience Systems / Cultural Strategy",
      description:
        "A dedicated profile for music strategy work across audience insight, editorial framing, platform thinking, and sonic storytelling.",
      href: "/music-strategy/",
    },
    {
      title: "Strategy Portfolio",
      category: "Marketing / Brand / Agency Experience",
      description:
        "A focused portfolio page covering brand strategy, campaign thinking, and agency-side marketing experience in a cleaner case-study format.",
      href: "https://strategy.michaelanticoli.com",
    },
    {
      title: "Audio Lab",
      category: "Plugin Evaluation / Technical Writing",
      description:
        "A structured protocol for evaluating audio plugins across signal behavior, perceptual impact, workflow integration, and communication value.",
      href: "/audio-lab/",
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
      ref={containerRef}
      className="min-h-screen bg-black text-white"
    >
      <SiteNav links={homepageNavLinks} theme="dark" />

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
              Strategy · Sound · Storytelling · Audience Systems
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            I help brands, artists,
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              and platforms connect strategy, sound, storytelling, and audience behavior.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto tracking-wide leading-relaxed">
            My work spans brand strategy, sonic identity, music platform thinking, content systems, and creative direction. I build frameworks, campaigns, and experiences that help people understand who they are, what they offer, and why it matters.
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
            A curated selection of tools, frameworks, and creative systems built to make strategy, sound, and storytelling more useful.
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

      {/* Quantumelodic Interactive Lab */}
      <QuantumelodicInteractive />

      <Personae />

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
                He views concepts like astrology not as fatalistic, 
                but as "Archetypal Systems Architecture"—a rigorous
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
