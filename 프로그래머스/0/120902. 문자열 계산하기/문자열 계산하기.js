function solution(my_string) {
  // const str = my_string.split(" ");
  // let answer = 0;
    
    // const m = str.map((v,i,arr)=>v==='-'?-2*arr[i+1]:v==='+'?0:v)
    return my_string.split(" ").reduce((a,c,i,arr)=> c==='-'?a + (-2*arr[i+1]): c==='+'? a :a+ +c,0)
  // for (let i = 0; i < str.length; i++) {
  //   if (i % 2 === 0) {
  //     if (str[i - 1] === "-") {
  //       answer += -2 * str[i];
  //     }
  //     answer += +str[i];
  //   }
  // }
  // return answer;
}