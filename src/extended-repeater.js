const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let rezult = '';
    for (let i = 1; i <= (options.repeatTimes || 1); i++) {
      rezult +=str;
        if (options.addition !== undefined) {
          for (let j = 1; j <= (options.additionRepeatTimes || 1); j++) {
             rezult += options.addition;
               if (j !== (options.additionRepeatTimes || 1)) {
                 rezult += (options.additionSeparator || '');
               };
          };
        };
      if (i !== (options.repeatTimes || 1)) {
        rezult += (options.separator || '+');
      };
    };
    return rezult;
  };

  