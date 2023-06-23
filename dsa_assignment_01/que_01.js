
function sumOfTwoIndex(nums,target) {
    const numsMap = new Map();
    for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i];
        if(numsMap.has(difference)){
            return [numsMap.get(difference),i];
        }
        numsMap.set(nums[i], i);
    }
    return [];
    
}

let result = sumOfTwoIndex([2,7,11,15], 9)
console.log(result);