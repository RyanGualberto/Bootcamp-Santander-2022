let lines = gets().split('\n');
var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0 ){
        let quad = i ** 2;
        console.log(`${i}^2 = ${quad}`);
    } 
 }