import { BlurFade } from "./components/magicui/blur-fade";
import { Marquee } from "./components/magicui/marquee";
import { MagicCard } from "./components/magicui/magic-card";
import { Meteors } from "./components/magicui/meteors";
import { IconCloud } from "./components/magicui/icon-cloud";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Layers,
  TerminalSquare,
  Globe,
  Cpu,
  Database,
  Server,
  Smartphone,
  GitBranch,
} from "lucide-react";

// ─── Brand icon SVGs (lucide v1+ removed brand icons) ───────────────────────
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FigmaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zm7 0V9h3.5A3.5 3.5 0 0 0 12 5.5V5.5zm0 5V14h3.5a3.5 3.5 0 0 0 0-7H12v3.5zm0 4.5v3.5A3.5 3.5 0 1 1 8.5 15H12zm-7 3.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 0 1 5 18.5z"/>
  </svg>
);

// ─── Color tokens ─────────────────────────────────────────────────────────────
const C = {
  bg: "#0c0c0e",
  surface: "#111113",
  surface2: "#17171a",
  border: "#232326",
  text: "#e4e4e7",
  muted: "#71717a",
  dim: "#3f3f46",
  accentSoft: "#27272a",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const ICON_SLUGS = [
  // Languages
  "javascript",
  "dart",
  "kotlin",
  "php",
  "micropython",
  // Frontend & Mobile
  "react",
  "flutter",
  "html5",
  "css3",
  // Backend & Runtime
  "nodedotjs",
  "express",
  "laravel",
  // Databases
  "mysql",
  "mariadb",
  // Tools & Platforms
  "git",
  "github",
  "docker",
  "linux",
  "postman",
  "figma",
  "visualstudiocode",
  "androidstudio",
];

const PROJECTS = [
  {
    title: "DigiLab (Digital Library)",
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
  {
    title: "Linux WA Client (WIP)",
    desc: "An experimental native WhatsApp desktop client for Linux built using whatsmeow (Go) and Electron to bring missing voice and video call support to Linux users.",
    tag: "Desktop / Go",
    year: "2026",
    link: "#",
  },
];

const TIMELINE = [
  {
    year: "2026",
    role: "UKK & Home Lab",
    place: "SMK (12th Grade) & Personal Lab",
    desc: "Developing DigiLab for my final competency exam and experimenting with Linux by building and managing a Fedora home server.",
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
  { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:maulana@example.com" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Divider = () => (
  <div style={{ height: 1, width: "100%", background: C.border, margin: "5rem 0" }} />
);

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: "0.7rem",
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C.muted,
      marginBottom: "1.5rem",
    }}
  >
    {children}
  </p>
);

const Tag = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 6,
      background: C.accentSoft,
      color: C.muted,
      fontSize: "0.65rem",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

// ─── Portfolio ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: C.bg, overflowX: "hidden" }}>
      {/* Noise texture overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "120px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 680,
          margin: "0 auto",
          padding: "6rem 1.5rem",
        }}
      >
        {/* ════════════════════
            HERO
        ════════════════════ */}
        <section style={{ marginBottom: "6rem", position: "relative" }}>
          {/* Soft glow behind */}
          <div
            style={{
              position: "absolute",
              top: -80,
              left: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, #3f3f46 0%, transparent 70%)",
              opacity: 0.06,
              pointerEvents: "none",
            }}
          />

          <BlurFade delay={0}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "2rem" }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px 2px rgba(34,197,94,0.35)",
                }}
              />
              <span style={{ fontSize: "0.8rem", color: C.muted }}>
              Available for work & collaboration
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.08}>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: C.text,
                marginBottom: "1.25rem",
              }}
            >
              Maulanaamir.dev
            </h1>
          </BlurFade>

          <BlurFade delay={0.13}>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: C.muted,
                maxWidth: 420,
                marginBottom: "2.5rem",
              }}
            >
              A vocational school graduate in Software Engineering who drifted from
              backend to web frontend and landed on mobile with Flutter — with no{" "}
              <span style={{ color: C.text }}>fixed focus, just genuine curiosity</span>.
            </p>
          </BlurFade>

          <BlurFade delay={0.18}>
            <div style={{ display: "flex", gap: 4 }}>
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 8,
                    borderRadius: 8,
                    color: C.muted,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.surface2;
                    e.currentTarget.style.color = C.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = C.muted;
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </BlurFade>
        </section>

        <Divider />

        {/* ════════════════════
            ABOUT + TECH
        ════════════════════ */}
        <section style={{ marginBottom: "5rem" }}>
          <BlurFade inView delay={0}>
            <SectionLabel>About</SectionLabel>
          </BlurFade>

          {/* Two-col: text + floating cloud */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <BlurFade inView delay={0.07}>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: C.muted }}>
                I graduated from vocational high school (SMK) majoring in Software
                Engineering (RPL). I started out interested in backend — building APIs
                and working with databases. Then I moved toward web frontend with React,
                and eventually got into mobile development with{" "}
                <span style={{ color: C.text }}>Flutter</span> during my internship
                (PKL). I don't really have a fixed specialization, but I'm comfortable
                jumping around and picking things up as needed.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <div
                style={{
                  width: 260,
                  height: 260,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  /* Cloud library renders its own canvas, biarkan overflow visible */
                  overflow: "visible",
                  position: "relative",
                }}
              >
                <IconCloud iconSlugs={ICON_SLUGS} />
              </div>
            </BlurFade>
          </div>
        </section>

        <Divider />


        {/* ════════════════════
            PROJECTS
        ════════════════════ */}
        <section style={{ marginBottom: "5rem" }}>
          <BlurFade inView delay={0}>
            <SectionLabel>Selected Projects</SectionLabel>
          </BlurFade>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {PROJECTS.map((p, i) => (
              <BlurFade key={p.title} inView delay={i * 0.07}>
                <MagicCard
                  style={{ borderRadius: 12 }}
                  gradientColor="#1c1c1f"
                  gradientSize={240}
                  gradientOpacity={1}
                >
                  <div
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Tag>{p.tag}</Tag>
                      <span style={{ fontSize: "0.68rem", color: C.dim, fontFamily: "monospace" }}>
                        {p.year}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: C.text, lineHeight: 1.35 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.75, flex: 1 }}>
                      {p.desc}
                    </p>
                    <a
                      href={p.link}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.7rem",
                        color: C.dim,
                        textDecoration: "none",
                        marginTop: 4,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.muted)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = C.dim)}
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

        {/* ════════════════════
            TIMELINE
        ════════════════════ */}
        <section style={{ marginBottom: "5rem" }}>
          <BlurFade inView delay={0}>
            <SectionLabel>Journey</SectionLabel>
          </BlurFade>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((item, i) => (
              <BlurFade key={item.role} inView delay={i * 0.08}>
                <div style={{ display: "flex", gap: 24 }}>
                  {/* Year + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", minWidth: 44 }}>
                    <span style={{ fontSize: "0.68rem", fontFamily: "monospace", color: C.dim, marginTop: 2 }}>
                      {item.year}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <div
                        style={{
                          flex: 1,
                          width: 1,
                          background: C.border,
                          marginTop: 10,
                          marginBottom: 4,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: i < TIMELINE.length - 1 ? "2.5rem" : 0 }}>
                    <h4 style={{ fontSize: "0.88rem", fontWeight: 600, color: C.text }}>
                      {item.role}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: C.muted, margin: "2px 0 6px" }}>
                      {item.place}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.7, opacity: 0.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <Divider />

        {/* ════════════════════
            STATS
        ════════════════════ */}
        <section style={{ marginBottom: "5rem" }}>
          <BlurFade inView delay={0}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { value: "10+", label: "Projects Built" },
                { value: "3", label: "Stacks Explored" },
                { value: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "1.1rem 1rem",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    background: C.surface,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: C.text,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ display: "block", fontSize: "0.72rem", color: C.muted, marginTop: 2 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </BlurFade>
        </section>

        <Divider />

        {/* ════════════════════
            CONTACT CTA
        ════════════════════ */}
        <section style={{ marginBottom: "5rem" }}>
          <BlurFade inView delay={0}>
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                background: C.surface,
                overflow: "hidden",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              {/* Very subtle center glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 300,
                  height: 200,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #3f3f46 0%, transparent 70%)",
                  opacity: 0.12,
                  pointerEvents: "none",
                }}
              />
              <Meteors number={10} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    color: C.text,
                    marginBottom: "0.75rem",
                  }}
                >
                  Let's build something
                </h2>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: C.muted,
                    lineHeight: 1.75,
                    maxWidth: 360,
                    margin: "0 auto 2rem",
                  }}
                >
                  Open to collaboration, freelance work, or just talking tech.
                  Whether it's web, mobile, or something in between —
                  I'm always up for it.
                </p>
                <a
                  href="mailto:maulana@example.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "0.55rem 1.1rem",
                    borderRadius: 8,
                    background: C.surface2,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.accentSoft)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = C.surface2)}
                >
                  <Mail size={14} strokeWidth={1.5} />
                  Get in touch
                </a>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* ════════════════════
            FOOTER
        ════════════════════ */}
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.7rem",
            color: C.dim,
          }}
        >
          <span>© 2025 Maulana</span>
          <span>Built with MagicUI &amp; Framer Motion</span>
        </footer>
      </div>
    </div>
  );
}