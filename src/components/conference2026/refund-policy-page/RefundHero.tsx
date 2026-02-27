"use client";

import { motion } from "framer-motion";
import { ConferenceBreadcrumb } from "@/components/conference2026/main-page/ConferenceBreadcrumb";

export function RefundHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F1115]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(138,90,43,0.06),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(46,76,125,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center justify-center">
                    <ConferenceBreadcrumb pageName="Refund Policy" />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Refund & <span className="text-primary italic font-normal">Cancellation Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-sans max-w-2xl mx-auto"
                    >
                        Clear guidelines for registration refunds and conference cancellations.
                    </motion.p>
                </div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 mt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Our Commitment to Fair Policies</h2>
                    <p className="text-white/70 font-sans leading-relaxed text-lg max-w-3xl mx-auto italic">
                        At CLE, we understand that sometimes circumstances require cancellations or refunds. Our policy is designed to be fair and transparent while protecting the integrity of our conference planning and execution.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1115] to-transparent pointer-events-none" />
        </section>
    );
}
