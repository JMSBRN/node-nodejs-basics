import { workerData, parentPort, BroadcastChannel } from "worker_threads";
import os from 'os';

const bc = new BroadcastChannel('ch_1');
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const sendResult = () => {
  bc.postMessage(os.cpus().length);
  //parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
