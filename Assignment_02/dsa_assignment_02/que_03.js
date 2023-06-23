function findLHS(nums) {
    const freqMap = new Map();
    let maxLength = 0;
  
    
    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    
    for (const [num, freq] of freqMap.entries()) {
      if (freqMap.has(num + 1)) {
        maxLength = Math.max(maxLength, freq + freqMap.get(num + 1));
      }
    }
  
    return maxLength;
  }
  
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const longestSubsequence = findLHS(nums);
  console.log(longestSubsequence); 
  