// Sample heroes array
var heroes = ["D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt"];

// Query Syntax
var longLoudHeroes = heroes.filter(h => h.length > 6).map(h => h.toUpperCase());

console.log("Query Syntax:");
longLoudHeroes.forEach(hero => {
    console.log(hero);
});

// Method Syntax - Separate Statements
var longHeroes = heroes.filter(h => h.length > 6);
var longLoudHeroesSeparate = longHeroes.map(h => h.toUpperCase());

console.log("\nMethod Syntax - Separate Statements:");
longLoudHeroesSeparate.forEach(hero => {
    console.log(hero);
});

// Method Syntax - Chained Expressions
var longLoudHeroes2 = heroes.filter(h => h.length > 6).map(h => h.toUpperCase());

console.log("\nMethod Syntax - Chained Expressions:");
longLoudHeroes2.forEach(hero => {
    console.log(hero);
});
