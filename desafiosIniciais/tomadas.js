let lines = gets().split("\n");
let line = lines.shift().split(' ');
let t = 5;
let total = 0;

for(let i = 1; i < t; i++){
  total = total + parseInt(line.slice(-i));
}
total = total - 3;

console.log(total);