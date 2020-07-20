// difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
let count = 0;
for(let i =0; i<=100; i++){
    count = count + (i*i);
}
let sum = 0;
for(let i =0; i<=100; i++){
    sum = sum + i;
    squareCount = sum * sum;
}
console.log(squareCount-count);