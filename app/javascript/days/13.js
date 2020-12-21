const readFile = require("fs").readFileSync;

const file = readFile(__dirname + '../inputs/02.input', 'utf-8')
  .split('\n')
  .filter((_)=>_.trim())
  .each((line)=>{
    console.log(line)
  })

