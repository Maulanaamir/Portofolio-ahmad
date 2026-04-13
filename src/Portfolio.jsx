import { useEffect, useState } from "react";

const SKILLS = [
  { label: "PHP",         cls: "tag-php"      },
  { label: "Laravel",     cls: "tag-laravel"  },
  { label: "JavaScript",  cls: "tag-js"       },
  { label: "HTML / CSS",  cls: "tag-html"     },
  { label: "Python",      cls: "tag-python"   },
  { label: "MySQL",       cls: "tag-mysql"    },
  { label: "TailwindCSS", cls: "tag-tailwind" },
  { label: "Gemini API",  cls: "tag-ai"       },
];

const PROJECTS = [
  {
    badge: "UKK 2026", badgeCls: "badge-ukk",
    name: "Digital Library App",
    desc: "Aplikasi perpustakaan sekolah digital — PHP, MySQL, Bootstrap 5, Waterfall method.",
  },
  {
    badge: "Personal", badgeCls: "badge-personal",
    name: "WhatsApp Linux Client",
    desc: "Native Linux WA client dengan voice/video call via whatsmeow + Electron.",
  },
  {
    badge: "AI API", badgeCls: "badge-api",
    name: "AI Chatbot SaaS",
    desc: "Chatbot lokal bisnis menggunakan Gemini API & freemium model.",
  },
];

// Tech tools & gear
const TOOLS = [
  { 
    name: "VS Code", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> 
  },
  { 
    name: "Linux", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg> 
  },
  { 
    name: "Git", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg> 
  },
  { 
    name: "Laragon", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> 
  },
  { 
    name: "Postman", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 
  },
  { 
    name: "Figma", 
    svg: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg> 
  },
];

// Album covers
// Album covers (Menggunakan jalur folder lokal biar anti error)
// Album covers (Menggunakan jalur folder lokal biar anti error)
const ALBUMS = [
  { title: "Nectar",                         artist: "Joji",              img: "/albums/nectar.jpg",          bg: "linear-gradient(135deg,#1a0808,#2a0c0c)", label: "#c05040" },
  { title: "Ballads 1",                      artist: "Joji",              img: "/albums/ballads1.jpg",        bg: "linear-gradient(135deg,#181418,#282028)", label: "#a090a0" },
  { title: "Good Morning It's Now Tomorrow", artist: "Matt Maltese",      img: "/albums/goodmorning.jpg",     bg: "linear-gradient(135deg,#2c1e1c,#1a1210)", label: "#d09080" },
  { title: "Pony",                           artist: "Rex Orange County", img: "/albums/pony.jpg",            bg: "linear-gradient(135deg,#2040a0,#102060)", label: "#a0c0f0" },
  { title: "Freudian",                       artist: "Daniel Caesar",     img: "/albums/freudian.jpg",        bg: "linear-gradient(135deg,#1a1a0e,#2a2818)", label: "#b0a860" },
  { title: "Piss In The Wind",               artist: "Joji",              img: "/albums/pissinthewind.jpg",   bg: "linear-gradient(135deg,#1c1a10,#282414)", label: "#c0b080" },
];

// Socials - Updated with pure SVGs
const SOCIALS = [
  { 
    id: "gh", 
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, 
    label: "github.com/Maulanaamir", href: "https://github.com/Maulanaamir" 
  },
  { 
    id: "in", 
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
    label: "linkedin.com/in/Ahdmaulana", href: "https://linkedin.com/ahdmaulana" 
  },
  { 
    id: "ig", 
    icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
    label: "@maulana.dev", href: "https://instagram.com/" 
  },
];

const WAVE_HEIGHTS = ["40%","80%","60%","100%","70%","50%","90%","65%","45%","75%","55%","85%","40%","70%","60%","95%","50%","80%"];
const WAVE_DELAYS  = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; min-height: 100vh; }

  body { background: #141018; font-family: 'DM Sans', sans-serif; }

  .pf-page { min-height: 100vh; padding: 36px 40px 56px; max-width: 1280px; margin: 0 auto; }

  /* Nav */
  .pf-nav { display: flex; align-items: center; gap: 4px; margin-bottom: 32px; }
  .pf-dot { width: 8px; height: 8px; border-radius: 50%; background: #c4a090; margin-right: 8px; animation: pf-pulse 2s infinite; }
  .pf-nav-btn { padding: 7px 18px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer; transition: background 0.2s; color: #7a6868; border: none; background: transparent; font-family: 'DM Sans', sans-serif; }
  .pf-nav-btn.active  { background: rgba(196,160,144,0.14); color: #c4a090; }
  .pf-nav-btn:hover:not(.active) { background: rgba(255,255,255,0.04); color: #9a8878; }

  /* Grid */
  .pf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }

  /* Base card - Opacity transition for Focus Mode */
  .pf-card { 
    background: #1c1620; border-radius: 22px; padding: 26px; border: 1px solid #342838; 
    overflow: hidden; 
    transition: transform 0.22s ease, border-color 0.22s ease, opacity 0.4s ease; 
  }
  .pf-card:hover { transform: translateY(-3px); border-color: #483848; }
  .pf-card.dimmed { opacity: 0.25; filter: grayscale(40%); pointer-events: none; }

  /* Hero */
  .pf-hero { grid-column: 1 / 3; }
  .pf-hero-title { font-family: 'DM Serif Display', serif; font-size: 38px; line-height: 1.15; color: #f0e4dc; margin-bottom: 28px; }
  .pf-hero-title em { color: #d4a890; font-style: italic; }
  .pf-profile-row { display: flex; align-items: center; gap: 12px; }
  .pf-avatar { width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg,#c4a090,#906070); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 15px; color: #f8f0ec; flex-shrink: 0; border: 1px solid #4a3040; }
  .pf-profile-name { font-weight: 500; font-size: 15px; color: #e0cec4; }
  .pf-profile-sub  { font-size: 12px; color: #7a6068; margin-top: 3px; }

  /* Music */
  .pf-music { background: #181420 !important; border-color: #342848 !important; }
  .pf-music-live { font-size: 11px; font-weight: 500; color: #d4a890; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
  .pf-music-live::before { content:''; width:6px; height:6px; border-radius:50%; background:#d4a890; animation: pf-pulse 1.2s infinite; }
  .pf-music-song   { font-family:'DM Serif Display',serif; font-size:21px; color:#f0e4dc; margin-bottom:4px; }
  .pf-music-artist { font-size:13px; color:#7a6068; margin-bottom:16px; }
  .pf-waveform     { display:flex; align-items:center; gap:2px; height:32px; margin-bottom:14px; }
  .pf-waveform span { display:block; width:3px; border-radius:2px; background:rgba(212,168,144,0.3); animation:pf-wave 1s infinite ease-in-out; }
  .pf-waveform span:nth-child(even) { background:rgba(212,168,144,0.65); }
  .pf-music-footer { font-size:11px; color:#8a7068; font-weight:500; }

  /* Stats */
  .pf-stats { background: #181420 !important; border: 1px solid #342848 !important; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:180px; }
  .pf-stat-num   { font-family:'DM Serif Display',serif; font-size:56px; color:#c4a090; line-height:1; margin-bottom:8px; }
  .pf-stat-label { font-size:13px; color:#7a6068; }

  /* Card label */
  .pf-card-label { font-size:11px; font-weight:500; color:#6a5868; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:14px; }

  /* Skills */
  .pf-skill-tags { display:flex; flex-wrap:wrap; gap:8px; }
  .pf-skill-tag  { padding:6px 13px; border-radius:20px; font-size:12px; font-weight:500; }
  .tag-php      { background:#281e24; color:#d0a0b0; border:1px solid #483040; }
  .tag-laravel  { background:#2c1e20; color:#d09888; border:1px solid #4a3038; }
  .tag-js       { background:#28241a; color:#c8b878; border:1px solid #483820; }
  .tag-html     { background:#2c2018; color:#d0a878; border:1px solid #4a3828; }
  .tag-python   { background:#1e2824; color:#90c0b0; border:1px solid #304038; }
  .tag-mysql    { background:#1e2030; color:#8898c8; border:1px solid #303850; }
  .tag-tailwind { background:#1c2428; color:#80a8b8; border:1px solid #303848; }
  .tag-ai       { background:#241e28; color:#a888b8; border:1px solid #403050; }

  /* Projects */
  .pf-projects { grid-column:3; grid-row:2/4; display:flex; flex-direction:column; gap:12px; }
  .pf-project-item { background:#161020; border-radius:16px; padding:16px; flex:1; border:1px solid #302440; transition: border-color 0.2s; }
  .pf-project-item:hover { border-color:#483860; }
  .pf-project-badge { font-size:10px; font-weight:500; padding:3px 9px; border-radius:20px; display:inline-block; margin-bottom:10px; }
  .badge-ukk      { background:#2c1e24; color:#d09898; border:1px solid #4a3040; }
  .badge-personal { background:#1e2030; color:#8898c8; border:1px solid #303850; }
  .badge-api      { background:#241e28; color:#a888b8; border:1px solid #403050; }
  .pf-project-name { font-size:14px; font-weight:500; color:#e0cec4; margin-bottom:5px; }
  .pf-project-desc { font-size:11.5px; color:#806870; line-height:1.6; }

  /* Connect Container */
  .pf-connect { background: #181420 !important; border-color: #302438 !important; display:flex; flex-direction:column; justify-content:space-between; min-height:180px; }
  .pf-connect-title { font-family:'DM Serif Display',serif; font-size:34px; color:rgba(212,168,144,0.22); line-height:1.1; margin-bottom:16px; }
  .pf-connect-links { display:flex; flex-direction:column; gap:8px; }

  /* NEW: Connect Links Muted Styling */
  .pf-connect-link { 
    display: flex; align-items: center; gap: 10px; font-size: 12px; text-decoration: none; 
    padding: 10px 14px; border-radius: 12px; transition: all 0.3s ease; 
    font-family: 'DM Sans', sans-serif; 
    border: 1px solid #302438; 
    background: #1a1622;
    color: #7a6868; /* Warna teks pudar */
  }
  .pf-connect-link:hover { 
    border-color: #4a3848; 
    background: rgba(255,255,255,0.03); 
    color: #d4a890; /* Teks nyala pas di-hover */
    transform: translateY(-2px);
  }
  .pf-link-icon { 
    width: 24px; height: 24px; border-radius: 6px; 
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    color: #6a5868; /* Warna icon pudar */
    background: #1c1824;
    border: 1px solid #342838;
    transition: all 0.3s ease;
  }
  .pf-connect-link:hover .pf-link-icon { 
    color: #d4a890; /* Icon nyala pas di-hover */
    border-color: #4a3848;
  }

  /* Location */
  .pf-location { padding:0 !important; background:#161020 !important; border-color:#302440 !important; min-height:180px; }
  .pf-map { width:100%; height:100%; min-height:180px; position:relative; }
  .pf-map-svg { position:absolute; inset:0; width:100%; height:100%; opacity:0.22; }
  .pf-map-dot { position:absolute; top:42%; left:54%; width:10px; height:10px; border-radius:50%; background:#c4a090; box-shadow:0 0 0 5px rgba(196,160,144,0.18), 0 0 12px rgba(196,160,144,0.35); }
  .pf-map-overlay { position:absolute; bottom:20px; left:20px; }
  .pf-map-label { font-size:11px; color:#7a6068; font-weight:500; margin-bottom:4px; }
  .pf-map-city  { font-family:'DM Serif Display',serif; font-size:22px; color:#e0cec4; }

  /* Tech shelf (Muted SVG Icons) - FIXED HOVER CLIPPING */
  .pf-tools { grid-column:1/3; }
  .pf-tools-row { display:flex; gap:12px; margin-top:4px; padding-top:10px; padding-bottom:8px; overflow-x:auto; }
  .pf-tools-row::-webkit-scrollbar { height:0; }
  .pf-tool-item { flex-shrink:0; width:80px; display:flex; flex-direction:column; align-items:center; gap:10px; cursor: pointer; }
  .pf-tool-cover { width:72px; height:72px; border-radius:18px; display:flex; align-items:center; justify-content:center; background: #1a161e; border: 1px solid #302834; color: #6a5868; transition: all 0.3s ease; }
  .pf-tool-item:hover .pf-tool-cover { background: #241d28; border-color: #4a3848; color: #d4a890; transform: translateY(-4px); }
  .pf-tool-name { font-size:11px; text-align:center; font-weight:500; color: #7a6868; transition: color 0.3s ease; }
  .pf-tool-item:hover .pf-tool-name { color: #d4a890; }

  /* Album covers (Muted Images) */
  .pf-albums { display:grid; grid-template-columns: repeat(3,1fr); gap:12px; margin-top:12px; }
  .pf-album-item { border-radius:12px; overflow:hidden; position:relative; aspect-ratio:1; cursor: pointer; border: 1px solid #342838; }
  .pf-album-cover { width:100%; height:100%; display:flex; flex-direction:column; justify-content:flex-end; padding:10px; background-size: cover; background-position: center; filter: grayscale(60%) brightness(0.45) contrast(1.1); transition: all 0.4s ease; }
  .pf-album-item:hover .pf-album-cover { filter: grayscale(0%) brightness(0.9) contrast(1); transform: scale(1.05); }
  .pf-album-text-bg { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,10,18,0.9) 0%, transparent 60%); pointer-events: none; }
  .pf-album-info { position: relative; z-index: 2; }
  .pf-album-title  { font-size:12px; font-weight:600; line-height:1.2; margin-bottom:2px; color: #f0e4dc; }
  .pf-album-artist { font-size:10px; color: #a08890; }

  /* Accent line */
  .pf-accent-line { width:28px; height:2px; background:#c4a090; opacity:0.6; border-radius:1px; margin-bottom:14px; }

  @keyframes pf-pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
  @keyframes pf-wave  { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1)} }

  @media (max-width: 900px) {
    .pf-hero, .pf-tools { grid-column:1/3; }
    .pf-projects { grid-column:1/3; grid-row:auto; }
    .pf-hero-title { font-size:28px; }
  }
  @media (max-width: 600px) {
    .pf-grid { grid-template-columns:1fr; }
    .pf-hero, .pf-projects, .pf-tools { grid-column:1; }
    .pf-page { padding:18px 18px 36px; }
    .pf-hero-title { font-size:24px; }
    .pf-stat-num { font-size:44px; }
  }
`;

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    if (document.getElementById("pf-styles")) return;
    const s = document.createElement("style");
    s.id = "pf-styles";
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);

  const checkFocus = (categories) => {
    if (activeNav === "Home") return "";
    return categories.includes(activeNav) ? "" : "dimmed";
  };

  return (
    <div className="pf-page">
      <nav className="pf-nav">
        <span className="pf-dot" />
        {["Home","Works","Connect"].map(item => (
          <button key={item} className={`pf-nav-btn${activeNav === item ? " active" : ""}`} onClick={() => setActiveNav(item)}>{item}</button>
        ))}
      </nav>

      <div className="pf-grid">

        {/* Hero */}
        <div className={`pf-card pf-hero ${checkFocus(["Home", "Works", "Connect"])}`}>
          <p className="pf-hero-title">Building things at the intersection of <em>code, creativity &amp; curiosity.</em></p>
          <div className="pf-profile-row">
            <div className="pf-avatar">ML</div>
            <div>
              <p className="pf-profile-name">Maulana</p>
              <p className="pf-profile-sub">Full Stack Developer in the Making · SMK RPL</p>
            </div>
          </div>
        </div>

        {/* Now Playing */}
        <div className={`pf-card pf-music ${checkFocus(["Home"])}`}>
          <div className="pf-music-live">Now playing</div>
          <div className="pf-music-song">Slow Dancing In The Dark</div>
          <div className="pf-music-artist">Joji</div>
          <div className="pf-waveform">
            {WAVE_HEIGHTS.map((h, i) => <span key={i} style={{ height: h, animationDelay: `${WAVE_DELAYS[i]}s` }} />)}
          </div>
          <div className="pf-music-footer">Spotify · Joji Fan</div>
        </div>

        {/* Stats */}
        <div className={`pf-card pf-stats ${checkFocus(["Home", "Works"])}`}>
          <div className="pf-stat-num">3+</div>
          <div className="pf-stat-label">Tahun belajar coding</div>
        </div>

        {/* Skills */}
        <div className={`pf-card ${checkFocus(["Home", "Works"])}`}>
          <div className="pf-accent-line" />
          <div className="pf-card-label">Tech Stack</div>
          <div className="pf-skill-tags">
            {SKILLS.map(s => <span key={s.label} className={`pf-skill-tag ${s.cls}`}>{s.label}</span>)}
          </div>
        </div>

        {/* Projects */}
        <div className={`pf-card pf-projects ${checkFocus(["Home", "Works"])}`}>
          <div className="pf-accent-line" />
          <div className="pf-card-label">Work</div>
          {PROJECTS.map(p => (
            <div key={p.name} className="pf-project-item">
              <span className={`pf-project-badge ${p.badgeCls}`}>{p.badge}</span>
              <div className="pf-project-name">{p.name}</div>
              <div className="pf-project-desc">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Connect - Updated Section */}
        <div className={`pf-card pf-connect ${checkFocus(["Home", "Connect"])}`}>
          <div className="pf-connect-title">Let's<br />connect</div>
          <div className="pf-connect-links">
            {SOCIALS.map(s => (
              <a key={s.id} className="pf-connect-link" href={s.href} target="_blank" rel="noreferrer">
                <span className="pf-link-icon">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className={`pf-card pf-location ${checkFocus(["Home", "Connect"])}`}>
          <div className="pf-map">
            <svg className="pf-map-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pf-grid-pat" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c4a090" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="300" height="200" fill="url(#pf-grid-pat)" />
              <path d="M20,80 Q60,60 100,70 Q140,80 180,65 Q220,50 260,70 Q280,78 300,72" stroke="#907060" strokeWidth="1.5" fill="none" />
              <path d="M0,120 Q50,110 100,115 Q150,120 200,108 Q250,96 300,110" stroke="#907060" strokeWidth="1" fill="none" />
              <path d="M80,0 Q90,50 85,100 Q80,150 88,200" stroke="#907060" strokeWidth="1" fill="none" />
            </svg>
            <div className="pf-map-dot" />
            <div className="pf-map-overlay">
              <div className="pf-map-label">Find me here</div>
              <div className="pf-map-city">Jakarta, Indonesia</div>
            </div>
          </div>
        </div>

        {/* Tech Tools */}
        <div className={`pf-card pf-tools ${checkFocus(["Home", "Works"])}`}>
          <div className="pf-accent-line" />
          <div className="pf-card-label">My tools & gear</div>
          <div className="pf-tools-row">
            {TOOLS.map(t => (
              <div key={t.name} className="pf-tool-item">
                <div className="pf-tool-cover">
                  {t.svg}
                </div>
                <span className="pf-tool-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Album cover grid */}
        <div className={`pf-card ${checkFocus(["Home"])}`}>
          <div className="pf-accent-line" />
          <div className="pf-card-label">My listening shelf</div>
          <div className="pf-albums">
            {ALBUMS.map(a => (
              <div key={a.title} className="pf-album-item" style={{ background: a.bg }}>
                <div className="pf-album-cover" style={{ backgroundImage: `url(${a.img})` }}>
                  <div className="pf-album-text-bg" />
                  <div className="pf-album-info">
                    <div className="pf-album-title" style={{ color: a.label }}>{a.title}</div>
                    <div className="pf-album-artist" style={{ color: a.label }}>{a.artist}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}