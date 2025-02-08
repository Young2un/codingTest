function solution(triangle) {
    
    const result = [...triangle]
    
    
    for(let i = triangle.length -2 ; i>=0; i--){
        // 현위치에서 아랫층 값을 비교 하고 그 값으로 바꿔줌
        for(let j = 0; j<triangle[i].length;j++){
            result[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
 return result[0][0]
}