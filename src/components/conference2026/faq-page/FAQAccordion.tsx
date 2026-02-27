"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    id: string;
    title: string;
    description?: string;
    items: FAQItem[];
}

function FAQSection({ id, title, description, items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id={id} className="py-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">{title}</h2>
                <a href="#" className="flex items-center gap-2 text-primary font-sans text-sm font-bold hover:underline">
                    Back to top <ArrowUp className="h-4 w-4" />
                </a>
            </div>
            {description && <p className="text-muted-foreground font-sans mb-8">{description}</p>}

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 shadow-sm"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FBFAF8] transition-colors group"
                        >
                            <span className="font-sans font-bold text-lg pr-8">{item.question}</span>
                            <div className="shrink-0 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                            </div>
                        </button>
                        {openIndex === index && (
                            <div className="p-6 pt-0 font-sans text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export function FAQAccordion() {
    const generalItems = [
        {
            question: "Q1: How do I register for a conference?",
            answer: "You can register by visiting the registration page on our website. Select the conference you’re interested in, fill out the registration form with your details, and complete the payment process. Early registration is recommended to secure your spot and take advantage of early bird discounts."
        },
        {
            question: "Q2: What technology do I need to attend an online conference?",
            answer: "You will need a stable internet connection, a compatible browser (we recommend Google Chrome or Mozilla Firefox), and a computer or mobile device with audio capabilities. Before the event, we will provide detailed instructions to ensure you can connect successfully."
        },
        {
            question: "Q3: Are the conferences accessible to individuals with disabilities?",
            answer: "Yes, accessibility is a priority for us. Our platforms are designed to be accessible, and we offer additional accommodations upon request. Please contact our support team with specific accessibility requirements, and we will make every effort to accommodate your needs."
        },
        {
            question: "Q4: How many days is the conference scheduled for?",
            answer: "The conference is scheduled for three days. In addition, one extra day is reserved as a contingency in case the discussions or sessions are not fully concluded within the initial three days."
        }
    ];

    const duringItems = [
        {
            question: "Q5: Can I interact with speakers during the sessions?",
            answer: "Yes, there are Q&A sessions and interactive segments scheduled during the conference. Participants can submit questions digitally, and speakers will address them as time allows. Use the designated Q&A features in the conference platform to submit your questions."
        },
        {
            question: "Q6: What if I miss a live session?",
            answer: "All live sessions are recorded and will be available for viewing shortly after the conference concludes. Registered participants will have access to these recordings for a specified period. Check the conference details for the exact duration of access."
        },
        {
            question: "Q7: How can I network with other attendees?",
            answer: "Our platform includes features for networking, such as chat rooms, video calls, and community boards. We encourage you to engage with other attendees, speakers, and exhibitors through these tools. Make sure to complete your profile information to facilitate meaningful connections."
        }
    ];

    const technicalItems = [
        {
            question: "Q8: What should I do if I have trouble accessing the conference?",
            answer: "If you experience any technical difficulties, please email cle@celnet.in or call +91 92180 93700. Our technical support team is available to assist you throughout the event."
        },
        {
            question: "Q9: How secure is the online conference platform?",
            answer: "Our platform uses modern encryption and security measures to help protect participant data. Additionally, sessions are monitored to maintain a secure and respectful environment. Your privacy and data security are important to us."
        }
    ];

    const postItems = [
        {
            question: "Q10: Will I receive a certificate for attending the conference?",
            answer: "Yes, participants who require a certificate of attendance must request one during registration or contact our support team post-event. Certificates are issued based on participation records."
        },
        {
            question: "Q11: How can I provide feedback about the conference?",
            answer: "After the conference, we will send a feedback survey via email. We highly value your feedback and encourage you to share your experience and suggestions for future events."
        }
    ];

    return (
        <div className="bg-[#FBFAF8] py-12">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <FAQSection id="general" title="General Questions" items={generalItems} />
                <FAQSection id="during" title="During the Conference" items={duringItems} />
                <FAQSection id="technical" title="Technical Support" items={technicalItems} />
                <FAQSection id="post" title="Post-Conference" items={postItems} />
            </div>
        </div>
    );
}
