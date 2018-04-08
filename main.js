
(function () {
    'use strict'

function multiply(value)
{
console.log('multiply called for '  + value);
return value* value;
}

function squre(val){
    setTimeout(() => {
        console.log('sqr called for ' +val  ) ;
        return multiply(val)
               
    }, 2000);
}


    for (let index = 0; index < 5; index++) {
        setTimeout(() => {
            console.log(squre(index));
        }, 1000);
     
    }
})()
