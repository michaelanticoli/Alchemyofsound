import imgAstroharmonic from "../../imports/icon-192.png";
import imgOnBeingHero from "../../imports/ON_BEING.png";
import imgLyrixPrismMockup from "../../imports/mockup_of_a_screenshot_of_a_web_app_called_Lyrix_Prism__miniimalist__modern__spaciiouys__sleek_and_high_tech_luxurious_styled_web_app_which_prides_itself_on_being_one_ofthe_most_dynamic__intuitive_and_powerful_lyrics_and_prose_interpret__2_.jpg";
import imgLyrixPrismAbout from "../../imports/Screenshot_2026-06-23_at_10.02.55_AM.png";
import imgLyrixPrismLogo from "../../imports/prism.png";
import imgOnBeingAlbums from "../../imports/3A4695F4-846B-4A2F-8B97-B9727C1431C9.jpg";
import imgOnBeingDark from "../../imports/modern_luxe_minimalist__dark_themed_astrological_esoteric_nu_post_Swedish_styled_website_for_To_format_a___landing_page_or_webpage___for_your___Sonic_Tarot_Deck_____which_is_the__On_Being__piano_e_tudes_series___here_s_a_strategically_str_.jpg";
import imgOnBeingLogo from "../../imports/simple_minimalist__asstract__block_illustrated_vectorized_classic_bold_iconic_logo_for_the__ON_BEING__Sonic_Tarot_deck_that_aims_to_put_archetypal_frameworks_over_musical_compositions.__Esoteric__greys__stark_contrast_.jpg";
import imgMoontunerKey from "../../imports/____Moontuner_MoonKey_Icon.png";
import imgMoontunerLogo from "../../imports/moontunerImage1.png";
import imgCreativeAlchemy from "../../imports/Creative_20alchemy_20logo_20transparnet.png";
import imgQuantumelodicsPhone from "../../imports/quantumelodic_phone_mockup.jpg";
import imgQuantumelodicsExperience from "../../imports/experience.png";
import videoQuantumelodics from "../../imports/Hailuo_Video__I_built_a_system_that_transla_469221596263538689.mp4?url";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FrameworkModal, FrameworkData } from "./FrameworkModal";

const frameworks: FrameworkData[] = [
  {
    title: "Quantumelodies",
    subtitle: "Harmonic System Design",
    description: "An experimental harmonic system translating planetary motion into musical structure—exploring the intersection of astronomy, mathematics, and emotional resonance.",
    longDescription: "Quantumelodies operates on the premise that the solar system is a macro-musical instrument. By assigning pitch classes to planetary positions and using angular relationships (aspects) to determine harmonic intervals, we create a sonic map of any given moment in time. This system moves beyond the 'superstition' of astrology and into the rigorous study of time, cycles, and archetypal data visualization.",
    href: "https://quantumelodies.com",
    features: [
      "Planetary-to-Pitch Conversion Algorithms",
      "Aspect Geometry Rendering Engine",
      "Temporal Harmonic Mapping",
      "Archetypal Data Visualization"
    ],
    images: [
      imgQuantumelodicsPhone as string,
      imgQuantumelodicsExperience as string,
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1080",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1080",
    ],
    videoSrc: videoQuantumelodics,
  },
  {
    title: "The On Being Series",
    subtitle: "Psychoacoustic Archetypes",
    description: "A four-album tarot system translating the Minor Arcana into 56 piano etudes—elemental sonic landscapes for intuitive divination.",
    longDescription: "The On Being Series is a 4-album project representing the elemental suits of the Tarot: Stones (Earth), Vessels (Water), Sparks (Fire), and Blades (Air). Each album contains 14 purely piano-based improvisational avant-garde etudes—one for each of the Minor Arcana pip cards. The 56 tracks do not display which traditional card they represent; instead, they beckon the listener to assign their own meanings to the sonic landscapes and form intuitive relationships with the music. Once intimately familiar with the compositions, the listener is invited to put the entire project on shuffle and let the first 3, 7, or any number of songs serve as a 'spread' for a sonic reading—a modular assembly that seamlessly stitches together into narrative storyboards with hundreds of combinational possibilities. The 22 Major Arcana will complete the 78-song system in a future implementation.",
    href: "https://sonic-tarot.lovable.app",
    features: [
      "Four Elemental Albums (56 Tracks Total)",
      "Minor Arcana Pip Card System",
      "Improvisational Piano Etudes",
      "Shuffled Spread Divination Method"
    ],
    images: [
      imgOnBeingHero as string,
      imgOnBeingAlbums as string,
      imgOnBeingDark as string,
      imgOnBeingLogo as string,
    ]
  },
  {
    title: "Creative Alchemy",
    subtitle: "Strategic Ecosystems",
    description: "A professional methodology for building brand ecosystems that align message, medium, and human meaning.",
    longDescription: "Creative Alchemy is the process of transmutation applied to business identity. It moves a brand from 'Base Matter' (unrefined product/service) through 'Purification' (market positioning and core values) to 'Illumination' (visual and verbal identity). The result is a cohesive system that breathes and adapts, rather than a static logo.",
    href: "https://roaring-kleicha-d0d21b.netlify.app",
    features: [
      "Archetypal Brand Strategy",
      "Visual Identity Systems",
      "Narrative Architecture",
      "Cross-Platform Coherence"
    ],
    images: [
      imgCreativeAlchemy as string,
      "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?q=80&w=1080", // Typography
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1080", // Minimal Desk
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1080", // Minimal Mac
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1080"  // Notebook
    ]
  },
  {
    title: "Moontuner",
    subtitle: "Chronobiological Exploration",
    description: "An experimental system exploring how human creative cycles align with celestial timing and lunar phases.",
    longDescription: "Moontuner is a chronobiological productivity tool. It posits that human energy is not linear but cyclical, much like the tides. By tracking lunar phase and sign, Moontuner suggests optimal times for 'Input' (gathering inspiration) vs. 'Output' (execution), helping creatives align their workflow with natural rhythms.",
    href: "https://moontuner.xyz",
    features: [
      "Lunar Phase Tracking",
      "Circadian Rhythm Analysis",
      "Workflow Optimization",
      "Natural Timekeeping"
    ],
    images: [
      imgMoontunerLogo as string,
      "https://images.unsplash.com/photo-1610294517329-d4aac71cd302?q=80&w=1080",
      "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1080",
      imgMoontunerKey as string,
      imgMoontunerKey as string
    ]
  },
  {
    title: "Astroharmonic Research",
    subtitle: "Cosmic Acoustics",
    description: "Two decades of inquiry into how harmonic proportion, planetary motion, and human perception interconnect.",
    longDescription: "This ongoing research project investigates the mathematical correlations between Kepler's 'Music of the Spheres' and modern acoustic physics. By analyzing the resonant frequencies of planetary orbits and scaling them to the audible spectrum, we create soundscapes that are quite literally 'out of this world'.",
    href: "https://harmonic.quantumelodies.com",
    features: [
      "Orbital Frequency Calculation",
      "Harmonic Ratio Analysis",
      "Acoustic Physics",
      "Sonification of Data"
    ],
    images: [
      imgAstroharmonic as string, // Quantumelodics / Astroharmonic logo
      "https://images.unsplash.com/photo-1741997852940-e2321fddabf2?q=80&w=1080", // Cymatics
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1080", // B&W Lines
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1080", // Music Festival/Abstract
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1080"  // Dark Fluid
    ]
  },
  {
    title: "Lyrix Prism",
    subtitle: "Synesthetic Analysis",
    description: "Experimental platforms translating emotion, tone, and color into interconnected systems for art and design.",
    longDescription: "Lyrix Prism is a synesthesia engine. It uses Natural Language Processing (NLP) to analyze the emotional sentiment of text (lyrics, poetry, prose) and maps it to specific color values and harmonic keys. It is a tool for seeing the color of words and hearing the sound of color.",
    href: "https://lyrix.created.app",
    features: [
      "NLP Sentiment Analysis",
      "Color-Sound Mapping",
      "Synesthetic Algorithms",
      "Generative Art Output"
    ],
    images: [
      imgLyrixPrismMockup as string,
      imgLyrixPrismAbout as string,
      imgLyrixPrismLogo as string
    ]
  }
];

export function Frameworks() {
  const [selectedFramework, setSelectedFramework] = useState<FrameworkData | null>(null);

  return (
    <>
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-emerald-500/90 uppercase tracking-[0.25em] text-sm font-medium font-mono mb-6">
            <Sparkles className="w-5 h-5" />
            <span>System Architectures</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Deep Dives and Distillations
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            Six creative inquiries merging design, sound, data, and metaphysics into functional sensory tools. Each system represents a unique methodology for translating abstract patterns into tangible experience—whether through harmonic algorithms, chronobiological mapping, or archetypal analysis. The unifying thread: a commitment to treating esoteric knowledge not as mysticism, but as rigorous data architecture. These frameworks transform symbolic systems into interactive instruments, proving that poetry and precision are not opposites, but partners in the pursuit of meaning-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedFramework(item)}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4">
                <div className="text-sm font-mono text-emerald-500/70 mb-2 uppercase tracking-[0.15em] font-medium">
                  System_0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-mono text-white/50 mt-2">
                  {item.subtitle}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {item.description}
              </p>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FrameworkModal
        isOpen={!!selectedFramework}
        onClose={() => setSelectedFramework(null)}
        data={selectedFramework}
      />
    </>
  );
}