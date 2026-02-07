import { EventList } from "@/components/events/EventList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ConferencesPage() {
    return (
        <div className="container py-12 px-4 md:px-6">

            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Conferences & Events
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Connect with industry leaders at our upcoming summits and workshops.
                    </p>
                </div>
                <Button asChild className="gap-2">
                    <Link href="/create-event">
                        <Plus className="h-4 w-4" /> Host an Event
                    </Link>
                </Button>
            </div>

            <EventList />

        </div>
    );
}
