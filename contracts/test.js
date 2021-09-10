function QuickSort( unsortedArray ) {
    if(unsortedArray.length < 1)    return [];
	var lowerValues = [];
    var higherValues = [];
    
    var temp = [];
  
    var pivotKey = 0;
    var pivotValue = unsortedArray.shift();
    
    for (var i = 0; i < unsortedArray.length; i++) {
        let value = Number(unsortedArray[i])
      if (value <= pivotValue) {
        lowerValues.push(value);
      } else if (value >= pivotValue) {
          higherValues.push(value);     
      }
    }

    lowerValues = [...new Set(lowerValues)]
    higherValues = [...new Set(higherValues)]

    temp[pivotKey] = pivotValue;
  
    return QuickSort(lowerValues).concat(temp, QuickSort(higherValues));
}

console.log(QuickSort([7, 6, 5, 4, 3, 2.5, 1, 1, '1']))