import {create, getDirname}  from './modules.js';

const _dirname = getDirname(import.meta.url);
const path = `${_dirname}/fresh.txt`;

create(path);