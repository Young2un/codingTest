function solution(priorities, location) {
//    1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
//    2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
//   3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
    
    // const arr = Array.from({ length: 3 }, (_, i) => i); 
    const arr = [...priorities].map((v,i)=>[v,i])
    
    const q = []
    
    // q.length === priorities.length

    for(let i = 0; q.length < priorities.length; i++){
       const a = arr.shift()
       if(arr.some(v=>v[0]>a[0])){
           arr.push(a)
       }
        else {
            q.push(a)
        }
    }
    
 return q.map(v=>v[1]).indexOf(location)+1
    
    
}