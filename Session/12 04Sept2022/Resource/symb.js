var a=Symbol("Alien");
var b=Symbol("Alien");

//var c="Alien";
var d="Alien";
console.log(a==b);
console.log(typeof a);
console.log(typeof d);
let age=Symbol("age");
let user ={
    name:"hyder",
    qualification: "BE" ,
     [age]:28

};
console.log(user);

console.log(user.name);
//console.log(user.age);
console.log(user[age]);

for(let key in user)
{
    console.log(key);

}

console.log(JSON.stringify(user));// object to json conversion
