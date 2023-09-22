function solution(myString) {
   return [...myString].map(v=> v==='a'|| v==='A'? 'A' :v.toLowerCase()).join('')
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // myString.map(item => item==='a'?'A':)
    
    // console.log([...myString])
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //다 소문자로 바꾸고 a만 대문자로 바꾼다
    
    
//     let answer = ''
//     for(let i = 0; i < myString.length; i++){
//         if(myString[i] === 'a'){
//          answer+='A'
//         }else if(myString[i] !== 'A' && myString[i] === myString[i].toUpperCase()){
//             answer+= myString[i].toLowerCase()
//         }else{
//             answer+=myString[i]
//         }
//     }
    
//     return answer ;
}