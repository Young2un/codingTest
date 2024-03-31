function solution(numbers, target) {
  // numbers 배열의 합을 미리 계산하여 memoization에 활용
  const totalSum = numbers.reduce((acc, num) => acc + num, 0);
  const memo = new Map();

  function dfs(index, sum) {
    const memoKey = `${index}-${sum}`;
    if (memo.has(memoKey)) return memo.get(memoKey);

    // 현재 요소까지의 합이 타겟과의 차이가 전체 합보다 크다면 탐색할 필요 없음
    if (Math.abs(target - sum) > totalSum) return 0;
      
    // 기저 조건
    if (index === numbers.length) {
      if (sum === target) return 1;
      return 0;
    }
     // 현재 요소를 더하거나 빼는 두 가지 경우의 수에 대해 재귀적으로 계산
    const ways =
      dfs(index + 1, sum + numbers[index]) +
      dfs(index + 1, sum - numbers[index]);

    memo.set(memoKey, ways);

    return ways;
  }

  return dfs(0, 0);
}