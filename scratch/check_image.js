const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    const width = buffer.readInt32BE(16);
    const height = buffer.readInt32BE(20);
    return { width, height };
}

try {
    const p = path.join(process.cwd(), 'app', 'logo-circle.png');
    console.log(JSON.stringify(getDimensions(p)));
} catch (e) {
    console.error(e);
}
