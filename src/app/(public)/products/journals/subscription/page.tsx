"use client";

import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Individual",
        price: 25, // Approx 2000 INR
        period: "/year",
        description: "Perfect for students and independent researchers.",
        features: [
            "Access to all archived journals",
            "PDF Downloads",
            "Monthly Newsletter",
            "Citation Tools"
        ]
    },
    {
        name: "Professional",
        price: 60, // Approx 5000 INR
        period: "/year",
        popular: true,
        description: "For practicing lawyers and academics.",
        features: [
            "Everything in Individual",
            "Early Access to New Issues",
            "Print Copy Delivered",
            "Conference Discounts",
            "Continuing Legal Education Credits"
        ]
    },
    {
        name: "Institution",
        price: "Custom",
        period: "",
        description: "For law firms, libraries, and universities.",
        features: [
            "Campus-wide Access (IP based)",
            "API Access",
            "Usage Analytics",
            "Dedicated Account Manager",
            "Bulk Print Copies"
        ]
    }
];

export default function SubscriptionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted py-20 text-center">
                <div className="container px-4 md:px-6">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Journal Subscriptions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get unlimited access to world-class legal scholarship and stay ahead in your practice.
                    </p>
                </div>
            </section>

            <section className="container py-16 px-4 md:px-6 -mt-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-lg border ${plan.popular ? 'border-primary shadow-primary/10 scale-105 z-10' : 'border-border'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
                            <div className="mt-4 mb-2 flex items-baseline">
                                {plan.price === "Custom" ? (
                                    <span className="text-4xl font-bold">Custom</span>
                                ) : (
                                    <>
                                        <span className="text-4xl font-bold">
                                            ${plan.price}
                                        </span>
                                        <span className="text-muted-foreground">{plan.period}</span>
                                    </>
                                )}
                            </div>
                            <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                            <ul className="mb-8 space-y-3 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm">
                                        <Check className="h-4 w-4 text-primary" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className={plan.popular ? "bg-primary" : "bg-secondary text-secondary-foreground"} asChild>
                                <Link href="/contact">
                                    {plan.price === "Custom" ? "Contact Sales" : "Subscribe Now"}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container py-16 px-4 md:px-6 text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-muted mb-6">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium">30-Day Money Back Guarantee on Individual Plans</span>
                </div>
            </section>
        </div>
    );
}
