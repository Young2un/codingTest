function solution(number, k) {
    let arr = [...number].map(Number); 
    let result = [];
    let targetLength = number.length - k;
    let start = 0; 

    for (let i = 0; i < targetLength; i++) {
        let maxIndex = start;
        for (let j = start; j <= k + i; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        result.push(arr[maxIndex]); 
        start = maxIndex + 1; 
    }

    return result.join('');
}
