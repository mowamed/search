var nums = [12, 7, 8, 45, 96, 33, 19, 55];
console.log("Befor sorting the array the value are \n" + nums)
var newArray = []
size = nums.length

for(i = 0; i < size-1; i++){
  myMin = Math.min.apply(Math, nums);
  newArray[i] = myMin;
  nums.splice(nums.indexOf(myMin), 1);
}
console.log("After sorting the array the value are \n" + newArray)
