let inputs = [
"##.#....".split(""),
"...#...#".split(""),
".#.#.##.".split(""),
"..#.#...".split(""),
".###....".split(""),
".##.#...".split(""),
"#.##..##".split(""),
"#.####..".split("")]
inputs = [
".#.".split(""),
"..#".split(""),
"###".split("")]

const duplicate = (aInput) => {
  return new Array(...aInput);
}

const duplicateInputs = (anInputs) => {
  return new Array(...anInputs.map(item=>duplicate(item)));
}

const duplicateAllInputs = (anAllInputs) => {
  return new Array(...anAllInputs.map(item=>duplicateInputs(item)));
}

const newside = (anInputs) => {
  return duplicateInputs(anInputs).map(item=>item.join("").replaceAll("#",".").split(""))
}

const expand = (allInputs) => {
  allInputs.forEach(aInputs=>{
    for(let i = 0; i < aInputs.length; ++i){
      aInputs[i].push(".")
      aInputs[i].unshift(".")
    }
  })
  allInputs.push(newside(allInputs[0]))
  allInputs.unshift(newside(allInputs[0]))
}

const countNbAdjacentFilled = (allInputs, z, row, col) =>{
  let nbSeat = 0;
  if(z > 0){
    if(row > 0){
      if(allInputs[z-1][row-1][col-1] === "#"){nbSeat++}
      if(allInputs[z-1][row-1][col] === "#"){nbSeat++}
      if(allInputs[z-1][row-1][col+1] === "#"){nbSeat++}
    }
    if(allInputs[z-1][row][col-1] === "#"){nbSeat++}
    if(allInputs[z-1][row][col] === "#"){nbSeat++}
    if(allInputs[z-1][row][col+1] === "#"){nbSeat++}
    if(row < allInputs[z-1].length - 1){
      if(allInputs[z-1][row+1][col-1] === "#"){nbSeat++}
      if(allInputs[z-1][row+1][col] === "#"){nbSeat++}
      if(allInputs[z-1][row+1][col+1] === "#"){nbSeat++}
    }
  }
  if(row > 0){
    if(allInputs[z][row-1][col-1] === "#"){nbSeat++}
    if(allInputs[z][row-1][col] === "#"){nbSeat++}
    if(allInputs[z][row-1][col+1] === "#"){nbSeat++}
  }
  if(allInputs[z][row][col-1] === "#"){nbSeat++}
  if(allInputs[z][row][col+1] === "#"){nbSeat++}
  if(row < allInputs[z].length - 1){
    if(allInputs[z][row+1][col-1] === "#"){nbSeat++}
    if(allInputs[z][row+1][col+1] === "#"){nbSeat++}
    if(allInputs[z][row+1][col] === "#"){nbSeat++}
  }
  if(z < allInputs.length - 1){
    if(row > 0){
      if(allInputs[z+1][row-1][col-1] === "#"){nbSeat++}
      if(allInputs[z+1][row-1][col] === "#"){nbSeat++}
      if(allInputs[z+1][row-1][col+1] === "#"){nbSeat++}
    }
    if(allInputs[z+1][row][col-1] === "#"){nbSeat++}
    if(allInputs[z+1][row][col] === "#"){nbSeat++}
    if(allInputs[z+1][row][col+1] === "#"){nbSeat++}
    if(row < allInputs[z+1].length - 1){
      if(allInputs[z+1][row+1][col-1] === "#"){nbSeat++}
      if(allInputs[z+1][row+1][col] === "#"){nbSeat++}
      if(allInputs[z+1][row+1][col+1] === "#"){nbSeat++}
    }
  }
  // console.log(`${z} ${row} ${col} ${nbSeat} `)
  return nbSeat
}

const countNbSeatsFilled = (allInputs) => {
  let nbSeat = 0
  allInputs.forEach(aInputs=>{
    for(let row = 0; row < aInputs.length; ++row){
      for(let col = 0; col < aInputs[row].length; ++col){
        if(aInputs[row][col] === "#"){
          nbSeat = nbSeat + 1;
        }
      }
    }
  })
  return nbSeat;
}

export const exec_17 = () => {
  let allInputs = [duplicateInputs(inputs)]
  let NbNeigh = null
  let aClone = null
  for(let step = 1; step <= 6; ++step){
    console.log(`step ${step} start`)
    expand(allInputs)
    aClone = duplicateAllInputs(allInputs)
    for(let z = 0; z < allInputs.length; ++z){
      for(let i = 0; i < allInputs[z].length; ++i){
        for(let j = 0; j < allInputs[z][i].length; ++j){
          NbNeigh = countNbAdjacentFilled(aClone, z, i, j);
          if(aClone[z][i][j] === "#"){
            if(![2, 3].includes(NbNeigh)){
              allInputs[z][i][j] = "."
            }
          } else if(aClone[z][i][j] === ".") {
            if(3 === NbNeigh){
              allInputs[z][i][j] = "#"
            }
          }
        }
      }
    }
  }
  console.log(allInputs)
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-1 : ${countNbSeatsFilled(allInputs  )}<p>`)

  // let result2 = null
  // inputs.forEach(input=>{
  // })
  // document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-2 : ${result2}<p>`)
}
