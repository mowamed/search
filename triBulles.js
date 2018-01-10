var nums = [12, 7, 8, 45, 96, 33, 19, 55];
console.log("Befor to arrange the array the value are \n" + nums)
var table_ordered = false;
var size = nums.length - 1

while(!table_ordered){
  table_ordered = true
  for(var i = 0; i < size; i++){

    if(nums[i] > nums[i+1]){
      var temp_num = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp_num;
      table_ordered = false
    }
  }
  size--;
}

console.log("after aranging the array \n" + nums)
