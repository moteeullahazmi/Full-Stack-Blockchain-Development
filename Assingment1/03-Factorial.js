// factorial of n (n!) = 1 * 2 * 3 * 4.....n
// factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

let num=5;
let fac=1;
// num!=num * (num-1) * (num-2)......1;

for(num;num >= 1; num--)
{
    fac=fac*num;
   
}
console.log(`The factorial is ${fac}`);