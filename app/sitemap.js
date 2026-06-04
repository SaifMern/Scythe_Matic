const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scythematic.com';

export default function sitemap() {
  return ['', '/about', '/services', '/team', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
