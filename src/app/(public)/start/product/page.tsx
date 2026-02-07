import { ProductWizard } from "@/components/forms/ProductWizard";

export default function StartPublishingPage() {
    return (
        <div className="container py-12 px-4 md:px-6">
            <div className="mb-8 text-center">
                <h1 className="font-heading text-3xl font-bold tracking-tight">Manage Knowledge</h1>
                <p className="text-muted-foreground mt-2">Create and publish new journals, books, or courses.</p>
            </div>

            <ProductWizard />
        </div>
    );
}
