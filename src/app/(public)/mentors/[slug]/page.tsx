import React from "react";
import { fetchMentors } from "@/lib/api/mentors";
import { MentorProfile } from "@/components/mentors/MentorProfile";
import { Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const mentors = await fetchMentors();
    const mentor = mentors.find(m => String(m.slug) === params.slug);

    if (!mentor) {
        return {
            title: "Mentor Not Found",
        };
    }

    return {
        title: `${mentor.name} | Mentor`,
        description: mentor.bio || `Specialized in ${mentor.subject}. Explore the profile of ${mentor.name} at Centre of Legal Excellence.`,
        openGraph: {
            title: mentor.name,
            description: mentor.bio,
            images: mentor.profilePic ? [mentor.profilePic] : [],
        },
    };
}

export default async function MentorProfilePage({ params }: PageProps) {
    const { slug } = params;
    const mentors = await fetchMentors();
    const mentor = mentors.find(m => String(m.slug) === slug);

    if (!mentor) {
        return (
            <main className="min-h-screen bg-slate-50 pt-32 pb-20 flex flex-col items-center justify-center">
                <div className="bg-white rounded-[2rem] border-2 border-dashed border-slate-200 p-20 text-center max-w-lg mx-auto">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Search className="w-10 h-10 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Mentor Not Found</h3>
                    <p className="text-slate-500">
                        The mentor you are looking for does not exist or has been removed.
                    </p>
                    <Link
                        href="/mentors"
                        className="inline-block mt-8 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-2xl text-sm font-black uppercase tracking-widest transition-colors hover:bg-indigo-100"
                    >
                        Back to Directory
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main>
            <MentorProfile mentor={mentor} />
        </main>
    );
}
