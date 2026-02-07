import { fetchWorkshops } from "@/lib/api/workshops";
import { LAW_JOURNALS } from "@/lib/law-journals";
import { WorkshopsContainer } from "@/components/products/workshops/WorkshopsContainer";

export const dynamic = 'force-dynamic';

export default async function WorkshopsPage() {
    const workshops = await fetchWorkshops();

    return (
        <WorkshopsContainer workshops={workshops} categories={LAW_JOURNALS} />
    );
}
