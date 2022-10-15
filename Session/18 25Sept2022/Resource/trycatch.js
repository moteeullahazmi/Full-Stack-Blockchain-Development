//exception- an unexpected issue
/*

let a =0;
if(a== 0){
    throw new Error("please enter a non zero value");
}
else{
  console.log("this code works well") ; 
}

*/
//try and catch block
/*
part 1- regular code
if there is some issue in regular code, create a code to handle issue
*/

try{
    console.log("we are inside the try block");
    //let a=5/0;
    //console.log(a);
    blockchain();

    
    // a file is being opened
    //something wrong happens
}catch(error){
    console.log("function doesnt exist error");
}
finally{
    console.log("this code is always executed");

    //finally will close the faulty file
}