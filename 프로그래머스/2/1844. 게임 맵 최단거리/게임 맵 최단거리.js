function solution(maps) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const q = [[0, 0]];
    const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(-1));
    visited[0][0] = 1;

    while (q.length > 0) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && nx < maps.length && // 맵안에 있는지
                ny >= 0 && ny < maps[0].length &&
                maps[nx][ny] === 1 && // 이동가능한지
                visited[nx][ny] === -1 // 방문여부
            ) {
                visited[nx][ny] = visited[x][y] + 1;
                q.push([nx, ny]); 
            }
        }
    }

    return visited[maps.length - 1][maps[0].length - 1]; 
}
