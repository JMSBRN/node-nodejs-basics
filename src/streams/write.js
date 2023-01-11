import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, './files', 'fileToWrite.txt');

const write = async () => {
    process.stdin.pipe(createWriteStream(pathToFile));
    process.stdin.resume();
};

await write();