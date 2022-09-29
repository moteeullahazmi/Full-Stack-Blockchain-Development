var c=["javascript","react","nodejs","blockchain"];

// for(let i=0;i<c.length;i++)
// {
//      console.log(c[i]);
// }

let g=c[Symbol.iterator]();

//console.log(typeof c[Symbol.iterator]());

//  let firstValue=g.next();

//       console.log(firstValue);

//       let secondValue=g.next();
//       console.log(secondValue);

//       console.log(g.next().value);
//       console.log(g.next().done);

//       console.log(g.next());

let str1 = "Rohan Kumar";
let itr2= str1[Symbol.iterator]();
 let res=itr2.next();
 console.log(res);

 while(!res.done)
 {
    console.log(res.value);
    res=itr2.next();
 }
