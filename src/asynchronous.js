// const examplePromise = new Promise( (resolve, reject) => {
//   const x = 5;
//   if (x === 5) { return resolve("Ok!"); }
//   else { return reject('An error has occurred.'); }
// });

// examplePromise().then(
//   (value) => { console.log(value); },
//   (error) => { console.log('An error has occurred.'); }
// );

const apiExample = async () => {
  const url = `https://run.mocky.io/v3/1f9b74cf-bbcf-463d-a45b-72c71b55840a`;
  const promise = await fetch(url);
  return promise.json();
}

module.exports = apiExample