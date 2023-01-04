import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const gzip = zlib.createGzip();

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, "./files", "fileToCompress.txt");
const pathToZipFile = join(__dirname, "./files", "archive.gz");

const compress = () => {
  const r = createReadStream(pathToFile);
  const w = createWriteStream(pathToZipFile);
  r.pipe(gzip).pipe(w);
};
compress();
