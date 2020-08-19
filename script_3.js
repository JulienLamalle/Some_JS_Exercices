let userChoice = prompt("Combien d'étages veux-tu ?");


function myTower(userChoice) {
  let y = (userChoice - 1);
  let x = 1;

  console.log(`Tu as choisi ${userChoice}`)
  
  for(let i = 1; i <= userChoice; i++) {
    console.log(" ".repeat(y)+"#".repeat(x));
    y--;
    x++;
  }
}

myTower(userChoice)