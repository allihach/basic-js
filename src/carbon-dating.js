
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  let result;
  let activity = parseFloat(sampleActivity);

  if(typeof sampleActivity != "string" || isNaN(activity)) {
    return false;
  }
  if(activity>MODERN_ACTIVITY || activity<=0) {
    return false;
  }
  result = Math.ceil(Math.log(MODERN_ACTIVITY/activity)/(0.693/HALF_LIFE_PERIOD));
  
  return result;
};
