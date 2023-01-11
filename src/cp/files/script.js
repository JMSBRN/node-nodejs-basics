const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.send(`Received from child process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);
process.on('message' , (data) => {
    process.stdout.write(`reseved from master process :  ${data}`)
})
