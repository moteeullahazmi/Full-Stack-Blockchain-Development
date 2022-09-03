function PrimeFactorial(start,end){
    for(start; start<=end; start++){
        isPrime=true;
        if(start==1)
        {
            console.log(`{start} is prime nor composite`);
        }
        else if(start%start==0){
            isPrime=false;
            break;
        }
        if(isPrime){
            console.log(`${number} is prime number`);
        } else {
            console.log(`${number} is not prime number`);
        }
    }
}

PrimeFactorial(1,100)