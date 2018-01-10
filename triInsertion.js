var nums = [12, 7, 8, 45, 96, 33, 19, 55];
console.log("Befor sorting the array the value are \n" + nums)
size = nums.length

for(i = 1; i < size; i++){
  insertNums(nums, i);
}

function insertNums(table, index){
  if(index > 0){
    if(table[index - 1] > table[index]){
      var tempNumber = table[index];
      table[index] = table[index - 1];
      table[index - 1] = tempNumber;
      insertNums(table, index-1);
    }
  }
}

console.log("After sorting the array the value are \n" + nums)
