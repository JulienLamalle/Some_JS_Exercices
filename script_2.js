let result = 1;

function factorial(factorNumber) {
  

  for (let i = 2; i <= factorNumber; i++) {
    result = result * i;
  }

  return result;
}

let factorNumber = prompt("De quel nombre souhaites-tu calculer la factorielle ?")
factorial(factorNumber)
console.log(`Le résultat est ${result}`)