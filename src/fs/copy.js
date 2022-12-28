import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readdirSync, copyFile, mkdir, existsSync } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const srcDir = path.join(_dirname, 'files');
const destDir = path.join(_dirname, 'files_copy');
const createCopyFolderWithContent = async (src, dist) => {
    if (existsSync(src)) {
    const files = readdirSync(src, (err, data) => {
        if (err) throw err;
        return data ;
    });
    mkdir(dist, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    files.map(file => {
        copyFile(path.join(src, file), path.join(destDir, file), (err) => {
           if (err) throw err;
       });
    });
   } else {
     throw new Error('FS operation failed')
   }
};
createCopyFolderWithContent(srcDir, destDir);