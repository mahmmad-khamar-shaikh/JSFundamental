(function testRegex() { 
    var patForReqdFld = new RegExp('^[+-]?[0-9]{1,9}(?:\.[0-9]{1,2})?$');
    var value = '-0.25';

    if(patForReqdFld.test(value)) {
    console.log ('Valid Number: ' + value);
    } else {
        console.log('Invalid Number: ' + value);
    }


}());