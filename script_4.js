const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let wasBornIn70s = [];
let names = [];

for(let person in entrepreneurs) {

  let birthYear = entrepreneurs[person]['year'];
  let firstName = entrepreneurs[person]['first'];
  let lastName = entrepreneurs[person]['last'];

  // I put complet name of persons in a new array 
  names.push({'first':firstName, 'last':lastName})

  if ((birthYear >= 1970) && (birthYear <= 1979)) {
    wasBornIn70s.push(entrepreneurs[person])
  };

  console.log(`${firstName} a ${2020 - birthYear} ans`)
};

console.log(" ")
console.log("Voici les entrepreneurs nés dans les années 70")
console.log(wasBornIn70s)

console.log(" ")
console.log("Voici le nom et prénom de chacun des membres")
console.log(names)

console.log(" ")
sortedList = entrepreneurs.sort((a,z) => (a.last < z.last) ? -1 : ((a.last > z.last) ? 1 : 0));
console.log(sortedList)







