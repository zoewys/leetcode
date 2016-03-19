/**
 * Created by zoe on 9/28/15.
 */

var addDigits = function(num) {
    while(num.toString().length>1){
        num = num.toString().split('').reduce(function(pv,cv){
            return parseInt(pv)+ parseInt(cv);
        })
    }
    return num;
};

