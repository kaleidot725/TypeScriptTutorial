
let x = 1;
x = 2;

let y;

y = 1;

const a = 2;

const b = 1;
// error: b = 2

const obj = { a: 1 };
// error: obj = { a: 2};
obj.a = 2;

console.log(`x : ${x}`)
console.log(`y : ${y}`)
console.log(`a : ${a}`)
console.log(`b : ${b}`)
console.log(`obj.a : ${obj.a}`)
