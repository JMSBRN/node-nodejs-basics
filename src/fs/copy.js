import path from 'path';
import { copy, getDirname } from './files/modules.js';

const _dirname = getDirname(import.meta.url);
const srcDir = path.join(_dirname, 'files');
const destDir = path.join(_dirname, 'files_copy');

copy(srcDir, destDir);