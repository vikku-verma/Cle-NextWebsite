import { Target, Eye, Magnet, Users } from "lucide-react";

export function AdvertisementWhy() {
    return (
        <section className="py-24 bg-[#FBFAF8] border-y border-border/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why Advertise at CLE Conferences?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {/* Box 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3">Targeted Audience</h3>
                        <p className="text-muted-foreground font-sans text-sm">Reach a specialized group of attendees who are directly interested in your offerings.</p>
                    </div>
                    {/* Box 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Eye className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3">Brand Visibility</h3>
                        <p className="text-muted-foreground font-sans text-sm">Increase your brand's exposure in specific professional communities.</p>
                    </div>
                    {/* Box 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Magnet className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3">Lead Generation</h3>
                        <p className="text-muted-foreground font-sans text-sm">Capture the attention of potential customers and partners who attend the conference.</p>
                    </div>
                    {/* Box 4 */}
                    <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3">Community Engagement</h3>
                        <p className="text-muted-foreground font-sans text-sm">Demonstrate your commitment to professional development and innovation by supporting continuing education and knowledge exchange.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
