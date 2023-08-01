// function solution(numbers) {
//   let result=0;
//     for(i=0;i<numbers.length;i++){
      
//         result += numbers[i];
//     }
//         return result /numbers.length
    
// }


const solution = (numbers)=> numbers.reduce((acc,cur)=> acc+ cur)/numbers.length;

