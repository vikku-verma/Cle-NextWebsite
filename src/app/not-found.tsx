import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center px-4">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-black text-muted-foreground">404</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter font-heading text-foreground">Lost in the Law?</h2>
            <p className="text-muted-foreground text-lg max-w-md">
                The page you are looking for might have been moved, deleted, or never existed in the first place.
            </p>
            <Button asChild variant="default" className="mt-4 px-8 py-6 rounded-full text-lg shadow-lg">
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    );
}
