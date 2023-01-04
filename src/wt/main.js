import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
const pathToWorker = join(
  dirname(fileURLToPath(import.meta.url)),
  "./worker.js"
);
const performCalculations = async () => {
  const worker = new Worker(pathToWorker, {
    workerData: 12,
  });
  worker.on("message", (msg) => {
    console.log("result from worker", msg);
  });
};

await performCalculations();
