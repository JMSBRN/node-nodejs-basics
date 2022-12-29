import path, { join } from "path";
import {
  existsSync,
  appendFile,
  readdirSync,
  copyFile,
  mkdir,
  renameSync,
} from "fs";

const create = (path) => {
  if (existsSync(path)) {
    throw new Error("FS operation failed");
  } else {
    appendFile(path, "I am fresh and young", (err) => {
      if (err) throw err;
    });
  }
};
const copy = async (src, dest) => {
  if (existsSync(src)) {
    const files = readdirSync(src, (err, data) => {
      if (err) throw err;
      return data;
    });
    mkdir(dest, (err) => {
      if (err) throw new Error("FS operation failed");
    });
    files.map((file) => {
      copyFile(path.join(src, file), path.join(dest, file), (err) => {
        if (err) throw err;
      });
    });
  } else {
    throw new Error("FS operation failed");
  }
};
const rename = async (pathToFolder, oldFile, newFile) => {
  const pathOldFile = path.join(pathToFolder, oldFile);
  if (
    existsSync(pathOldFile) &&
    !existsSync(path.join(pathToFolder, newFile))
  ) {
    renameSync(pathOldFile, join(pathToFolder, newFile));
  } else {
    throw new Error("FS operation failed");
  }
};

export { create, copy, rename };
