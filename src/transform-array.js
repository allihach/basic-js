module.exports = function transform(arr) {
    if(arr.length == 0) {
        return arr;
    }
    if(Array.isArray(arr) == false) {
        throw "Error";
    }
    let din = '--discard-next';
    let dip = '--discard-prev';
    let don = '--double-next';
    let dop = '--double-prev';
    let result = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i]==din) {
            i++;
            continue;
        }
        if(arr[i]==dip & i>0) {
            result.pop();
            continue;
        }
        if(arr[i]==don&i<arr.length-1) {
            result.push(arr[i+1]);
            continue;
        }
        if(arr[i]==dop&i>0) {
            result.push(arr[i-1]);
            continue;
        }
        
        result.push(arr[i]);
    }
    for(let j=0; j<result.length; j++) {
        if(result[j]==din||result[j]==dip||result[j]==don||result[j]==dop) {
            result.splice(j,1);
        }
    }
    
    return result;

};
