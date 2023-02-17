const { readFileSync, writeFileSync } = require("fs");


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result bro: ${first},${second}`,
    {flag: 'a'}//for appending in the file
)