import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const forkChildProcess = async (args) => {
   const child  = fork(join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js'));
   child.send(args);
   child.on('message', (data) => {
    process.stdout.write(data);
   })
};

forkChildProcess(['someArgument1', 'someArgument2']);
