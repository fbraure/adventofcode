let id = 1000434
let buss = null
// let buss = [17,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,983,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,397,x,x,x,x,x,37,x,x,x,x,x,x,13]
buss = [17,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,983,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,23,0,0,0,0,0,0,0,397,0,0,0,0,0,37,0,0,0,0,0,0,13]

// let id = 939
// buss  =  [1789,37,47,1889]

const getFirstNextTime = (time, bus) =>{
 return Math.trunc(time/bus)*bus + bus
}
const getSecondNextTime = (time, bus) =>{
  if(time%bus === 0){
    return Math.trunc(time/bus)*bus
  }
  return Math.trunc(time/bus)*bus + bus
}
const getSecondGap = (time, bus)=>{
  return getSecondNextTime(time, bus)- time
}
const getFirstGap = (time, bus)=>{
  return getFirstNextTime(time, bus)- time
}
const isOk = (time, buss) => {
  // console.log(time)
  // console.log(buss)
  // console.log(buss.map(item=>getSecondNextTime(time, item)))
  // console.log(buss.map(item=>getSecondGap(time, item)))
  let len = buss.length
  for(let i = 0; i < len; ++i){
    if(buss[i] !== 0){
      if(getSecondGap(time, buss[i]) !== i){
        return false
      }
    }
  }
  return true;
}

export const exec_13 = () => {
  let minGap = id
  let minBus = 0
  buss.forEach(bus=>{
    if(bus !== 0){
      let gap = getFirstGap(id, bus)
      if(gap < minGap){
        minGap = gap
        minBus = bus
        // console.log(`${id} ${bus} ${gap} ${minGap} ${minBus}`)
      }
    }
  })
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>13-1 : ${minGap*minBus}<p>`)

  // let result2 = null
  // minBus = Math.min(...buss.filter(item=>item!=0));
  // let firstBus = buss[0]
  // let timeStamp = 0
  // while(!isOk(timeStamp, buss)){
  //   timeStamp += firstBus
  // }
  const timestamp = []
  buss.forEach((bus, index) => {
    if(bus !== 0 ){timestamp.push({id:bus, delta:index})}
  })
  let step = timestamp[0].id
  // let failed = null
  // for(let t=step; ;t+=step){
  //   failed = false
  //   for(let j=1; j< timestamp.length; ++j){
  //     if((t+timestamp[j].delta) % timestamp[j].id !==0){
  //       failed = true;
  //       break;
  //     }
  //     else{
  //       console.log(t)
  //       step *= timestamp[j].id
  //     }
  //   }
  //   if(!failed){
  //     console.log(t)
  //     break
  //   }
  // }
  let t = step;
  for(let j=1; j< timestamp.length; ++j){
    while((t+timestamp[j].delta) % timestamp[j].id !==0){
      t += step;
    }
      step *= timestamp[j].id
  }
  console.log(t)
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>13-2 : ${t}<p>`)
}

// 696291323
// 699982030
// 699980241
// 1302161486
