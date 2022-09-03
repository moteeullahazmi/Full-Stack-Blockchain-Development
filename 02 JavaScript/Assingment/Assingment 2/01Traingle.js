// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene.
function traingle(length,breadth,height){
if((length == breadth && breadth == height)){
    console.log("This is Equilateral Traingles");
}
else if(length == breadth || breadth == height || height == length ){
    console.log("This is Isosceles Traingles");
}
else{
    console.log("This is Scalene Traingles");

}            
}

traingle(6,6,2)


    //OUTPUT:-  console.log("This is Isosceles Traingles");
