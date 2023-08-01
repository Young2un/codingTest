function solution(num_list) {
    
  return num_list.length > 10 ? 
       num_list.reduce((a,c) => a+c) : num_list.reduce((a,c) => a*c)
    
    
//     if (num_list.length > 10){
//       return  num_list.reduce((a,c) => a+c,0)
//     }else{
//       return  num_list.reduce((a,c) => a*c)
//     }
        
    // var answer = 0;
    // return answer;
}
