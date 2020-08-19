let rnas = ["CCGUCGUUGCGCUACAGC" , "CCUCGCCGGUACUUCUCG"];

for (let x in rnas) {
  if (rnas[x].length % 3 !== 0) {
    console.log("Une des listes d'ARN contient un nombre de caractères incorrecte")
    throw "Veuillez vérifier vos 2 strings Rnas";
  } else {
    rnas[x] = rnas[x].match(/.{1,3}/g);
    for (n in rnas[x]) {
      switch (rnas[x][n]) {
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU":
        case "AGC":
          rnas[x][n] = "Sérine";
          break;
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
          rnas[x][n] = "Proline";
          break;
        case "UUA":
        case "UUG":
          rnas[x][n] = "Leucine";
          break;
        case "UUU":
        case "UUC":
          rnas[x][n] = "Phénylalanine";
          break;
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
          rnas[x][n] = "Arginine";
          break;
        case "UAU":
        case "UAC":
          rnas[x][n] ="Tyrosine";
          break;
        }
      }
      rnas[x] = rnas[x].join("-")
    }
  }
  console.log(" ")
  console.log("Les deux ARN sont :")
  for (let x in rnas){
    console.log(`${rnas[x]}`);
  }
