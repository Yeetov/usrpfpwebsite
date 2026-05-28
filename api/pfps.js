export default async function handler(req, res) {
    try {
        const response = await fetch('https://raw.githubusercontent.com/UserPFP/UserPFP/main/import.css');
        if (!response.ok) throw new Error('fetch failed');
        const css = await response.text();
        const pfps = {};
        const rx = /src\^="https:\/\/cdn\.discordapp\.com\/avatars\/(\d+)\/".*?url\(([^)]+)\)/g;
        let m;
        while ((m = rx.exec(css)) !== null) pfps[m[1]] = m[2].replace(/['"]/g, '');
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(pfps);
    } catch {
        res.setHeader('Cache-Control', 's-maxage=60');
        res.status(500).json({});
    }
}
