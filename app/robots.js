export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://scythematic.com/sitemap.xml',
  };
}
