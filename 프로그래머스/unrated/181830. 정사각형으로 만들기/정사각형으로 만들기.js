function solution(arr) {
    let zero = []
    const add = arr[0].length - arr.length
    if (arr.length < arr[0].length){
        for(let i= 0; i < arr[0].length ; i++){
            zero = [...zero,0]
        }
        arr.length = arr[0].length
        arr.fill(zero,-add)
    }else if(arr.length > arr[0].length) {
          for(let i= 0; i < arr.length ; i++){
              arr[i].length = arr.length
              arr[i].fill(0,add)
          }
    }
    return arr
}