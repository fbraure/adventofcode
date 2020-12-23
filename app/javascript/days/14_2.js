const binToInt = (bin) => {
  return parseInt(bin, 2);
}
const intToBin = (int) => {
  return int.toString(2).padStart(36, "0");
}
const getXrepart = (nbX) => {
  let vects = []
  let vect = null
  const nbVects  = Math.pow(2, nbX)
  for(let i = 0; i < nbVects; ++i){
    vect = new Array(nbX)
    for(let j = 0; j< nbX; j++){
      // console.log(`${i} ${j} ${Math.pow(2, j)}`)
      if(i%Math.pow(2, j)===0){vect[j] = (vect[j] === "1" ? "0" : "1")}
    }
    vects.push(vect)
  }
  return vects
}
const applyMask = (mem, pos, int, mask) => {
  let bin = intToBin(pos)
  bin = bin.split('')
  let maskSplitted = mask.split('')
  for(let i = 0; i < maskSplitted.length; i++){
    if(maskSplitted[i] !== "0"){
      bin[i] = maskSplitted[i]
    }
  }
  // console.log(bin)
  // decouper par combinaison de X
  const xPos = []
  let nbX = 0;
  for(let i =0; i < bin.length; i++){
    if(bin[i] === "X"){
      ++nbX
      xPos.push(i)
    }
  }
  let subBin = null
  const xVals = getXrepart(nbX);
  xVals.forEach(xVal => {
    subBin = [...bin]
    for(let j = 0; j < nbX; ++j){
      subBin[xPos[j]] = xVal[j]
    }
    // console.log(...subBin)
    mem[binToInt(subBin.join(""))] = int
  })
}

const countMem = (mem) => {
  return mem.reduce((acc, val)=>acc + (val === undefined ? 0 : val), 0)
}

export const exec_14_2 = () => {
let mask = null
let mem = []
mask = "010X1100101X00X01001X11010X111100X01"
applyMask(mem, 23014, 9778, mask)
applyMask(mem, 42882, 140716, mask)
applyMask(mem, 65461, 458355100, mask)
applyMask(mem, 60151, 31172, mask)
applyMask(mem, 47143, 7055, mask)
mask = "X101XX001XX1001010X101X1101011100101"
applyMask(mem, 26134, 4394, mask)
applyMask(mem, 18808, 352500, mask)
applyMask(mem, 18556, 87307674, mask)
mask = "X11X110X1011X11X0001011000000X110000"
applyMask(mem, 49018, 14063312, mask)
applyMask(mem, 42211, 45834020, mask)
applyMask(mem, 36848, 5772919, mask)
mask = "X1X1110110100001100X000100111X001X01"
applyMask(mem, 9118, 531662307, mask)
applyMask(mem, 31896, 259680444, mask)
applyMask(mem, 35532, 125291736, mask)
applyMask(mem, 1284, 696970, mask)
mask = "01X01100001000001X01000X100X101X0000"
applyMask(mem, 54966, 1480453, mask)
applyMask(mem, 37281, 5032, mask)
mask = "1X0101XXXX1X1X10X0X00101010100101001"
applyMask(mem, 9696, 1216, mask)
applyMask(mem, 15633, 2716652, mask)
applyMask(mem, 42329, 570596065, mask)
applyMask(mem, 45651, 592043, mask)
applyMask(mem, 53599, 84957, mask)
mask = "1X0X11101011X0101000X010011101010000"
applyMask(mem, 782, 131830570, mask)
applyMask(mem, 17999, 26010047, mask)
applyMask(mem, 10590, 55862652, mask)
applyMask(mem, 41166, 1571, mask)
applyMask(mem, 52245, 1080732, mask)
applyMask(mem, 60973, 10973, mask)
mask = "X1X1110X10110X10X001111XXXX011110011"
applyMask(mem, 31425, 3079, mask)
applyMask(mem, 3872, 12709, mask)
applyMask(mem, 44738, 1520775, mask)
applyMask(mem, 6214, 218610777, mask)
mask = "1001X111X1X00X1010XX1X11X1110X000010"
applyMask(mem, 915, 2006, mask)
applyMask(mem, 20530, 208698283, mask)
applyMask(mem, 59288, 176283, mask)
mask = "100111X111XXXX101X0011X100100100X000"
applyMask(mem, 65348, 99675, mask)
applyMask(mem, 27552, 1331058, mask)
applyMask(mem, 40973, 96189, mask)
applyMask(mem, 10170, 4651459, mask)
applyMask(mem, 63354, 32215, mask)
applyMask(mem, 32591, 233262264, mask)
mask = "01000XX11011X00XX0101X11X011X0111101"
applyMask(mem, 1947, 6511663, mask)
applyMask(mem, 60231, 42099957, mask)
mask = "X101X10111XX111X1010011100010011100X"
applyMask(mem, 62520, 63838349, mask)
applyMask(mem, 39257, 438174908, mask)
applyMask(mem, 44390, 54942, mask)
applyMask(mem, 9596, 13923813, mask)
applyMask(mem, 64877, 1031, mask)
applyMask(mem, 54384, 198269, mask)
mask = "1X0111001011XX10101000100110X000X000"
applyMask(mem, 6214, 4758, mask)
applyMask(mem, 59288, 7427700, mask)
applyMask(mem, 22338, 51826811, mask)
applyMask(mem, 17999, 3215, mask)
applyMask(mem, 21407, 136757, mask)
mask = "11X110001X1100101X0X0111XX0X0XX10101"
applyMask(mem, 19064, 546660, mask)
applyMask(mem, 21384, 2362194, mask)
applyMask(mem, 23581, 198371, mask)
applyMask(mem, 15213, 6998212, mask)
applyMask(mem, 33314, 22741, mask)
applyMask(mem, 1308, 198573, mask)
mask = "1111110110110110XXX110100100X101X1XX"
applyMask(mem, 5021, 18730, mask)
applyMask(mem, 45881, 3729, mask)
applyMask(mem, 41145, 560790, mask)
applyMask(mem, 17059, 335092590, mask)
applyMask(mem, 49349, 506836719, mask)
mask = "1X011100101X00X01X0001101000X1XXX101"
applyMask(mem, 47308, 232133, mask)
applyMask(mem, 3939, 3046, mask)
applyMask(mem, 57467, 181551031, mask)
applyMask(mem, 34672, 6233509, mask)
applyMask(mem, 15155, 866, mask)
mask = "110111001X1X1010X0010010000X0011X111"
applyMask(mem, 6377, 3902382, mask)
applyMask(mem, 11542, 1194, mask)
applyMask(mem, 52887, 30306498, mask)
applyMask(mem, 49605, 437472, mask)
applyMask(mem, 34100, 27149, mask)
mask = "1101110101X1XX01101010001X1110000000"
applyMask(mem, 52729, 41283384, mask)
applyMask(mem, 30818, 2619040, mask)
applyMask(mem, 15175, 51188968, mask)
applyMask(mem, 40793, 19775, mask)
applyMask(mem, 24243, 3676134, mask)
mask = "110110X0111X0010100101X1X101000X0010"
applyMask(mem, 57775, 1687, mask)
applyMask(mem, 50711, 15613, mask)
applyMask(mem, 4712, 67911, mask)
applyMask(mem, 24243, 827, mask)
mask = "1101X10X10111X101000X00X11000X010001"
applyMask(mem, 32109, 12583776, mask)
applyMask(mem, 39041, 76972021, mask)
applyMask(mem, 57467, 9561, mask)
applyMask(mem, 12331, 62157219, mask)
applyMask(mem, 35060, 4081357, mask)
applyMask(mem, 42738, 53814734, mask)
mask = "1111X10XX011X010101101011001010011X0"
applyMask(mem, 42637, 3384964, mask)
applyMask(mem, 27323, 5296894, mask)
applyMask(mem, 30389, 36, mask)
mask = "1X1011X010X000X01X110101XX1001011X1X"
applyMask(mem, 37471, 1911918, mask)
applyMask(mem, 34853, 606298375, mask)
applyMask(mem, 34692, 8502805, mask)
applyMask(mem, 51588, 499294838, mask)
applyMask(mem, 46504, 96337, mask)
mask = "10011X01110XXX10110X1111110X0000XX00"
applyMask(mem, 12036, 4251895, mask)
applyMask(mem, 47948, 14594581, mask)
applyMask(mem, 57780, 50914073, mask)
applyMask(mem, 27753, 73410286, mask)
mask = "01000100101X001010X1X0000001100X1000"
applyMask(mem, 29981, 25900, mask)
applyMask(mem, 2063, 1329, mask)
applyMask(mem, 2215, 81989, mask)
mask = "10XX1X111X10011011011X111X1X11011X11"
applyMask(mem, 45276, 74535, mask)
applyMask(mem, 47375, 1924385, mask)
applyMask(mem, 18011, 144102, mask)
applyMask(mem, 2215, 446755, mask)
applyMask(mem, 21848, 361000897, mask)
applyMask(mem, 33096, 348003231, mask)
applyMask(mem, 2261, 49696039, mask)
mask = "010X1101101100011X1001011X101X000100"
applyMask(mem, 21742, 64308, mask)
applyMask(mem, 38665, 125990, mask)
applyMask(mem, 47858, 27335545, mask)
applyMask(mem, 62873, 54978664, mask)
applyMask(mem, 18436, 710957327, mask)
applyMask(mem, 32157, 39549, mask)
mask = "X010X10XX0000000101111000001XX00XX11"
applyMask(mem, 53917, 8231128, mask)
applyMask(mem, 10404, 377, mask)
applyMask(mem, 24243, 19, mask)
mask = "X110110010100XX0111101010111X0000010"
applyMask(mem, 43071, 722653, mask)
applyMask(mem, 55599, 4022954, mask)
applyMask(mem, 19270, 5382, mask)
applyMask(mem, 4864, 2901, mask)
applyMask(mem, 12055, 1008, mask)
mask = "X10010101110XX0011100100X101110011X0"
applyMask(mem, 55666, 3461, mask)
applyMask(mem, 1348, 3490, mask)
applyMask(mem, 26481, 122709, mask)
applyMask(mem, 35986, 882775, mask)
applyMask(mem, 14766, 3144, mask)
mask = "1100110010X00X1X10X00101100XX0000101"
applyMask(mem, 2475, 99253, mask)
applyMask(mem, 34853, 104692938, mask)
applyMask(mem, 45799, 207244716, mask)
mask = "11011101101000100000X1X111101X1111X1"
applyMask(mem, 41278, 6462, mask)
applyMask(mem, 63229, 2337, mask)
applyMask(mem, 30241, 417551945, mask)
applyMask(mem, 43695, 32632984, mask)
applyMask(mem, 55872, 4732314, mask)
mask = "110X1X0110110XX0101XXX11000001101001"
applyMask(mem, 30748, 437150551, mask)
applyMask(mem, 23881, 13008, mask)
applyMask(mem, 5931, 203469684, mask)
mask = "X1XX1100101000X0X0XX01X0100000000101"
applyMask(mem, 39898, 2937, mask)
applyMask(mem, 47140, 33506, mask)
applyMask(mem, 47586, 426, mask)
applyMask(mem, 15233, 746123, mask)
mask = "1X0X1XX011100X00111001XX0X0010X01100"
applyMask(mem, 21781, 933, mask)
applyMask(mem, 448, 31309385, mask)
applyMask(mem, 2370, 147491885, mask)
applyMask(mem, 17999, 9983, mask)
applyMask(mem, 53599, 114654, mask)
applyMask(mem, 31772, 21352913, mask)
mask = "010X1100101000XX10X1X010100X1100010X"
applyMask(mem, 63720, 344628057, mask)
applyMask(mem, 22627, 1194485, mask)
mask = "1X111100X0110110100X1000X11001XX0X1X"
applyMask(mem, 24788, 12640, mask)
applyMask(mem, 46948, 32700, mask)
applyMask(mem, 37444, 18654, mask)
applyMask(mem, 17828, 529955, mask)
applyMask(mem, 62908, 9264688, mask)
mask = "X1X011X1101100X1XX1X011X01010010X001"
applyMask(mem, 38068, 838, mask)
applyMask(mem, 10337, 95750, mask)
mask = "X10X110110011XXX1001011100X010000110"
applyMask(mem, 44104, 2125128, mask)
applyMask(mem, 5124, 2138255, mask)
applyMask(mem, 48215, 8302410, mask)
applyMask(mem, 55198, 1768, mask)
applyMask(mem, 1004, 78304, mask)
mask = "X0X111X01010X00X1100X11001000100X101"
applyMask(mem, 831, 60849768, mask)
applyMask(mem, 10543, 16435, mask)
applyMask(mem, 16484, 2867, mask)
applyMask(mem, 50932, 12631, mask)
applyMask(mem, 18011, 604087933, mask)
applyMask(mem, 41312, 6603336, mask)
mask = "1X1X11X010X0001011111101001XX1011100"
applyMask(mem, 3983, 424012576, mask)
applyMask(mem, 44104, 2231, mask)
applyMask(mem, 48062, 166670, mask)
applyMask(mem, 60570, 51507045, mask)
applyMask(mem, 16895, 4480, mask)
mask = "0X0011X00010000010X01X01100100000001"
applyMask(mem, 43729, 305741, mask)
applyMask(mem, 58297, 478012, mask)
applyMask(mem, 37903, 247336, mask)
applyMask(mem, 49003, 264571, mask)
applyMask(mem, 21768, 5198725, mask)
applyMask(mem, 20421, 62589, mask)
mask = "1111110010110X1X10X1X110100X0101X0X1"
applyMask(mem, 36083, 15401, mask)
applyMask(mem, 30389, 1361, mask)
applyMask(mem, 23220, 28363, mask)
applyMask(mem, 20840, 123771110, mask)
applyMask(mem, 49892, 40904, mask)
applyMask(mem, 32109, 2027, mask)
applyMask(mem, 27148, 446669, mask)
mask = "1010X10100X00000101X1110000X10101011"
applyMask(mem, 10592, 21795764, mask)
applyMask(mem, 60581, 37413, mask)
applyMask(mem, 24621, 3373323, mask)
applyMask(mem, 37811, 1221059, mask)
applyMask(mem, 38216, 8082306, mask)
applyMask(mem, 41142, 4906074, mask)
mask = "X10XXX11011110011X00X0X1111X1010X100"
applyMask(mem, 11928, 502744425, mask)
applyMask(mem, 27552, 3101566, mask)
applyMask(mem, 1674, 5000288, mask)
mask = "1X0X100X111001X0X11011X00000011X011X"
applyMask(mem, 33228, 20563, mask)
applyMask(mem, 59224, 2021, mask)
applyMask(mem, 58230, 2931, mask)
mask = "1X001000XX100100110001000X0010X0010X"
applyMask(mem, 12037, 14972561, mask)
applyMask(mem, 63354, 134775, mask)
applyMask(mem, 2111, 462039547, mask)
applyMask(mem, 16412, 16419724, mask)
applyMask(mem, 61945, 582, mask)
applyMask(mem, 53181, 265634, mask)
mask = "1100110110110X1X1010X1010101000010XX"
applyMask(mem, 27753, 3434, mask)
applyMask(mem, 24997, 7421633, mask)
applyMask(mem, 54772, 2074596, mask)
applyMask(mem, 53599, 950852, mask)
applyMask(mem, 58552, 1454, mask)
mask = "11X111001011000XX000001011X1101X1101"
applyMask(mem, 17491, 8295753, mask)
applyMask(mem, 44735, 74648, mask)
applyMask(mem, 58213, 2842642, mask)
applyMask(mem, 11964, 15593270, mask)
applyMask(mem, 20822, 341, mask)
mask = "1XX101011X10X01010XX0111100X10X10110"
applyMask(mem, 7947, 6206, mask)
applyMask(mem, 22164, 5853463, mask)
applyMask(mem, 23138, 6813, mask)
applyMask(mem, 16076, 16062, mask)
applyMask(mem, 10225, 8667538, mask)
applyMask(mem, 37506, 421615, mask)
mask = "1X01X101101000101X00X1011X000011010X"
applyMask(mem, 28704, 154155, mask)
applyMask(mem, 47830, 1243, mask)
applyMask(mem, 1631, 1060, mask)
applyMask(mem, 4251, 73313, mask)
applyMask(mem, 26709, 71, mask)
applyMask(mem, 39041, 3374305, mask)
mask = "1101110010110010100X1110X01X1001010X"
applyMask(mem, 29270, 58295, mask)
applyMask(mem, 31307, 106482665, mask)
applyMask(mem, 47830, 2877, mask)
applyMask(mem, 1949, 9008841, mask)
mask = "111011X0101X0X001111X101X11X0X00X010"
applyMask(mem, 19816, 5499, mask)
applyMask(mem, 48215, 996, mask)
applyMask(mem, 8255, 450711, mask)
applyMask(mem, 56960, 661, mask)
applyMask(mem, 33808, 2564351, mask)
applyMask(mem, 3775, 4613153, mask)
applyMask(mem, 41658, 75277805, mask)
mask = "XX0X1100101X001010001011100XXX100100"
applyMask(mem, 53504, 3114, mask)
applyMask(mem, 53599, 143, mask)
applyMask(mem, 49459, 93723075, mask)
applyMask(mem, 63493, 1922, mask)
applyMask(mem, 10635, 5387, mask)
mask = "000XX0100X1011000010X0X00X0010001X10"
applyMask(mem, 29981, 38520, mask)
applyMask(mem, 20980, 6607014, mask)
applyMask(mem, 21516, 1785, mask)
mask = "11011100XX100010X100111100X00100X10X"
applyMask(mem, 20992, 10364, mask)
applyMask(mem, 1182, 2181, mask)
mask = "10011000X11X0100111X110X010110110111"
applyMask(mem, 58228, 816, mask)
applyMask(mem, 52946, 1046216022, mask)
applyMask(mem, 38233, 66872, mask)
applyMask(mem, 53190, 1070814007, mask)
applyMask(mem, 33572, 265, mask)
applyMask(mem, 53495, 48514858, mask)
applyMask(mem, 33803, 101117778, mask)
mask = "100111X01X1001X0111000X0110010000000"
applyMask(mem, 25934, 314853, mask)
applyMask(mem, 20986, 2338, mask)
applyMask(mem, 49915, 30330, mask)
applyMask(mem, 44266, 344908, mask)
mask = "0100X1X110110X01101001101X0000000X01"
applyMask(mem, 49827, 16630, mask)
applyMask(mem, 131, 7478808, mask)
applyMask(mem, 49018, 236053399, mask)
applyMask(mem, 41329, 523544, mask)
applyMask(mem, 32104, 12492, mask)
applyMask(mem, 65106, 28, mask)
applyMask(mem, 5021, 23010383, mask)
mask = "010111XX10X1X010100101X001XX10010110"
applyMask(mem, 3738, 681, mask)
applyMask(mem, 12113, 276035, mask)
applyMask(mem, 45070, 22799792, mask)
applyMask(mem, 48859, 12803, mask)
applyMask(mem, 51303, 3011402, mask)
applyMask(mem, 19889, 52441, mask)
mask = "110X1XXX1110X110X11011X0000101X1011X"
applyMask(mem, 17200, 104385, mask)
applyMask(mem, 39448, 14051, mask)
applyMask(mem, 54966, 3057321, mask)
applyMask(mem, 55265, 126636452, mask)
applyMask(mem, 51014, 2496, mask)
applyMask(mem, 18748, 114442, mask)
applyMask(mem, 64434, 114146787, mask)
mask = "1X0111XX101100X0X00X000110XX1X110100"
applyMask(mem, 23881, 26471, mask)
applyMask(mem, 37868, 50050, mask)
applyMask(mem, 21012, 7626, mask)
mask = "11111100101000101010X001X0000X10X0X1"
applyMask(mem, 25324, 43020630, mask)
applyMask(mem, 51716, 887, mask)
applyMask(mem, 46427, 4427906, mask)
mask = "10010110X11X10101010011X010110X000X1"
applyMask(mem, 35216, 92656119, mask)
applyMask(mem, 49148, 1329635, mask)
applyMask(mem, 55614, 8697505, mask)
applyMask(mem, 21609, 7070, mask)
mask = "010X110010110X1010011X10110011010X01"
applyMask(mem, 56499, 3531, mask)
applyMask(mem, 31750, 12717539, mask)
applyMask(mem, 45217, 6190610, mask)
applyMask(mem, 50900, 1900, mask)
applyMask(mem, 37889, 3835804, mask)
mask = "1X01X111X0110X1000001X1X00000X1001XX"
applyMask(mem, 37314, 2350, mask)
applyMask(mem, 39257, 16400629, mask)
applyMask(mem, 30823, 207011, mask)
mask = "1000100X111X010X1010011X001010X1011X"
applyMask(mem, 26688, 5335, mask)
applyMask(mem, 58884, 720182, mask)
applyMask(mem, 59369, 879490, mask)
applyMask(mem, 1054, 1454804, mask)
mask = "11X1X100101000X0X01X110010X000100101"
applyMask(mem, 20512, 14779, mask)
applyMask(mem, 18682, 3020, mask)
applyMask(mem, 49459, 3973929, mask)
applyMask(mem, 58367, 42944838, mask)
mask = "10XX110110100X1010100X10000001XXX1X0"
applyMask(mem, 53190, 392, mask)
applyMask(mem, 63621, 117998, mask)
applyMask(mem, 10102, 1617031, mask)
applyMask(mem, 14955, 782264, mask)
applyMask(mem, 63354, 596, mask)
mask = "1X01110X1X1X00X01XX0011000000000X10X"
applyMask(mem, 59288, 32430162, mask)
applyMask(mem, 37444, 1991341, mask)
applyMask(mem, 63601, 23037, mask)
applyMask(mem, 1125, 28413106, mask)
applyMask(mem, 55528, 999, mask)
applyMask(mem, 1739, 6314, mask)
mask = "1101110111100001101011X0011110X100XX"
applyMask(mem, 48859, 4120, mask)
applyMask(mem, 14563, 21453090, mask)
applyMask(mem, 1169, 108115775, mask)
mask = "1X0111XX101X0010X000111X100XX10001X1"
applyMask(mem, 32805, 2441, mask)
applyMask(mem, 65348, 145914666, mask)
applyMask(mem, 20281, 6605, mask)
mask = "1101X101XX1X000X10X0X000011110000X01"
applyMask(mem, 18808, 215404803, mask)
applyMask(mem, 29472, 163575, mask)
applyMask(mem, 55666, 12037, mask)
applyMask(mem, 38665, 612758024, mask)
applyMask(mem, 57876, 422, mask)
applyMask(mem, 37900, 1807, mask)
applyMask(mem, 55399, 8193703, mask)
mask = "X0111100101X0X001100111001XX00XX110X"
applyMask(mem, 45070, 7751, mask)
applyMask(mem, 3435, 936, mask)
applyMask(mem, 40695, 67093, mask)
applyMask(mem, 5495, 128880, mask)
applyMask(mem, 46597, 2850, mask)
mask = "10011100X111001011X0011X011XX00X0100"
applyMask(mem, 21971, 5249, mask)
applyMask(mem, 3871, 82795232, mask)
applyMask(mem, 16943, 8964191, mask)
applyMask(mem, 50436, 441, mask)
applyMask(mem, 20421, 195226, mask)
mask = "00X0X01000101100XX100XX0X1X010X01110"
applyMask(mem, 34885, 653677, mask)
applyMask(mem, 8170, 43079, mask)
applyMask(mem, 5396, 950, mask)
applyMask(mem, 42073, 252233, mask)
applyMask(mem, 13486, 831356, mask)
applyMask(mem, 34199, 20223110, mask)
mask = "10011X1X11X100101100X1X011100100XX0X"
applyMask(mem, 40732, 1022756493, mask)
applyMask(mem, 14144, 411357632, mask)
mask = "1001X1X111101110X10011X0101111101000"
applyMask(mem, 57539, 774, mask)
applyMask(mem, 14536, 38799961, mask)
mask = "X1X01XX0101XX1X0111111X100X110111000"
applyMask(mem, 9778, 33256650, mask)
applyMask(mem, 25551, 1985, mask)
applyMask(mem, 39257, 51040068, mask)
applyMask(mem, 56357, 110816, mask)
applyMask(mem, 42154, 328899450, mask)
mask = "100X100001XX1001X11010010011110XX1X0"
applyMask(mem, 1403, 134849806, mask)
applyMask(mem, 5964, 62290391, mask)
applyMask(mem, 4408, 48393222, mask)
applyMask(mem, 17577, 11210413, mask)
applyMask(mem, 24997, 501527, mask)
applyMask(mem, 46863, 46372, mask)
mask = "X00010X00X10XX0X11100X0100111XX11110"
applyMask(mem, 23527, 42133679, mask)
applyMask(mem, 17884, 226472, mask)
applyMask(mem, 29432, 4271361, mask)
applyMask(mem, 33298, 16179, mask)
mask = "X0011100111000X01X00101X0010X1XX0100"
applyMask(mem, 28406, 5450921, mask)
applyMask(mem, 20484, 9212786, mask)
mask = "1X0010X0X11001001XXX0100X0001X11110X"
applyMask(mem, 13174, 1644, mask)
applyMask(mem, 44927, 6975289, mask)
applyMask(mem, 16396, 10219, mask)
applyMask(mem, 12766, 11541, mask)
applyMask(mem, 51161, 511339321, mask)
mask = "X111X10110X10010000111111000010100X1"
applyMask(mem, 41461, 5770, mask)
applyMask(mem, 21329, 435055, mask)
applyMask(mem, 18593, 61190, mask)
applyMask(mem, 53504, 2376852, mask)
applyMask(mem, 51949, 816, mask)
applyMask(mem, 35265, 772, mask)
applyMask(mem, 14928, 4001, mask)
mask = "1001110X10X00010000011X1111X0X000000"
applyMask(mem, 33539, 79448, mask)
applyMask(mem, 15175, 11359, mask)
applyMask(mem, 41658, 25915189, mask)
applyMask(mem, 2215, 152778, mask)
mask = "110111001011X010100XXX0010X00111XXXX"
applyMask(mem, 45802, 3611, mask)
applyMask(mem, 62901, 458786565, mask)
applyMask(mem, 29270, 2017746, mask)
applyMask(mem, 15866, 42174056, mask)
applyMask(mem, 37286, 23843129, mask)
applyMask(mem, 47143, 4922, mask)
applyMask(mem, 33954, 1832, mask)
mask = "110100001011X01X0X001000X000X0001010"
applyMask(mem, 2428, 2134006, mask)
applyMask(mem, 37027, 1425, mask)
applyMask(mem, 33228, 5638391, mask)
mask = "11001X00111001001110XX00001001X01X11"
applyMask(mem, 47000, 462713, mask)
applyMask(mem, 687, 4022, mask)
applyMask(mem, 58197, 117943131, mask)
applyMask(mem, 41166, 283078, mask)
applyMask(mem, 26245, 24480281, mask)
applyMask(mem, 8116, 76873415, mask)
applyMask(mem, 48859, 848150489, mask)
mask = "X10011111011000110X001X10101011000XX"
applyMask(mem, 35187, 310838803, mask)
applyMask(mem, 43388, 68828, mask)
applyMask(mem, 36770, 2843, mask)
applyMask(mem, 30407, 926152, mask)
applyMask(mem, 30792, 647, mask)
mask = "1X01X100111X0000X110000X0110X110X111"
applyMask(mem, 22211, 250064298, mask)
applyMask(mem, 11873, 452688990, mask)
applyMask(mem, 33512, 31039, mask)
mask = "1X01111X1XX001101X01101101X0000000X0"
applyMask(mem, 24467, 47938, mask)
applyMask(mem, 16345, 985, mask)
applyMask(mem, 58797, 74250371, mask)
applyMask(mem, 31153, 1012000, mask)
applyMask(mem, 45881, 290989873, mask)
applyMask(mem, 41278, 114999407, mask)
mask = "110111001X11001010010X0010X110101X00"
applyMask(mem, 13326, 406, mask)
applyMask(mem, 4873, 1226343, mask)
applyMask(mem, 6514, 5567445, mask)
applyMask(mem, 60581, 5224932, mask)
applyMask(mem, 38493, 2208262, mask)
applyMask(mem, 7941, 799, mask)
mask = "1011X1001010XXX1110010X0011000X10101"
applyMask(mem, 55903, 62282, mask)
applyMask(mem, 17478, 16429, mask)
mask = "1111010111100X101000011X11X00X011010"
applyMask(mem, 10592, 8939, mask)
applyMask(mem, 1686, 712739, mask)
applyMask(mem, 63229, 66200607, mask)
applyMask(mem, 7997, 40043182, mask)
applyMask(mem, 16503, 5584, mask)
applyMask(mem, 11895, 7827, mask)
applyMask(mem, 13452, 1788711, mask)
mask = "11111X00X0110010100X011X1010X1010101"
applyMask(mem, 42976, 3918, mask)
applyMask(mem, 53917, 118437, mask)
applyMask(mem, 908, 778888, mask)
applyMask(mem, 35763, 1355604, mask)
mask = "1101XX001011X010X00X00X1000X00001X01"
applyMask(mem, 35247, 1722533, mask)
applyMask(mem, 44526, 252097, mask)
applyMask(mem, 32061, 245369, mask)
applyMask(mem, 12544, 24885, mask)
applyMask(mem, 6113, 10982959, mask)
mask = "1X011X0X1110001011001100010X00011100"
applyMask(mem, 4117, 2058, mask)
applyMask(mem, 42421, 14118780, mask)
applyMask(mem, 11833, 11912377, mask)
applyMask(mem, 22164, 48, mask)
applyMask(mem, 25501, 3465263, mask)
mask = "110X01X1011X10XX10000X10X0X1X0100000"
applyMask(mem, 44268, 461719, mask)
applyMask(mem, 30153, 58345299, mask)
applyMask(mem, 25475, 233748959, mask)
applyMask(mem, 25166, 46886713, mask)
applyMask(mem, 40732, 346, mask)
mask = "11X111X01011001X100X0101100011100000"
applyMask(mem, 46019, 28244119, mask)
applyMask(mem, 25240, 4875676, mask)
mask = "01000X10X01000101001X00X100110100101"
applyMask(mem, 11873, 251836, mask)
applyMask(mem, 35247, 1896995, mask)
applyMask(mem, 45217, 30515968, mask)
applyMask(mem, 5548, 578580112, mask)
mask = "0100X1X0X01000X0100X100010000XX00X01"
applyMask(mem, 16345, 14491763, mask)
applyMask(mem, 23881, 138151, mask)
applyMask(mem, 63524, 67022, mask)
applyMask(mem, 2475, 222204469, mask)
applyMask(mem, 37444, 5882, mask)
applyMask(mem, 6545, 520, mask)
  let result2 = countMem(mem)
  document.getElementById("advent").insertAdjacentHTML("afterbegin", `<p>14-2 : ${result2}<p>`)
}
// too low 19552548100
