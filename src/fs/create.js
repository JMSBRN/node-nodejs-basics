import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync, appendFile } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const path = `${_dirname}/fresh.txt`;
const create = (pathNewFile) => {
 if (existsSync(pathNewFile)) {
        throw new Error('FS operation failed')
    } else {
        appendFile(pathNewFile, 'I am fresh and young', (err) => {
          if(err) throw err;    
        })
    }
};
create(path);