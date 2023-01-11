 import crypto from 'crypto';

const calculateHash = async (textFromFile) => {
    console.log(crypto.createHash('sha256').update(textFromFile).digest('hex')); 
};
export { calculateHash };