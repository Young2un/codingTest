function solution(money) {
    const n = money.length;
    if (n === 3) return Math.max(...money); // 예외 처리

    const rob = (arr) =>
        arr.reduce(
            ([prev2, prev1], curr) => [prev1, Math.max(prev1, prev2 + curr)],
            [0, 0]
        )[1]; // 최댓값 반환

    return Math.max(rob(money.slice(0, n - 1)), rob(money.slice(1, n)));
}
