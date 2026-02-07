import { MentorGrid } from "@/components/mentors/MentorGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MentorsPage() {
    return (
        <div className="container py-12 px-4 md:px-6">

            <div className="mb-12 text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Find Your Mentor
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Connect with experienced professionals and academicians for guidance, code reviews, and career advice.
                </p>
                <div className="mt-8">
                    <Button variant="outline" asChild>
                        <Link href="/apply-mentor">Become a Mentor</Link>
                    </Button>
                </div>
            </div>

            <MentorGrid />

        </div>
    );
}
