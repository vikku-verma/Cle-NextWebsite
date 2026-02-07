"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, MapPin, Phone, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
    {
        question: "How do I become a member of CLE?",
        answer: "You can apply for membership through our Membership page. We offer distinct plans for Students, Professionals, and Institutions."
    },
    {
        question: "How can I submit a paper for the Journal?",
        answer: "Visit the 'Journals' section and click on 'Submit Paper'. You will be guided through our peer-review submission process."
    },
    {
        question: "Are the workshops available online?",
        answer: "Yes, CLE offers both in-person workshops and virtual seminars. Check the specific event details for modality."
    },
    {
        question: "Can institutions partner with CLE?",
        answer: "Absolutely. We collaborate with law schools and firms globally. Please use the contact form to select 'Partnership Proposal'."
    }
];

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-muted py-16 sm:py-24 text-center">
                <div className="container px-4">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions about our programs, membership, or partnerships? We are here to help.
                    </p>
                </div>
            </section>

            <section className="container py-16 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Headquarters</h3>
                                        <p className="text-muted-foreground mt-1">
                                            Consortium of e-Learning Network<br />
                                            A-118, 1st Floor, Sector-63,<br />
                                            Noida, Uttar Pradesh, India - 201301
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground mt-1">info@cle-platform.com</p>
                                        <p className="text-muted-foreground">support@cle-platform.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground mt-1 text-lg">+91-120-4781-200</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <HelpCircle className="h-6 w-6 text-accent" />
                                <h2 className="font-heading text-2xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="rounded-lg border bg-card p-4">
                                        <h3 className="font-semibold text-foreground">{faq.question}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <Button variant="link" className="px-0 text-accent decoration-accent" asChild>
                                    <Link href="/faq">View all FAQs <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border bg-card p-8 shadow-sm h-fit">
                        <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
