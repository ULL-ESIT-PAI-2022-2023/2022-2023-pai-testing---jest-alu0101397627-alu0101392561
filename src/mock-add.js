/// Use of mock with callback
const doAdd = (a, b, callback) => {
  callback(a + b); /// callback is a type of function that recibes another one as a parameter, in this case acts like a return
};
module.exports = doAdd; 