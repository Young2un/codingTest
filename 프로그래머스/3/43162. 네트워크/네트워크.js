function solution(n, computers) {
    const visited = new Array(n).fill(false)
    let count = 0
    
    //	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]
    function dfs(i) {
        visited[i] = true;
        for(let j = 0; j < n; j++){
            if(computers[i][j]===1 && !visited[j]){
                dfs(j)
            }
        }
    }
    
    for(let i=0; i< n; i++){
        if(!visited[i]){
            dfs(i);
            count++
        }
    }
    return count
   
}