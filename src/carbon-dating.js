const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

	  if (typeof sampleActivity === 'string' && !isNaN(sampleActivity) && sampleActivity > 0) {
	    if (Math.log (MODERN_ACTIVITY / sampleActivity) <= 0) return false;
      /* t = ln (N0 / N) / (0.694 / t1/2) */
	    return Math.ceil (Math.log (MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
	  }
	  else return false;
	};



