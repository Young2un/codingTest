// function solution(arr) {
//     let zero = []
//     const add = arr[0].length - arr.length
//     if (arr.length < arr[0].length){
//         for(let i= 0; i < arr[0].length ; i++){
//             zero = [...zero,0]
//         }
//         arr.length = arr[0].length
//         arr.fill(zero,-add)
//     }else if(arr.length > arr[0].length) {
//           for(let i= 0; i < arr.length ; i++){
//               arr[i].length = arr.length
//               arr[i].fill(0,add)
//           }
//     }
//     return arr
// }

function solution(arr) {
    const needZero = Math.abs(arr.length - arr[0].length);
    if(arr.length > arr[0].length){
        return arr.map(v => v = [...v, ...Array(needZero).fill(0)])
    }else if(arr.length < arr[0].length){
        const zeroArr = Array(arr[0].length).fill(0);
        return [...arr, ...Array(needZero).fill(zeroArr)]
    }
    return arr;
}