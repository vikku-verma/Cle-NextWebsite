import { fetchPostBySlug } from "@/lib/api/blog";
import { Button } from "@/components/ui/button";
import { CalendarDays, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await fetchPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''), // Strip HTML
        openGraph: {
            images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                ? [post._embedded['wp:featuredmedia'][0].source_url]
                : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const author = post._embedded?.author?.[0];
    const categoryTerm = post._embedded?.['wp:term']?.[0]?.[0];
    const tags = post._embedded?.['wp:term']?.[1] || [];

    return (
        <article className="min-h-screen flex flex-col">
            {/* Hero Image / Header */}
            <div className="relative h-[40vh] md:h-[50vh] bg-muted w-full overflow-hidden">
                {featuredMedia ? (
                    <NextImage
                        src={featuredMedia.source_url}
                        alt={featuredMedia.alt_text || post.title.rendered}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-primary/10" />
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container px-4 md:px-6 text-center text-white space-y-4">
                        {categoryTerm && (
                            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-4">
                                {categoryTerm.name}
                            </span>
                        )}
                        <h1
                            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto shadow-sm"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-medium text-white/90">
                            <span className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                {new Date(post.date).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            {author && (
                                <span className="flex items-center gap-2">
                                    <User className="h-4 w-4" /> {author.name}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>
                </Button>

                {/* Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-heading prose-headings:font-bold 
                        prose-a:text-primary prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Related Topics</h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <Button key={tag.id} variant="secondary" size="sm" className="gap-2" asChild>
                                    <Link href={`/blog?tag=${tag.id}`}>
                                        <Tag className="h-3 w-3" /> {tag.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
