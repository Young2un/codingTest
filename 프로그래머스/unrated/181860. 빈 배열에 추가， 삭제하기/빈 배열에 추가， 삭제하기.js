function solution(arr, flag) {
    
//     let X = [];
    
//  // return   arr.filter((v,i)=> flag[i]===true ? v*2*2 : '' )
    
//     for( let i = 0 ; i < flag.length ; i++){
//         if( flag[i]){
//             for ( let j = 1 ; j < flag[i]*2 ; j++){
//                 let newArray = new Array(arr[i]*2)
//                 X = [...X, newArray.fill(arr[i]) ]
//             }
//         }
// //         else if(!flag[i]){
            
// //         }
//     }
//     return X
    
    let x =[];
    
    for(let i = 0; i < arr.length; i++){
        let tr = arr[i]*2
        if(flag[i]===true){
             x.length = x.length + tr
            if(i===0){
                x.fill(arr[i],0,tr+1)
            }else 
                x.fill(arr[i],x.length-tr,x.length)
        }else{
            x.splice(-arr[i])
        }
    }return x
    
}
