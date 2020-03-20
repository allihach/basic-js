module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    let obj = {};
    obj.turns = Math.pow(2,disksNumber);
    obj.seconds = obj.turns/(turnsSpeed/3600);
    return obj;
}