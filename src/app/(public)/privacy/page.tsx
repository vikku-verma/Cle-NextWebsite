"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Shield, Lock, Eye, CheckCircle, Info, BookOpen,
    Link as LinkIcon, User, Database, Globe, Scale,
    CreditCard, Mail, Bell, Smartphone, MapPin,
    Search, Terminal, BarChart, MousePointer2, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { id: "introduction", title: "1. Introduction", icon: Info },
    { id: "definitions", title: "2. Definitions", icon: BookOpen },
    { id: "collection", title: "3. Information Collection", icon: Database },
    { id: "types", title: "4. Types of Data", icon: Smartphone },
    { id: "use", title: "5. Use of Data", icon: Eye },
    { id: "retention", title: "6. Retention of Data", icon: Shield },
    { id: "transfer", title: "7. Transfer of Data", icon: Globe },
    { id: "disclosure", title: "8. Disclosure of Data", icon: LinkIcon },
    { id: "security", title: "9. Security of Data", icon: Lock },
    { id: "gdpr", title: "10. GDPR Rights", icon: Scale },
    { id: "caloppa", title: "11. CalOPPA", icon: Shield },
    { id: "ccpa", title: "12. CCPA Rights", icon: User },
    { id: "providers", title: "13. Service Providers", icon: MousePointer2 },
    { id: "analytics", title: "14. Analytics", icon: BarChart },
    { id: "cicd", title: "15. CI/CD Tools", icon: Terminal },
    { id: "remarketing", title: "16. Remarketing", icon: Bell },
    { id: "payments", title: "17. Payments", icon: CreditCard },
    { id: "links", title: "18. External Links", icon: LinkIcon },
    { id: "children", title: "19. Children's Privacy", icon: AlertCircle },
    { id: "changes", title: "20. Policy Changes", icon: Bell },
    { id: "contact", title: "21. Contact Us", icon: Mail },
];

export default function PrivacyPage() {
    const [activeSection, setActiveSection] = useState("introduction");

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(SECTIONS[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            <div className="container px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-2 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-3">On this page</p>
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                                        activeSection === section.id
                                            ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                            : "text-slate-500 hover:bg-slate-100/50 hover:text-slate-900"
                                    )}
                                >
                                    <section.icon className={cn("h-4 w-4", activeSection === section.id ? "text-white" : "text-slate-400")} />
                                    <span className="truncate">{section.title}</span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-24">

                        {/* Header Section */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                                <Lock className="h-3 w-3" />
                                Updated 2026
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-slate-900 leading-none">
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
                                We are committed to protecting your data and your privacy. Read the full details of our data handling practices below.
                            </p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-32">

                            {/* 1. Introduction */}
                            <section id="introduction" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Info className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">1. Introduction</h2>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-600 leading-loose space-y-6">
                                    <p className="text-lg font-bold text-slate-800 italic">Welcome to Centre of Legal Excellence (CLE).</p>
                                    <p>CLE ("us", "we", or "our") operates at <a href="https://cle.celnet.in" className="text-primary font-bold decoration-2 underline-offset-4 hover:underline">https://cle.celnet.in</a> (hereinafter referred to as "Service").</p>
                                    <p>Our Privacy Policy governs your visit to <a href="https://cle.celnet.in" className="text-primary font-bold decoration-2 underline-offset-4 hover:underline">https://cle.celnet.in</a> and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
                                    <p>We use your data to provide and improve Service. By using the Service, you agree to the collection and use of information under this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                                    <p>Our Terms and Conditions ("Terms") govern all use of our Service and together with the Privacy Policy constitute your agreement with us ("Agreement").</p>
                                </div>
                            </section>

                            {/* 2. Definitions */}
                            <section id="definitions" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <BookOpen className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">2. Definitions</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { t: "Service", d: "The https://cle.celnet.in website operated by CLE." },
                                        { t: "Personal Data", d: "Data about a living individual who can be identified from that data." },
                                        { t: "Usage Data", d: "Data collected automatically generated by the use of the Service." },
                                        { t: "Cookies", d: "Small files stored on your device (computer or mobile device)." },
                                        { t: "Data Controller", d: "A natural or legal person who determines the purposes for which and how any personal data are processed." },
                                        { t: "Service Providers", d: "Any natural or legal person who processes the data on behalf of the Data Controller." },
                                        { t: "Data Subject", d: "Any living individual who is the subject of Personal Data." },
                                        { t: "The User", d: "The individual using our Service. Corresponds to the Data Subject." }
                                    ].map((def, i) => (
                                        <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">{def.t}</h3>
                                            <p className="text-sm text-slate-600 font-bold leading-relaxed">{def.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 3. Information Collection and Use */}
                            <section id="collection" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Database className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">3. Information Collection and Use</h2>
                                </div>
                                <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl">
                                    <p className="text-xl font-medium leading-relaxed">
                                        We collect several different types of information for various purposes to provide and improve our Service to you.
                                    </p>
                                </div>
                            </section>

                            {/* 4. Types of Data Collected */}
                            <section id="types" className="space-y-12 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Smartphone className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">4. Types of Data Collected</h2>
                                </div>

                                <div className="space-y-10">
                                    {/* Personal Data Subsection */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-black font-heading text-slate-900 flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                            Personal Data
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4 text-slate-600">
                                                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").</p>
                                                <div className="space-y-3">
                                                    {[
                                                        "Email address", "First and Last name",
                                                        "Phone number", "Address (State, ZIP, City)",
                                                        "Cookies and Usage Data"
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3 font-semibold text-slate-800 text-sm">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                                                <p className="text-sm font-bold text-slate-700 leading-relaxed mb-4">
                                                    We may use your data to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you.
                                                </p>
                                                <p className="text-xs text-slate-500 font-medium">
                                                    You may opt-out of receiving any, or all, of these communications by following the unsubscribe link.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Usage Data Subsection */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-black font-heading text-slate-900 flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                            Usage Data
                                        </h3>
                                        <Card className="border-none shadow-xl shadow-slate-200/50 bg-slate-50/50 rounded-3xl overflow-hidden">
                                            <CardContent className="p-8 space-y-6">
                                                <p className="text-slate-600 leading-relaxed">
                                                    This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and other diagnostic data.
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {["IP Address", "Browser Type", "Device ID", "OS", "Diagnostic Data"].map((tag) => (
                                                        <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-black text-slate-500 uppercase tracking-widest">{tag}</span>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Cookies Subsection */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-black font-heading text-slate-900 flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                            Tracking & Cookies Data
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {[
                                                { t: "Session Cookies", d: "To operate our service." },
                                                { t: "Preference Cookies", d: "To remember settings." },
                                                { t: "Security Cookies", d: "For security purposes." },
                                                { t: "Advertising Cookies", d: "For relevant ads." }
                                            ].map((cookie, i) => (
                                                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                                    <h4 className="text-xs font-black uppercase text-primary mb-2 tracking-tighter">{cookie.t}</h4>
                                                    <p className="text-xs text-slate-500 font-bold">{cookie.d}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Other Data Subsection */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-black font-heading text-slate-900 flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                            Other Collected Data
                                        </h3>
                                        <div className="p-8 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200">
                                            <p className="text-sm text-slate-500 font-medium leading-[2]">
                                                While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at the place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, NDA agreements, information on bonuses and compensation, marital status, family members, social security number, office location, and other data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. Use of Data */}
                            <section id="use" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Eye className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">5. Use of Data</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold text-slate-700">
                                    {[
                                        "Service Maintenance", "Change Notifications", "Interactive Features",
                                        "Customer Support", "Service Analysis", "Usage Monitoring",
                                        "Technical Diagnostics", "Purpose-specific fulfillment", "Contract Obligations",
                                        "Account Notifications", "Marketing & Offers", "Legal Consent"
                                    ].map((use, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
                                            <div className="h-2 w-2 rounded-full bg-primary/40 shrink-0" />
                                            <span className="text-sm leading-none">{use}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 6. Retention of Data */}
                            <section id="retention" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Shield className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">6. Retention of Data</h2>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                                    <p>We will retain your Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                                    <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>
                                </div>
                            </section>

                            {/* 7. Transfer of Data */}
                            <section id="transfer" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">7. Transfer of Data</h2>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-lg text-primary shrink-0 animate-pulse">
                                            <MapPin className="h-10 w-10" />
                                        </div>
                                        <div className="space-y-4 text-slate-600 leading-relaxed font-semibold">
                                            <p>Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country, or other governmental jurisdiction where the laws may differ.</p>
                                            <p className="text-slate-900 font-black">If you are located outside India, please note that we transfer and process the data in India.</p>
                                            <p>Your consent to this Privacy Policy represents your agreement to that transfer.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 8. Disclosure of Data */}
                            <section id="disclosure" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <LinkIcon className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">8. Disclosure of Data</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { t: "Law Enforcement", d: "If required by law or valid requests from public authorities." },
                                        { t: "Business Transactions", d: "In case of merger, acquisition, or asset sale." },
                                        { t: "Support Partners", d: "To subsidiaries, contractors, and third-party service providers." },
                                        { t: "Operational Necessity", d: "To fulfill your provided purpose or include company logos on site." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-md">
                                            <h4 className="font-black text-slate-900 mb-2">{item.t}</h4>
                                            <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 9. Security of Data */}
                            <section id="security" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Lock className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">9. Security of Data</h2>
                                </div>
                                <div className="p-8 rounded-[40px] bg-primary text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-10 opacity-10">
                                        <Shield className="h-32 w-32" />
                                    </div>
                                    <p className="text-lg font-bold leading-loose relative z-10">
                                        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                                    </p>
                                </div>
                            </section>

                            {/* 10. GDPR Rights */}
                            <section id="gdpr" className="space-y-10 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <Scale className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">10. GDPR Rights</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-6 rounded-3xl bg-slate-50 border-l-4 border-primary">
                                        <p className="text-slate-700 font-bold leading-relaxed">
                                            If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights covered by GDPR.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {["Right to Access", "Right to Rectification", "Right to Object", "Right to Restriction", "Data Portability", "Withdraw Consent"].map((right) => (
                                            <div key={right} className="px-6 py-4 rounded-2xl border border-slate-100 text-sm font-black text-slate-800 flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary" />
                                                {right}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-500 font-bold text-center">
                                        Contact us at cle@celnet.in to exercise any of these rights.
                                    </p>
                                </div>
                            </section>

                            {/* 11 & 12. California Rights (combined visual) */}
                            <section id="caloppa" className="space-y-12 scroll-mt-32">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div id="caloppa" className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                                <Shield className="h-5 w-5" />
                                            </div>
                                            <h2 className="text-2xl font-black font-heading text-slate-900">11. CalOPPA</h2>
                                        </div>
                                        <div className="space-y-5 text-slate-600 text-sm font-bold leading-loose">
                                            <p>According to CalOPPA, we agree to provide anonymous visits, conspicuous policy links, and change notifications on this page.</p>
                                            <div className="p-6 rounded-3xl bg-slate-900 text-white font-black text-center space-y-2">
                                                <p className="text-primary uppercase tracking-[0.2em] text-[10px]">Do Not Track</p>
                                                <p>We honor "Do Not Track" signals and do not track or use advertising when in place.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="ccpa" className="space-y-8 scroll-mt-32">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <h2 className="text-2xl font-black font-heading text-slate-900">12. CCPA Rights</h2>
                                        </div>
                                        <div className="space-y-5 text-slate-600 text-sm font-bold leading-loose">
                                            <p>California residents are entitled to learn what data we collect, ask to delete it, and opt-out of "sales" of data.</p>
                                            <p className="p-6 rounded-3xl border-2 border-slate-100 bg-white italic text-center text-slate-400">
                                                "We don’t sell or rent your personal information to any third parties for any purpose."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 13-16. Technical Operations */}
                            <section className="space-y-12 scroll-mt-32">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div id="providers" className="space-y-6 scroll-mt-32 p-8 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <h3 className="text-xl font-black font-heading text-slate-900">13. Service Providers</h3>
                                        <p className="text-sm text-slate-500 font-bold leading-relaxed">We employ third-parties to facilitate our Service. They only have access to perform tasks on our behalf and are obligated to security.</p>
                                    </div>
                                    <div id="analytics" className="space-y-6 scroll-mt-32 p-8 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <h3 className="text-xl font-black font-heading text-slate-900">14. Analytics</h3>
                                        <p className="text-sm text-slate-500 font-bold leading-relaxed">We may use third-party providers (like Google Analytics) to monitor and analyze the use of our Service.</p>
                                    </div>
                                    <div id="cicd" className="space-y-6 scroll-mt-32 p-8 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <h3 className="text-xl font-black font-heading text-slate-900">15. CI/CD Tools</h3>
                                        <p className="text-sm text-slate-500 font-bold leading-relaxed">We may use automated development tools to streamline our Service's deployment and maintenance.</p>
                                    </div>
                                    <div id="remarketing" className="space-y-6 scroll-mt-32 p-8 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <h3 className="text-xl font-black font-heading text-slate-900">16. Behavioral Remarketing</h3>
                                        <p className="text-sm text-slate-500 font-bold leading-relaxed">We use remarketing to advertise on third-party websites to you based on your past visits to our Service.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 17. Payments */}
                            <section id="payments" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary shadow-inner">
                                        <CreditCard className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-3xl font-black font-heading text-slate-900">17. Payments</h2>
                                </div>
                                <div className="p-8 rounded-[40px] border border-slate-200 bg-white shadow-xl">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="h-10 w-16 bg-slate-100 rounded-lg border-2 border-white" />)}
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">PCI-DSS Compliant Processing</p>
                                    </div>
                                    <div className="prose prose-slate max-w-none text-slate-600 font-bold leading-loose">
                                        <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 18-20. Links, Children, Changes */}
                            <section className="space-y-24 scroll-mt-32">
                                <div id="links" className="space-y-6 scroll-mt-32">
                                    <h3 className="text-2xl font-black font-heading text-slate-900">18. Links to Other Sites</h3>
                                    <p className="text-slate-500 font-bold leading-loose max-w-3xl">Our Service may contain links to other sites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over their content or practices.</p>
                                </div>

                                <div id="children" className="space-y-6 scroll-mt-32 border-l-8 border-red-500/20 pl-8">
                                    <h3 className="text-2xl font-black font-heading text-slate-900 flex items-center gap-4">
                                        <AlertCircle className="h-8 w-8 text-red-500" />
                                        19. Children’s Privacy
                                    </h3>
                                    <p className="text-slate-500 font-bold leading-loose max-w-3xl">Our Services are not intended for use by children under the age of 18 ("Child" or "Children"). We do not knowingly collect personally identifiable information from children under 18.</p>
                                </div>

                                <div id="changes" className="space-y-6 scroll-mt-32">
                                    <h3 className="text-2xl font-black font-heading text-slate-900">20. Changes to This Privacy Policy</h3>
                                    <p className="text-slate-500 font-bold leading-loose max-w-3xl">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “effective date” at the top.</p>
                                </div>
                            </section>

                            {/* 21. Contact Us */}
                            <section id="contact" className="space-y-12 scroll-mt-32 pt-20">
                                <div className="text-center space-y-8">
                                    <div className="h-20 w-20 bg-primary/10 rounded-[30px] flex items-center justify-center text-primary mx-auto shadow-2xl shadow-primary/20 rotate-12 transition-transform hover:rotate-0 duration-500">
                                        <Mail className="h-10 w-10" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-black font-heading text-slate-900">21. Contact Us</h2>
                                        <p className="text-slate-500 font-bold text-lg max-w-md mx-auto">
                                            If you have any questions about this Privacy Policy, please contact our data protection team.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                                        <a href="mailto:cle@celnet.in" className="h-16 px-12 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-wider flex items-center shadow-2xl hover:bg-slate-800 transition-all">
                                            cle@celnet.in
                                        </a>
                                        <Link href="/contact" className="h-16 px-12 rounded-2xl border-2 border-slate-900 text-slate-900 font-black uppercase tracking-wider flex items-center hover:bg-slate-50 transition-all">
                                            Support Center
                                        </Link>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
