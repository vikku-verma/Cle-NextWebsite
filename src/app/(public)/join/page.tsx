"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Check, ChevronRight, Star, Shield, Zap, BookOpen, Briefcase, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    organization: z.string().min(2, "Organization name is required"),
    role: z.string().min(2, "Role/Position is required"),
    plan: z.string().min(1, "Please select a membership plan"),
});

type FormValues = z.infer<typeof formSchema>;

export default function JoinPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            plan: "professional",
        },
    });

    const selectedPlan = watch("plan");

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-background">
                <Card className="max-w-md w-full text-center p-8 border-accent/20 shadow-2xl">
                    <div className="h-20 w-20 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl font-heading mb-4">Welcome to CLE!</CardTitle>
                    <CardDescription className="text-lg">
                        Your membership application has been submitted successfully. We will review your details and get back to you within 24-48 hours.
                    </CardDescription>
                    <div className="mt-8">
                        <Button asChild className="bg-primary text-white">
                            <Link href="/dashboard">Back to Home</Link>
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            <div className="container px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Left Column: Form */}
                        <div className="lg:col-span-3">
                            <div className="mb-10">
                                <h1 className="text-4xl font-extrabold font-heading text-foreground mb-4">
                                    Join the Excellence
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    Complete the form below to become a member of the Centre of Legal Excellence.
                                </p>
                            </div>

                            <Card className="border-border/50 shadow-xl bg-card">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Membership Registration</CardTitle>
                                        <CardDescription>Enter your professional details to get started.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName">Full Name</Label>
                                                <Input
                                                    id="fullName"
                                                    placeholder="John Doe"
                                                    {...register("fullName")}
                                                    className={errors.fullName ? "border-destructive" : ""}
                                                />
                                                {errors.fullName && (
                                                    <p className="text-xs text-destructive font-medium">{errors.fullName.message}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    {...register("email")}
                                                    className={errors.email ? "border-destructive" : ""}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    placeholder="+91 99999 99999"
                                                    {...register("phone")}
                                                    className={errors.phone ? "border-destructive" : ""}
                                                />
                                                {errors.phone && (
                                                    <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="plan">Target Plan</Label>
                                                <Select
                                                    defaultValue="professional"
                                                    onValueChange={(value) => setValue("plan", value)}
                                                >
                                                    <SelectTrigger className={errors.plan ? "border-destructive" : ""}>
                                                        <SelectValue placeholder="Select a plan" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="student">Student Membership</SelectItem>
                                                        <SelectItem value="professional">Professional Membership</SelectItem>
                                                        <SelectItem value="institution">Institutional Membership</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.plan && (
                                                    <p className="text-xs text-destructive font-medium">{errors.plan.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="organization">Organization / Institution</Label>
                                            <Input
                                                id="organization"
                                                placeholder="Law Firm, University, or Company"
                                                {...register("organization")}
                                                className={errors.organization ? "border-destructive" : ""}
                                            />
                                            {errors.organization && (
                                                <p className="text-xs text-destructive font-medium">{errors.organization.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="role">Role / Position</Label>
                                            <Input
                                                id="role"
                                                placeholder="Advocate, Student, Professor, etc."
                                                {...register("role")}
                                                className={errors.role ? "border-destructive" : ""}
                                            />
                                            {errors.role && (
                                                <p className="text-xs text-destructive font-medium">{errors.role.message}</p>
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-6">
                                        <Button
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-bold shadow-lg shadow-primary/20"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </span>
                                            ) : (
                                                "Complete Registration"
                                            )}
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </div>

                        {/* Right Column: Benefits & Summary */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Summary Card */}
                            <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-2xl" />

                                <CardHeader>
                                    <CardTitle className="text-2xl font-heading">Plan Selection</CardTitle>
                                    <CardDescription className="text-primary-foreground/70">
                                        You are applying for the following membership tier.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            {selectedPlan === "student" && <BookOpen className="h-6 w-6" />}
                                            {selectedPlan === "professional" && <Briefcase className="h-6 w-6" />}
                                            {selectedPlan === "institution" && <Building2 className="h-6 w-6" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg capitalize">{selectedPlan} Member</p>
                                            <p className="text-xs uppercase tracking-widest font-black text-white/50">Registration Pending</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-sm font-bold uppercase tracking-wider text-white/60">Core Benefits</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Unlimited Journal Access",
                                                "Network with Legal Pros",
                                                "Priority Certification",
                                                "Exclusive CLE Events"
                                            ].map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm">
                                                    <div className="h-5 w-5 bg-white/20 rounded-full flex items-center justify-center">
                                                        <Check className="h-3 w-3" />
                                                    </div>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { icon: Star, label: "Premium" },
                                    { icon: Shield, label: "Secure" },
                                    { icon: Zap, label: "Fast" }
                                ].map((badge, i) => (
                                    <div key={i} className="bg-card border border-border/50 p-4 rounded-xl text-center flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
                                        <badge.icon className="h-5 w-5 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{badge.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Quote */}
                            <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-2xl">
                                <p className="text-foreground italic text-sm leading-relaxed mb-4">
                                    "CLE has revolutionized how our firm accesses legal research. The membership is an invaluable asset for any practitioner."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-slate-200" />
                                    <div>
                                        <p className="text-xs font-bold">Sarah Jenkins</p>
                                        <p className="text-[10px] text-muted-foreground">Senior Advocate, High Court</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
