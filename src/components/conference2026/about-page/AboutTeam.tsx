"use client";

import { motion } from "framer-motion";
import { User, Settings } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AboutTeam() {
    const [ankitaError, setAnkitaError] = useState(false);
    const [gaganError, setGaganError] = useState(false);

    return (
        <section className="py-24 bg-[#F4F2EE] relative border-t border-border/40">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Our <span className="text-primary italic font-normal">Team</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Team Member 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all"
                    >
                        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20 mb-6 bg-primary/10 flex items-center justify-center relative shadow-md">
                            {!ankitaError ? (
                                <Image
                                    src="https://cle.celnet.in/wp-content/uploads/2025/12/ankitaSrivastava.jpeg"
                                    alt="Ms. Ankita Srivastava"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                    onError={() => setAnkitaError(true)}
                                />
                            ) : (
                                <User className="h-12 w-12 text-primary" />
                            )}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Ms. Ankita Srivastava</h3>
                        <p className="text-primary font-bold font-sans text-sm tracking-wide uppercase mb-2">Conference Chair</p>
                        <p className="text-muted-foreground font-sans text-sm pb-4">Conference Manager & Coordinator</p>
                    </motion.div>

                    {/* Team Member 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all"
                    >
                        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-secondary/20 mb-6 bg-secondary/10 flex items-center justify-center relative shadow-md">
                            {!gaganError ? (
                                <Image
                                    src="/gagan.jpg"
                                    alt="Mr. Gagan Kumar"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                    onError={() => setGaganError(true)}
                                />
                            ) : (
                                <User className="h-12 w-12 text-secondary" />
                            )}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Mr. Gagan Kumar</h3>
                        <p className="text-secondary font-bold font-sans text-sm tracking-wide uppercase mb-2">Program Coordinator</p>
                        <p className="text-muted-foreground font-sans text-sm pb-4">Associate Editor</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
