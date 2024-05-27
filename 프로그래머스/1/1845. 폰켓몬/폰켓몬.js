function solution(nums) {
      
      const keyLength = [...new Set(nums)].length
      const halfLength = nums.length/2
      
    return keyLength < halfLength ? keyLength : halfLength
}