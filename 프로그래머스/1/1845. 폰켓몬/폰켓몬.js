function solution(nums) {
      const phone = nums.reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{})
      
      const keyLength = Object.keys(phone).length
      const halfLength = nums.length/2
      
    return keyLength < halfLength ? keyLength : halfLength
}