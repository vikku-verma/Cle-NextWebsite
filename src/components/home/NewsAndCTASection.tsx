import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchBlogs, fetchCategories } from "@/lib/api/blog";

const stats = [
    { label: "Editors & Reviewers", value: "300+" },
    { label: "Review Timeline", value: "18 Days" },
    { label: "Indexed Databases", value: "12+" },
    { label: "Global Members", value: "5k+" },
];

export async function NewsAndCTASection() {
    const categories = await fetchCategories();
    const uncategorisedCategory = categories.find(c => c.slug.toLowerCase() === 'uncategorized' || c.name.toLowerCase() === 'uncategorised');
    const categoryId = uncategorisedCategory ? uncategorisedCategory.id : undefined;

    const { posts } = await fetchBlogs({ category: categoryId, per_page: 3 });

    return (
        <>
            <section className="bg-background py-16 sm:py-24">
                <div className="container px-4 md:px-6">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Latest News & Insights
                            </h2>
                            <p className="mt-2 text-muted-foreground">
                                Stay updated with the latest legal trends and analysis.
                            </p>
                        </div>
                        <Button variant="ghost" asChild className="hidden sm:inline-flex">
                            <Link href="/blog">View All News</Link>
                        </Button>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.length > 0 ? posts.map((post) => {
                            const categoryTerm = post._embedded?.['wp:term']?.[0]?.[0];
                            const categoryName = categoryTerm ? categoryTerm.name : "Uncategorised";

                            return (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/50"
                                >
                                    <div>
                                        <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-primary">
                                            {categoryName}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                        <div className="mt-2 text-sm text-muted-foreground">
                                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                                        Read Article
                                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </Link>
                            );
                        }) : (
                            <div className="col-span-full h-32 flex items-center justify-center border-2 border-dashed rounded-2xl">
                                <span className="text-muted-foreground">No recent news available.</span>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Button variant="ghost" asChild>
                            <Link href="/blog">View All News</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Trust & Final CTA */}
            <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }} />

                <div className="container relative px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">

                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                                Trust by Academia & Industry
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-bold text-accent">{stat.value}</div>
                                        <div className="text-sm font-medium text-primary-foreground/80">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm lg:p-12 text-center">
                            <h2 className="font-heading text-3xl font-bold mb-4">
                                Join the Future of Legal Excellence
                            </h2>
                            <p className="text-primary-foreground/80 mb-8 text-lg">
                                Become a member today to access exclusive resources, publish your research, and connect with global leaders.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto" asChild>
                                    <Link href="/membership">Join Membership</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-accent-foreground hover:bg-primary-foreground/30 w-full sm:w-auto" asChild>
                                    <Link href="https://manuscript-engine.journalslibrary.com/conferences/entry/31140/">Submit Your Paper</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}