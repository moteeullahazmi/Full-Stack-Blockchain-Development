// What is A prime number?
// A Prime Number is a whole number with exactly two integral divisors, 1 and itself. The number 1 is not a prime, since it has only one divisor. 


// What is a Composite Number?
// A composite number is a whole number with more than two integral divisors. So all whole numbers (except 0 and 1 ) are either prime or composite.
// let num=2;

// 2 prime or not


let num=2;
var isPrimeNumber=true;

for(let i=2; i<num; i++ ){
    if(num%i==0){
        isPrimeNumber=false;
        }
    } 
    
    if(isPrimeNumber==true)
    {
        console.log(`${num} is a prime number`);
    } else{
        console.log("not a prime number");
    }



// https://www.youtube.com/watch?v=2zv8agocxjs&ab_channel=ThapaTechnical