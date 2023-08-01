function solution(arr) {
    
  var answer = arr.map(item=>{
        // 50 <= !(item % 2) ? item*2 :
        
        if(50 <=item && !(item % 2)){
           return item/2;
        }else if(50 >= item && (item % 2)){
            return item*2
        }else
            return item
        
    })
    
    // var answer = [];
    return answer;
}