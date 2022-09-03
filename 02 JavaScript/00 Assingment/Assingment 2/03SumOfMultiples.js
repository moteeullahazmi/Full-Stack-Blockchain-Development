function main() {
    let sum = 0;
    for (i = 0; i < 1000; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum =sum+i;  //sum+=i;
      }
    }
    return sum;
  }
  
  let sumOf = main();   
  
  console.log(sumOf);