import { Info } from "lucide-react";

export function RefundNotice() {
    return (
        <section className="py-24 bg-[#FBFAF8] border-t border-border/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-10 rounded-[3rem] border border-border/40 shadow-xl shadow-black/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                            <Info className="h-32 w-32" />
                        </div>

                        <div className="max-w-2xl space-y-6 relative z-10">
                            <h2 className="font-heading text-3xl font-bold text-foreground">Important Notice</h2>
                            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-lg">
                                <p>
                                    Please review our cancellation and refund policy carefully before registering for any CLE conference. By completing your registration, you agree to abide by these terms and conditions.
                                </p>
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-white text-xs font-bold">!</span>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Note: All refund requests are subject to approval and processing fees may apply as per our payment gateway’s policies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
