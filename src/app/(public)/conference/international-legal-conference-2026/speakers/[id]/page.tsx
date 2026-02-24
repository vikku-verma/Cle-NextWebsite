import Link from "next/link";
import { ArrowLeft, Linkedin, Twitter, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { speakersData } from "@/lib/data/conference-data";

export default function SpeakerProfilePage({ params }: { params: { id: string } }) {
    const speaker = speakersData[params.id];

    if (!speaker) {
        notFound();
    }

    return (
        <main className="min-h-[80vh] bg-[#FDFDFB] pt-32 pb-24">
            <div className="container px-4 md:px-6">

                {/* Back Navigation */}
                <Link
                    href="/conference/international-legal-conference-2026/speakers"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Schedule
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">

                    {/* Left Column: Image & Quick Info */}
                    <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-64">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-secondary/5 mb-6">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="flex gap-3 mt-2">
                            {speaker.socials?.linkedin && (
                                <Link href={speaker.socials.linkedin} className="h-10 w-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            )}
                            {speaker.socials?.twitter && (
                                <Link href={speaker.socials.twitter} className="h-10 w-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Bio Details */}
                    <div className="flex-1 flex flex-col pt-2">
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 text-center md:text-left">
                            {speaker.name}
                        </h1>

                        <div className="text-primary font-sans font-bold text-lg mb-2 text-center md:text-left">
                            {speaker.role}
                        </div>

                        <div className="flex items-start text-sm text-muted-foreground font-sans mb-8 justify-center md:justify-start">
                            <MapPin className="h-4 w-4 mr-1.5 mt-0.5 shrink-0 text-secondary" />
                            <span className="italic leading-relaxed">
                                {speaker.organization}
                            </span>
                        </div>

                        <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed">
                            {speaker.bio.split('\n\n').map((paragraph: string, index: number) => (
                                <p key={index} className="mb-4 text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
