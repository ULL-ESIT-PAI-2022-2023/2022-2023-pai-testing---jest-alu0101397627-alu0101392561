const apiExample = async () => {
  let url = `https://run.mocky.io/v3/1f9b74cf-bbcf-463d-a45b-72c71b55840a`;
  let promise = await fetch(url);
  return await promise.json();
}

module.exports = apiExample