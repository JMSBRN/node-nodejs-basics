import path from 'path';
import { getDirname, read } from './modules.js'
const _dirname = getDirname(import.meta.url);
const pathToFolder = path.join(_dirname, '/files')

await read(pathToFolder, 'fileToRead.txt');