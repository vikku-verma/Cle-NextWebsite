"use client";

import { useState } from "react";
import { useForm, FieldValues, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema, Product } from "@/lib/schemas";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronRight, ChevronLeft, Upload, Loader2, X } from "lucide-react";

const steps = [
    { id: 1, title: "Basics" },
    { id: 2, title: "Pricing" },
    { id: 3, title: "Details" },
    { id: 4, title: "Media & SEO" },
    { id: 5, title: "Review" }
];

export function ProductWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [keywordsInput, setKeywordsInput] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            product_category: "Journal",
            product_name: "",
            product_id: "",
            product_manager_name: "",
            product_manager_email: "",
            price_in_inr: 0,
            price_in_usd: 0,
            start_date: new Date().toISOString().split('T')[0],
            end_date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
            about_product: "",
            product_image: "",
            keywords: [],
        },
        mode: "onChange"
    });

    const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = form;
    const formData = watch() as Product;

    const handleNext = async () => {
        let valid = false;
        const fieldsToValidate: (keyof Product)[] = [];

        if (currentStep === 1) fieldsToValidate.push("product_id", "product_name", "product_category", "product_manager_name", "product_manager_email");
        if (currentStep === 2) fieldsToValidate.push("price_in_inr", "price_in_usd", "start_date", "end_date");
        if (currentStep === 3) fieldsToValidate.push("about_product");
        if (currentStep === 4) fieldsToValidate.push("product_image", "keywords");

        if (fieldsToValidate.length > 0) {
            valid = await trigger(fieldsToValidate);
        } else {
            valid = true;
        }

        if (valid) setCurrentStep((prev) => Math.min(prev + 1, 5));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit = async (data: FieldValues) => {
        const productData = data as Product;
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/create-product', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });
            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    // router.push('/products'); 
                    // We'll keep the success state visible for now since we don't have a products page to go to in this verified context
                }, 1500);
            } else {
                alert(`Error: ${result.error || 'Failed to submit'}`);
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="mx-auto max-w-3xl rounded-2xl border bg-card shadow-lg p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Product Created Successfully!</h2>
                <p className="text-muted-foreground">Your product has been submitted and is pending review.</p>
                <div className="mt-8">
                    <Button onClick={() => window.location.href = '/products'} variant="outline">
                        Go to Products
                    </Button>
                </div>
            </div>
        );
    }

    const addKeyword = () => {
        if (keywordsInput.trim() && !formData.keywords?.includes(keywordsInput.trim())) {
            setValue("keywords", [...(formData.keywords || []), keywordsInput.trim()]);
            setKeywordsInput("");
        }
    };

    return (
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card shadow-lg">
            {/* Progress Header */}
            <div className="border-b p-6 bg-surface">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-heading text-xl font-bold">New Product Wizard</h2>
                    <span className="text-sm text-muted-foreground">Step {currentStep} of {steps.length}</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/20">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <div className="mt-4 hidden md:flex justify-between px-2">
                    {steps.map((step) => (
                        <div key={step.id} className={`text-xs font-medium ${step.id <= currentStep ? "text-primary" : "text-muted-foreground"}`}>
                            {step.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-8 min-h-[450px]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: BASICS */}
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Product ID</label>
                                        <Input {...register("product_id")} placeholder="e.g. CLE-PROD-001" />
                                        {errors.product_id && <p className="text-sm text-red-500">{errors.product_id.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Product Name</label>
                                        <Input {...register("product_name")} placeholder="Enter product title" />
                                        {errors.product_name && <p className="text-sm text-red-500">{errors.product_name.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Category</label>
                                    <Controller
                                        control={form.control}
                                        name="product_category"
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Journal">Journal</SelectItem>
                                                    <SelectItem value="Workshop">Workshop</SelectItem>
                                                    <SelectItem value="Training Program">Training Program</SelectItem>
                                                    <SelectItem value="Conference">Conference</SelectItem>7
                                                    <SelectItem value="Mentorship">Mentorship</SelectItem>
                                                    <SelectItem value="Subscription">Subscription</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.product_category && <p className="text-sm text-red-500">{errors.product_category.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Manager Name</label>
                                        <Input {...register("product_manager_name")} placeholder="Full Name" />
                                        {errors.product_manager_name && <p className="text-sm text-red-500">{errors.product_manager_name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Manager Email</label>
                                        <Input {...register("product_manager_email")} placeholder="name@example.com" />
                                        {errors.product_manager_email && <p className="text-sm text-red-500">{errors.product_manager_email.message}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: PRICING & DATES */}
                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Price (INR)</label>
                                        <Input type="number" {...register("price_in_inr")} placeholder="₹" />
                                        {errors.price_in_inr && <p className="text-sm text-red-500">{errors.price_in_inr.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Price (USD)</label>
                                        <Input type="number" {...register("price_in_usd")} placeholder="$" />
                                        {errors.price_in_usd && <p className="text-sm text-red-500">{errors.price_in_usd.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Start Date</label>
                                        <Input type="date" {...register("start_date")} />
                                        {errors.start_date && <p className="text-sm text-red-500">{errors.start_date.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">End Date</label>
                                        <Input type="date" {...register("end_date")} />
                                        {errors.end_date && <p className="text-sm text-red-500">{errors.end_date.message}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: DETAILS */}
                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">About the Product</label>
                                    <Textarea
                                        {...register("about_product")}
                                        className="min-h-[200px]"
                                        placeholder="Describe the product in detail..."
                                    />
                                    {errors.about_product && <p className="text-sm text-red-500">{errors.about_product.message}</p>}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: MEDIA & SEO */}
                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Product Image URL</label>
                                    <div className="flex gap-2">
                                        <Input {...register("product_image")} placeholder="https://..." />
                                        <Button type="button" variant="secondary" size="icon"><Upload className="h-4 w-4" /></Button>
                                    </div>
                                    {errors.product_image && <p className="text-sm text-red-500">{errors.product_image.message}</p>}

                                    {/* Preview */}
                                    {formData.product_image && !errors.product_image && (
                                        <div className="mt-2 aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                                            <img src={formData.product_image} alt="Preview" className="h-full w-full object-cover" />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Keywords / Tags</label>
                                    <div className="flex gap-2">
                                        <Input
                                            value={keywordsInput}
                                            onChange={(e) => setKeywordsInput(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                                            placeholder="Add keywords..."
                                        />
                                        <Button type="button" onClick={addKeyword} variant="secondary">Add</Button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.keywords?.map((tag) => (
                                        <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                            {tag}
                                            <button type="button" onClick={() => setValue("keywords", formData.keywords?.filter(t => t !== tag))} className="text-primary hover:text-red-500">
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 5: REVIEW */}
                        {currentStep === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="rounded-xl bg-muted/50 p-6 space-y-4">
                                    <h3 className="font-heading text-lg font-bold">Review Product Details</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                        <div>
                                            <span className="text-muted-foreground block">Product ID</span>
                                            <span className="font-medium">{formData.product_id}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground block">Name</span>
                                            <span className="font-medium">{formData.product_name}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground block">Category</span>
                                            <span className="font-medium">{formData.product_category}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground block">Price</span>
                                            <span className="font-medium">₹{formData.price_in_inr} / ${formData.price_in_usd}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground block">Dates</span>
                                            <span className="font-medium">{formData.start_date} to {formData.end_date}</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground block">Manager</span>
                                            <span className="font-medium">{formData.product_manager_name} ({formData.product_manager_email})</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-2">
                                        <span className="text-muted-foreground block text-sm mb-1">About Product</span>
                                        <p className="text-sm line-clamp-3">{formData.about_product}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 p-4 rounded-lg border bg-green-500/10 text-green-700 text-sm">
                                    <Check className="h-4 w-4" />
                                    Everything looks good. Ready to submit?
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </form>
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between border-t p-6 bg-muted/20 rounded-b-2xl">
                <Button
                    type="button"
                    variant="ghost"
                    onClick={handlePrev}
                    disabled={currentStep === 1 || isSubmitting}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                {currentStep < 5 ? (
                    <Button type="button" onClick={handleNext}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                            </>
                        ) : (
                            "Submit Product"
                        )}
                    </Button>
                )}
            </div>
        </div>
    );
}
