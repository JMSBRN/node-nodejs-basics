import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { rename } from "./files/modules.js";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathToFileFolder = path.join(_dirname, "./files");
rename(pathToFileFolder, 'wrongFilename.txt', 'properFilename.md');
