import { Users, Volume2, Mic } from "lucide-react";

export function GuidelinesParticipants() {
    return (
        <section className="py-24 bg-[#FBFAF8] border-y border-border/30">
            <div className="container px-4 md:px-6 text-center max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Participant Guidelines</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {/* All Participants */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Users className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-6">For All Participants</h3>
                        <ul className="space-y-4 font-sans text-muted-foreground pb-4 h-full text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Registration:</span> Ensure you register for the conference through our official website to gain access to the virtual platform.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Access:</span> Before the event, test your internet connection and access to the platform to troubleshoot issues.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Professional Conduct:</span> Maintain professional demeanor. Respectful communication is essential in all sessions.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Privacy:</span> Do not share content (slides, videos, sessions) without explicit permission from the owner.</span></li>
                        </ul>
                    </div>

                    {/* Attendees */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Volume2 className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-6">For Attendees</h3>
                        <ul className="space-y-4 font-sans text-muted-foreground pb-4 h-full text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Platform Navigation:</span> Familiarize yourself with features, including session access and networking tools.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Session Attendance:</span> Join sessions promptly and use designated tools for Q&As or polls.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Networking:</span> Leverage digital networking responsibly by engaging with attendees, speakers, and exhibitors.</span></li>
                        </ul>
                    </div>

                    {/* Speakers */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Mic className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-6">For Speakers</h3>
                        <ul className="space-y-4 font-sans text-muted-foreground pb-4 h-full text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Presentation Setup:</span> Ensure materials are compatible and test audio/video setup ahead of time.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Rehearsal:</span> Participate in scheduled rehearsals to address technical issues and event flow.</span></li>
                            <li className="flex gap-3"><span className="font-bold text-foreground shrink-0 mt-1">•</span> <span><span className="text-foreground font-bold">Engagement:</span> Encourage interaction by posing questions and using interactive tools.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
