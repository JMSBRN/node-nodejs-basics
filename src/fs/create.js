import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {create}  from './files/modules.js';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const path = `${_dirname}/fresh.txt`;

create(path);