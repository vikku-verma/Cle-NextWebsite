"use client";

import { Button } from "@/components/ui/button";
import { Shield, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchSubscriptions, SubscriptionProduct } from "@/services/subscriptionService";
import { useWishlist } from "@/context/WishlistContext";

export default function SubscriptionPage() {
    const [products, setProducts] = useState<SubscriptionProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Adjust as needed for grid layout (e.g., 2 rows of 4)

    // Calculate pagination
    // Note: If there are multiple products, we slice(1) as previously requested 
    // (presumably to skip a specific item or handle a pinned item elsewhere)
    // However, if there's only 1 product, we show it to avoid "No products" message.
    const displayableProducts = products.length > 1 ? products.slice(1) : products;
    const totalPages = Math.ceil(displayableProducts.length / itemsPerPage);

    const currentProducts = displayableProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of product grid
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchSubscriptions();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load products", error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const toggleWishlist = (product: SubscriptionProduct) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // ✅ Currency formatter
    const formatPrice = (price: string | number | undefined) => {
        if (!price) return "";
        const numPrice = Number(price);
        return isNaN(numPrice) ? price.toString() : numPrice.toLocaleString("en-IN");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted py-20 text-center">
                <div className="container px-4 md:px-6">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Journal Subscriptions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get unlimited access to world-class legal scholarship and stay ahead in your practice.
                    </p>
                    <div className="mt-8">
                        <Button variant="outline" asChild>
                            <Link href="/wishlist">
                                <Heart className="mr-2 h-4 w-4" /> View Wishlist
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="container py-16 px-4 md:px-6 -mt-12">
                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 text-muted-foreground">Loading subscriptions...</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {currentProducts.map((product) => {
                            const isLiked = isInWishlist(product.id);

                            // ✅ Price logic (prioritize price_html from API)
                            let priceDisplay = null;

                            if (product.price_html) {
                                // removing screen-reader-text span to clean up the UI
                                const cleanHtml = product.price_html.replace(/<span class="screen-reader-text">.*?<\/span>/g, "");
                                priceDisplay = <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
                            } else if (product.min_price && product.max_price) {
                                priceDisplay = `${formatPrice(product.min_price)} ₹ – ${formatPrice(product.max_price)} ₹`;
                            } else if (product.price) {
                                priceDisplay = `${formatPrice(product.price)} ₹`;
                            }

                            return (
                                <div
                                    key={product.id}
                                    className="group relative flex flex-col rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-48 w-full bg-muted overflow-hidden">
                                        {product.images && product.images.length > 0 ? (
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

                                        {/* Wishlist Button */}
                                        <button
                                            onClick={() => toggleWishlist(product)}
                                            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm backdrop-blur-sm"
                                        >
                                            <Heart
                                                className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""
                                                    }`}
                                            />
                                        </button>

                                        {/* Stock Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            {product.stock_status === "instock" ? (
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
                                            <h3
                                                className="font-heading text-lg font-semibold leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors"
                                                title={product.name}
                                            >
                                                {product.name}
                                            </h3>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                                                    From
                                                </span>

                                                {/* ✅ Clean price display */}
                                                <div className="text-lg font-extrabold text-foreground">
                                                    {priceDisplay}
                                                </div>
                                            </div>

                                            <Button className="w-full rounded-lg" size="sm" asChild>
                                                <Link
                                                    href={product.permalink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Subscribe
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!loading && products.length === 0 && (
                    <div className="text-center py-20 bg-card rounded-xl border border-border shadow-sm">
                        <p className="text-muted-foreground">
                            No subscription products available at the moment.
                        </p>
                    </div>
                )}
            </section>

            {/* Pagination Controls */}
            {!loading && totalPages > 1 && (
                <section className="container py-8 px-4 md:px-6 flex justify-center items-center gap-4">
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <span className="text-sm font-medium text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </section>
            )}

            <section className="container py-16 px-4 md:px-6 text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-muted mb-6">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium">
                        Secure Payment Processing & Instant Digital Access
                    </span>
                </div>
            </section>
        </div>
    );
}