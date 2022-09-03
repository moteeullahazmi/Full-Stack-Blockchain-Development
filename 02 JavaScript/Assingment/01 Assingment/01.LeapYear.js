var year= 2020;

if(year %4 ==0){
    if(year %100==0){
        if (year%400 == 0) {
            console.log("This is leap year");
        }
        else{
            console.log("This is not leap Year")
        }

    }
    else{
        console.log("This is leap year");
    }

}
else{
    console.log("This is not leap year");
}
    