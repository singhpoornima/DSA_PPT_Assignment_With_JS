function minScore(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let minScore = nums[n - 1] - nums[0]; 
  
    for (let i = 0; i < n - 1; i++) {
      const maxChange = Math.max(nums[i] + k, nums[n - 1] - k); 
      const minChange = Math.min(nums[0] + k, nums[i + 1] - k); 
      minScore = Math.min(minScore, maxChange - minChange);
    }
  
    return minScore;
  }
  
  
  const nums = [1];
  const k = 0;
  const minScoreValue = minScore(nums, k);
  console.log(minScoreValue); 
  