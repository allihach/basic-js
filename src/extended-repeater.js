module.exports = function repeater(str, options) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    let result = '';
    let reTi = options.repeatTimes;
    let sep = options.separator!=undefined?options.separator:'+';
    let addTemp = options.addition!==undefined?options.addition:'';
    let add = '';
    let addRT = options.additionRepeatTimes!=undefined?options.additionRepeatTimes:1;
    let addSep = options.additionSeparator!=undefined?options.additionSeparator:'|';

    for(let j=0; j<addRT; j++) {
        add += j==0?addTemp:addSep+addTemp;
    }

    if(reTi==undefined) {
        return result += str+add;
    }

    for (let i=0; i<reTi; i++) {
        result += i==0?str+add:sep+str+add;
    }
    return result;
};
  