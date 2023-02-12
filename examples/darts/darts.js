//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const score = (x, y) => {
  const DISTANCE = Math.sqrt(x * x + y * y);
  if (DISTANCE <= 1) {
    return 10;
  } else if (DISTANCE <= 5) {
    return 5;
  } else if (DISTANCE <= 10) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = score;
