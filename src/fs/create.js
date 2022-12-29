import {create, getDirname}  from './files/modules.js';

const _dirname = getDirname(import.meta.url);
const path = `${_dirname}/fresh.txt`;

create(path);