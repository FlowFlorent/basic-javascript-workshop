function randQuote(quoteArray){
    return quoteArray[Math.floor((Math.random() * 10))];
}

var quoteArray = ["Hey", "What", "Is", "Up", "I", "LOVE", "LAMP", "AND", "TURTLES", "STUFF"];

console.log(randQuote(quoteArray));