const chainMaker = {
  arr: [],
  str: '',

  getLength() {
    return this.arr.length;
    return this;
  },
  addLink(value) {
    this.arr.push('( '+ value +' )');
    return this;
  },
  removeLink(position) {
    if(position<1 || typeof position != "number") {
      this.arr = [];
      throw Error;
    }
    if(position>this.arr.length) {
      this.arr = [];
      throw Error;
    }

    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.str = this.arr.join('~~');
    this.arr = [];
    return this.str;
  }
};

module.exports = chainMaker;
