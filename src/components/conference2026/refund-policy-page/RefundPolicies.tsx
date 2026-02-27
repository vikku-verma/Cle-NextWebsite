import { ShieldCheck, Clock, AlertTriangle, RefreshCw, Mail } from "lucide-react";

export function RefundPolicies() {
    const policies = [
        {
            number: "1",
            title: "Cancellation & Refund by Participant",
            icon: <Clock className="h-6 w-6 text-primary" />,
            content: "Once a participant has registered, they may request cancellation and a refund only within 7 days of the registration fee payment. In such cases, 100% of the fee will be refunded.",
            note: "This 7-day refund option will not apply if the conference dates are 15 days or less away at the time the refund request is made."
        },
        {
            number: "2",
            title: "Refund After 7 Days (Partial Refund)",
            icon: <RefreshCw className="h-6 w-6 text-primary" />,
            content: "If the cancellation request is made after 7 days of fee payment, the participant will be eligible for a 50% refund, provided the conference dates are more than 15 days away.",
            note: "This 50% refund option will not apply if the conference dates are 15 days or less away at the time the refund request is made."
        },
        {
            number: "3",
            title: "No Refund Window (Within 15 Days of Conference)",
            icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
            content: "No refunds will be issued if the conference dates are 15 days or less away, regardless of when the registration fee was paid."
        },
        {
            number: "4",
            title: "Conference Cancellation by CLE",
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            content: "If CLE cancels the conference, participants may choose either to transfer their registration to another CLE conference, or to request a full refund of the fee.",
            note: "In case of cancellation by CLE, 100% of the registration fee will be refunded."
        },
        {
            number: "5",
            title: "How to Request Cancellation / Refund",
            icon: <Mail className="h-6 w-6 text-primary" />,
            content: "To request a cancellation or refund, participants must email cle@celnet.in with:",
            list: ["Full name", "Registered email/phone number", "Payment date and transaction reference (if available)"],
            footer: "Refunds (if applicable) will be processed to the original payment method as per standard processing timelines."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Refund & Cancellation Policies</h2>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {policies.map((policy) => (
                        <div key={policy.number} className="flex flex-col md:flex-row gap-8 bg-[#FBFAF8] p-8 rounded-3xl border border-border/50 hover:shadow-lg transition-all group">
                            <div className="flex-shrink-0">
                                <div className="h-20 w-20 bg-white rounded-2xl flex flex-col items-center justify-center border border-border/30 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="text-2xl font-bold font-heading">{policy.number}</span>
                                    {policy.icon}
                                </div>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <h3 className="font-heading text-2xl font-bold">{policy.title}</h3>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    {policy.content}
                                </p>
                                {policy.list && (
                                    <ul className="grid sm:grid-cols-1 gap-2 text-foreground/80 font-sans text-sm list-disc list-inside">
                                        {policy.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {policy.note && (
                                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-sm italic text-foreground/80 font-sans">
                                        {policy.note}
                                    </div>
                                )}
                                {policy.footer && (
                                    <p className="text-sm font-sans font-semibold text-primary mt-4 italic">
                                        {policy.footer}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
