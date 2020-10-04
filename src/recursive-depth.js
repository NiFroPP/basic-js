const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let rezult = 0;
      if (Array.isArray(arr)) {
          rezult++;
          let count = 0;
              for (let i = 0; i < arr.length; i++) {
                  let depth = this.calculateDepth(arr[i]);
                      if (depth > count) {
                          count = depth;
                      };
              };
        rezult += count;
      };
    return rezult;
  };
}; 