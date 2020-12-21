let inputs =  [
"LLLLLLL.LLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLL.LLLLL..LLLLLLLLLLLLLLLLLL",
"LLLLLLL.LLLLLL.LLLL.LLL.LLLLLLLLLL.LLLLLLL.LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL",
".LLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LL.LLLLLLL.LLL.LL.LLLLLLLLLLL.LLL..LLLLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL",
"LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLL..LLL.LLLLLL.LLLLLL.LLLL.LLLL.L.LLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.L.LL.LLLL.LLLLLL..LLLLLL.LLLLLLLL..LLLLL.LLLLLLLL..LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
".LLLLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLL",
"..LLLL......L.L..L..L..L.....LL..L.....L.....LLL.L.L.LL...L.....L...LL..L......L...LL......L",
"LL.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLL.LLLL.LLLLLL..LLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL",
"LLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLL.LL.LLLLLL.LLLL.LLLLLLLL.LLLLLL..LL.LLLLL.LLLL..L.",
"LLLLLLLLLLLLLL.LL.LLLLL.LLLLLLLLLLLLL.L.LL.LLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLL",
"LLLLLLL.L.LLLLLL.LLLLLLLLL.LL.LLLLL.LLLLL..L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LL",
"LLLLLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLL..LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.L.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLL.LLL.LLLLLLLLLLLLLL.LLL.LLLLLLLLL.LLLLL.L.LLLL.LLLLLLLLLLL",
".L......L.LL.L...L.....L..L..L...LL.L.......L.............LL.L......LL.L...LL.L...L.....LL..",
"LL.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLL.L.L.LLLLLLLLL.LLLLLLLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
"LLLL.LL.LL.LLLLL.LLLL.L.LLLLL.LLLLLLLLLL.LLLLLLLLL..L.LLLLLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLLL.L",
"LLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.L",
".......LL...L.......LL...L.......LLL......L..L...L...L.....LL..L.L......L.LL.....LL.....L...",
"LLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLL",
"LLLLLLL.LLLLLLLLLLLLLL..LLLLLLLLLLLLL.LLLL.LL.LLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLLLLL.LLLLLL.L.LLL.L.LLL.LLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL",
"L.LLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLL",
"LL.LLLL.LLLLLLLL.LLLLLL.LLLLL.LL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLLLL.LL.LLLLLLLL",
"LLLLL.L.LLLLLLLL.LLLLLLLLLL.L.LLL.LLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLL.L.LLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LL.LLL.LLLL",
"L..LL.........L....L....L..L.LL.....LL.L.LL...L........L...L...L...L.LLL..LL..LLLLL.L.......",
"LLLLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLL.LLLLLLL.L..LLLLLLL",
"LLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLL.L.LL.LLLLLLLL",
".LLLLLL.LLLLLL.L.LLLLLL.LLLLL.LLLLLLL.L.LL.LLLLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL..LLLLLLLL",
"LL.LLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
"L..LL..........L......L..L....L..L.L.LL.LLL..L.L.L.LLLL...L..L..L.L.L..LLLL.L.L...L..LL.....",
"LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLL.LL.L.LLLLLLL.LLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LL.LLLLL.LL.LLL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLL.",
"LLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLL",
"LLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLL.LLL.LLLLLL.LLL.L.LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLL.L.LLLLLL",
"LLLLLLLLLLLLL.LL.LLLLLL.LLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLL.LLL.LLLLLL.LLLLLL.LLLLLLLLLLL",
".L.LLLL.L.LLL.L....L...LL.L.L..LL.L.LLLL.L..L..L.L.LL...LL..L.L.L...LL.L.......LL..LLL......",
"LLLLL.L..LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLL.LLLLLL.LLLLLL.L.LLLLLL.LLLLLLLLLLLL.LLLLL",
"LLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL..LLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL",
"LLLLLLL.LLLLLLLL.LLLL.L.LLL.LLLLLLLLL.LLLL.LLLLLLL.L..LLL.LLLLLLL..LL.LLL.LLLLLLLLL.LLL.LLL.",
"LLLLLLL.LLLLLLLL.LLLLLL.L.LLLLLLLLLL..LLLLLLLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.L.LLLL.LL.LLLL.LLL",
"LLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.LL.LLLLL.LLL.LL.LLLLLLLLLLLLLLLLLL",
"LL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLL.LLL.LLLL.LLLLLLLLLLLL.L.LLLLL.LL.LLLLLL.L.L.LLLLLLLLLLLLLL",
"LLLLLL.LLLLLL.LL.LLLLLLLLL.LLLLLLLLLL.LLLL.LL.LLLLLLLLLLL.LL.LLLLL.LLLLL.LLLLLLLLLL.LLLLLLLL",
".LLL.......LL.LL....L..L.....LL.....L..L...LLL....L...L..LLL...L............LLLL.LL.......L.",
"LLLLL.L.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLL.LL.LLLLLLLL",
"LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL",
"L.LLLLL...LLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLLL.L.L.LLLLLLLL.LLLLLLL.LLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"LLL.LLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLL.LLL.LLLLLL..LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"L..L.LL...LLL.L...LLL....L.L.L.L.....LL..........LL...L.L.L.LLLL....L.....L....LLL......LLLL",
"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL..LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.L.L.LL.LLLLLLLLLLL",
"LLLLLLLLLLLLLLLL.LLLL.L.LLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.L",
"LLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLL.LLL.LLL.LLLLLL.LLLLLLLL.LLLLLL.LLL.LLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL..LLLLLLLLLLLL.LLLL.L..L.LL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLL.LLLL.LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL",
"LLLLLL..LLLLLLLL.LLLLLLLLLLLL.LLLLLL..LLLL.LLLL.LL.L.LLLL.LLLL.LLL.LLLLLL.LLLLLLLLLLLL.LLLLL",
"........LL..LL..L............L..L.L..L....L.......LL...L......L....LLL..L.L......LL..LL.L.L.",
"LLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLL..LLLL.LLLLLLL.LLL.LL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLL.LLLL",
"LLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
"LLL.LLL.LLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLL..LLL.LLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLL.L.LLLLL.LL.LLLL.LLLL.L.LLLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL",
"LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL..LLLL.LLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.L.LLLLLLLL",
"LLLLLLL.LLLLL.LL.LLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLL.LLLL.LL.LLLLL",
"LLLLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLL",
"LLLL.L.L...L.......L..LL.LL.LL....LL..L.L.L......L...LLL..L.L.L...LLL...L.....L.LLLL........",
".LLLLLL.L.LLLLLL.LLLLLLLLLLL..LLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.",
"LLLLLLL.L.LLLLLLLLLLLLL.LLLLL.LLL.LLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLL.LL.L.LLLLLLLLLLLLLLLL",
"LLLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"L.LLLLL.LLLLL.LLLLLLLLL.LLLLL..LLLLLL.LLLL.LLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLL.LL..",
"..L...L.L.......LL.LLL.LLL..L....L..L.L.L..L.L........L...L.LL.L.........LLLLL.L.LL.L...L.LL",
"LLLLLLL.LLLLL.LL.LLLLLL.LLLL..LLLLL.L.LL.LLLLLL.LL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLL",
"LLLLLLL.L.LLLLLLLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLL.LLL.LL.LLLLLLLL.LLL.LL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL..L.LLLLLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLL.LLL.LLLL",
".LLLLLL.LL.LL.LLLLLL.L..LLLLLLL.LLLLL.LLLL.LL.LL.L.LL.L.L.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LL.LL..LLLLLLLL.LLLLLLLLLLLLLLLL.LLL..LLL",
"LLLLLLLLL.LL.LLL.LLLLLLLLLLLLLLLLLLLL.LLL..LLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLL.LLLLLLLLLLL.LLLL.LLLLLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL",
"LLL......LL...L...L..LL..L..L......L...L.L..L.........L.LL.LL..L..L.L......L..L........L..L.",
"LL.LLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL",
"LLLLLLLLLLLLLL.L.LLLLLLLLLLLL.LL.LLLL..LLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLL.L.LLLLLL.LLLLLLLL..LLLLL.LLLLLLLLL.LLLLLLLL",
"LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLL.LLL.LLLLLL.LL.LLLLLL.LLLLLLLL",
"LLLLLLLLLLLLLLLL.LLLLLL.LLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLL.L.LLLLLL.LLLLLLLLLLLLLLLLLL",
"LLLLLLL.LLLLL.LL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL",
"LLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLL"]

const replace = (str, pos, char) =>{
  return str.substring(0, pos) + char + str.substring(pos + 1)
}
const isSame = (anInputs1, anInputs2) =>{
  let identiq = true
  main_loop:
  for(let row = 0; row < anInputs1.length; ++row){
    for(let col = 0; col < anInputs1[row].length; ++col){
      if(anInputs1[row][col] != anInputs2[row][col]){
        identiq = false
        break main_loop
      }
    }
  }
  return identiq
}

const duplicate = (anInputs) => {
  return [...anInputs];
}

const countNbSeatsFilled = (anInputs) => {
  let nbSeat = 0
  for(let row = 0; row < anInputs.length; ++row){
    for(let col = 0; col < anInputs[row].length; ++col){
      if(anInputs[row][col] === "#"){
        nbSeat = nbSeat + 1;
      }
    }
  }
  return nbSeat;
}

const countNbDirectionalFilled = (anInputs, row, col) =>{
  let nbSeat = 0;
  //12h
  let tRow = row-1;
  let tCol = col;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    --tRow;
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 1h30
  tRow = row-1;
  tCol = col+1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    --tRow;
    ++tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 3h
  tRow = row;
  tCol = col+1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    ++tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 4.5h
  tRow = row+1;
  tCol = col+1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    ++tRow
    ++tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 6h
  tRow = row+1;
  tCol = col;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    ++tRow
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 7.5h
  tRow = row+1;
  tCol = col-1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    ++tRow
    --tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 9h
  tRow = row;
  tCol = col-1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    --tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  // 10.5h
  tRow = row-1;
  tCol = col-1;
  while(undefined !== anInputs[tRow] && !["L","#",undefined].includes(anInputs[tRow][tCol])){
    --tRow
    --tCol
  }
  if(undefined !== anInputs[tRow] && anInputs[tRow][tCol] === "#"){nbSeat++}
  return nbSeat
}
const countNbAdjacentFilled = (anInputs, row, col) =>{
  let nbSeat = 0;
  if(row > 0){
    if(anInputs[row-1][col] === "#"){nbSeat++}
    if(anInputs[row-1][col+1] === "#"){nbSeat++}
    if(anInputs[row-1][col-1] === "#"){nbSeat++}
  }
  if(anInputs[row][col+1] === "#"){nbSeat++}
  if(anInputs[row][col-1] === "#"){nbSeat++}
  if(row < anInputs.length - 1){
    if(anInputs[row+1][col+1] === "#"){nbSeat++}
    if(anInputs[row+1][col] === "#"){nbSeat++}
    if(anInputs[row+1][col-1] === "#"){nbSeat++}
  }
  return nbSeat
}

const isAdjacentEmpty = (anInputs, row, col) => {
  return countNbAdjacentFilled(anInputs, row, col) === 0
}

const isDirectionalEmpty = (anInputs, row, col) => {
  return countNbDirectionalFilled(anInputs, row, col) === 0
}

const firstStep = (anInputs) => {
  // cloner l'entrée
  let anInputsCloned = duplicate(anInputs);
  // pour chaque ligne
  for(let row = 0; row < anInputs.length; ++row){
    // pour chaque lettre
    for(let col = 0; col < anInputs[row].length; ++col){
      // Si vide
      if(anInputs[row][col] === "L"){
        // Si aucun adjacent rempli
        if(isAdjacentEmpty(anInputs, row, col)){
          // Alors je rempli
          anInputsCloned[row] = replace(anInputsCloned[row], col, "#")
        }
      }
    }
  }
  return anInputsCloned;
}

const secondStep = (anInputs) => {
  // cloner l'entrée
  let anInputsCloned = duplicate(anInputs);
  // pour chaque ligne
  for(let row = 0; row < anInputs.length; ++row){
    // pour chaque lettre
    for(let col = 0; col < anInputs[row].length; ++col){
      // Si il est rempli
      if(anInputs[row][col] === "#"){
        //Si nb adhacent >= 4
        if(countNbAdjacentFilled(anInputs, row, col) >= 4){
          // Je vide le siege
          anInputsCloned[row] = replace(anInputsCloned[row], col, "L")
        }
      }
    }
  }
  return anInputsCloned
}

const thirdStep = (anInputs) => {
  // cloner l'entrée
  let anInputsCloned = duplicate(anInputs);
  // pour chaque ligne
  for(let row = 0; row < anInputs.length; ++row){
    // pour chaque lettre
    for(let col = 0; col < anInputs[row].length; ++col){
      // Si vide
      if(anInputs[row][col] === "L"){
        // Si aucun adjacent rempli
        if(isDirectionalEmpty(anInputs, row, col)){
          // Alors je rempli
          anInputsCloned[row] = replace(anInputsCloned[row], col, "#")
        }
      }
    }
  }
  return anInputsCloned;
}

const fourthStep = (anInputs) => {
  // cloner l'entrée
  let anInputsCloned = duplicate(anInputs);
  // pour chaque ligne
  for(let row = 0; row < anInputs.length; ++row){
    // pour chaque lettre
    for(let col = 0; col < anInputs[row].length; ++col){
      // Si il est rempli
      if(anInputs[row][col] === "#"){
        //Si nb adhacent >= 5
        if(countNbDirectionalFilled(anInputs, row, col) >= 5){
          // Je vide le siege
          anInputsCloned[row] = replace(anInputsCloned[row], col, "L")
        }
      }
    }
  }
  return anInputsCloned
}

export const exec_11 = () => {
  let aInput1 = inputs

  // j'applqiue le 1er Step sur Inputs => newInputs
  let aInput2 = firstStep(aInput1)

  // Tant que inputs != newInputs
  while(!isSame(aInput1, aInput2)){
    aInput1 = secondStep(aInput2)
    aInput2 = firstStep(aInput1)
  }
  // Compter le nombre de siege
  let result1 = countNbSeatsFilled(aInput1);
  // console.log(result1)

  let aInput3 = inputs
  let aInput4 = thirdStep(aInput3)
  while(!isSame(aInput3, aInput4)){
    aInput3 = fourthStep(aInput4)
    aInput4 = thirdStep(aInput3)
  }
  let result2 = countNbSeatsFilled(aInput4);
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>11-1 : NbSeats: ${result1}<p>`)
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>11-2 : NbSeats: ${result2}</p>`)
}
