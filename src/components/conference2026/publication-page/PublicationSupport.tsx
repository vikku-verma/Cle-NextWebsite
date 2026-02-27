import { Zap, Users, Award } from "lucide-react";

export function PublicationSupport() {
    return (
        <section className="py-24 bg-foreground text-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Author Support Services</h2>
                    <p className="text-background/70 font-sans text-lg">
                        At CLE, we support authors from abstract submission to post-conference publication. Our services help improve research visibility and support professional development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <h4 className="text-primary font-heading text-xl font-bold flex items-center gap-2">
                            <Zap className="h-5 w-5" /> Pre-Conference
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold font-sans">Abstract Assistance</h5>
                                <p className="text-sm text-background/60">Guidance on structure & proofreading support.</p>
                            </div>
                            <div>
                                <h5 className="font-bold font-sans">Presentation Preparation</h5>
                                <p className="text-sm text-background/60">Slide design support & rehearsal sessions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-primary font-heading text-xl font-bold flex items-center gap-2">
                            <Users className="h-5 w-5" /> During Conference
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold font-sans">On-Demand Technical Support</h5>
                                <p className="text-sm text-background/60">Live assistance & presentation tools support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-primary font-heading text-xl font-bold flex items-center gap-2">
                            <Award className="h-5 w-5" /> Post-Conference
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold font-sans">Publication Support</h5>
                                <p className="text-sm text-background/60">Editing, translation & journal recommendation.</p>
                            </div>
                            <div>
                                <h5 className="font-bold font-sans">Research Promotion</h5>
                                <p className="text-sm text-background/60">Social media promotion & press releases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
