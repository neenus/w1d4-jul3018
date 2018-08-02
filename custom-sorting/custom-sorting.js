var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students = students.sort(function(student1, student2){
  if (student1.name > student2.name) {
    return 1;
  } else {
    return -1;
  }
  // console.log(obj);
});
console.log(students);