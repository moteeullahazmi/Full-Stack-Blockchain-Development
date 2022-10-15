/*
console.log('one');
setTimeout(() => console.log('two'),0);//100 ms delay
console.log('three');
*/
const func1 = () => {
    console.log('func1 is starting');
    func2();
    console.log('func1 is ending');
}
const func2 =() => {
    setTimeout( () => {
        console.log('func2 is starting');
    },5000);
}
func1();

//setInterval