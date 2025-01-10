function solution(scoville, K) {
    // [1, 2, 3, 9, 10, 12] 
    // 1+(2*2) =5 섞기
    // [3,9,10,12,5] 맨뒤에 추가 최소힙 정렬
    // [3,5,9,10,12] 다시 섞기
    // 3+(5*2) =13
    
    // const sortScoville = scoville.sort((a,b)=> a-b)

   
    let count = 0
    
    scoville.sort((a,b)=> a-b)

    while (scoville.length > 1 && scoville[0] < K) {
        const f = scoville.shift(); 
        const s = scoville.shift(); 
       
        const newScoville = f + (s * 2);

     
        let index = scoville.findIndex(v => v > newScoville);
        if (index === -1) index = scoville.length; 
        scoville.splice(index, 0, newScoville);

        count++;
    }


    return scoville[0] >= K ? count : -1;
}