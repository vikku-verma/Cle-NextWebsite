import { Mail, Phone, LifeBuoy } from "lucide-react";

export function FAQContact() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Still Have Questions?</h2>
                    <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
                        For any other inquiries or immediate assistance, please reach out to our support team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Email Support */}
                    <div className="p-8 bg-[#FBFAF8] rounded-[2.5rem] border border-border/40 hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Mail className="h-7 w-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-4">Email Support</h3>
                        <p className="text-muted-foreground font-sans text-sm mb-6 leading-relaxed">
                            Send us an email at <a href="mailto:cle@celnet.in" className="text-primary font-bold hover:underline">cle@celnet.in</a>.
                        </p>
                        <p className="text-xs font-sans font-semibold text-foreground/60 bg-white px-4 py-2 rounded-full border border-border/30 inline-block">
                            We typically respond within 24 hours.
                        </p>
                    </div>

                    {/* Phone Support */}
                    <div className="p-8 bg-[#FBFAF8] rounded-[2.5rem] border border-border/40 hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Phone className="h-7 w-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-4">Phone Support</h3>
                        <p className="text-muted-foreground font-sans text-sm mb-6 leading-relaxed">
                            Call us at <a href="tel:+919218093700" className="text-primary font-bold hover:underline">+91 92180 93700</a>.
                        </p>
                        <p className="text-xs font-sans font-semibold text-foreground/60 bg-white px-4 py-2 rounded-full border border-border/30 inline-block">
                            Available during conference hours.
                        </p>
                    </div>

                    {/* Emergency Support */}
                    <div className="p-8 bg-foreground rounded-[2.5rem] border border-foreground hover:shadow-2xl hover:shadow-black/20 transition-all group text-background">
                        <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center mb-8">
                            <LifeBuoy className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-4 text-white">Emergency Support</h3>
                        <p className="text-background/70 font-sans text-sm mb-6 leading-relaxed">
                            For urgent technical issues during the conference, use the “Help” feature on the platform for immediate assistance.
                        </p>
                        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 inline-block">
                            <span className="text-xs font-sans font-bold text-primary">Live Platform Help Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
