
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?

let unrented = [];

for (x in books) {
  let book = books[x]
  if (book['rented'] === 0) {
    unrented.push(book);
  }
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if (unrented.length === 0) {
  console.log("Oui tous les livres ont déjà été loués une fois ! GG à la bibliothécaire");
} else {
  console.log(`Non il y'a ${unrented.length} livre(s) qui n'a/ont jamais été loué(s)`);
}

// Quel est le livre le plus emprunté ?

let mostRented = books.reduce(function (prev, current) {
  return (prev.rented > current.rented) ? prev : current
});

console.log(" ");
console.log("Le livre le plus emprunté est :")
console.log(mostRented);

// Quel est le livre le moins emprunté ?

let leastRented = books.reduce(function (prev, current) {
  return (prev.rented > current.rented) ? current : prev
});


console.log(" ");
console.log("Le livre le moins emprunté est :")
console.log(leastRented);

// Trouve le livre avec l'ID: 873495;

function findForMe(book) {
  return book.id === 873495;
} 

console.log(" ");
console.log("Le livre avec l'id 873495 est :")
console.log(books.find(findForMe));

// Supprime le livre avec l'ID: 133712;

let bookToRemove = books.find(function(book) {
  return book.id === 133712;
});

console.log(" ");
console.log("Le livre qui a l'id 133712 et qui va être supprimé est :")
console.log(`${bookToRemove.title}`)
books.splice(bookToRemove, 1);
console.log(" ");
console.log(books);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log(" ");
sortedBooksByTitle = books.sort((a,z) => (a.title> z.title) ? 1 : ((z.title > a.title) ? -1 : 0));
console.log("Voici les livres triés par titre dans l'ordre alphabétique :");
console.log(sortedBooksByTitle);