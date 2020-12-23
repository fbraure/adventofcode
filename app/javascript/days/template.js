const readFile = require("fs").readFileSync;

const file = readFile(__dirname + '../inputs/02.input', 'utf-8')
  .split('\n')
  .filter((_)=>_.trim())
  .each((line)=>{
    console.log(line)
  })


  export const exec_16 = () => {
    let aInput = inputs

    let result1 = null
    inputs.forEach(input=>{
    })
    document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-1 : ${result1}<p>`)

    let result2 = null
    inputs.forEach(input=>{
    })
    document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-2 : ${result2}<p>`)
  }



