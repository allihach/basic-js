class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool;
    }
    
    encrypt(message, key) {
       if(message == undefined || key == undefined) {
           throw Error;
       }
       let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       let result = '';
       message = message.toUpperCase();
       key = key.toUpperCase();
       let indexA;
    
       for(let m=0, k=0; m<message.length; m++, k++) {
            if(k>key.length-1) {
                k = 0;
            }

           if(a.indexOf(message[m]) == -1) {
               result += message[m];
               k--;
               continue;
           }
           if(a.indexOf(key[k])+a.indexOf(message[m])>25) {
              indexA = a.indexOf(key[k])+a.indexOf(message[m])-26;
           } else {
              indexA = a.indexOf(key[k])+a.indexOf(message[m]);
           }

           result += a[indexA];
       }
       return result;
    }

    decrypt(message, key) {
        
        if(message == undefined || key == undefined) {
            throw Error;
        }

        let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = '';
        message = message.toUpperCase();
        key = key.toUpperCase();
        let indexA;

        if(this.bool == false) {
            message = message.split('').reverse().join('');
        }

        for(let m=0, k=0; m<message.length; m++, k++) {
            if(k>key.length-1) {
                k = 0;
            }

            if(a.indexOf(message[m]) == -1) {
                result += message[m];
                k--;
                continue;
            }

            if(a.indexOf(message[m])-a.indexOf(key[k])<0) {
                indexA = 26-Math.abs(a.indexOf(message[m])-a.indexOf(key[k]));
            } else {
                indexA = a.indexOf(message[m])-a.indexOf(key[k]);
            }
            
            result += a[indexA];
        }
        if(this.bool==false) {
            return result.split('').reverse().join('');
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;
