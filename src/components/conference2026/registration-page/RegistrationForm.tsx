"use client";

// Define the Razorpay window interface for TypeScript
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileUp, Send, Calculator, Users } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

// --- PRICING DATA EXACTLY MATCHING `PricingTiers.tsx` ---
const PRICING_DATA = {
    author: {
        "Students": { inr: 1399, usd: 75 },
        "Research Scholar & Post-Doctoral": { inr: 1699, usd: 80 },
        "Faculty Member": { inr: 2199, usd: 85 },
        "Professional": { inr: 2599, usd: 120 },
    },
    attendee: {
        "Students": { inr: 999, usd: 65 },
        "Research Scholar & Post-Doctoral": { inr: 1199, usd: 70 },
        "Faculty Member": { inr: 1399, usd: 75 },
        "Professional": { inr: 2199, usd: 100 },
    }
} as const;


// --- ENHANCED DYNAMIC SCHEMA ---
const registrationSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    institution: z.string().min(2, "Institution/Organization name is required."),

    // Dynamic Pricing Triggers
    region: z.enum(["india", "international"]),
    category: z.enum(["Students", "Research Scholar & Post-Doctoral", "Faculty Member", "Professional"]),
    presentationType: z.enum(["attendee", "paper_presentation", "poster_presentation"]),
    track: z.string().optional(),

    // Conditional
    paperTitle: z.string().optional(),

    // Billing / Address
    country: z.string().min(2, "Country is required"),
    state: z.string().min(2, "State/Province is required"),
    city: z.string().min(2, "City is required"),

    // Multipliers
    numberOfDelegates: z.number().min(1, "At least 1 delegate is required.").max(50, "Maximum 50 delegates per bulk order."),

    // Legal Checkboxes
    termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the Terms and Conditions" }),
    refundPolicyAccepted: z.boolean().refine(val => val === true, { message: "You must accept the Refund Policy" }),
}).superRefine((data, ctx) => {
    if ((data.presentationType === "paper_presentation" || data.presentationType === "poster_presentation") && (!data.paperTitle || data.paperTitle.trim() === "")) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Paper title is required for authors.",
            path: ["paperTitle"],
        });
    }
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
    const [calculatedTotal, setCalculatedTotal] = useState({ amount: 0, currency: "INR", symbol: "₹" });
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

    // Load Razorpay SDK
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setIsRazorpayLoaded(true);
        document.body.appendChild(script);

        return () => { document.body.removeChild(script); };
    }, []);

    const form = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            institution: "",
            region: "india",
            category: undefined,
            presentationType: "attendee",
            track: "",
            paperTitle: "",
            country: "",
            state: "",
            city: "",
            numberOfDelegates: 1,
            // @ts-ignore - initializing literal booleans requires a specific bypass before interaction
            termsAccepted: false,
            // @ts-ignore
            refundPolicyAccepted: false,
        },
    });

    // Real-time calculation variables
    const watchRegion = form.watch("region");
    const watchCategory = form.watch("category");
    const watchPresentationType = form.watch("presentationType");
    const watchDelegates = form.watch("numberOfDelegates");

    useEffect(() => {
        if (!watchCategory || !watchDelegates || watchDelegates < 1) {
            setCalculatedTotal({ amount: 0, currency: watchRegion === "india" ? "INR" : "USD", symbol: watchRegion === "india" ? "₹" : "$" });
            return;
        }

        const isAuthor = watchPresentationType === "paper_presentation" || watchPresentationType === "poster_presentation";
        const pricingTier = isAuthor ? PRICING_DATA.author : PRICING_DATA.attendee;

        const basePrice = watchRegion === "india"
            ? pricingTier[watchCategory].inr
            : pricingTier[watchCategory].usd;

        setCalculatedTotal({
            amount: basePrice * (Number(watchDelegates) || 1),
            currency: watchRegion === "india" ? "INR" : "USD",
            symbol: watchRegion === "india" ? "₹" : "$",
        });

    }, [watchRegion, watchCategory, watchPresentationType, watchDelegates]);


    async function onSubmit(values: RegistrationFormValues) {
        if (!isRazorpayLoaded) {
            toast.error("Payment system is still loading. Please try again in a moment.");
            return;
        }

        const toastId = toast.loading("Initializing secure payment...");

        try {
            // 1. Create Razorpay Order securely via your backend route
            const orderRes = await fetch("/api/conference2026/razorpay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    region: values.region,
                    category: values.category,
                    presentationType: values.presentationType,
                    numberOfDelegates: values.numberOfDelegates
                }),
            });

            const orderData = await orderRes.json();

            if (!orderRes.ok) throw new Error(orderData.error || "Failed to initiate payment");

            toast.dismiss(toastId);

            // 2. Setup Razorpay Modal Options
            const options = {
                key: orderData.razorpay_key_id, // Dynamically sourced securely from the backend to respect `.env` naming privacy rules
                amount: orderData.amount, // from backend
                currency: orderData.currency,
                name: "International Legal Conference",
                description: "Delegate Registration Fee",
                order_id: orderData.id,
                theme: {
                    color: "#D7B56D", // Theme primary color
                },
                prefill: {
                    name: values.fullName,
                    email: values.email,
                    contact: values.phone,
                },
                handler: async function (response: any) {
                    const verificationToastId = toast.loading("Verifying payment and confirming registration...");
                    try {
                        // 3. Send successful payment identifiers to backend to verify and store in WordPress
                        const verifyRes = await fetch("/api/conference2026/register", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                ...values,
                                totalAmountPaid: calculatedTotal.amount,
                                currency: calculatedTotal.currency,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            })
                        });

                        const verifyData = await verifyRes.json();

                        if (!verifyRes.ok) throw new Error(verifyData.error || "Verification and Registration failed");

                        toast.success("Registration Successful and Saved to WordPress!", { id: verificationToastId, duration: 8000 });
                        form.reset();
                    } catch (verifyError: any) {
                        toast.error(verifyError.message || "Payment succeeded but registration failed to save. Please contact support.", { id: verificationToastId, duration: 10000 });
                    }
                },
                modal: {
                    ondismiss: function () {
                        toast.error("Payment cancelled by user.");
                    }
                }
            };

            // 4. Open Razorpay Checkout Window
            const rzp = new window.Razorpay(options);

            rzp.on("payment.failed", function (response: any) {
                toast.error(`Payment Failed: ${response.error.description || "Unknown error"}`);
            });

            rzp.open();

        } catch (error: any) {
            toast.error(error.message || "Something went wrong initializing the checkout.", { id: toastId });
        }
    }

    const isSubmitting = form.formState.isSubmitting;
    const watchTerms = form.watch("termsAccepted");
    const watchRefund = form.watch("refundPolicyAccepted");

    const isLegalAccepted = watchTerms === true && watchRefund === true;

    return (
        <section id="registration-form" className="py-24 bg-[#FDFDFB] relative border-t border-border/40">
            <div className="container px-4 md:px-6">

                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        Delegate <span className="text-primary italic font-normal">Registration Form</span>
                    </motion.h2>
                    <p className="text-muted-foreground font-sans text-base">
                        Select your category and quantities below. Payment will be processed securely via Razorpay in the next step.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-border/60 shadow-xl shadow-black/5">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

                            {/* Section 1: Personal Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground">Principal Delegate Details</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Dr. Jane Doe" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Email Address</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="jane.doe@university.edu" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input type="tel" placeholder="+1 234 567 8900" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="institution"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Institution / Organization</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="University of Law" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Country</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="India" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="state"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">State / Province</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Delhi" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">City</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="New Delhi" className="bg-[#FBFAF8] border-border/60 focus:bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Section 2: Pricing Logic */}
                            <div className="space-y-6 pt-4">
                                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground">Participation & Group Size</h3>
                                </div>

                                {/* Geography Selector */}
                                <FormField
                                    control={form.control}
                                    name="region"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="font-sans font-semibold text-foreground/80">Institution Location (Determines Pricing Currency)</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col sm:flex-row gap-4"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-border/60 rounded-xl bg-[#FBFAF8] flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                                                        <FormControl>
                                                            <RadioGroupItem value="india" />
                                                        </FormControl>
                                                        <FormLabel className="font-sans font-medium cursor-pointer w-full">Indian Institution (INR ₹)</FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border border-border/60 rounded-xl bg-[#FBFAF8] flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                                                        <FormControl>
                                                            <RadioGroupItem value="international" />
                                                        </FormControl>
                                                        <FormLabel className="font-sans font-medium cursor-pointer w-full">International Institution (USD $)</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid md:grid-cols-2 gap-6 pt-2">
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Participant Category</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-[#FBFAF8] border-border/60 h-12">
                                                            <SelectValue placeholder="Select a category" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Students">Students</SelectItem>
                                                        <SelectItem value="Research Scholar & Post-Doctoral">Research Scholar & Post-Doctoral</SelectItem>
                                                        <SelectItem value="Faculty Member">Faculty Member</SelectItem>
                                                        <SelectItem value="Professional">Professional</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="presentationType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Participation Type</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-[#FBFAF8] border-border/60 h-12">
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="attendee">Attendee Only</SelectItem>
                                                        <SelectItem value="paper_presentation">Author (Paper Presentation)</SelectItem>
                                                        <SelectItem value="poster_presentation">Author (Poster Presentation)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="numberOfDelegates"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80 flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-primary" /> Number of Delegates
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        min="1"
                                                        max="50"
                                                        className="bg-[#FBFAF8] border-border/60 h-12 text-lg font-bold"
                                                        {...field}
                                                        onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : "")}
                                                    />
                                                </FormControl>
                                                <p className="text-xs text-muted-foreground mt-1">Register multiple people from your institution in one go.</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="track"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Thematic Track (Optional)</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-[#FBFAF8] border-border/60 h-12">
                                                            <SelectValue placeholder="Select primary track" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="track1">Law, Policy and Humanities</SelectItem>
                                                        <SelectItem value="track2">Constitutional and Administrative Law</SelectItem>
                                                        <SelectItem value="track3">Criminal Law and Justice</SelectItem>
                                                        <SelectItem value="track4">Corporate and Commercial Law</SelectItem>
                                                        <SelectItem value="track5">International Law and Relations</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {(watchPresentationType === "paper_presentation" || watchPresentationType === "poster_presentation") && (
                                        <FormField
                                            control={form.control}
                                            name="paperTitle"
                                            render={({ field }) => (
                                                <FormItem className="md:col-span-2">
                                                    <FormLabel className="font-sans font-semibold text-foreground/80">Title of Paper/Poster</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter the full title of your research" className="bg-[#FBFAF8] border-border/60 h-12" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}

                                </div>
                            </div>

                            {/* Section 3: Summary Display */}
                            <div className="pt-6">
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-primary font-bold font-sans">
                                            <Calculator className="h-5 w-5" /> Subtotal Calculation
                                        </div>
                                        <p className="text-sm text-foreground/70 font-sans max-w-sm">
                                            {watchDelegates}x {watchCategory || "Category"} {watchPresentationType === "attendee" ? "Attendee" : "Author"} package(s).
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <div className="text-xs text-muted-foreground font-sans font-bold uppercase tracking-wider mb-1">Total Amount Due</div>
                                        <div className="font-heading text-4xl font-bold text-foreground">
                                            {calculatedTotal.symbol} {calculatedTotal.amount.toLocaleString()} <span className="text-lg text-muted-foreground font-sans font-normal">{calculatedTotal.currency}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Legal / Terms */}
                            <div className="space-y-4 pt-4 border-t border-border/40">
                                <FormField
                                    control={form.control}
                                    name="termsAccepted"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border/40 rounded-xl bg-white/50">
                                            <FormControl>
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded border-primary/50 text-primary focus:ring-primary mt-0.5"
                                                    checked={field.value === true}
                                                    onChange={(e) => field.onChange(e.target.checked)}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="font-sans cursor-pointer text-sm">
                                                    I have read and agree to the <a href="/terms-and-conditions" target="_blank" className="text-primary hover:underline">Terms & Conditions</a> of the conference.
                                                </FormLabel>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="refundPolicyAccepted"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border/40 rounded-xl bg-white/50">
                                            <FormControl>
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded border-primary/50 text-primary focus:ring-primary mt-0.5"
                                                    checked={field.value === true}
                                                    onChange={(e) => field.onChange(e.target.checked)}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="font-sans cursor-pointer text-sm">
                                                    I acknowledge and accept the <a href="/refund-policy" target="_blank" className="text-primary hover:underline">Cancellation and Refund Policy</a>.
                                                </FormLabel>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button disabled={isSubmitting || calculatedTotal.amount === 0 || !isLegalAccepted} type="submit" className="w-full h-16 text-xl font-bold font-sans bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 group transition-all">
                                {isSubmitting ? "Initializing Gateway..." : "Proceed to Secure Payment"} <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="text-center text-xs text-muted-foreground font-sans mt-4 flex items-center justify-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                                Payments processed securely by Razorpay using 256-bit encryption.
                            </p>

                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
