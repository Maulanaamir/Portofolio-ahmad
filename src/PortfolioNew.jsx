// import { useState } from "react";

// const SOCIALS = [
//   { id: "gh", label: "github.com/Maulanaamir", href: "https://github.com/Maulanaamir" },
//   { id: "in", label: "linkedin.com/in/Ahdmaulana", href: "https://linkedin.com/ahdmaulana" },
//   { id: "ig", label: "@maulana.dev", href: "https://instagram.com/" },
// ];

// const PROJECTS = [
//   { name: "Digital Library App", tag: "UKK 2026", desc: "Aplikasi perpustakaan sekolah digital — PHP, MySQL, Bootstrap 5." },
//   { name: "WhatsApp Linux Client", tag: "Personal", desc: "Native Linux WA client dengan voice/video call via whatsmeow + Electron." },
//   { name: "AI Chatbot SaaS", tag: "AI API", desc: "Chatbot lokal bisnis menggunakan Gemini API & freemium model." },
// ];

// export default function PortfolioNew() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <div className={`layout-wrap px-4 min-h-screen ${theme === 'dark' ? 'bg-[#0b0b0b] text-white' : 'bg-white text-gray-900'}`}>
//       <header className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-4">
//           <div className="w-3 h-3 rounded-full bg-green-500" />
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">Maulana — Portfolio</h1>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm"
//           >
//             {theme === "light" ? (
//               <span className="">🌙</span>
//             ) : (
//               <span className="">☀️</span>
//             )}
//             <span className="hidden sm:inline">Toggle</span>
//           </button>
//           <a href="#contact" className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-sm">Contact</a>
//         </div>
//       </header>

//       <main className="grid lg:grid-cols-12 gap-6 items-start">
//         <section className="lg:col-span-5">
//           <article className="rounded-2xl shadow p-8 bg-white text-gray-900 border">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-serif mb-2">Hello, my name is <span className="font-bold">Maulana</span></h2>
//                 <p className="text-orange-500 text-lg md:text-xl font-semibold">UX / UI Designer & Frontend-ish</p>
//                 <p className="mt-4 text-sm text-gray-600">Based in Jakarta, Indonesia — Full stack tinkerer.</p>
//                 <div className="mt-6 flex gap-3">
//                   <a className="px-4 py-2 rounded-full border text-sm" href="#contact">Contact</a>
//                   <a className="px-4 py-2 rounded-full border text-sm" href="#cv">Get CV</a>
//                 </div>
//               </div>

//               <div className="flex flex-col items-end gap-4">
//                 <div className={`w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center text-lg font-medium ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>ML</div>
//                 <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Available for a job</div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Featured work</h3>
//               <div className="grid md:grid-cols-3 gap-4">
//                 {PROJECTS.map((p) => (
//                   <div key={p.name} className="p-4 bg-gray-50 rounded-lg border">
//                     <div className="text-xs text-gray-400">{p.tag}</div>
//                     <div className="font-medium mt-2">{p.name}</div>
//                     <div className="text-sm text-gray-500 mt-1">{p.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </article>

//           <div className="mt-6 rounded-2xl shadow p-4 bg-white border">
//             <div className="flex items-center justify-between mb-3">
//               <div className="text-sm text-gray-500">Now playing</div>
//               <div className="text-sm text-gray-500">Spotify</div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gray-200 rounded-md" />
//               <div>
//                 <div className="font-semibold">Slow Dancing In The Dark</div>
//                 <div className="text-sm text-gray-500">Joji</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <aside className="lg:col-span-7 space-y-4">
//           <div className="rounded-2xl shadow p-6 bg-[#0f1113] text-white border">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-sm text-gray-300">About</div>
//                 <div className="text-2xl font-serif">Designer & Developer</div>
//               </div>
//               <div className="text-sm text-gray-400">Jakarta</div>
//             </div>
//             <p className="mt-4 text-sm text-gray-300">I craft interfaces and small backend services. I value clarity, speed, and elegant UX.</p>
//             <div className="mt-4 flex flex-col gap-2">
//               {SOCIALS.map((s) => (
//                 <a key={s.id} href={s.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800">
//                   <div className="w-8 h-8 bg-gray-700 rounded-sm flex items-center justify-center text-sm">{s.id.toUpperCase()}</div>
//                   <div className="text-sm text-gray-300">{s.label}</div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-2xl shadow p-6 bg-[#0f1113] text-white border">
//             <div className="flex items-center justify-between">
//               <div className="text-sm text-gray-300">Skills</div>
//               <div className="text-xs text-gray-500">3+ yrs</div>
//             </div>
//             <div className="mt-3 flex flex-wrap gap-2">
//               {['JavaScript','HTML','CSS','React','Laravel','PHP','MySQL','Tailwind'].map((s) => (
//                 <span key={s} className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300">{s}</span>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-2xl shadow p-6 bg-[#0f1113] text-white border">
//             <div className="text-sm text-gray-300">Contact</div>
//             <div className="mt-3 text-sm text-gray-300">Let's build something together. Email: <a href="mailto:hello@example.com" className="text-orange-400">hello@example.com</a></div>
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// }
