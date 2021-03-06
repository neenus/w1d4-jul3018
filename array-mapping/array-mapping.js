var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(obj) {
  var newInput = {};
  xSquared = obj.x * obj.x;
  ySquared = obj.y * obj.y;
  newInput = Math.sqrt(xSquared + ySquared);
  return newInput;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);