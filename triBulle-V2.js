var nums = [12, 7, 8, 45, 96, 33, 19, 55];
// function to exchange 2 items in a array
function swap(table, a, b){
  var temp = table[a];
  table[a] = table[b];
  table[b] = temp;
}

function bubleSort(table){
  var tableSize = table.length;
  for(var i = 0; i < tableSize; i++){
    for(var j = 0; j < tableSize; j++){
      if(table[i] < table[j]){
        swap(table, i, j)
      }
    }
  }
}
bubleSort(nums);
console.log(nums);
