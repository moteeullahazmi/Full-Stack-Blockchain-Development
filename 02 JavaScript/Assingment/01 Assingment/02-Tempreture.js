let f=45;
let c=60;

function faren(){
    console.log(`The ${f}º F is :${((c*9)/5)+32}º C`);
}

function celcius(){
    console.log(`The ${c}º C is :${((f-32)/9)*5}º F`);
}

faren();
celcius();


// OUTPUT:  The 45º F is :140º C
//          The 60º C is :7.222222222222222º F   