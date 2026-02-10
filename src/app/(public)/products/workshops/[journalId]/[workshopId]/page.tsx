"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Award, 
  Users, 
  Download,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  BookOpen
} from "lucide-react";
import { useParams } from "next/navigation";

export default function WorkshopDetailPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 5, mins: 42, secs: 10 });
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Sync countdown for visual demo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSecs = prev.days * 86400 + prev.hours * 3600 + prev.mins * 60 + prev.secs - 1;
        if (totalSecs <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
        return {
          days: Math.floor(totalSecs / 86400),
          hours: Math.floor((totalSecs % 86400) / 3600),
          mins: Math.floor((totalSecs % 3600) / 60),
          secs: totalSecs % 60
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const structure = [
    { 
      day: "Day 1", 
      title: "Foundations & Design Tools", 
      points: ["Cas9 vs Cpf1/Cas12 Mechanisms", "Historical Context of CRISPR", "Hands-on with CHOPCHOP & CRISPRscan"],
      note: "Mini Task: Design guide RNA and predict off-target effects."
    },
    { 
      day: "Day 2", 
      title: "Workflows & Troubleshooting", 
      points: ["Lipofectamine & Neon Transfection", "Viral Vector Delivery Systems", "Analysis via CRISPResso & NGS"],
      note: "Mini Task: Analyze editing efficiency data sets."
    },
    { 
      day: "Day 3", 
      title: "Advanced Applications & Ethics", 
      points: ["CRISPRa (SunTag) & CRISPRi", "Base Editing Methodologies", "FDA, EMA & WHO Regulations"],
      note: "Mini Task: Case study on clinical trials from ClinicalTrials.gov."
    }
  ];

  const hallOfFame = [
    { title: "Publication", info: "Get published in prestigious open-access journals." },
    { title: "Excellence", info: "Become part of an elite research community." },
    { title: "Networking", info: "Connect with global researchers and mentors." },
    { title: "Recognition", info: "Worth ₹20,000 in academic value." }
  ];

  const reviews = [
    { name: "Pascu", text: "Good overall presentations. I liked the depth of explanation regarding applications.", rating: 5, date: "April 2025" },
    { name: "Chien Sheng Fei", text: "I’m truly inspired to see such passionate scholars dedicating themselves to research.", rating: 5, date: "May 2025" },
    { name: "Antonio Mauceri", text: "Important to improve video quality, but the content was excellent.", rating: 4, date: "July 2024" }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',_sans-serif] text-[#0f172a] pb-20 pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0f172a] text-white py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        
        <div className="container relative z-10 mx-auto px-6">
          <nav className="flex items-center gap-2 text-[#94a3b8] text-[10px] uppercase tracking-widest font-extrabold mb-8">
            <Link href="/" className="hover:text-[#f59e0b] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products/workshops" className="hover:text-[#f59e0b] transition-colors">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#f59e0b]">Genome Editing</span>
          </nav>

          <div className="inline-block bg-gradient-to-r from-[#ef4444] to-[#f87171] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-red-500/20 animate-pulse">
            ● Live Workshop
          </div>

          <h1 className="text-4xl md:text-6xl font-['Plus_Jakarta_Sans',_sans-serif] font-extrabold mb-6 leading-[1.1] max-w-4xl text-white">
            CRISPR-Cas Genome Editing: Tools & Techniques
          </h1>
          <p className="text-[#cbd5e1] text-xl mb-10 max-w-3xl leading-relaxed italic border-l-4 border-[#f59e0b] pl-6 font-medium">
            Empower Your Future with Precision Genome Editing. Master the entire workflow from guide RNA design to analyzing edited cells with expert mentors.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white px-10 py-4 rounded-lg font-['Plus_Jakarta_Sans'] font-extrabold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-amber-500/30">
              Secure Your Spot
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-lg font-['Plus_Jakarta_Sans'] font-extrabold text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 inline-block shadow-2xl max-w-lg w-full">
            <p className="text-[10px] font-black text-[#f59e0b] uppercase tracking-[0.3em] mb-6 text-center">
              Registration Closes In
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.mins, label: "Mins" },
                { val: timeLeft.secs, label: "Secs" }
              ].map((time, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-white tabular-nums bg-[#0f172a]/60 w-full h-20 flex items-center justify-center rounded-xl border border-white/5 shadow-inner">
                    {time.val.toString().padStart(2, '0')}
                  </div>
                  <p className="text-[10px] text-[#94a3b8] font-bold uppercase tracking-widest mt-3">{time.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT (65/30 Grid) */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] gap-[5%]">
          
          <div className="space-y-24">
            <section id="about">
              <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-8 pb-4 border-b-2 border-slate-100 flex items-center gap-4">
                About This Course
              </h2>
              <p className="text-[#0f172a] text-lg leading-[1.8] mb-6 font-medium">
                CRISPR-Cas9 has transformed the landscape of genetic engineering, offering unprecedented precision and efficiency in genome editing.
              </p>
              <p className="text-[#475569] text-base leading-[1.8] mb-6 font-medium">
                This workshop delves into the foundational principles of CRISPR-Cas9, exploring its historical development, molecular mechanisms, and the wide array of tools and techniques utilized in genome editing. Participants will gain a comprehensive understanding of the entire workflow, from designing guide RNAs to analyzing edited cells.
              </p>
            </section>

            <section id="objectives">
              <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-8 pb-4 border-b-2 border-slate-100 italic">
                Workshop Objectives
              </h2>
              <ul className="space-y-5">
                {[
                  "Understand the molecular mechanisms of CRISPR-Cas9 editing.",
                  "Gain proficiency in designing CRISPR experiments using CHOPCHOP.",
                  "Explore ethical and regulatory frameworks (FDA/EMA).",
                  "Apply technology to real-world problems in biotech & medicine.",
                  "Develop critical thinking skills for troubleshooting genetic data."
                ].map((obj, i) => (
                  <li key={i} className="flex gap-4 text-[#0f172a] font-semibold text-[1.05rem] group pl-2">
                    <span className="text-[#f59e0b] font-black mt-[-2px]">→</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="structure">
              <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-8 pb-4 border-b-2 border-slate-100">
                Workshop Structure
              </h2>
              <div className="space-y-5">
                {structure.map((item, i) => (
                  <details 
                    key={i} 
                    open={activeAccordion === i} 
                    onToggle={(e) => { if (e.currentTarget.open) setActiveAccordion(i); else if (activeAccordion === i) setActiveAccordion(null); }}
                    className="border border-[#e2e8f0] rounded-2xl overflow-hidden bg-white hover:border-[#cbd5e1] transition-all duration-300 shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-6 bg-[#f8fafc] cursor-pointer font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#0f172a] list-none">
                      <div className="flex items-center gap-4">
                        <span className="text-[#94a3b8] font-light">{item.day}:</span>
                        {item.title}
                      </div>
                      <span className="text-2xl font-light text-[#94a3b8] transition-colors">{activeAccordion === i ? '−' : '+'}</span>
                    </summary>
                    <div className="p-8 border-t border-[#f1f5f9] animate-in slide-in-from-top-2 duration-300">
                      <ul className="space-y-4">
                        {item.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-3 text-[#475569] font-bold text-sm uppercase tracking-wide">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 bg-[#fffbeb] p-6 border-l-4 border-[#f59e0b] rounded-r-lg text-[#92400e] text-sm font-medium italic">
                        {item.note}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="mentor">
              <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-8 pb-4 border-b-2 border-slate-100 italic">
                Meet Your Mentor
              </h2>
              <div className="bg-[#f8fafc] border-l-[6px] border-[#f59e0b] rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-start relative shadow-sm">
                <div className="shrink-0 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden self-center md:self-start">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Sarah Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-1">Dr. Sarah Chen</h3>
                  <span className="text-[#d97706] text-[10px] font-black uppercase tracking-[0.1em] mb-4 block">Ph.D. in Molecular Genetics | CRISPR Lead at BioGenex</span>
                  <p className="text-[#475569] leading-relaxed italic text-[0.95rem] mb-6">
                    "With a decade of experience in gene editing, I've led teams to develop novel CRISPR therapeutics. My goal is to bridge the gap between textbook theory and the wet-lab realities of genome engineering."
                  </p>
                  <div className="flex gap-6 items-center flex-wrap">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                      <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-tighter">Verified Lead</span>
                    </div>
                    <div className="flex gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       <span>Stanford</span> <span>•</span> <span>Biogenex</span> <span>•</span> <span>MIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="enroll-info">
              <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-6">Who Should Enroll?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     "Undergraduate/Postgrad in Molecular Biology",
                     "Ph.D. Scholars integrating CRISPR into thesis",
                     "Industry Professionals in Pharma/Biotech",
                     "Genetic Researchers & Scholars"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-[#475569] font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> {item}
                     </li>
                   ))}
                </ul>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-xl">
                <h4 className="text-lg font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-8 pb-4 border-b-2 border-[#f59e0b]/20">Workshop Details</h4>
                <div className="space-y-5">
                  {[
                    { label: "Mode", val: "Virtual / Online" },
                    { label: "Level", val: "Moderate" },
                    { label: "Duration", val: "3 Days (1.5 Hrs/Day)" },
                    { label: "Time", val: "08:00 PM IST" },
                    { label: "Deadline", val: "Jan 23, 2026", color: "text-[#ef4444]" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-sm font-semibold pb-4 border-b border-dashed border-[#e2e8f0] last:border-0 last:pb-0">
                      <span className="text-[#94a3b8] uppercase tracking-wider text-[10px] font-bold">{row.label}</span>
                      <strong className={`${row.color || 'text-[#0f172a]'}`}>{row.val}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -tr-10 -mt-10 -mr-10 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-extrabold mb-8 text-center">Fee Structure</h3>
                <div className="space-y-3">
                  {[
                    { label: "Student", price: "₹1799", featured: false },
                    { label: "Ph.D. Scholar", price: "₹2799", featured: true },
                    { label: "Faculty", price: "₹3799", featured: false },
                    { label: "Industry", price: "₹4799", featured: false }
                  ].map((tier, i) => (
                    <div 
                        key={i} 
                        className={`flex justify-between items-center p-4 rounded-xl transition-all border ${tier.featured ? 'bg-white text-[#0f172a] border-white shadow-lg' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                    >
                      <span className={`text-[10px] font-black uppercase tracking-widest ${tier.featured ? 'text-[#475569]' : 'text-white/80'}`}>{tier.label}</span>
                      <span className={`text-sm font-black ${tier.featured ? 'text-[#0f172a]' : 'text-[#f59e0b]'}`}>{tier.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-['Plus_Jakarta_Sans'] font-black rounded-xl text-xs uppercase tracking-[0.2em] transition-all">Enroll Now</button>
                <ul className="mt-8 space-y-4">
                  {["Live & recorded sessions", "e-Certificate of Completion", "Hands-on projects"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-[#94a3b8] uppercase tracking-tighter">
                      <Zap className="w-3 h-3 text-[#f59e0b]" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-[#0f172a] py-24 my-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-4">Join Our Hall of Fame</h2>
            <p className="text-[#94a3b8] font-bold uppercase tracking-[0.2em] text-xs mb-16">Take your research to the next level</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {hallOfFame.map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-2xl text-center hover:bg-white/10 transition-all">
                        <h3 className="text-lg font-bold text-[#f59e0b] mb-4">{item.title}</h3>
                        <p className="text-[#94a3b8] text-sm font-medium">{item.info}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 pb-40">
        <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-12 text-center">Student Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-[#f1f5f9] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="text-[#facc15] text-xl mb-6">{"★".repeat(rev.rating)}{"☆".repeat(5-rev.rating)}</div>
              <p className="text-[#475569] font-medium leading-relaxed italic mb-8">"{rev.text}"</p>
              <div className="mt-auto">
                <span className="text-sm font-bold text-[#0f172a]">{rev.name}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase block mt-1 tracking-widest">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
