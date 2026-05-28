export default async function handler(req, res) {
    try {
        const response = await fetch('https://discord.com/api/guilds/1129784704267210844/widget.json');
        if (!response.ok) throw new Error('fetch failed');
        const data = await response.json();
        res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({ presence_count: data.presence_count || 0 });
    } catch {
        res.setHeader('Cache-Control', 's-maxage=30');
        res.status(500).json({ presence_count: 0 });
    }
}
