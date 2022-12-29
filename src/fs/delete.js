import { getDirname, remove } from './modules.js'
import path from 'path';

const _dirname = getDirname(import.meta.url);
const pathToFolder = path.join(_dirname, '/files');

await remove(pathToFolder,'fileToRemove.txt');