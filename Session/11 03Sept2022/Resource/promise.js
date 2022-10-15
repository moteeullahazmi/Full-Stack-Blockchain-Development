//create a promise

//this is the executor function aka the promise
let promise= new Promise(function(resolve,reject) {
    //pretend it takes time for jack and jill to bring water
    /*
    setTimeout(function () {
        //success condition- water has been fetched
        resolve("Hurray! jack and jill are back with water");
    },2000);
    */
    setTimeout(function (){
        
        reject(
            //throwing an error
            new Error("jack fell down and broke his crown, and jill can tumbling after"));
    },2000);
});

//consumer function- the one which will receive promise
const grandParentCooking= () =>{
    //then will indicate promise has been fulfilled
    /*
    promise.then(function(result){
        console.log(`cooking the vegetables with the ${result}`);
    });  
    */
    promise.catch(function (error){
        console.log(`omg ${error.message}`);
    });
};
grandParentCooking();
//task- implement both resolve and reject for this example