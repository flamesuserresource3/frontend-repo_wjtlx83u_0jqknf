import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description:
      'Ultra-fast storefront with elegant motion, fine-grained theming, and delightful micro-interactions.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    href: '#',
  },
  {
    title: 'Aurora Dashboard',
    description:
      'Data-rich admin with luminous gradients, crisp typography, and buttery-smooth transitions.',
    stack: ['Vite', 'TypeScript', 'Radix UI'],
    href: '#',
  },
  {
    title: 'Pulse Portfolio',
    description:
      'Personal site with immersive 3D hero, responsive design system, and a11y-first patterns.',
    stack: ['Spline', 'React', 'Tailwind'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            A selection of recent work focused on performance, polish, and purposeful motion.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.a
              key={proj.title}
              href={proj.href}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.08),transparent_40%)] opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-fuchsia-300">
                    <Code2 size={18} />
                    <span className="text-xs tracking-wide uppercase">Case {idx + 1}</span>
                  </div>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white transition" />
                </div>
                <h3 className="mt-4 text-xl font-medium">{proj.title}</h3>
                <p className="mt-2 text-sm text-white/70">{proj.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
