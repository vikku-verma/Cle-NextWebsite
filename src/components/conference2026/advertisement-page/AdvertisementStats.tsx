export function AdvertisementStats() {
    return (
        <section className="py-24 bg-foreground text-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Reach Your Target Audience</h2>
                    <p className="text-background/80 font-sans text-lg">
                        Our conferences attract diverse professionals from around the world, providing you with access to decision-makers and influencers in the field.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center md:divide-x md:divide-background/20">
                    <div className="space-y-2">
                        <div className="font-heading text-4xl md:text-5xl font-bold text-primary">1000+</div>
                        <div className="font-sans text-xs tracking-wider uppercase text-background/50">Attendees</div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-heading text-4xl md:text-5xl font-bold text-primary">50+</div>
                        <div className="font-sans text-xs tracking-wider uppercase text-background/50">Countries</div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-heading text-4xl md:text-5xl font-bold text-primary">200+</div>
                        <div className="font-sans text-xs tracking-wider uppercase text-background/50">Organizations</div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-heading text-4xl md:text-5xl font-bold text-primary">85%</div>
                        <div className="font-sans text-xs tracking-wider uppercase text-background/50">Decision-Makers</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
