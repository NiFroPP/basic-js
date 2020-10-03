const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let membersNames = [];
	  if (Array.isArray(members)) {
      for (let i=0; i <= members.length; i++) {
        if (typeof members[i] === 'string') {membersNames [i] = members[i]};
      };
        if(membersNames.length) {
          return membersNames.map( member => member.trim().toUpperCase()[0]).sort().join('');
        }
	    else return false;
	  }
	  else return false;
};


