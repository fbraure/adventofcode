let inputs = [
126,
38,
162,
123,
137,
97,
92,
67,
136,
37,
146,
2,
139,
74,
101,
163,
128,
127,
13,
111,
30,
117,
3,
93,
29,
152,
80,
21,
7,
54,
69,
40,
48,
104,
110,
142,
57,
116,
31,
70,
28,
151,
108,
20,
157,
121,
47,
75,
94,
39,
73,
77,
129,
41,
24,
44,
132,
87,
114,
58,
64,
4,
10,
19,
138,
45,
76,
147,
59,
155,
156,
83,
118,
109,
107,
160,
61,
91,
102,
115,
68,
150,
34,
16,
27,
135,
161,
46,
122,
90,
1,
164,
100,
103,
84,
145,
51,
60]
// inputs= [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]

let adaptaters = inputs.sort((a,b)=>a-b)
adaptaters.unshift(0)
adaptaters.push(Math.max(...adaptaters) + 3)
let nbPaths = 0;

const getNext = (values)=>{
  let index = values[0]
  let aJolt = values[1]
  let nbOneGap = values[2]
  let nbThreeGap = values[3]
  if(adaptaters[index] !== undefined){
    if((adaptaters[index] - aJolt) === 1){
      ++nbOneGap;
    }
    if((adaptaters[index] - aJolt) === 3){
      ++nbThreeGap;
    }
    aJolt = adaptaters[index]
  }
  values[0]=index
  values[1]=aJolt
  values[2]=nbOneGap
  values[3]=nbThreeGap
}

const getNextPath = (index) =>{
  if(index >= adaptaters.length) {return}
  let aJolt = adaptaters[index]
  ++index
  getNextPath(index)
  if((adaptaters[index+1] - aJolt) <= 3){
    ++nbPaths
    getNextPath(index+1)
    if((adaptaters[index+2] - aJolt) <= 3){
      ++nbPaths
      getNextPath(index+2)
    }
  }
}

const part2 = (arr, mem={}) => {
  const key = arr.join(',')
  if(key in mem){
    return mem[key]
  }
  let res = 1;
  for(let i=1; i<arr.length-1;i++){
    if(arr[i+1]-arr[i-1] <= 3){
      const arr2 = [arr[i-1]].concat(arr.slice(i+1))
      res += part2(arr2, mem)
    }
  }
  mem[key]=res
  return res
}

export const exec_10 = () => {

  let gapAdapts = []
  for(let i=0; i< adaptaters.length - 1; i++){
    gapAdapts.push(adaptaters[i+1]-adaptaters[i])
  }
  let nbOneGap = gapAdapts.filter((gap)=>gap===1).length;
  let nbThreeGap = gapAdapts.filter((gap)=>gap===3).length;
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>10-1 : ${nbOneGap*nbThreeGap}<p>`)

  // let values = [0, 0, 0, 0]
  // while(values[0] < adaptaters.length){
  //   getNext(values)
  //   ++values[0]
  // }

  // nbPaths = 0
  // let index = 0
  // getNextPath(index)

  // nbPaths = 1
  // for(let i = 1 ; i < adaptaters.length;i++) {
  //   let tempNb = 1 // adaptaters[i+1]
  //   if(i +2 < adaptaters.length && adaptaters[i+2] - adaptaters[i] < 3){
  //     ++tempNb
  //     if(i + 3 < adaptaters.length && adaptaters[i+3] - adaptaters[i] < 3){
  //       ++tempNb
  //     }
  //   }
  //   nbPaths *= tempNb
  // }
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>10-2 : ${part2(adaptaters)}</p>`)
}

// 4 301 827 178
// 4 588 227 814
// 4 957 912 269
// 17592186044416
// 11535543488
// 28903684902
// 637098094264
// 7086739046912
