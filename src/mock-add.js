/// Use of mock with callback
const doAdd = (firstOperand, secondOperand, callback) => {
  callback(firstOperand + secondOperand); /// callback is a type of function that recibes another one as a parameter, in this case acts like a return
};
module.exports = doAdd; 