function rockoff(choice){
    var result = Math.floor(Math.random() * 3);
    console.log(result);
    var challenge;
    if (result === 0){
        challenge = "Paper"
    }else if(result === 1){
        challenge = "Scissors"
    }else{
        challenge = "Socks"
    }
    if (challenge === choice){
        return `${choice} vs ${challenge}. It's a draw`;
    }else if (choice === "Paper" && challenge === "Socks"){
        return `${choice} vs ${challenge}. ${choice} beats ${challenge}. You win`;
    }else if (choice === "Paper" && challenge === "Scissors"){
        return `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Scissors" && challenge === "Socks"){
        return `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Scissors" && challenge === "Paper"){
        return `${choice} vs ${challenge}.  ${choice} beats ${challenge}. You win`;
    }else if (choice === "Socks" && challenge === "Paper"){
        return `${choice} vs ${challenge}.  ${challenge} beats ${choice} . You Lose`;
    }else if (choice === "Socks" && challenge === "Scissors"){
        return `${choice} vs ${challenge}.  ${choice} beats ${challenge}. You win`;
    }else{
        return "stay tuned"
    }

}

console.log(rockoff("Scissors"));

//console.log("hello");
