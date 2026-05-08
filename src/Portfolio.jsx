import { useState } from "react";
import { BlurFade } from "./components/magicui/blur-fade";
import { MagicCard } from "./components/magicui/magic-card";
import { Meteors } from "./components/magicui/meteors";
import { IconCloud } from "./components/magicui/icon-cloud";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  ArrowUpRight,
  Download,
  User,
  Briefcase,
  Map,
  Sun,
  Moon,
} from "lucide-react";

// ─── Brand icon SVGs ───────────────────────
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ICON_SLUGS = [
  "javascript",
  "dart",
  "kotlin",
  "php",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "laravel",
  "mysql",
  "mariadb",
  "git",
  "github",
  "docker",
  "linux",
  "postman",
  "figma",
];

const PROJECTS = [
  {
    title: "DigiLib (Digital Library)",
    desc: "A digital library management system built for my final competency exam (UKK). Includes complete ERD design and developed using PHP, MySQL, and Laravel/React.",
    tag: "Full Stack",
    year: "2026",
    link: "#",
  },
  {
    title: "Mobile ERP System",
    desc: "A mobile-based ERP application built with Flutter. Collaborated on this project with my partner during my 6-month internship (PKL) at PT Cenplus Komputer Senter.",
    tag: "Mobile App",
    year: "2025",
    link: "#",
  },
  {
    title: "Fedora Home Server",
    desc: "Repurposed a Lenovo Ideapad into a dedicated headless home server. Runs on Fedora Server, configured with custom SSH access, Btrfs, and optimized system performance.",
    tag: "Linux / SysAdmin",
    year: "2026",
    link: "#",
  },
  // {
  //   title: "Linux WA Client (WIP)",
  //   desc: "An experimental native WhatsApp desktop client for Linux built using whatsmeow (Go) and Electron to bring missing voice and video call support to Linux users.",
  //   tag: "Desktop / Go",
  //   year: "2026",
  //   link: "#",
  // },
];

const TIMELINE = [
  {
    year: "2026",
    role: "UKK & Home Lab",
    place: "SMK (12th Grade) & Personal Lab",
    desc: "Developing DigiLib for my final competency exam and experimenting with Linux by building and managing a Fedora home server.",
  },
  {
    year: "2025",
    role: "Internship (PKL)",
    place: "PT CNPLUS Computer Center",
    desc: "Completed a 6-month internship. Dove deep into mobile development and built a mobile ERP system collaboratively.",
  },
  {
    year: "2024",
    role: "Vocational Student (RPL)",
    place: "SMK — Software Engineering",
    desc: "Started focusing on Software Engineering, learning everything from PHP/MySQL basics to exploring modern frameworks like Laravel and React.",
  },
];

const SOCIAL = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Maulanaamir" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahdmaulana/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@maulanaamir.my.id",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Divider = () => (
  <div className="h-px w-full bg-[#e4e4e7] dark:bg-[#232326] my-20 transition-colors duration-300" />
);

const SectionLabel = ({ children }) => (
  <p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#52525b] dark:text-[#71717a] mb-6 transition-colors duration-300">
    {children}
  </p>
);

const Tag = ({ children }) => (
  <span className="inline-block px-2 py-0.5 rounded-md bg-[#e4e4e7] dark:bg-[#27272a] text-[#52525b] dark:text-[#71717a] text-[0.65rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300">
    {children}
  </span>
);

export default function Portfolio() {
  const [showOptions, setShowOptions] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default mode gelap

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen w-full bg-[#fafafa] dark:bg-[#0c0c0e] text-[#18181b] dark:text-[#e4e4e7] overflow-x-hidden font-geist relative transition-colors duration-300">
        {/* Floating Theme Toggle */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white dark:bg-[#111113] border border-[#e4e4e7] dark:border-[#232326] text-[#52525b] dark:text-[#71717a] shadow-sm hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        {/* Noise texture overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')] bg-[length:120px]" />

        <div className="relative z-10 max-w-[1024px] mx-auto px-6 py-24 pb-32">
          {/* HERO */}
          <section className="mb-24 relative">
            <div className="absolute -top-20 -left-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_#d4d4d8_0%,_transparent_70%)] dark:bg-[radial-gradient(circle,_#3f3f46_0%,_transparent_70%)] opacity-10 dark:opacity-5 pointer-events-none transition-colors duration-300" />

            <BlurFade delay={0}>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_2px_rgba(34,197,94,0.35)]" />
                <span className="text-[0.8rem] text-[#52525b] dark:text-[#71717a] transition-colors duration-300">
                  Available for work & collaboration
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.08}>
              <h1 className="text-[clamp(2rem,5vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.03em] mb-5">
                Maulanaamir
              </h1>
            </BlurFade>

            <BlurFade delay={0.13}>
              <p className="text-base leading-relaxed text-[#52525b] dark:text-[#71717a] max-w-[420px] mb-8 transition-colors duration-300">
                A vocational school graduate in Software Engineering who drifted
                from backend to web frontend and landed on mobile with Flutter —
                with no{" "}
                <span className="text-[#18181b] dark:text-[#e4e4e7] transition-colors duration-300">
                  fixed focus, just genuine curiosity
                </span>
                .
              </p>
            </BlurFade>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <BlurFade delay={0.18}>
                <div className="flex gap-1">
                  {SOCIAL.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex items-center justify-center p-2 rounded-lg text-[#52525b] dark:text-[#71717a] hover:bg-[#e4e4e7] dark:hover:bg-[#17171a] hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors duration-300"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </BlurFade>

              {/* Download CV Button */}
              {/* <BlurFade delay={0.22}>
                <motion.a
                  href="/CV_Ahmad_Maulana.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] dark:bg-[#e4e4e7] text-white dark:text-[#0c0c0e] text-[0.82rem] font-semibold transition-all hover:opacity-90 cursor-pointer"
                >
                  <Download size={14} strokeWidth={2} />
                  Download Resume
                </motion.a>
              </BlurFade> */}
            </div>
          </section>

          <Divider />

          {/* ABOUT */}
          <section id="about" className="mb-20 scroll-mt-24">
            <BlurFade inView delay={0}>
              <SectionLabel>About</SectionLabel>
            </BlurFade>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <BlurFade inView delay={0.07}>
                <p className="text-[0.92rem] leading-[1.85] text-[#52525b] dark:text-[#71717a] transition-colors duration-300">
                  I graduated from vocational high school (SMK) majoring in
                  Software Engineering (RPL). I started out interested in
                  backend — building APIs and working with databases. Then I
                  moved toward web frontend with React, and eventually got into
                  mobile development with{" "}
                  <span className="text-[#18181b] dark:text-[#e4e4e7] transition-colors duration-300">
                    Flutter
                  </span>{" "}
                  during my internship (PKL). I don't really have a fixed
                  specialization, but I'm comfortable jumping around and picking
                  things up as needed.
                </p>
              </BlurFade>
              <BlurFade inView delay={0.1}>
                <div className="w-full max-w-[260px] aspect-square mx-auto lg:mx-0 flex items-center justify-center relative">
                  <IconCloud iconSlugs={ICON_SLUGS} />
                </div>
              </BlurFade>
            </div>
          </section>

          <Divider />

          {/* PROJECTS */}
          <section id="projects" className="mb-20 scroll-mt-24">
            <BlurFade inView delay={0}>
              <SectionLabel>Selected Projects</SectionLabel>
            </BlurFade>

            <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
              {PROJECTS.map((p, i) => (
                <BlurFade
                  key={p.title}
                  inView
                  delay={i * 0.07}
                  className="w-[85vw] md:w-auto shrink-0 snap-center md:snap-align-none"
                >
                  <MagicCard
                    className="rounded-xl h-full bg-white dark:bg-[#111113] border-[#e4e4e7] dark:border-[#232326] transition-colors duration-300"
                    gradientColor={isDark ? "#1c1c1f" : "#f4f4f5"}
                    gradientSize={240}
                    gradientOpacity={1}
                  >
                    <div className="p-5 flex flex-col gap-2.5 h-full">
                      <div className="flex justify-between items-center">
                        <Tag>{p.tag}</Tag>
                        <span className="text-[0.68rem] text-[#a1a1aa] dark:text-[#3f3f46] font-mono transition-colors duration-300">
                          {p.year}
                        </span>
                      </div>
                      <h3 className="text-[0.88rem] font-semibold text-[#18181b] dark:text-[#e4e4e7] leading-snug transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-[0.78rem] text-[#52525b] dark:text-[#71717a] leading-relaxed flex-1 transition-colors duration-300">
                        {p.desc}
                      </p>
                      <a
                        href={p.link}
                        className="inline-flex items-center gap-1 text-[0.7rem] text-[#a1a1aa] dark:text-[#3f3f46] hover:text-[#52525b] dark:hover:text-[#71717a] transition-colors mt-1"
                      >
                        View project <ArrowUpRight size={10} />
                      </a>
                    </div>
                  </MagicCard>
                </BlurFade>
              ))}
            </div>
          </section>

          <Divider />

          {/* TIMELINE */}
          <section id="journey" className="mb-20 scroll-mt-24">
            <BlurFade inView delay={0}>
              <SectionLabel>Journey</SectionLabel>
            </BlurFade>
            <div className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <BlurFade key={item.role} inView delay={i * 0.08}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-end min-w-[44px]">
                      <span className="text-[0.68rem] font-mono text-[#a1a1aa] dark:text-[#3f3f46] mt-0.5 transition-colors duration-300">
                        {item.year}
                      </span>
                      {i < TIMELINE.length - 1 && (
                        <div className="flex-1 w-px bg-[#e4e4e7] dark:bg-[#232326] my-2.5 transition-colors duration-300" />
                      )}
                    </div>
                    <div className={i < TIMELINE.length - 1 ? "pb-10" : ""}>
                      <h4 className="text-[0.88rem] font-semibold text-[#18181b] dark:text-[#e4e4e7] transition-colors duration-300">
                        {item.role}
                      </h4>
                      <p className="text-[0.75rem] text-[#52525b] dark:text-[#71717a] mt-0.5 mb-1.5 transition-colors duration-300">
                        {item.place}
                      </p>
                      <p className="text-[0.78rem] text-[#52525b] dark:text-[#71717a] leading-relaxed opacity-65 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </section>

          <Divider />

          {/* STATS */}
          <section className="mb-20">
            <BlurFade inView delay={0}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { value: "10+", label: "Projects Built" },
                  { value: "3", label: "Stacks Explored" },
                  { value: "∞", label: "Curiosity", isFullWidthMobile: true },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-[1.1rem_1rem] rounded-xl border border-[#e4e4e7] dark:border-[#232326] bg-white dark:bg-[#111113] transition-colors duration-300 ${
                      stat.isFullWidthMobile ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <span className="block text-2xl font-semibold tracking-tight text-[#18181b] dark:text-[#e4e4e7] transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="block text-[0.72rem] text-[#52525b] dark:text-[#71717a] mt-0.5 transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </section>

          <Divider />

          {/* CONTACT CTA */}
          <section className="mb-20">
            <BlurFade inView delay={0}>
              <div className="relative rounded-2xl border border-[#e4e4e7] dark:border-[#232326] bg-white dark:bg-[#111113] overflow-hidden p-12 text-center transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-[radial-gradient(circle,_#d4d4d8_0%,_transparent_70%)] dark:bg-[radial-gradient(circle,_#3f3f46_0%,_transparent_70%)] opacity-20 dark:opacity-10 pointer-events-none transition-colors duration-300" />
                <Meteors number={10} />
                <div className="relative z-10">
                  <h2 className="text-[1.4rem] font-semibold tracking-tight text-[#18181b] dark:text-[#e4e4e7] mb-3 transition-colors duration-300">
                    Let's build something
                  </h2>
                  <p className="text-[0.85rem] text-[#52525b] dark:text-[#71717a] leading-relaxed max-w-[360px] mx-auto mb-8 transition-colors duration-300">
                    Open to collaboration, freelance work, or just talking tech.
                    Whether it's web, mobile, or something in between — I'm
                    always up for it.
                  </p>

                  <div className="h-10 flex justify-center items-center">
                    <AnimatePresence mode="wait">
                      {!showOptions ? (
                        <motion.button
                          key="btn-utama"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setShowOptions(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f4f4f5] dark:bg-[#17171a] border border-[#e4e4e7] dark:border-[#232326] text-[#18181b] dark:text-[#e4e4e7] text-[0.82rem] font-medium hover:bg-[#e4e4e7] dark:hover:bg-[#27272a] transition-colors cursor-pointer"
                        >
                          <Mail size={14} strokeWidth={1.5} />
                          Get in touch
                        </motion.button>
                      ) : (
                        <motion.div
                          key="btn-opsi"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="flex flex-col sm:flex-row gap-3"
                        >
                          <a
                            href="mailto:hello@maulanaamir.my.id"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f4f4f5] dark:bg-[#17171a] border border-[#e4e4e7] dark:border-[#232326] text-[#18181b] dark:text-[#e4e4e7] text-[0.82rem] font-medium hover:bg-[#e4e4e7] dark:hover:bg-[#27272a] transition-colors cursor-pointer"
                          >
                            <Mail size={14} strokeWidth={1.5} /> Email
                          </a>
                          <a
                            href="https://t.me/Maulanaamir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] dark:bg-[#e4e4e7] border border-[#18181b] dark:border-[#e4e4e7] text-white dark:text-[#0c0c0e] text-[0.82rem] font-semibold hover:opacity-85 transition-opacity cursor-pointer"
                          >
                            <Send size={14} strokeWidth={1.5} /> Telegram
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </BlurFade>
          </section>

          <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.7rem] text-[#a1a1aa] dark:text-[#3f3f46] transition-colors duration-300">
            <span>© 2026 Maulanaamir</span>
            <span>Built with MagicUI & Framer Motion</span>
          </footer>
        </div>

        {/* Floating Glass Dock (Hanya muncul di Mobile/Tablet) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <div className="flex items-center gap-8 px-8 py-3.5 rounded-full bg-white/80 dark:bg-[#111113]/80 backdrop-blur-md border border-[#e4e4e7] dark:border-[#232326] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-colors duration-300">
            <a
              href="#about"
              aria-label="About"
              className="text-[#52525b] dark:text-[#71717a] hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors"
            >
              <User size={20} />
            </a>
            <a
              href="#projects"
              aria-label="Projects"
              className="text-[#52525b] dark:text-[#71717a] hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors"
            >
              <Briefcase size={20} />
            </a>
            <a
              href="#journey"
              aria-label="Journey"
              className="text-[#52525b] dark:text-[#71717a] hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors"
            >
              <Map size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
