export default function Loading() {
    return (
        <main className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-6 mb-12">
                {/* Back Link Skeleton */}
                <div className="h-6 w-32 bg-zinc-900 rounded animate-pulse mb-8" />

                {/* Header Skeleton */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 border-b border-zinc-800 pb-12">
                    <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl bg-zinc-900 animate-pulse" />
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <div className="h-12 w-3/4 bg-zinc-900 rounded animate-pulse mb-6" />
                        <div className="h-24 w-full bg-zinc-900 rounded animate-pulse mb-6" />
                        <div className="h-10 w-40 bg-zinc-900 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-zinc-900 rounded-2xl animate-pulse" />
                    ))}
                </div>
            </div>
        </main>
    );
}
