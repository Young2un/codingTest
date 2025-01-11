function solution(jobs) {
    // 어떤 작업 요청이 들어왔을 때 작업의 번호, 작업의 요청 시각, 작업의 소요 시간을 저장해 두는 대기 큐가 있습니다. 
    // 처음에 이 큐는 비어있습니다.
    let restRequest = jobs.length;
    const q = [];
    let currentTime = 0;
    let returnTime = 0

    // 작업의 소요시간이 짧은 것, 작업의 요청 시각이 빠른 것, 작업의 번호가 작은 것 
    // [요청시각, 소요시간]
    const sortTime = jobs.sort((a,b)=> a[0]- b[0])
    let index = 0
    
    while(restRequest > 0) {
        // 대기큐에 요청시각이 되면 넣기
        while(index < jobs.length && currentTime >= sortTime[index][0]){
            q.push(sortTime[index])
            index++
        }
        // 대기큐에 뭐가 있으면
        if(q.length>0){
            q.sort((a,b)=>a[1]-b[1])
            const runJob = q.shift();
            currentTime+= runJob[1];
            returnTime += currentTime-runJob[0];
            restRequest--
        }
        else{
            currentTime = sortTime[index][0]
        }
        
    }
       
    return Math.floor(returnTime/jobs.length)
    
}