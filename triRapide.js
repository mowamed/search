var nums = [12, 7, 8, 45, 96, 33, 19, 55];
console.log("Befor sorting the array the value are \n" + nums)

quickSort(nums, 0, nums.length-1)

console.log("After sorting the array the value are \n" + nums)

// function to exchange 2 items in a array
function swap(table, a, b){
  var temp = table[a];
  table[a] = table[b];
  table[b] = temp;
}

//quickSort algorithme
function quickSort(table, start, end){
  var left = start - 1;
  var right = end +1;
  var pivot = table[start];

  // if the table is empty there is nothing to do
  if(start >= end){ return; }

  //else we loop throught the table, one time from right to left and one time from left to right
  //we are looking for items which are not at their place
  while(1){
    do { right--; } while(table[right] > pivot);
    do { left++; } while(table[left] < pivot);

    if(left < right){
      swap(table, left, right);
    }
    else {
      break;
    }

  }
  //after the quickSort algorithms we get 2 group
  //1 group at the left of the pivot
  //2 group at the right of the pivots
  quickSort(table, start, right);
  quickSort(table, right+1, end);
}
