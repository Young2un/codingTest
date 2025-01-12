function solution(operations) {
    const arr = operations.map(v=> v.split(' '))
    const q = []
   
    
   for (let i = 0; i < arr.length; i++) {
        const [cmd, num] = arr[i];
        if (cmd === 'I') {
            q.push(+num);
            q.sort((a, b) => a - b);
        }
        if (cmd === 'D') {
            if (q.length === 0) continue;
            if (num === '-1') q.shift(); 
            if (num === '1') q.pop();   
        }
    }
    
    
   if(q.length===0){
       return [0,0]
   }
    
    return [q[q.length-1],q[0]]
    

}