const fs = require('fs');
const crypto = require('crypto');

function fileHash(path) {
    return crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex').slice(0, 10);
}

const cssHash = fileHash('style.css');
const jsHash  = fileHash('script.js');

const htmlFiles = ['index.html', 'staff.html', 'privacy.html'];

for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/style\.css\?v=[^"']+/g,  `style.css?v=${cssHash}`);
    html = html.replace(/script\.js\?v=[^"']+/g,  `script.js?v=${jsHash}`);
    fs.writeFileSync(file, html);
}

console.log(`Build complete  css=${cssHash}  js=${jsHash}`);
