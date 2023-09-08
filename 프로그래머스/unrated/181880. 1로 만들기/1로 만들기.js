function solution(num_list) {
    let count = 0;
    for(let i = 0; i < num_list.length; i++){
        for(let j = num_list[i]; j > 1; j = j / 2 ){
            if( j % 2 ){
                j--
            }
            count++
        }
    }return count
}