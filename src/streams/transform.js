import { Transform } from 'stream'

const transformToReversesText = () => {
    return new Transform({
        transform(chunk, enc, cb) {
            const tranformChunck = chunk.toString().split('').reverse().join('');
            cb(null, tranformChunck);
        }
    })
};
 const tranformText = transformToReversesText();
process.stdin.pipe(tranformText).pipe(process.stdout);