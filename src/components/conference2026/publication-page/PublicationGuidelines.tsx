import { Scale, Calendar } from "lucide-react";

export function PublicationGuidelines() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

                    <div className="space-y-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Submission Guidelines</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">1</div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-2">Abstract Submission</h4>
                                    <p className="text-muted-foreground font-sans text-sm">Submit an abstract outlining objectives, methodology, results, and implications of your research.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">2</div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-2">Full Paper Submission</h4>
                                    <p className="text-muted-foreground font-sans text-sm">On abstract acceptance, submit the full paper following the prescribed template and guidelines.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">3</div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-2">Peer Review</h4>
                                    <p className="text-muted-foreground font-sans text-sm">All submitted papers undergo peer review to ensure quality and academic integrity.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">4</div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-2">Revision</h4>
                                    <p className="text-muted-foreground font-sans text-sm">Revise your paper as per reviewer feedback to improve clarity, depth, and impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">5</div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-2">Final Submission</h4>
                                    <p className="text-muted-foreground font-sans text-sm">Submit the final approved version for inclusion in the selected publication channel.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#FBFAF8] rounded-2xl border border-border/60">
                            <h4 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                                <Scale className="h-5 w-5 text-primary" /> Copyright and Author Rights
                            </h4>
                            <p className="text-muted-foreground font-sans text-sm italic">
                                Authors retain copyright of their published works under a Creative Commons license, allowing others to share and use the work with proper credit and non-commercial use conditions.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Important Dates</h2>
                        <div className="bg-[#FBFAF8] rounded-3xl p-8 border border-border/40">
                            <div className="space-y-8">
                                <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-6 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Calendar className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-sans font-semibold">Abstract Submission Deadline</span>
                                    </div>
                                    <span className="font-heading font-bold text-foreground">28th February 2026</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-6 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-sans font-semibold">Notification of Abstract Acceptance</span>
                                    </div>
                                    <span className="font-heading font-bold text-foreground">5th Jan 2026</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-6 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-sans font-semibold">Full Paper Submission Deadline</span>
                                    </div>
                                    <span className="font-heading font-bold text-foreground">10th April 2026</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-6 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-sans font-semibold">Notification of Paper Acceptance</span>
                                    </div>
                                    <span className="font-heading font-bold text-foreground">15th Mar 2026</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-sans font-semibold">Final Paper Submission Deadline</span>
                                    </div>
                                    <span className="font-heading font-bold text-foreground">10th April 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
