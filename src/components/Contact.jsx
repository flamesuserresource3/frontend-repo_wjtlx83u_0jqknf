import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something beautiful</h2>
          <p className="mt-3 text-white/70">
            Available for freelance work, collaborations, and full-time roles. I reply within 24 hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium shadow-lg shadow-white/10 transition hover:shadow-white/20"
            >
              <Mail size={18} />
              Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        </motion.div>
      </div>
    </section>
  );
}
