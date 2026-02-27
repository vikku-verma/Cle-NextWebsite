import { Mail, Phone, BookOpen, Clock, Settings, Award } from "lucide-react";

export function FAQWelcome() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Welcome to our FAQs</h2>
                        <p className="text-muted-foreground font-sans text-lg max-w-3xl mx-auto leading-relaxed">
                            Welcome to the FAQs section for CLE’s online conferences! If your question isn’t covered here, please reach out to our support team at <a href="mailto:cle@celnet.in" className="text-primary font-bold hover:underline">cle@celnet.in</a> or call <a href="tel:+919218093700" className="text-primary font-bold hover:underline">+91 92180 93700</a>.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="#general" className="p-8 bg-[#FBFAF8] rounded-3xl border border-border/40 hover:border-primary hover:shadow-lg transition-all group">
                            <BookOpen className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-heading font-bold text-lg mb-2">General Questions</h4>
                            <p className="text-xs text-muted-foreground font-sans">Registration, requirements, accessibility, schedule</p>
                        </a>
                        <a href="#during" className="p-8 bg-[#FBFAF8] rounded-3xl border border-border/40 hover:border-primary hover:shadow-lg transition-all group">
                            <Clock className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-heading font-bold text-lg mb-2">During the Conference</h4>
                            <p className="text-xs text-muted-foreground font-sans">Q&A, recordings, networking</p>
                        </a>
                        <a href="#technical" className="p-8 bg-[#FBFAF8] rounded-3xl border border-border/40 hover:border-primary hover:shadow-lg transition-all group">
                            <Settings className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-heading font-bold text-lg mb-2">Technical Support</h4>
                            <p className="text-xs text-muted-foreground font-sans">Access issues, security</p>
                        </a>
                        <a href="#post" className="p-8 bg-[#FBFAF8] rounded-3xl border border-border/40 hover:border-primary hover:shadow-lg transition-all group">
                            <Award className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-heading font-bold text-lg mb-2">Post-Conference</h4>
                            <p className="text-xs text-muted-foreground font-sans">Certificates, feedback</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
