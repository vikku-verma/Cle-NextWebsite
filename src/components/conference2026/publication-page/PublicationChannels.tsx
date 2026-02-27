import { FileText, BookOpen, Book, CheckCircle2, ArrowRight } from "lucide-react";

export function PublicationChannels() {
    return (
        <section className="py-24 bg-[#FBFAF8] border-y border-border/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Publication Channels</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Channel 1 */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <FileText className="h-7 w-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-4">Conference Proceedings</h3>
                        <p className="text-muted-foreground font-sans mb-8 text-sm">
                            All accepted papers presented at our conferences are published in the conference proceedings, which are indexed in major academic databases.
                        </p>
                        <ul className="space-y-3 font-sans text-foreground/80 mb-8 text-sm">
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Indexed in major databases</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> DOI assignment</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Global digital distribution</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Permanent archival access</li>
                        </ul>
                        <button className="flex items-center gap-2 text-primary font-bold font-sans hover:gap-3 transition-all text-sm">
                            Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Channel 2 */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <BookOpen className="h-7 w-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-4">Special Journal Issues</h3>
                        <p className="text-muted-foreground font-sans mb-8 text-sm">
                            We collaborate with leading journals to publish special issues featuring select papers that align with the journal’s scope.
                        </p>
                        <ul className="space-y-3 font-sans text-foreground/80 mb-8 text-sm">
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> High-impact publication</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Peer-reviewed process</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Dedicated special issue</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Enhanced visibility</li>
                        </ul>
                        <button className="flex items-center gap-2 text-primary font-bold font-sans hover:gap-3 transition-all text-sm">
                            Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Channel 3 */}
                    <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Book className="h-7 w-7" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-4">Self-Publication Books</h3>
                        <p className="text-muted-foreground font-sans mb-8 text-sm">
                            Outstanding research may also be considered for publication in book or monograph form for comprehensive treatment.
                        </p>
                        <ul className="space-y-3 font-sans text-foreground/80 mb-8 text-sm">
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Comprehensive coverage</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Professional editing</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Global distribution</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> Author royalty options</li>
                        </ul>
                        <button className="flex items-center gap-2 text-primary font-bold font-sans hover:gap-3 transition-all text-sm">
                            Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
