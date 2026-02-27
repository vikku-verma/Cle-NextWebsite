import { Video, BarChart3, Info } from "lucide-react";

export function GuidelinesPostEvent() {
    return (
        <section className="py-24 bg-foreground text-background">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold">Post-Event Access</h2>
                    <p className="text-background/70 font-sans text-lg max-w-2xl mx-auto">
                        Registered attendees will typically have access to recordings of sessions after the event. Check specific details for duration.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex gap-6 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                        <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                            <Video className="h-7 w-7 text-white" />
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-heading text-2xl font-bold">Session Recordings</h4>
                            <p className="text-background/70 font-sans text-sm leading-relaxed">
                                All live sessions are recorded and will be available for viewing shortly after the conference concludes.
                            </p>
                            <ul className="text-xs space-y-2 text-background/50 font-sans pt-2">
                                <li className="flex items-center gap-2 font-semibold text-primary"><Info className="h-3 w-3" /> Available for 30 days post-conference</li>
                                <li className="flex items-center gap-2">• Accessible through your conference account</li>
                                <li className="flex items-center gap-2">• Downloadable for offline viewing (where permitted)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-6 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                        <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                            <BarChart3 className="h-7 w-7 text-white" />
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-heading text-2xl font-bold">Feedback & Certificates</h4>
                            <p className="text-background/70 font-sans text-sm leading-relaxed">
                                We value your feedback to improve future events and provide certificates of attendance upon request.
                            </p>
                            <ul className="text-xs space-y-2 text-background/50 font-sans pt-2">
                                <li className="flex items-center gap-2">• Feedback survey sent via email after the event</li>
                                <li className="flex items-center gap-2">• Certificate of attendance available upon request</li>
                                <li className="flex items-center gap-2">• Continuing education credits may be available</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
