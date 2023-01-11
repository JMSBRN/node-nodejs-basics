import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathTofile = join(__dirname, "./files", "fileToRead.txt");

const read = async () => {
  createReadStream(pathTofile).pipe(process.stdout);
};

await read();
