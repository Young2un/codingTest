function solution(numbers, target) {
  // number를 2중배열로 만든다
    const numArr = numbers.map(v=> [v,v*-1])
    let count = 0;
    // 재귀돌면서 더한다
    function recur(index, sum) {
        if (index === numArr.length) {
            // 더한게 타겟이랑 같으면 카운트업
            if (sum === target) count++; 
            return;
        }

        recur(index + 1, sum + numArr[index][0]); 
        recur(index + 1, sum + numArr[index][1]);
    }

    recur(0, 0);
    return count;
}