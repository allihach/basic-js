module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let n = 1;
        for(let i=0; i<arr.length; i++) {
            if(Array.isArray(arr[i])) {
                let m = 1+this.calculateDepth(arr[i]);
                n = n<m?m:n;
            } 
        }
        return n;
    }
};