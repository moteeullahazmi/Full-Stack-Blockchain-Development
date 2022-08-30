// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene.
let length =6, breadth =6, height=4;
if((length == breadth && breadth == height)){
    console.log("This is Equilateral Traingles");
}
else if(length == breadth || breadth == height || height == length ){
    console.log("This is Isosceles Traingles");
}
else{
    console.log("This is Scalene Traingles");

}            


    //OUTPUT:-  console.log("This is Isosceles Traingles");
