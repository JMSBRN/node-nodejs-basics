import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { copy } from './files/modules.js';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const srcDir = path.join(_dirname, 'files');
const destDir = path.join(_dirname, 'files_copy');

copy(srcDir, destDir);