console.log("C'est bien moi, ton jeune et talentueux bot ;)")

let question;
let answer;
let keyWord = "fortnite";

  for (let i = 1; i <= 5; i++) {
    question = prompt("Tu peux t'exprimer ici, pour une question penses à mettre un ?, Si t'es enervé défoules toi avec des majuscules")
    if (!question){
      answer = "t'es en PLS ?"
    } else if (question.match(/[?]/g)){
      answer = "Ouais ouais...";
    } else if (question === question.toUpperCase()){
      answer = "Pwaaaaa, calme-tooooooi..."
    } else if (question.toLowerCase(question).includes(keyWord)){
      answer = "on s' fait une partie en soum-soum ?"
    } else {
      answer = "Balec !"
    }
    console.log(answer);
  }
