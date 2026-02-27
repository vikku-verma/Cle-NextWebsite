import { CheckCircle2 } from "lucide-react";

export function AdvertisementPackages() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Customizable Packages</h2>
                    <p className="text-muted-foreground font-sans text-lg">
                        We offer customizable packages that can be tailored to meet your specific advertising needs. Whether you're looking to launch a new product, increase brand awareness, or establish thought leadership, we can help you achieve your objectives.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Platinum */}
                    <div className="relative bg-[#FBFAF8] p-8 rounded-3xl border-2 border-primary/20 hover:border-primary transition-colors flex flex-col h-full shadow-lg shadow-primary/5">
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground font-bold px-4 py-1.5 rounded-full text-sm font-sans shadow-md">Premium</div>
                        <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">Platinum Package</h3>
                        <ul className="space-y-4 font-sans text-foreground/80 mb-10 flex-grow text-sm">
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Premium booth location</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Conference website logo placement</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Social media promotion</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Speaking opportunity</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Workshop sponsorship</li>
                        </ul>
                        <div className="mt-auto pt-6 border-t border-border/40 font-bold text-center text-primary text-lg">Contact for Pricing</div>
                    </div>

                    {/* Gold */}
                    <div className="bg-[#FBFAF8] p-8 rounded-3xl border border-border/60 hover:border-gray-400 transition-colors flex flex-col h-full shadow-sm hover:shadow-md">
                        <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">Gold Package</h3>
                        <ul className="space-y-4 font-sans text-foreground/80 mb-10 flex-grow text-sm">
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Standard booth location</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Conference program advertisement</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Exhibition hall presence</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Networking event sponsorship</li>
                        </ul>
                        <div className="mt-auto pt-6 border-t border-border/40 font-bold text-center text-primary text-lg">Contact for Pricing</div>
                    </div>

                    {/* Silver */}
                    <div className="bg-[#FBFAF8] p-8 rounded-3xl border border-border/60 hover:border-gray-400 transition-colors flex flex-col h-full shadow-sm hover:shadow-md">
                        <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">Silver Package</h3>
                        <ul className="space-y-4 font-sans text-foreground/80 mb-10 flex-grow text-sm">
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Exhibition space</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Conference materials inclusion</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Website banner advertisement</li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Lanyard sponsorship</li>
                        </ul>
                        <div className="mt-auto pt-6 border-t border-border/40 font-bold text-center text-primary text-lg">Contact for Pricing</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
