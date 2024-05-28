// function solution(participant, completion) {
//    // return participant.filter(v=> !completion.includes(v)).join('')
    
//   const racer = participant.reduce((a,c)=>{
//         a[c]=(a[c]||0)+1
//         return a
//     },{})
  
// const complete=  completion.reduce((a,c)=>{
//         a[c]=(a[c]||0)-1
//         return a
//     },racer)

// const arr = Object.entries(complete)

// const filterArr = arr.filter((v)=>v[1])
// console.log(complete)
// // const ppp= ['aa','bb']
// // console.log( ppp.join(''))

// return filterArr.map(v=>v[0]).join('')

// }

function solution(participant, completion) {
    const countMap = participant.reduce((map, person) => {
        map.set(person, (map.get(person) || 0) + 1);
        return map;
    }, new Map());
    
    completion.reduce((map, person) => {
        map.set(person, map.get(person) - 1);
        return map;
    }, countMap);
    
    return [...countMap.entries()].find(([key, value]) => value > 0)[0];
}
