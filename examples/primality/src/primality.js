/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Alexander G. Covic 
 * @since February 2023
 * @desc This program reads a number and returns if its prime or not
 */

const argv = require('../node_modules/yargs/')(process.argv.slice(2)).argv;

/**
 * 
 * @param {Array<Number>} args - Input arguments from CLI
 * @returns {Boolean} Returns true if the args passed as a argument are
 * type int
 */
const checkArgs = (args) => {
  if (args[0] == args.length + 1);
  for(let arg of args){
    const value = Number(arg);
    if (Number.isNaN(value) || !Number.isInteger(value)) return false;
  }
  return true;
}

/**
 * @description Slower Version
 * @param {Number} number - Input number to check condition
 * @returns {Boolean} Returns if a number is prime or not.
 */
const primeNumberSlow = (number) => {
  if(number <= 1) return false;
  for(let i = 2; i < number; ++i) {
    if (number % i == 0) { return false; }
  }
  return true;
}

/**
 * @description Faster Version
 * @param {Number} number - Input number to check condition
 * @returns {Boolean} Returns if a number is prime or not.
 */
const primeNumberFast = (number) => {
  if(number <= 1) return false;
  const NUMBER_SQUARED = Math.sqrt(number);
  for(let i = 2; i < NUMBER_SQUARED; ++i) {
    if (number % i == 0) { return false; }
  }
  return true;
}

/**
 * @description Main Function
 */
const main = () => {
  if (!checkArgs(argv._)){
    console.log('Los argumentos no son los adecuados.');
  } else {
    for (let i = 1; i < argv._.length; ++i){
      const isPrime = primeNumber(argv._[i]);
      console.log(`${argv._[i]} is${(isPrime) ? ' ' : ' not '}prime.`);
    }
  }
}

if (require.main == module){
  main();
}

module.exports = {primeNumberFast, primeNumberSlow};