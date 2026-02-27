import { Mail, Phone, MapPin } from "lucide-react";

export function GuidelinesSupport() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="text-center space-y-8">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Technical Support</h2>
                    <div className="bg-[#FBFAF8] p-10 rounded-[3rem] border border-border/40 shadow-xl shadow-black/5">
                        <p className="text-muted-foreground font-sans text-lg mb-10 italic">
                            For any technical difficulties during the conference, our support team is ready to assist you. Immediate Assistance: Use the ‘Help’ feature on the platform or reach out to our team.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-border/40">
                            <div className="space-y-3">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <h5 className="font-bold">Email</h5>
                                <a href="mailto:cle@celnet.in" className="text-sm text-muted-foreground hover:text-primary transition-colors block">cle@celnet.in</a>
                            </div>
                            <div className="space-y-3">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <h5 className="font-bold">Phone</h5>
                                <a href="tel:+919218093700" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+91 92180 93700</a>
                            </div>
                            <div className="space-y-3">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <h5 className="font-bold">Address</h5>
                                <p className="text-sm text-muted-foreground px-4">
                                    A-118, 1st Floor, Sector-63, Noida-201301, U.P., India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
