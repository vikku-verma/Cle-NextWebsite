"use client";

import { Check, Star, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/shared/PriceDisplay";

const plans = [
    {
        name: "Student",
        price: 12, // Approx 999 INR
        period: "/year",
        description: "Perfect for law students starting their journey.",
        features: [
            "Access to Basic Journals",
            "Student Workshop Discounts",
            "Mentorship Opportunities",
            "Monthly Newsletter"
        ],
        cta: "Join as Student",
        variant: "outline",
        popular: false
    },
    {
        name: "Professional",
        price: 60, // Approx 4999 INR
        period: "/year",
        description: "For advocates and legal practitioners.",
        features: [
            "Unlimited Journal Access",
            "Priority Workshop Registration",
            "Publishing Privileges",
            "CLE Certification Credits",
            "Networking Events"
        ],
        cta: "Join as Professional",
        variant: "default",
        popular: true
    },
    {
        name: "Institution",
        price: "Custom",
        period: "",
        description: "For law colleges and corporate firms.",
        features: [
            "Multi-user Access",
            "Curriculum Integration",
            "Sponsored Events",
            "Dedicated Support Manager"
        ],
        cta: "Contact Sales",
        variant: "outline",
        popular: false
    }
];

export default function MembershipPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 text-center">
                <div className="container px-4">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Unlock Your Legal Potential
                    </h1>
                    <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Become a member of the Centre of Legal Excellence and gain access to world-class resources, networking, and growth opportunities.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="container py-16 px-4 md:px-6 -mt-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl bg-card p-8 shadow-lg flex flex-col border ${plan.popular ? 'border-accent shadow-accent/10 scale-105' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold tracking-tight text-foreground">
                                    <PriceDisplay amount={plan.price as number | "Custom"} />
                                </span>
                                <span className="text-muted-foreground ml-1">{plan.period}</span>
                            </div>
                            <p className="mt-2 text-muted-foreground text-sm">{plan.description}</p>

                            <ul className="mt-8 space-y-4 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm">
                                        <Check className="mr-3 h-4 w-4 text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Button
                                    className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                                    variant={plan.variant as "default" | "outline"}
                                    asChild
                                >
                                    <Link href="/join">{plan.cta}</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits / Why Join */}
            <section className="bg-muted/30 py-16 sm:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold">Why Join CLE?</h2>
                        <p className="text-muted-foreground mt-2">More than just a membership, it's a partnership for your career.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <Star className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Exclusive Content</h3>
                            <p className="text-sm text-muted-foreground mt-2">Unlimited access to our archived journals, research papers, and case studies.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Career Growth</h3>
                            <p className="text-sm text-muted-foreground mt-2">Priority access to workshops, training programs, and certification courses.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Global Credibility</h3>
                            <p className="text-sm text-muted-foreground mt-2">Enhance your professional standing with a membership to a premier legal consortium.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
