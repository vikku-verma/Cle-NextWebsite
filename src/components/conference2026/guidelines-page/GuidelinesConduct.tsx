import { CheckCircle2, XCircle, AlertCircle, Monitor, Speaker, ShieldCheck } from "lucide-react";

export function GuidelinesConduct() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Code of Conduct */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Code of Conduct</h2>
                            <p className="text-muted-foreground font-sans text-lg">
                                CLE is committed to providing a safe, inclusive, and respectful environment for all participants.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 bg-[#FBFAF8] rounded-2xl border-l-4 border-primary">
                                <h4 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" /> Expected Behavior
                                </h4>
                                <ul className="space-y-3 font-sans text-muted-foreground text-sm">
                                    <li className="flex gap-2"> Treat all participants with respect and professionalism</li>
                                    <li className="flex gap-2"> Contribute to constructive discussions and knowledge sharing</li>
                                    <li className="flex gap-2"> Respect diverse opinions and perspectives</li>
                                    <li className="flex gap-2"> Maintain confidentiality of sensitive information</li>
                                    <li className="flex gap-2"> Follow platform guidelines and technical requirements</li>
                                </ul>
                            </div>

                            <div className="p-8 bg-[#FBFAF8] rounded-2xl border-l-4 border-red-500">
                                <h4 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                                    <XCircle className="h-5 w-5 text-red-500" /> Prohibited Activities
                                </h4>
                                <ul className="space-y-3 font-sans text-muted-foreground text-sm">
                                    <li className="flex gap-2"> Harassment or discrimination of any kind</li>
                                    <li className="flex gap-2"> Sharing inappropriate or offensive content</li>
                                    <li className="flex gap-2"> Disrupting sessions or platform functionality</li>
                                    <li className="flex gap-2"> Unauthorized recording or distribution of content</li>
                                    <li className="flex gap-2"> Spamming or promotional activities without permission</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 flex gap-4">
                                <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h5 className="font-bold text-foreground">Reporting Issues</h5>
                                    <p className="text-sm text-muted-foreground mt-1 font-sans">
                                        If you experience or witness any violations, please report immediately to the organizers through the designated help channel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Requirements */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Technical Requirements</h2>
                            <p className="text-muted-foreground font-sans text-lg">
                                Prepare the following requirements to ensure the best experience during our online conferences.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-border/50 shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Monitor className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-3">Device Requirements</h4>
                                    <ul className="space-y-2 text-muted-foreground font-sans text-xs">
                                        <li>• Desktop, laptop, or mobile device with internet connectivity.</li>
                                        <li>• Stable internet connection (minimum 5 Mbps recommended).</li>
                                        <li>• Compatible browser (Google Chrome or Mozilla Firefox recommended).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-border/50 shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Speaker className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-3">Audio & Video</h4>
                                    <ul className="space-y-2 text-muted-foreground font-sans text-xs">
                                        <li>• Working microphone and camera for interactive sessions.</li>
                                        <li>• Test audio equipment before the conference.</li>
                                        <li>• Use headphones for better audio quality and proper lighting.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-border/50 shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading text-xl font-bold mb-3">Security & Privacy</h4>
                                    <ul className="space-y-2 text-muted-foreground font-sans text-xs">
                                        <li>• Maintain security of login credentials.</li>
                                        <li>• Use strong, unique passwords & up-to-date antivirus.</li>
                                        <li>• Keep operating system and browser updated.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
