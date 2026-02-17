import { Metadata } from "next";
import { fetchWorkshopByName } from "@/lib/api/workshops";
import WorkshopDetailContent from "./WorkshopDetailContent";

interface PageProps {
    params: {
        categorySlug: string;
        workshopSlug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const workshop = await fetchWorkshopByName(params.workshopSlug);

    if (!workshop) {
        return {
            title: "Workshop Not Found",
        };
    }

    const title = workshop.workshopHeading || workshop.title;
    const description = workshop.tagline || workshop.description;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: workshop.heroImage ? [workshop.heroImage] : [],
        },
    };
}

export default async function WorkshopDetailPage({ params }: PageProps) {
    return <WorkshopDetailContent params={params} />;
}
