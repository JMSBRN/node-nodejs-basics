import { createReadStream, createWriteStream, readdir } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesDirectory = join(__dirname, "./files");
const unZip = zlib.createGunzip();

const decompress = () => {
  readdir(filesDirectory, (err, data) => {
    if (err) throw err;
    data.map((el) => {
      switch (el) {
        case "archive.gz":
          const r = createReadStream(join(filesDirectory, "archive.gz"));
          const w = createWriteStream(
            join(filesDirectory, "fileToCompress.txt")
          );
          r.pipe(unZip).pipe(w);
        default:
          return;
      }
    });
  });
};

decompress();
