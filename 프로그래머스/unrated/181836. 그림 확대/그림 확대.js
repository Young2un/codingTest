function solution(picture, k) {
   // const arr = ['ab','cd','ef']
   const arrk = picture[0].length*k;
   console.log(arrk)
   const arrJoin = picture.join('')
   const yoso = [...arrJoin].map(v=>v.repeat(k)).join("")
   let temArray = []
   let temArray2 = []
   let result = []     
   let result2 = []
   
   for( let i = 0; i < yoso.length; i +=arrk){
        temArray = yoso.slice(i,i+arrk)
        result = [...result,temArray]
    }
    
    // console.log(result)
   const result3 =   result.map(v=>v.repeat(k)).join("")
      for( let j = 0; j < result3.length; j +=arrk){
        temArray2 = result3.slice(j,j+arrk)
        result2 = [...result2,temArray2]
          // console.log(j,arrk)
    }
   return result2
    
    // return result2
 
    
 
   
    // console.log(picture.join(""))
    
//    let answer = []

//     for(let i = 0; i < picture.length; i++){
//          for(let j = 0; j < picture[0].length; j++){
//               if(j%k===0 ){answer+="1"}
//                for(let y = 0; y < k; y++){
                  
//                    answer += picture[i][j]
//                }
//          }
        
//     }
// const one = answer.slice(1).split('1')
// console.log(one)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
}

