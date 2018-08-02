// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  // forEach syntax
  // arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
    // }[, thisArg]);

    arr.forEach(function(arrItem, i) {
      if (arrItem === "Waldo") {
      found(i);  // execute callback
    }
    } );

  // Original Case

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);  // execute callback
  //   }
  // }
}

function actionWhenFound(i) {

  console.log("Found him at index", i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);