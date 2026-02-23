"use client";

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
import { FileUp, Send } from "lucide-react";

// Basic registration schema
const registrationSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    institution: z.string().min(2, "Institution/Organization name is required."),
    category: z.string().min(1, "Please select a participation category."),
    track: z.string().min(1, "Please select a thematic track."),
    presentationType: z.string().min(1, "Please select presentation type."),
});

export function RegistrationForm() {
    const form = useForm<z.infer<typeof registrationSchema>>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            institution: "",
            category: "",
            track: "",
            presentationType: "Attendee Only",
        },
    });

    function onSubmit(values: z.infer<typeof registrationSchema>) {
        console.log("Registration submitted:", values);
        alert("Registration form submitted successfully!");
        form.reset();
    }

    return (
        <section id="registration-form" className="py-24 bg-white relative border-t border-border/40">
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
                        Please fill out the form below to initiate your registration process. Once submitted, our team will contact you with payment details.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-[#FBFAF8] p-8 md:p-12 rounded-3xl border border-border/60 shadow-sm">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            {/* Personal Details */}
                            <div className="space-y-6">
                                <h3 className="font-heading text-xl font-semibold text-foreground border-b border-border/50 pb-2">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Dr. Jane Doe" className="bg-white" {...field} />
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
                                                    <Input placeholder="jane.doe@university.edu" className="bg-white" {...field} />
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
                                                    <Input placeholder="+1 234 567 8900" className="bg-white" {...field} />
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
                                                    <Input placeholder="University of Law" className="bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Conference Details */}
                            <div className="space-y-6 pt-4">
                                <h3 className="font-heading text-xl font-semibold text-foreground border-b border-border/50 pb-2">Participation Details</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Participation Category</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Select a category" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="student">Student (₹1,500)</SelectItem>
                                                        <SelectItem value="academician">Academician (₹3,500)</SelectItem>
                                                        <SelectItem value="professional">Professional (₹5,000)</SelectItem>
                                                        <SelectItem value="international">International ($150)</SelectItem>
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
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Presentation Type</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="attendee">Attendee Only</SelectItem>
                                                        <SelectItem value="paper_presentation">Paper Presentation</SelectItem>
                                                        <SelectItem value="poster_presentation">Poster Presentation</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="track"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-2">
                                                <FormLabel className="font-sans font-semibold text-foreground/80">Thematic Track (Optional if Attendee Only)</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white">
                                                            <SelectValue placeholder="Select primary track of interest" />
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
                                </div>
                            </div>

                            {/* Abstract Upload Mock */}
                            <div className="pt-4">
                                <div className="border border-dashed border-border p-8 rounded-xl bg-white text-center">
                                    <FileUp className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                                    <p className="font-sans text-sm font-semibold text-foreground/80 mb-1">Submitting a paper?</p>
                                    <p className="text-xs text-muted-foreground mb-4">You will receive an email link to upload your final 500-word abstract after completing initial registration.</p>
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-14 text-lg font-bold font-sans bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg">
                                Complete Registration <Send className="ml-2 h-5 w-5" />
                            </Button>

                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
