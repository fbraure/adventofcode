// const getNext = (tab) => {
//   const lastIndex = tab.length - 1
//   const index = tab.lastIndexOf(tab[lastIndex], -2)
//   if(index == -1){tab.push(0)}
//   else{tab.push(lastIndex - index)}
// }

  export const exec_15 = () => {
    // let tab = [11,0,1,10,5,19]
    // let max = 2020
    // while(tab.length < 2020){
    //   getNext(tab)
    // }
    // document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-1 : ${tab[tab.length - 1]}</p>`)
    let max = 30000000
    let centil_max = Math.trunc(max / 100.)
    // let temp = [3,1,2]
    let temp = [11,0,1,10,5,19]
    let mem = new Map()
    temp.forEach((element, index) => {mem.set(element, index)});
    let previous = temp[temp.length - 1]
    let current;let tmp;
    for(let index = temp.length; index <= max; ++index){
      if(mem.has(previous)){
        current = index - 1 - mem.get(previous)
      } else {
        current = 0
      }
      // console.log(`${index} ${previous} ${mem.has(previous)} ${current} `)
      mem.set(previous, index - 1)
      tmp = previous
      previous = current
      current = tmp
      if(index%centil_max==0){console.log(Math.trunc(100*index/max))}
    }
    document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>15-2 : ${current}</p>`)
  }
