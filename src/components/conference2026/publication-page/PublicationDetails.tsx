export function PublicationDetails() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Publication Details</h2>
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Proceedings Details */}
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <h4 className="font-heading text-xl font-bold text-primary">Conference Proceedings</h4>
                            <p className="text-sm text-muted-foreground font-sans mt-2">What to expect</p>
                        </div>
                        <div className="md:col-span-2 bg-[#FBFAF8] p-8 rounded-2xl border border-border/40">
                            <ul className="grid sm:grid-cols-2 gap-4 text-foreground/80 font-sans text-sm">
                                <li className="flex items-start gap-2">• Proceedings compilation after final paper submission</li>
                                <li className="flex items-start gap-2">• Standardized templates and formatting checks</li>
                                <li className="flex items-start gap-2">• Digital availability via official channels</li>
                                <li className="flex items-start gap-2">• Author name and affiliation verification</li>
                            </ul>
                        </div>
                    </div>

                    {/* Special Journals Details */}
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <h4 className="font-heading text-xl font-bold text-primary">Special Journal Issues</h4>
                            <p className="text-sm text-muted-foreground font-sans mt-2">Selection and workflow</p>
                        </div>
                        <div className="md:col-span-2 bg-[#FBFAF8] p-8 rounded-2xl border border-border/40">
                            <ul className="grid sm:grid-cols-2 gap-4 text-foreground/80 font-sans text-sm">
                                <li className="flex items-start gap-2">• Shortlisting based on reviewer scores and thematic fit</li>
                                <li className="flex items-start gap-2">• Journal-specific formatting and submission portal</li>
                                <li className="flex items-start gap-2">• Additional review rounds per journal policy</li>
                                <li className="flex items-start gap-2">• Publication timelines depend on journal schedules</li>
                            </ul>
                        </div>
                    </div>

                    {/* self-publication Details */}
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <h4 className="font-heading text-xl font-bold text-primary">Self-Publication Books</h4>
                            <p className="text-sm text-muted-foreground font-sans mt-2">Ideal for</p>
                        </div>
                        <div className="md:col-span-2 bg-[#FBFAF8] p-8 rounded-2xl border border-border/40">
                            <ul className="grid sm:grid-cols-2 gap-4 text-foreground/80 font-sans text-sm">
                                <li className="flex items-start gap-2">• Extended studies or thesis-to-book adaptations</li>
                                <li className="flex items-start gap-2">• Editorial guidance on structure and consistency</li>
                                <li className="flex items-start gap-2">• ISBN setup and distribution support</li>
                                <li className="flex items-start gap-2">• Design support for cover and layout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
