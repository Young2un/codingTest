function solution(arr)
{
    return arr.filter((v,i,arr)=>v!==arr[i-1])
}