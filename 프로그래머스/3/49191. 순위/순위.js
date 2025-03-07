function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  results.forEach(([winner, loser]) => {
    graph[winner][loser] = 1;
  });

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      for (let z = 1; z <= n; z++) {
        if (graph[i][j] === 1 && graph[j][z] === 1) {
          graph[i][z] = 1;
        }
      }
    }
  }

  // 가로가 이긴거
  // 세로가 진거
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let win = 0;
    let lose = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === 1) win++;
      if (graph[j][i] === 1) lose++;
    }
    if (win + lose === n - 1) count++;
  }
  return count;
}
