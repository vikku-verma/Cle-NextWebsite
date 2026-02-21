"use client";

import { motion } from "framer-motion";
import {
    Users,
    Target,
    Lightbulb,
    CheckCircle2,
    Shield,
    Award,
    Zap,
    Globe,
    BookOpen,
    MessageSquare,
    Network,
    Clock,
    DollarSign,
    GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const perks = [
    {
        icon: DollarSign,
        text: "Availing special and attractive discounts on Journal Subscription, books and other events"
    },
    {
        icon: GraduationCap,
        text: "Students can have access to the tools to upgrade their knowledge base and to the mentors who can maneuver their professional path"
    },
    {
        icon: MessageSquare,
        text: "Opportunity to interact with members/business leaders/entrepreneurs/Law practitioners and academicians"
    },
    {
        icon: Zap,
        text: "Access to the most recent and relevant developments and trends in the law domain"
    },
    {
        icon: Shield,
        text: "Zero charges for publishing content with CLE"
    },
    {
        icon: Award,
        text: "Internship opportunities for the Law trainees at CLE"
    }
];

const whyCleFeatures = [
    {
        title: "High quality Peer Review",
        description: "All the benefits of traditional peer review - detailed, thoughtful, constructive improvement of your work."
    },
    {
        title: "Expert Editorial Board",
        description: "300+ dedicated editors handle your article, and two or more reviewers provide in-depth reviews."
    },
    {
        title: "Rapid Review Process",
        description: "18 days rapid review process ensuring timely publication."
    },
    {
        title: "Global Sharing",
        description: "Social Networking for better sharing and visibility of your research."
    },
    {
        title: "Immediate Publication",
        description: "Publication immediately after acceptance for faster dissemination."
    },
    {
        title: "Global Indexing",
        description: "Indexing in major indexing services with SJIF impact factor."
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-[#F8FAFC]">
            {/* 1. About CLE Section (Hero) */}
            <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        variants={fadeIn}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl mb-8">
                            About <span className="text-[#8A5A2B] italic">CLE</span>
                        </h1>
                        <p className="text-xl text-[#64748B] leading-relaxed mb-6">
                            Centre of Legal Excellence (CLE) is a unit of Consortium of E-Learning network, a legal domain focused on bringing all the major stakeholders of the legal fraternity to one platform to disseminate knowledge.
                        </p>
                        <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto italic">
                            The main objective of CLE is to impart essential and new legal insights by way of Journals, Books, Quick training Programs, Workshops, and Conferences.
                        </p>
                    </motion.div>
                </div>
                {/* Abstract Decorations */}
                <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#8A5A2B]/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#2E4C7D]/5 blur-3xl -translate-x-1/2" />
            </section>

            {/* 2. Vision & Mission Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group p-8 rounded-3xl border border-[#D6D0C6] bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute -top-6 left-8 h-12 w-12 bg-[#8A5A2B] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-[#1E293B] mt-4 mb-6">Our Vision</h2>
                            <p className="text-[#64748B] text-lg leading-relaxed">
                                The Centre for Legal Excellence (CLE) is a beacon of innovation and integrity in legal education and research. Committed to fostering critical thinking and diversity, CLE empowers legal professionals, academics, and students through dynamic training, cutting-edge resources, and impactful networking opportunities, equipping them to navigate and shape the ever-evolving legal landscape. Join us to transform your legal prowess and societal impact.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group p-8 rounded-3xl border border-[#D6D0C6] bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute -top-6 left-8 h-12 w-12 bg-[#2E4C7D] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Target className="h-6 w-6" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-[#1E293B] mt-4 mb-6">Our Mission</h2>
                            <p className="text-[#64748B] text-lg leading-relaxed">
                                The main mission is to disseminate knowledge and provide preventive solutions. CLE is aimed to provide the platform for research scholars, lawyers, undergraduates, postgraduates, academicians, professionals in the fields of law to conduct research for the benefit of legal fraternity and society at large. Another key objective is to assess the inferences of legal developments, which ensures that the readers are entirely informed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Know More About CLE Section */}
            <section className="py-24 bg-[#F1F5F9]">
                <div className="container px-4 md:px-6">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="whileInView"
                        className="mx-auto max-w-4xl"
                    >
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-4xl font-bold text-[#1E293B] mb-6">Know More About CLE</h2>
                            <div className="h-1.5 w-24 bg-[#8A5A2B] mx-auto rounded-full" />
                        </div>

                        <div className="grid gap-12 text-[#64748B] text-lg leading-relaxed">
                            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                                <p className="mb-6">
                                    The Centre for Legal Excellence (CLE) is a premier institution dedicated to advancing legal education, professional development, and interdisciplinary research. We develop and provide innovative legal solutions and tools, reaching audiences globally to enhance the capabilities of students, academicians, and legal professionals.
                                </p>
                                <p>
                                    CLE serves as a dynamic platform for academics, researchers, legal practitioners, policymakers, industry leaders, and organizations committed to fostering knowledge and innovation in the legal field. Our mission is to empower individuals and institutions to achieve their full professional and academic potential through comprehensive training and collaborative opportunities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Special Features Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-4xl font-bold text-[#1E293B] mb-8">Special Features</h2>
                            <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
                                <p>
                                    We at the Centre for legal Excellence believe in holistic development of every member associated with us. CLE provides opportunities to the members of the legal fraternity to express their views on various contemporary legal issues in the form of research paper, review article, book reviews and case analysis.
                                </p>
                                <p>
                                    Associating with us opens up networking opportunities with major international and national academicians and professionals through conferences, seminars, webinars, workshops, and training programs.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {perks.map((perk, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl border border-[#D6D0C6] bg-[#FDFCFB] hover:border-[#8A5A2B]/30 hover:shadow-md transition-all group"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#8A5A2B]/10 text-[#8A5A2B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <perk.icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-medium text-[#1E293B] leading-snug">
                                        {perk.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Why CLE? Section */}
            <section className="py-24 bg-[#1E2A38] text-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl font-bold mb-6">Why CLE?</h2>
                        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                            Setting a global benchmark in legal publishing and operational excellence.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {whyCleFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-[#2D3A4B]/50 border border-white/5 hover:border-[#8A5A2B]/40 transition-colors"
                            >
                                <div className="h-2 w-12 bg-[#8A5A2B] rounded-full mb-6" />
                                <h3 className="font-heading text-xl font-bold mb-4 text-[#F4F2EE]">{feature.title}</h3>
                                <p className="text-[#94A3B8] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 p-10 rounded-3xl bg-[#8A5A2B]/10 border border-[#8A5A2B]/20 text-center"
                    >
                        <div className="flex flex-col items-center">
                            <Network className="h-12 w-12 text-[#8A5A2B] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Internal Management System (IMS)</h3>
                            <p className="text-[#94A3B8] max-w-2xl text-lg mb-8">
                                Our in-house software ensures seamless data records of articles and editorial boards, facilitating an efficient and transparent publication workflow.
                            </p>
                            <Button className="bg-[#8A5A2B] hover:bg-[#6F4823] h-12 px-8 text-lg" asChild>
                                <Link href="/contact">Learn About Joining Our Board</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="relative overflow-hidden rounded-3xl bg-[#8A5A2B] p-12 text-center text-white shadow-2xl">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="font-heading text-4xl font-bold mb-8">Ready to Transform Your Legal Career?</h2>
                            <p className="text-lg text-white/80 mb-10 leading-relaxed">
                                Join the Centre of Legal Excellence today and gain access to a world-class network, premium journals, and career-shaping mentorship opportunities.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-white text-[#8A5A2B] hover:bg-[#F4F2EE] font-bold" asChild>
                                    <Link href="/join">Explore Membership Categories</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold" asChild>
                                    <Link href="/contact">Contact Our Team</Link>
                                </Button>
                            </div>
                        </div>
                        {/* Decorative Background Circles */}
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-black/10 blur-2xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
