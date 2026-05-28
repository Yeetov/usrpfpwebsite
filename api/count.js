export default async function handler(req, res) {
    try {
        const response = await fetch('https://raw.githubusercontent.com/UserPFP/UserPFP/main/import.css');
        if (!response.ok) throw new Error('fetch failed');
        const css = await response.text();
        const ids = new Set([...css.matchAll(/\/avatars\/(\d+)\//g)].map(m => m[1]));
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({ count: ids.size });
    } catch {
        res.setHeader('Cache-Control', 's-maxage=60');
        res.status(500).json({ count: 0 });
    }
}
