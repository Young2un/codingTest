function solution(s) {
    return s.split(' ').map((v,i,arr)=> v ==='Z'? -arr[i-1]: +v).reduce((a,c)=> a+c)

}