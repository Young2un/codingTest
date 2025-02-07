function solution(N, number) {
    if (N === number) return 1;
    
    let dp = Array.from({ length: 9 }, () => new Set());
    
    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i))); // 연속된 N 추가
        
        for (let j = 1; j < i; j++) {
            for (let num1 of dp[j]) {
                for (let num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if (num2 !== 0) dp[i].add(Math.floor(num1 / num2));
                }
            }
        }
        
        if (dp[i].has(number)) return i;
    }
    
    return -1;
}
