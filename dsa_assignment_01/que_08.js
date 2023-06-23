function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate = -1;
    let missing = -1;
  
    for (let num of nums) {
      if (numSet.has(num)) {
        duplicate = num;
      } else {
        numSet.add(num);
      }
    }
  
    const n = nums.length;
  
    for (let i = 1; i <= n; i++) {
      if (!numSet.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); 
  