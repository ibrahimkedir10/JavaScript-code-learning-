const summerStrut = ["Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles"];
const ratings = [5, 4, 4, 3, 3, 5, 5, 4];

// Find index of the first occurrence of rating 3
const threeStarIndex = ratings.indexOf(3) + 1;
console.log(`Song number ${threeStarIndex} is rated three stars`);

// Find the first song with length greater than 10 characters [LAMBDA EXPRESSION]
const title = summerStrut.find(song => song.length > 10);
console.log(`First song with length greater than 10 characters: ${title}`);
