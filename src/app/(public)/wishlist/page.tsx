"use client";

import { Button } from "@/components/ui/button";
import { Shield, ShoppingCart, Heart, Trash2 } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
    const { items, removeFromWishlist } = useWishlist();

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted py-20 text-center">
                <div className="container px-4 md:px-6">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        My Wishlist
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your saved journals and subscriptions.
                    </p>
                </div>
            </section>

            <section className="container py-16 px-4 md:px-6 -mt-12">
                {items.length === 0 ? (
                    <div className="text-center py-20 bg-card rounded-xl border border-border shadow-sm">
                        <Heart className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                        <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
                        <p className="text-muted-foreground mb-6">Start browsing our journals to find what you like.</p>
                        <Button asChild>
                            <Link href="/products/journals/subscription">
                                Browse Journals
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {items.map((product) => (
                            <div key={product.id} className="group relative flex flex-col rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                {/* Image Section */}
                                <div className="relative h-48 w-full bg-muted overflow-hidden">
                                    {product.images && product.images.length > 0 ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={product.images[0].src}
                                            alt={product.images[0].alt || product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-muted-foreground">
                                            <Shield className="h-10 w-10 opacity-20" />
                                        </div>
                                    )}

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromWishlist(product.id)}
                                        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm backdrop-blur-sm"
                                        title="Remove from Wishlist"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>

                                    {/* Stock Badge */}
                                    <div className="absolute top-3 left-3 z-10">
                                        {product.stock_status === 'instock' ? (
                                            <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                                                In Stock
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-full bg-red-500/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col flex-1 p-5">
                                    <div className="mb-4">
                                        <h3 className="font-heading text-lg font-semibold leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors" title={product.name}>
                                            {product.name}
                                        </h3>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-4">
                                        <div
                                            className="text-xl font-bold text-primary"
                                            dangerouslySetInnerHTML={{ __html: product.price_html }}
                                        />

                                        <Button className="w-full rounded-lg" size="sm" asChild>
                                            <Link href={product.permalink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <ShoppingCart className="w-4 h-4" />
                                                Subscribe
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
