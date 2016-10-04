function moo(mootivationalQuotes){
    var mootivation = mootivationalQuotes[Math.floor(Math.random() * mootivationalQuotes.length)];
    console.log("  ____________________________");
    //Quote single line
    if (mootivation.length <= 30) {console.log("< "+ mootivation + " ".repeat(28 - mootivation.length) +">");}
    //Quote multiple lines
    else {
        var words = mootivation.split(" ");
        var charSum = 0;
        var line = "";
        var lineArray = []; //Array holding all the lines
        
        //Populates lineArray
        for (var i = 0; i < words.length;){
            //Iterate line per line
            while((line.length + words[i].length + 1) <= 30){
                line += (words[i]+" ");
                i += 1;
                if (i === words.length) {break;} //Breaks out of while loop at last word
            }
            lineArray.push(line); //Push line to lineArray
            line = ""; //Initialize new line
            charSum = 0;
        }

        //Prints lineArray with formatting
        for (var j = 0; j < lineArray.length; j++){
            //First line
            if(j === 0) {
                console.log("/ " + lineArray[j] +" ".repeat(30-lineArray[j].length) +"\\" );
            }
            //Last line
            else if(j === (lineArray.length - 1)){
                console.log("\\ " + lineArray[j] +" ".repeat(30-lineArray[j].length) +"/" );
            }
            //Middle line
            else {
                console.log("| " + lineArray[j] +" ".repeat(30-lineArray[j].length) +"|" );
            }
        }
    }

    console.log("  ---------------------------- ");
    console.log("        \\   ^__^");
    console.log("         \\  (oo)\\_______");
    console.log("            (__)\\       )\\/\\");
    console.log("                ||----w |");
    console.log("                ||     ||");
}

var quoteArray = ["Hey", "What", "Is", "Up", "I", "LOVE", "LAMP", "AND", "TURTLES", "STUFF"];
var motivationalQuotes = [
    "If you want to achieve greatness stop asking for permission.",
    "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "Trust because you are willing to accept the risk, not because it's safe or certain.",
    "If you do what you always did, you will get what you always got."
    ]

moo(motivationalQuotes);