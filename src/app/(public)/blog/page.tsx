import { fetchBlogs, fetchCategories, fetchTags } from "@/lib/api/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, User, Search, Filter } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";

// Utility to debounce search or handle complex state can be added client-side, 
// for now using simple server component with searchParams.

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
    const search = typeof searchParams.search === 'string' ? searchParams.search : undefined;
    const category = typeof searchParams.category === 'string' ? parseInt(searchParams.category) : undefined;
    const tag = typeof searchParams.tag === 'string' ? parseInt(searchParams.tag) : undefined;

    const [{ posts, totalPages }, categories, tags] = await Promise.all([
        fetchBlogs({ page, search, category, tag }),
        fetchCategories(),
        fetchTags(),
    ]);

    const activeCategory = categories.find(c => c.id === category);
    const activeTag = tags.find(t => t.id === tag);

    async function handleSearch(formData: FormData) {
        "use server";
        const query = formData.get("search") as string;
        redirect(`/blog?search=${encodeURIComponent(query)}`);
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-4">
                        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                            Legal Insights & News
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Stay updated with the latest trends, analysis, and thought leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="container py-8 px-4 md:px-6 border-b">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <Filter className="h-4 w-4" /> Filters:
                        </span>
                        <Button variant={!category && !tag ? "secondary" : "outline"} size="sm" asChild>
                            <Link href="/blog">All</Link>
                        </Button>
                        {categories.slice(0, 5).map(cat => (
                            <Button
                                key={cat.id}
                                variant={category === cat.id ? "secondary" : "outline"}
                                size="sm"
                                asChild
                            >
                                <Link href={`/blog?category=${cat.id}`}>{cat.name}</Link>
                            </Button>
                        ))}
                    </div>

                    <form action={handleSearch} className="flex w-full md:w-auto gap-2">
                        <Input
                            name="search"
                            placeholder="Search articles..."
                            className="bg-background max-w-[300px]"
                            defaultValue={search}
                        />
                        <Button type="submit" size="icon">
                            <Search className="h-4 w-4" />
                        </Button>
                    </form>
                </div>

                {(search || category || tag) && (
                    <div className="mt-4 flex gap-2 items-center text-sm text-muted-foreground">
                        <span>Showing results for:</span>
                        {search && <Badge variant="outline">Search: {search}</Badge>}
                        {activeCategory && <Badge variant="outline">Category: {activeCategory.name}</Badge>}
                        {activeTag && <Badge variant="outline">Tag: {activeTag.name}</Badge>}
                        <Link href="/blog" className="text-primary hover:underline ml-2">Clear all</Link>
                    </div>
                )}
            </section>

            {/* Blog Grid */}
            <section className="container py-16 px-4 md:px-6">
                {posts.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => {
                            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                            const author = post._embedded?.author?.[0];
                            const categoryTerm = post._embedded?.['wp:term']?.[0]?.[0];

                            return (
                                <div
                                    key={post.id}
                                    className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg"
                                >
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        {featuredMedia ? (
                                            <NextImage
                                                src={featuredMedia.source_url}
                                                alt={featuredMedia.alt_text || post.title.rendered}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                        {categoryTerm && (
                                            <div className="absolute top-4 left-4 rounded-md bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm shadow-sm">
                                                {categoryTerm.name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <CalendarDays className="h-3 w-3" />
                                                {new Date(post.date).toLocaleDateString()}
                                            </span>
                                            {author && (
                                                <span className="flex items-center gap-1">
                                                    <User className="h-3 w-3" /> {author.name}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                        <div
                                            className="text-muted-foreground line-clamp-3 mb-6 flex-1 text-sm"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />
                                        <Button variant="link" className="w-fit p-0 h-auto" asChild>
                                            <Link href={`/blog/${post.slug}`}>
                                                Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-lg font-bold">No posts found</h3>
                        <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                    </div>
                )}

                {/* Pagination - Simplified */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                            <Button
                                key={p}
                                variant={p === page ? "default" : "outline"}
                                size="sm"
                                asChild
                            >
                                <Link
                                    href={{
                                        pathname: '/blog',
                                        query: { ...searchParams, page: p }
                                    }}
                                >
                                    {p}
                                </Link>
                            </Button>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
