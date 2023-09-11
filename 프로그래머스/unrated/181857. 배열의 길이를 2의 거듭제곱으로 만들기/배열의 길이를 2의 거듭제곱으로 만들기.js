function solution(arr) {
    
    let n = 0;
    let length = arr.length;
    let fillIndex = 0;

    while( length > 1 ) {
        length = length/2
        n++
    } 
    
    fillIndex = 2 ** n - arr.length;
    arr.length =  2 ** n
    arr.fill(0,arr.length-fillIndex)
    
    return arr
}