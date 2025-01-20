function solution(k, dungeons) {
    function getPermutations(arr, n) {
        const results = [];
        if (n === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest, n - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    }

    const permutations = getPermutations(dungeons, dungeons.length);
    let maxCount = 0;

    permutations.forEach((dungeonOrder) => {
        let fatigue = k;
        let count = 0;

        for (const [minFatigue, consumeFatigue] of dungeonOrder) {
            if (fatigue >= minFatigue) {
                fatigue -= consumeFatigue;
                count++;
            } else {
                break; 
            }
        }

        maxCount = Math.max(maxCount, count);
    });

    return maxCount;
}
