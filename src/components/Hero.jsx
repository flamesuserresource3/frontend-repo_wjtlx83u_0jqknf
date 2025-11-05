import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,119,198,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.18),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-screen items-center">
        <div className="w-full max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/70 backdrop-blur"
          >
            Crafting immersive experiences
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 text-4xl sm:text-6xl leading-tight font-semibold tracking-tight"
          >
            Designer & Frontend Engineer building sleek, modern, and memorable products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl"
          >
            I blend aesthetics with performance to create interfaces that feel alive—smooth motion, bold contrast, and a focus on detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium shadow-lg shadow-white/10 transition hover:shadow-white/20"
            >
              Explore Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
