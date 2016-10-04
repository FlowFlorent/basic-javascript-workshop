
function numberPicker() {
    var rand = Math.floor((Math.random() * 100)+ 1);
    alert("Let's play a game");
    alert("I just picked a number between 1 and 100, try to guess what it is!");
    var guess = -1;
    var guesses = [];
    for (var i = 0; i < 4; i++){
        
        guess = prompt("What's your guess?", (4 - i) + " guess left");
        guesses.push(guess);
        if (guess == rand){
            alert("Good job, you guessed right");
            break;
        }
        else if (guess < rand){
            alert("Try higher!");
        }
        else if (guess > rand){
            alert("Try lower!");
        }
    }
    if (i === 4){
        alert("You're a bad guesser.\nYour guesses were: "+ guesses +"\nThe number to guess was "+ rand)
    }
    else {
        alert("Congrats, you guessed"+guess+"correctly!")
    }
}

numberPicker();
