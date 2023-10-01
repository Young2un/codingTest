function solution(array) {
    // const arr = [...array]
    // const arrSort = arr.sort((a,b)=>b-a)[0]
    // console.log(arrSort,array.indexOf(arrSort))
    
    return [Math.max(...array),array.indexOf(Math.max(...array))]

    // console.log(Math.max(...array))
    // return 
}