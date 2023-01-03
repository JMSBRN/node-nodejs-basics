import path, { dirname } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { createRequire } from 'module';
import  * as c from './files/c.js';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const  a = require('./files/a.json');
const  b = require('./files/b.json');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();

let unknownObject;
c
if (random > 0.5) {
   unknownObject =  a
} else {
   unknownObject = b
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
