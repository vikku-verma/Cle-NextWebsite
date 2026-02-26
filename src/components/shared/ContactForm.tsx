"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(100),
    lastName: z.string().min(1, "Last name is required").max(100),
    email: z.string()
        .email("Invalid email address")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address format"),
    phone: z.string().max(20).optional().or(z.literal('')),
    subject: z.enum([
        "Registration Query",
        "Paper Submission",
        "Sponsorship",
        "Technical Issue",
        "Other"
    ]),
    message: z.string().min(10, "Message must be at least 10 characters long").max(5000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: undefined,
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        const toastId = toast.loading("Sending message...");

        try {
            const res = await fetch("/api/conference2026/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json().catch(() => null);

            if (!res.ok) {
                throw new Error(
                    result?.error ||
                    result?.details?.message ||
                    "Failed to send message"
                );
            }

            toast.success("Message sent successfully! We'll be in touch soon.", {
                id: toastId,
            });
            form.reset();

        } catch (err: any) {
            toast.error(err.message || "Something went wrong.", {
                id: toastId,
            });
        }
    };

    const isSubmitting = form.formState.isSubmitting;

    return (
        <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="space-y-2 text-left">
                                <FormLabel className="text-sm font-bold text-foreground font-sans">First Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                    {/* Last Name */}
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="space-y-2 text-left">
                                <FormLabel className="text-sm font-bold text-foreground font-sans">Last Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Email Address */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-2 text-left">
                            <FormLabel className="text-sm font-bold text-foreground font-sans">Email Address <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                                />
                            </FormControl>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                {/* Phone Number */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="space-y-2 text-left">
                            <FormLabel className="text-sm font-bold text-foreground font-sans">Phone Number</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                                />
                            </FormControl>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                {/* Subject */}
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem className="space-y-2 text-left">
                            <FormLabel className="text-sm font-bold text-foreground font-sans">Subject <span className="text-destructive">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="w-full h-[50px] px-4 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans text-base text-foreground/90">
                                        <SelectValue placeholder="Select Subject" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl border-border/60 bg-white font-sans shadow-lg">
                                    <SelectItem value="Registration Query" className="focus:bg-primary/10 py-3 cursor-pointer rounded-lg mx-1 transition-colors">Registration Query</SelectItem>
                                    <SelectItem value="Paper Submission" className="focus:bg-primary/10 py-3 cursor-pointer rounded-lg mx-1 transition-colors">Paper Submission</SelectItem>
                                    <SelectItem value="Sponsorship" className="focus:bg-primary/10 py-3 cursor-pointer rounded-lg mx-1 transition-colors">Sponsorship</SelectItem>
                                    <SelectItem value="Technical Issue" className="focus:bg-primary/10 py-3 cursor-pointer rounded-lg mx-1 transition-colors">Technical Issue</SelectItem>
                                    <SelectItem value="Other" className="focus:bg-primary/10 py-3 cursor-pointer rounded-lg mx-1 transition-colors">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="space-y-2 text-left">
                            <FormLabel className="text-sm font-bold text-foreground font-sans">Message <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                                <textarea
                                    {...field}
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#FBFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans resize-none"
                                ></textarea>
                            </FormControl>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-sans py-4 px-6 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>
        </Form>
    );
}
