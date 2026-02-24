"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const categories = ["All Tracks", "Public Law", "Private Law", "Technology Law", "Commercial Law", "Environmental Law"];

const tracks = [
    {
        id: "1",
        title: "Environmental Law",
        journal: "National Journal of Environmental Law (NJEL)",
        category: "Environmental Law",
        topics: [
            "Strengthening Environmental Law for Sustainable Development",
            "Environmental Regulatory Frameworks & Compliance Reform",
            "Climate Change Law: Mitigation, Adaptation & Disaster Resilience",
            "Environmental Justice, Rights & Remedies",
            "Conservation & Natural Resource Governance",
            "Pollution, Waste & Environmental Liability for Sustainable Industry"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jel",
    },
    {
        id: "2",
        title: "Human Rights",
        journal: "Journal of Human Rights Law and Practice (JHRLP)",
        category: "Public Law",
        topics: [
            "Human Rights Protection and Evolving Legal Mechanisms",
            "Civil & Political Rights in Contemporary Democracies",
            "Protection of Vulnerable Groups & Anti-Discrimination Frameworks",
            "Human Rights in Conflict, Security & International Humanitarian Law",
            "Institutions, Oversight & Enforcement Mechanisms in India",
            "Mobility, Expression & Socio-Economic Rights Implementation"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jhrlp",
    },
    {
        id: "3",
        title: "Criminal Law",
        journal: "National Journal of Criminal Law (NJCL)",
        category: "Public Law",
        topics: [
            "Modern Perspectives on Crime, Justice, and Legal Reforms",
            "Substantive & Procedural Criminal Law Reforms",
            "Investigation, Forensics & Technology in Criminal Justice",
            "Bail, Sentencing & Trial Modernisation",
            "Economic & White-Collar Crime Regulation",
            "Victim-Centred & Juvenile Justice Approaches"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/njcl",
    },
    {
        id: "4",
        title: "Real Estate Law",
        journal: "National Journal of Real Estate Law (NJREL)",
        category: "Commercial Law",
        topics: [
            "Legal Dimensions of Property, Housing, and Urban Development",
            "RERA Compliance, Project Governance & Consumer Protection",
            "Land Acquisition, Compensation & Rehabilitation",
            "Property Title, Ownership & Registration Systems",
            "Housing, Tenancy & Cooperative/Society Law",
            "Real Estate Dispute Resolution & Fiscal Laws"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/njrel",
    },
    {
        id: "5",
        title: "Cyber Security Law",
        journal: "National Journal of Cyber Security Law (NJCSL)",
        category: "Technology Law",
        topics: [
            "Legal Responses to Cyber Threats and Data Protection",
            "Cyber Law Frameworks & Evolving Cybercrime Jurisprudence",
            "Cybersecurity Governance for Critical Sectors",
            "Data Privacy, Consent & Digital Identity Regulation",
            "Online Safety, Harassment & Content Regulation",
            "AI/IoT Regulation & Digital Evidence"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/njcsl",
    },
    {
        id: "6",
        title: "Family Law",
        journal: "Journal of Family and Adoption Law (JFAL)",
        category: "Private Law",
        topics: [
            "Legal Dimensions of Family Relations, Guardianship, and Adoption",
            "Personal Laws, Marriage Regulation & Reform Debates",
            "Divorce, Maintenance, Custody & Matrimonial Property Rights",
            "Protection from Domestic Violence & Gender Justice Mechanisms",
            "Adoption, Guardianship & Child Welfare Frameworks",
            "Inclusive Family Law & Dispute Resolution Systems"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jfal",
    },
    {
        id: "7",
        title: "Health & Medical Law",
        journal: "Indian Journal of Health & Medical Law",
        category: "Public Law",
        topics: [
            "Legal Frameworks in Health, Medical Ethics, and Public Health Policy",
            "Health System Regulation: Medical Practice, Hospitals & Standards",
            "Public Health Law: Emergencies, Pandemics & State Powers",
            "Patient Rights, Consent & Confidentiality",
            "Bioethics & Regulated Medical Technologies",
            "Pharma, Clinical Trials & Medical Liability"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/ijhml",
    },
    {
        id: "8",
        title: "Banking & Insurance Law",
        journal: "Journal of Banking & Insurance Law",
        category: "Commercial Law",
        topics: [
            "Legal Innovations in Banking, Insurance, and Financial Consumer Protection",
            "Banking & Insurance Regulation: RBI/IRDAI Oversight and Governance",
            "Contracts, Consumer Rights & Claims Governance",
            "Digital Banking Risks: Cyber Fraud, Liability & Remedies",
            "Fintech/Insurtech Law: Innovation, Payments & Data Use",
            "Financial Integrity & Redressal Mechanisms"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jbil",
    },
    {
        id: "9",
        title: "Capital Market Law",
        journal: "Journal of Capital Market and Securities Law",
        category: "Commercial Law",
        topics: [
            "Securities Regulation, Capital Market Reforms, and Investor Protection",
            "SEBI Enforcement, Market Abuse & Insider Trading Control",
            "Capital Raising & Disclosure Regulation",
            "Market Products & Regulatory Challenges",
            "Market Infrastructure & Intermediary Governance",
            "Investor Protection, Collective Redressal & ESG Securities Law"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jcmsl",
    },
    {
        id: "10",
        title: "Constitutional Law",
        journal: "Journal of Constitutional Law and Jurisprudence",
        category: "Public Law",
        topics: [
            "Foundations of Democracy, Liberty, and the Rule of Law",
            "Constitutionalism & Modern Constitutional Interpretation",
            "Rights, DPSPs & Transformative Social Justice",
            "PIL, Accountability Litigation & Access to Justice",
            "Federalism, Emergency Powers & Checks and Balances",
            "Equality, Secularism & Review of Contemporary Laws"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/Jolj",
    },
    {
        id: "11",
        title: "Corporate Governance",
        journal: "Journal of Corporate Governance & International Business Law",
        category: "Commercial Law",
        topics: [
            "Corporate Governance Standards and Cross-Border Legal Compliance",
            "CSR, ESG Duties & Sustainable Corporate Conduct",
            "Board Governance, Independent Directors & Fiduciary Accountability",
            "Cross-Border Transactions, Treaties & Corporate Structuring",
            "Corporate Misconduct, Scandals & White-Collar Enforcement",
            "Enterprise Risk, Regulatory Compliance & Multi-Jurisdictional Controls"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jcgibl",
    },
    {
        id: "12",
        title: "Intellectual Property",
        journal: "Journal of Intellectual Property Rights Law",
        category: "Commercial Law",
        topics: [
            "Strengthening IP Regimes for Innovation, Creativity, and Knowledge Economy",
            "Patent Frontiers: AI, Biotech & Emerging Technologies",
            "Brands in the Digital Economy: Trademarks, Domains & Online Enforcement",
            "Copyright in the Platform Era",
            "IP Commercialisation: Valuation, Licensing & Technology Transfer",
            "Global & Community IP: TRIPS, Enforcement & Traditional Knowledge Protection"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jiprl",
    },
    {
        id: "13",
        title: "Torts & Consumer Protection",
        journal: "Journal of Law of Torts and Consumer Protection Law",
        category: "Private Law",
        topics: [
            "Accountability, Redress, and Justice in Torts and Consumer Relations",
            "Foundations of Tort Law in India: Principles, Categories & Emerging Wrongs",
            "Industrial & Environmental Torts: Strict/Absolute Liability and Mass Harm",
            "Product Liability & Consumer Safety Regulation",
            "Consumer Justice System: Forums, Procedures & Remedies",
            "Unfair Trade Practices in the Digital Marketplace"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jltcpl",
    },
    {
        id: "14",
        title: "Taxation",
        journal: "Journal of Taxation and Regulatory Framework",
        category: "Commercial Law",
        topics: [
            "Tax Policy, Compliance, and the Legal Ecosystem of Regulation",
            "Direct & Indirect Tax Frameworks: GST and Income-tax Developments",
            "Tax Compliance, Anti-Abuse and Enforcement",
            "Digital Economy Taxation & Jurisdiction",
            "International Tax: Cross-Border Transactions & Transfer Pricing",
            "Tax Dispute Resolution and Business Structuring"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jtrf",
    },
    {
        id: "15",
        title: "Labour Law",
        journal: "National Journal of Labour and Industrial Law",
        category: "Public Law",
        topics: [
            "Labour Rights, Industrial Relations, and Employment Law Reforms",
            "India’s Labour Codes: Consolidation, Compliance & Reform Challenges",
            "Gig, Platform & Informal Work: Rights, Social Security & Classification",
            "Workplace Safety, Health & Dignity at Work",
            "Wages, Contract Labour & Collective Bargaining",
            "Workforce Restructuring, Industrial Disputes & Global Labour Standards"
        ],
        learnMoreLink: "https://lawjournals.celnet.in/index.php/jlil",
    }
];

export function DetailedTracks() {
    const [activeCategory, setActiveCategory] = useState("All Tracks");

    const filteredTracks = activeCategory === "All Tracks"
        ? tracks
        : tracks.filter(t => t.category === activeCategory);

    return (
        <section className="py-24 bg-[#FDFDFB]">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Conference <span className="text-secondary italic font-normal">Themes & Tracks</span>
                    </motion.h2>
                    <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                        These tracks provide a platform for in-depth exploration of legal challenges and innovations across diverse domains.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold font-sans transition-all duration-300 ${activeCategory === category
                                ? "bg-secondary text-white shadow-md shadow-secondary/20 scale-105"
                                : "bg-white text-muted-foreground border border-border/60 hover:border-secondary/30 hover:text-secondary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Tracks Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredTracks.map((track) => (
                            <motion.div
                                key={track.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 overflow-hidden group flex flex-col"
                            >
                                <div className="p-8 border-b border-border/40 bg-gradient-to-br from-secondary/5 to-transparent">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary font-heading text-2xl font-bold">
                                            {track.id}
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border/50 text-[10px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
                                            <BookOpen className="h-3 w-3 text-primary" />
                                            {track.category}
                                        </div>
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                                        {track.title}
                                    </h3>
                                    <p className="text-primary font-sans text-sm font-semibold flex items-center gap-2">
                                        {track.journal}
                                        <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                                    </p>
                                </div>

                                <div className="p-8 flex-1">
                                    <ul className="space-y-4">
                                        {track.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                <span className="text-muted-foreground text-sm font-sans leading-relaxed">
                                                    {topic}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-slate-50 border-t border-border/40 flex items-center gap-4 mt-auto">
                                    <Link
                                        href="/conference/international-legal-conference-2026/registration"
                                        className="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-xl font-bold font-sans text-sm transition-colors shadow-md shadow-primary/10"
                                    >
                                        Submit Paper
                                    </Link>
                                    <Link
                                        href={track.learnMoreLink}
                                        target="_blank"
                                        className="flex-1 bg-white hover:bg-gray-50 text-secondary border border-border text-center py-3 rounded-xl font-bold font-sans text-sm transition-colors flex items-center justify-center gap-2"
                                    >
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredTracks.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground font-sans text-lg">More tracks for this category will be announced soon.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
