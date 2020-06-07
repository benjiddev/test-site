function rockoff(choice){
    var result = Math.floor(Math.random() * 3);
    //console.log(result);
    var challenge;
    var outcome;
    if (result === 0){
        challenge = "Paper"
    }else if(result === 1){
        challenge = "Scissors"
    }else if(result === 2){
        challenge = "Socks"
    }
    if (challenge === choice){
        outcome =  `${choice} vs ${challenge}. It's a draw`;
    }else if (choice === "Paper" && challenge === "Socks"){
        outcome =  `${choice} vs ${challenge}. ${choice} beats ${challenge}. You win`;
    }else if (choice === "Paper" && challenge === "Scissors"){
        outcome =  `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Scissors" && challenge === "Socks"){
        outcome =  `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Scissors" && challenge === "Paper"){
        outcome =  `${choice} vs ${challenge}.  ${choice} beats ${challenge}. You win`;
    }else if (choice === "Socks" && challenge === "Paper"){
        outcome =  `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Socks" && challenge === "Scissors"){
        outcome =  `${choice} vs ${challenge}.  ${choice} beats ${challenge}. You win`;
    }

   document.getElementById("result").innerHTML = outcome;

}




//changeSlide(1)
