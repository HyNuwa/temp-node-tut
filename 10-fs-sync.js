const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs');
//fs.readFileSync   ES lo mismo solo se desestructura
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(first, second)
writeFileSync('./content/result-sync.txt', `here is the result: 
${first}, ${second}`,
{flag:'a'} 
)
