const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]); // 컴퓨터의 수
const m = parseInt(input[1]); // 직접 연결된 컴퓨터 쌍의 수
const network = []; // 컴퓨터 간 연결 정보를 저장하는 배열
const visited = []; // 각 컴퓨터의 방문 여부를 저장하는 배열

for (let i = 0; i <= n; i++) {
  network.push([]);
  visited.push(false);
}

for (let i = 0; i < m; i++) {
  const [a, b] = input[i + 2].trim().split(' ').map(Number);
  network[a].push(b);
  network[b].push(a);
}

function dfs(computer) {
  visited[computer] = true;
  for (const connected_computer of network[computer]) {
    if (!visited[connected_computer]) {
      dfs(connected_computer);
    }
  }
}

dfs(1); // 1번 컴퓨터부터 시작하여 탐색

console.log(visited.filter(Boolean).length - 1); // 1번 컴퓨터는 웜 바이러스에 걸렸으므로 제외
