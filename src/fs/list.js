import path from 'path';
import { getDirname, list } from './modules.js'
const _dirname = getDirname(import.meta.url);
const pathToDir = path.join(_dirname, '/files');

await list(pathToDir);