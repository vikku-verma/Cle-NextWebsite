import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cle-platform.com';

    // Base routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/products',
        '/products/workshops',
        '/products/journals',
        '/products/conferences',
        '/mentors',
        '/blog',
        '/membership',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
