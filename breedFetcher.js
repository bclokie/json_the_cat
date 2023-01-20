const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Error: Invalid status code ${response.statusCode}`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Error: Breed ${breedName} not found`);
    return;
  }
  console.log(data[0].description);
});