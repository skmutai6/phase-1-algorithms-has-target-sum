function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    if(i + i === target) {
      return true;
    } else
      return false;
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  if any pair of numbers add up to the target
    returns true 
  else 
    return false
*/

/*
  Add written explanation of your solution here
  I need to make a hasTargetSum function that returns either true or false,
  when any pair of numbers in the array of intergers add up to the target,
  it should return true. That is if my array has5 intergers and 2 of them
  when added is equal to the target, it should return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
