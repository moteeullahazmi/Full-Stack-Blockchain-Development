function *disp()
{
    console.log("Hey");
    
    console.log("How");
    yield "second pause";
    console.log("are");
    yield 10+20;
    console.log("You? ");  //10 min break// meeting back at 4:25 IST pm class resume with DOM concept//
}

let control=disp();
console.log(control.next());
console.log(control.next());

// control.next();
// control.next();