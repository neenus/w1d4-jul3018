// Example - Unique ID Generator
function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2


// =================================================================

// Exersice 1 - Loaded Die

// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// };  // returns a random number between 1 - 6

// console.log(rollDie());

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = 0;
  var i;


  // console.log(makeLoadedDie());

  return function() {
    /* your code here */
  id +=1;
  var i = id;
  if(id>10) {
    id = 0; id += 1;
    var i = id;
  }

  return list[i -1];
  };

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5
