import { Mail, Phone, Calendar } from "lucide-react";

export function RefundSupport() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Need Help with Cancellation or Refund?</h2>
                        <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
                            For questions about our refund and cancellation policy, or to request a cancellation, please contact our support team.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 bg-[#FBFAF8] rounded-[2.5rem] border border-border/40 hover:shadow-lg transition-all group">
                            <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-4">Email Support</h3>
                            <a href="mailto:cle@celnet.in" className="text-primary font-bold font-sans text-lg block mb-4 hover:underline">
                                cle@celnet.in
                            </a>
                            <p className="text-muted-foreground font-sans text-sm">
                                We typically respond within 24-48 hours.
                            </p>
                        </div>

                        <div className="p-8 bg-[#FBFAF8] rounded-[2.5rem] border border-border/40 hover:shadow-lg transition-all group">
                            <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Phone className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-4">Phone Support</h3>
                            <a href="tel:+919218093700" className="text-primary font-bold font-sans text-lg block mb-4 hover:underline">
                                +91 92180 93700
                            </a>
                            <div className="flex items-center gap-2 text-muted-foreground font-sans text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>Available Monday-Friday, 9:00 AM – 6:00 PM IST</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
