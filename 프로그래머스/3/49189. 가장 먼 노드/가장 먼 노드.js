function solution(n, edge) {
    const graph = edge.reduce((acc, [start, end]) => {
        if (!acc[start]) acc[start] = []; 
        if (!acc[end]) acc[end] = [];

        acc[start].push(end);
        acc[end].push(start); 

        return acc;
    }, {});
    
    return bfs(graph,'1')   
}

 const bfs = (graph, start) => {
        let queue = [start]
        let visited = {}
        let distance ={}
        
        Object.keys(graph).map(node => {
            visited[node] = false;
            distance[node] = 0;
        });
        
        visited[start] = true;
        
        while (queue.length > 0) {
            let vertex = queue.shift()
            
            let neighbors = graph[vertex];
            for(let neighbor of neighbors){
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    distance[neighbor] = distance[vertex] +1
                    queue.push(neighbor)
                }
            }
        }
        const maxDistance = Math.max(...Object.values(distance));
        const count = Object.values(distance).filter(v => v === maxDistance).length;
        
        return count
    }