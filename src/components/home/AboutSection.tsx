"use client";

import { Scale, GraduationCap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
    {
        icon: Scale,
        title: "Legal Practice",
        description: "Enhancing practical skills for modern legal professionals through advanced training and simulations.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Bridging academic knowledge with industry requirements to create practice-ready graduates.",
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Connecting legal minds across the world to foster international collaboration and comparative research.",
    },
];

export function AboutSection() {
    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        About CLE
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Centre of Legal Excellence (CLE) is a dedicated unit of the Consortium of e-Learning Network. We bring together students, professionals, courts, and academicians to foster innovation and excellence in legal education and practice.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="relative rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <pillar.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-foreground">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" asChild>
                        <Link href="/about" className="inline-flex items-center">
                            Learn more about our mission
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
