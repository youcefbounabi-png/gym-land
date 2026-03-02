import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloads = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Panatta_Sport_logo.svg/2560px-Panatta_Sport_logo.svg.png', dest: 'public/assets/partners/panatta.png' },
    { url: 'https://bodytone.eu/wp-content/uploads/2020/06/Logo-Bodytone-Negro.png', dest: 'public/assets/partners/bodytone.png' }
];

downloads.forEach(({ url, dest }) => {
    // Ensure directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${dest}`);
            });
        } else {
            console.error(`Failed to download ${url}: Status Code ${response.statusCode}`);
            file.close();
            fs.unlink(dest, () => { });
        }
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        console.error(`Error downloading ${url}: ${err.message}`);
    });
});
