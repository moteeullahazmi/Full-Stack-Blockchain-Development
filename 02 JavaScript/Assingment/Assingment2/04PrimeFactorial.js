function factorial(fact){
    var num=1;
        for(num; num<=fact; num--)
        {
            fact=num*fact;
        }
        console.log(fact)
}
factorial(1,7);