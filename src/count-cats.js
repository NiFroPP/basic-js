const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  
  let s=0;
  let rez =0;
  s = matrix.join().split(',');
  console.log (s);
    for (let i=0; i <= s.length; i++) {
      if (s[i] === '^^') {
      rez ++}
    };
  return rez;

};
