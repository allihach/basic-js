module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let team = '';
  let arr = [];

  if(!Array.isArray(members)) {
    return false;
  }

  members.forEach(element => {
    if(typeof element == "string") {
      arr.push(element.trim()[0].toUpperCase());
    }
  });

  arr.sort();

  for(let i=0; i<arr.length; i++) {

    team+=arr[i][0];
  }
  return team;
};