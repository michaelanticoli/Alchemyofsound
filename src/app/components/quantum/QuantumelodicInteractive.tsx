import { motion } from "motion/react";
import { SongOfTheMoon } from "./SongOfTheMoon";
import { HarmonicNatalChart } from "./HarmonicNatalChart";
import { StellarOrbiter } from "./StellarOrbiter";
import { AspectHarmonizer } from "./AspectHarmonizer";
import { SolarSystemExplorer } from "./SolarSystemExplorer";

export function QuantumelodicInteractive() {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">Supplementary Systems</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-white/80">
          Quantumelodic Lab
        </h3>
        <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
          Experimental data interfaces for harmonic and archetypal research.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="md:col-span-2"
        >
          <SolarSystemExplorer />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StellarOrbiter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AspectHarmonizer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <SongOfTheMoon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HarmonicNatalChart />
        </motion.div>
      </div>
    </section>
  );
}