"use client";

import { motion } from "framer-motion";
import {
    Users,
    Globe,
    Scale,
    BookOpen,
    Award,
    ArrowRight,
    Target,
    Lightbulb
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const audiences = [
    {
        icon: Users,
        title: "Students",
        description: "Bridging the gap between academic theory and legal practice through internships and mentorship."
    },
    {
        icon: Scale,
        title: "Professionals",
        description: "Offering advanced training, workshops, and publishing opportunities to enhance legal careers."
    },
    {
        icon: BookOpen,
        title: "Researchers",
        description: "Providing a platform for high-impact legal research, journals, and comparative studies."
    },
    {
        icon: Globe,
        title: "Institutions",
        description: "Collaborating with law schools and courts to modernize legal education curricula."
    }
];

const values = [
    {
        title: "Excellence",
        description: "We uphold the highest standards in legal education and research."
    },
    {
        title: "Innovation",
        description: "We embrace technology and modern methodologies to transform law."
    },
    {
        title: "Integrity",
        description: "We foster an ethical and responsible legal community."
    },
    {
        title: "Inclusivity",
        description: "We connect legal minds across borders, cultures, and disciplines."
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Driving Excellence in <span className="text-primary italic">Law</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            The Centre of Legal Excellence (CLE) is a dedicated unit of the Consortium of e-Learning Network. We unite students, professionals, courts, and academicians to foster innovation in legal education and practice.
                        </p>
                    </motion.div>
                </div>

                {/* Abstract Background */}
                <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
            </section>

            {/* Vision & Mission */}
            <section className="py-16 sm:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border bg-card p-10 shadow-sm"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Target className="h-6 w-6" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-foreground">Our Mission</h2>
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                To bridge the gap between theoretical knowledge and practical application in the legal field. We strive to create practice-ready graduates and upskill professionals through rigorous training, research, and global collaboration.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border bg-card p-10 shadow-sm"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-foreground">Our Vision</h2>
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                To be a global leader in legal consultancy and education, setting new benchmarks for quality, innovation, and ethical practice. We envision a legal ecosystem where knowledge flows seamlessly between academia and industry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="bg-muted py-16 sm:py-24">
                <div className="container px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Who We Serve</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Empowering every stakeholder in the legal ecosystem.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {audiences.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values & Global Network */}
            <section className="container py-16 sm:py-24 px-4 md:px-6">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Values */}
                    <div>
                        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                        <div className="mt-8 grid gap-6">
                            {values.map((val) => (
                                <div key={val.title} className="flex gap-4">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading text-lg font-semibold">{val.title}</h3>
                                        <p className="text-muted-foreground">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button asChild>
                                <Link href="/join">Join Our Community</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Map / Global Context Placeholder */}
                    <div className="relative overflow-hidden rounded-3xl bg-secondary/5 p-8 lg:p-12">
                        <Globe className="absolute right-4 top-4 h-32 w-32 text-muted-foreground/10" />
                        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Global Network</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            CLE is not just a local initiative. We are building a worldwide network of legal excellence.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {["Partner Universities in 10+ Countries", "International Conference Series", "Cross-border Research Initiatives"].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Award className="h-5 w-5 text-accent" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <Button variant="outline" asChild>
                                <Link href="/contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
