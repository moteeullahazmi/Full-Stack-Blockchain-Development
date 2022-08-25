/*
ARROW Function()-:
                    Arrow function is one of the features introduced in the ES6  version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; }
*/

let add = (n1,n2) =>        // *Arrow Function*
 {
    return n1+n2;
  }   
    let result=add(8,9)
    console.log(result);

    /* NOTE:  
            * only one statement remove{}.
            * only one statement don't write return key word.
    */

    // OPTIMIZE

    let ad= (n1,n2) => n1+n2;
    let resul =add(9,10);
    console.log(resul);
