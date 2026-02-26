"use client";

declare global {
    interface Window {
        Razorpay: any;
    }
}

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send, Wallet, LockKeyhole } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";

const resumeSchema = z.object({
    entryId: z.string().min(1, "Registration ID is required."),
    email: z.string().email("Please enter a valid email address."),
});

type ResumeFormValues = z.infer<typeof resumeSchema>;

export default function ResumePaymentPage() {
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setIsRazorpayLoaded(true);
        document.body.appendChild(script);

        return () => { document.body.removeChild(script); };
    }, []);

    const form = useForm<ResumeFormValues>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            entryId: "",
            email: "",
        },
    });

    async function onSubmit(values: ResumeFormValues) {
        if (!isRazorpayLoaded) {
            toast.error("Payment system is still loading. Please try again in a moment.");
            return;
        }

        setIsLoading(true);
        const toastId = toast.loading("Locating registration details...");

        try {
            // 1. Fetch Lead
            const leadRes = await fetch(`/api/conference2026/fetch-lead?id=${values.entryId}&email=${encodeURIComponent(values.email)}`);
            const leadData = await leadRes.json();

            if (!leadRes.ok) throw new Error(leadData.error || "Failed to locate registration data.");

            toast.loading("Generating secure payment link...", { id: toastId });

            const { lead } = leadData;

            // 2. Create Razorpay Order securely
            const orderRes = await fetch("/api/conference2026/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    region: lead.region,
                    category: lead.category,
                    presentationType: lead.presentationType,
                    numberOfDelegates: lead.numberOfDelegates,
                    entryId: lead.entryId
                }),
            });

            const orderData = await orderRes.json();

            if (!orderRes.ok) throw new Error(orderData.error || "Failed to initiate payment");

            toast.dismiss(toastId);

            // 3. Setup Razorpay Modal Options
            const options = {
                key: orderData.razorpay_key_id,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "International Legal Conference",
                description: `Payment for Registration ID: ${lead.entryId}`,
                order_id: orderData.id,
                theme: {
                    color: "#D7B56D",
                },
                prefill: {
                    name: lead.fullName,
                    email: lead.email,
                    contact: lead.phone,
                },
                handler: async function (response: any) {
                    const verificationToastId = toast.loading("Verifying payment and updating registration...");
                    try {
                        const verifyRes = await fetch("/api/conference2026/register", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                entryId: lead.entryId
                            })
                        });

                        const verifyData = await verifyRes.json();

                        if (!verifyRes.ok) throw new Error(verifyData.error || "Updating registration failed");

                        toast.success("Payment Received! Your registration is now Complete.", { id: verificationToastId, duration: 8000 });
                        form.reset();
                    } catch (verifyError: any) {
                        toast.error(verifyError.message || "Payment succeeded but status update failed. Please contact support.", { id: verificationToastId, duration: 10000 });
                    }
                },
                modal: {
                    ondismiss: function () {
                        toast.error("Payment cancelled by user.");
                    }
                }
            };

            const rzp = new window.Razorpay(options);

            rzp.on("payment.failed", function (response: any) {
                toast.error(`Payment Failed: ${response.error.description || "Unknown error"}`);
            });

            rzp.open();

        } catch (error: any) {
            toast.error(error.message || "Could not start payment process.", { id: toastId });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#FDFDFB] pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[50w] h-[50vw] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="container px-4 md:px-6 z-10">
                <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-3xl border border-border/60 shadow-xl shadow-black/5 relative overflow-hidden">
                    {/* Decorative Header */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary" />

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 ring-8 ring-primary/5">
                            <Wallet className="w-8 h-8" />
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-heading text-3xl font-bold text-foreground mb-2"
                        >
                            Resume <span className="text-primary italic font-normal">Payment</span>
                        </motion.h1>
                        <p className="text-muted-foreground font-sans text-sm">
                            If you abandoned your checkout earlier, enter your credentials below to securely fetch your pending registration and complete your payment.
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <FormField
                                control={form.control}
                                name="entryId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-sans font-semibold text-foreground/80 flex items-center gap-2">
                                            <LockKeyhole className="w-4 h-4 text-primary" /> Registration ID
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., 146" className="bg-[#FBFAF8] border-border/60 h-12" {...field} />
                                        </FormControl>
                                        <p className="text-xs text-muted-foreground mt-1">Found in your initial Unpaid confirmation email or provided by admin.</p>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-sans font-semibold text-foreground/80">Registered Email Address</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="jane.doe@example.com" className="bg-[#FBFAF8] border-border/60 h-12" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button disabled={isLoading} type="submit" className="w-full h-14 text-lg font-bold font-sans bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 group transition-all mt-4">
                                {isLoading ? "Fetching Secure Link..." : "Retrieve & Pay Now"} <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                        </form>
                    </Form>
                </div>
            </div>
        </main>
    );
}
