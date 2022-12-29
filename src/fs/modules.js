import path, { join, dirname, parse } from "path";
import { fileURLToPath } from "url";
import {
  existsSync,
  appendFile,
  readdirSync,
  copyFile,
  mkdir,
  renameSync,
  unlinkSync,
} from "fs";
const getDirname = (importMetaUrl) => {
  const _filename = fileURLToPath(importMetaUrl);
  const _dirname = dirname(_filename);
  return _dirname;
};
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
const remove = async (pathToFolder, fileToDelete) => {
  const pathWithFile = join(pathToFolder, fileToDelete);
  if (existsSync(pathWithFile)) {
    unlinkSync(pathWithFile, (err) => {
      if (err) throw err;
    });
  } else {
    throw new Error("FS operation failed");
  }
};
const list = async (pathToDir) => {
  const files = readdirSync(pathToDir);
  if (files.length !== 0) {
    files.forEach((file) => {
      console.log(parse(file).name);
    });
  } else {
    throw new Error("FS operation failed");
  }
};

export { getDirname, create, copy, rename, remove, list };
