"use client";

import { Check, Star, Shield, Zap, BookOpen, Briefcase, Building2 } from "lucide-react";
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
                            className={`relative rounded-2xl bg-card p-8 shadow-lg flex flex-col border transition-all duration-500 hover:shadow-2xl h-full ${plan.popular ? 'border-primary shadow-primary/20 scale-[1.02] z-10 ring-1 ring-primary/30' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl border-2 border-white/20 whitespace-nowrap">
                                    Most Popular Tier
                                </div>
                            )}

                            <div className="flex items-center gap-5 mb-8">
                                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-6 ${plan.popular ? 'bg-primary text-white shadow-primary/30' : 'bg-slate-100 text-primary shadow-slate-200'}`}>
                                    {plan.name === "Student" && <BookOpen className="h-8 w-8" />}
                                    {plan.name === "Professional" && <Briefcase className="h-8 w-8" />}
                                    {plan.name === "Institution" && <Building2 className="h-8 w-8" />}
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-slate-900 leading-none mb-1">{plan.name}</h3>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60">Membership Plan</p>
                                </div>
                            </div>

                            <div className="flex items-baseline mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200/50 shadow-inner">
                                <span className="text-4xl font-black tracking-tight text-slate-900">
                                    <PriceDisplay amount={plan.price as number | "Custom"} />
                                </span>
                                <span className="text-slate-500 ml-2 font-bold text-sm uppercase tracking-wider">{plan.period}</span>
                            </div>

                            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium min-h-[48px] border-l-2 border-primary/20 pl-4">{plan.description}</p>

                            <div className="space-y-4 flex-1 flex flex-col mb-10">
                                <p className="text-[11px] uppercase tracking-[0.15em] font-black text-slate-400 mb-2">Exclusive Benefits:</p>
                                <ul className="space-y-4 min-h-[160px]">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm group">
                                            <div className="mr-3 mt-1 h-5 w-5 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-green-500/20">
                                                <Check className="h-3 w-3 text-green-600" />
                                            </div>
                                            <span className="text-slate-700 font-semibold leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-8 border-t-2 border-dashed border-slate-100">
                                <Button
                                    className={`w-full h-14 text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 rounded-xl ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 hover:-translate-y-1' : 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-primary shadow-xl shadow-slate-100'}`}
                                    variant={plan.popular ? "default" : "ghost"}
                                    asChild
                                >
                                    <Link href="/join">{plan.cta}</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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
                            <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
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
