function distributeCandies(candyType) {
    const uniqueTypes = new Set(candyType); 
    const maxTypes = candyType.length / 2; 
    return Math.min(uniqueTypes.size, maxTypes);
  }
  
  const candyType = [1, 1, 2, 2, 3, 3];
  const maxCandies = distributeCandies(candyType);
  console.log(maxCandies); 
  