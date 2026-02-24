"use client";

import { Check, Star, Shield, Zap, BookOpen, Briefcase, Building2, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "Editors & Reviewers", value: "300+" },
    { label: "Review Timeline", value: "18 Days" },
    { label: "Indexed Databases", value: "12+" },
    { label: "Global Members", value: "5k+" },
];

async function MembershipPageContent({ posts }: { posts: any[] }) {
    // Helper to get an icon based on title
    const getIconForTitle = (title: string, index: number) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("charter")) return Star;
        if (lowerTitle.includes("corporate") || lowerTitle.includes("institution")) return Building2;
        if (lowerTitle.includes("individual") || lowerTitle.includes("student")) return User;
        if (lowerTitle.includes("professional")) return Briefcase;
        // Fallback array
        const icons = [Star, Briefcase, Building2, User, BookOpen];
        return icons[index % icons.length];
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 text-center">
                <div className="container px-4">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Unlock Your Legal Potential
                    </h1>
                    <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Become a member of the Centre of Legal Excellence and gain access to world-class resources, networking, and growth opportunities.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="container py-16 px-4 md:px-6 -mt-12">
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {posts.length > 0 ? posts.map((post, index) => {
                        const isPopular = post.title.rendered.toLowerCase().includes("corporate") || index === 1;
                        const IconComponent = getIconForTitle(post.title.rendered, index);

                        return (
                            <div
                                key={post.id}
                                className={`relative rounded-2xl bg-card p-6 xl:p-8 shadow-lg flex flex-col border transition-all duration-500 hover:shadow-2xl h-full ${isPopular ? 'border-primary shadow-primary/20 xl:scale-[1.02] z-10 ring-1 ring-primary/30' : 'border-border'}`}
                            >
                                {isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl border-2 border-white/20 whitespace-nowrap">
                                        Most Popular Tier
                                    </div>
                                )}

                                <div className="flex items-center gap-4 xl:gap-5 mb-8">
                                    <div className={`h-14 w-14 xl:h-16 xl:w-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transform transition-transform group-hover:rotate-6 ${isPopular ? 'bg-primary text-white shadow-primary/30' : 'bg-slate-100 text-primary shadow-slate-200'}`}>
                                        <IconComponent className="h-6 w-6 xl:h-8 xl:w-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60">Membership</p>
                                    </div>
                                </div>

                                <div
                                    className="text-slate-600 text-sm mb-8 leading-relaxed font-medium min-h-[80px] border-l-2 border-primary/20 pl-4 prose-sm prose-p:mb-2 line-clamp-4"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered || post.content.rendered }}
                                />

                                <div className="mt-auto pt-8 border-t-2 border-dashed border-slate-100">
                                    <Button
                                        className={`w-full h-14 text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 rounded-xl ${isPopular ? 'bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 hover:-translate-y-1' : 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-primary shadow-xl shadow-slate-100'}`}
                                        variant={isPopular ? "default" : "ghost"}
                                        asChild
                                    >
                                        <Link href={`/blog/${post.slug}`}>Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-2xl">
                            Loading membership plans...
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-muted/30 py-16 sm:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold">Why Join CLE?</h2>
                        <p className="text-muted-foreground mt-2">More than just a membership, it's a partnership for your career.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <Star className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Exclusive Content</h3>
                            <p className="text-sm text-muted-foreground mt-2">Unlimited access to our archived journals, research papers, and case studies.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Career Growth</h3>
                            <p className="text-sm text-muted-foreground mt-2">Priority access to workshops, training programs, and certification courses.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg">Global Credibility</h3>
                            <p className="text-sm text-muted-foreground mt-2">Enhance your professional standing with a membership to a premier legal consortium.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Ensure this runs on server
import { fetchBlogs, fetchCategories } from "@/lib/api/blog";
import { BlogPost } from "@/lib/types";

export default async function MembershipPage() {
    const categories = await fetchCategories();
    const membershipCategory = categories.find(c => c.slug.toLowerCase() === 'membership' || c.name.toLowerCase() === 'membership');
    const categoryId = membershipCategory ? membershipCategory.id : undefined;

    let posts: BlogPost[] = [];
    if (categoryId) {
        const result = await fetchBlogs({ category: categoryId, per_page: 10 });
        posts = result.posts;
    }

    return <MembershipPageContent posts={posts} />;
}
