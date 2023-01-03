 import crypto from 'crypto';
 import { dirname, join } from 'path';
 import { fileURLToPath } from 'url';
 import { readFileSync } from 'fs';
 import { calculateHash } from './modules.js';

 const _filename = fileURLToPath(import.meta.url);
 const _dirname = dirname(_filename);
 const pathToFile = join(_dirname, './files', 'fileToCalculateHashFor.txt');
 const textFromFile = readFileSync(pathToFile, 'utf-8')
 await calculateHash(textFromFile);