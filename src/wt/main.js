import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { isMainThread, Worker, BroadcastChannel, workerData, parentPort } from "worker_threads";
const pathToWorker = join(
  dirname(fileURLToPath(import.meta.url)),
  "./worker.js"
);
const bc = new BroadcastChannel('ch_1');
const performCalculations = async () => {
  const worker = new Worker(pathToWorker, {
    workerData: 12,
  });
  worker.on("message", (msg) => {
    console.log("result from worker", msg);
  });
};

// await performCalculations();
 if(isMainThread) {
  new Worker(pathToWorker);
  const arr = [];
  bc.onmessage = (msg) => {
    for (let i = 0; i < msg.data; i++) {
      const worker = new Worker(fileURLToPath(import.meta.url), {
        workerData: i + 10,
      });
      worker.on('message', (msg) => {
        arr.push(msg)
      })
    }
  }
  setTimeout(() => {
    console.log(arr.sort((a, b) => a.data - b.data));
    bc.close();
  }, 1000);
 } else {
    parentPort.postMessage({status: workerData ? 'resolved' : 'error' , data: workerData || null });
 }