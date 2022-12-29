import path from "path";
import { rename, getDirname } from "./modules.js";

const _dirname = getDirname(import.meta.url);
const pathToFileFolder = path.join(_dirname, "./files");
rename(pathToFileFolder, 'wrongFilename.txt', 'properFilename.md');
