function firstChar(string){
    return string.charAt(0);
}

function lastChar(string){
    return string.charAt(string.length - 1);
}

var testString = "This is a test string";
var emptyString = "";

console.log(firstChar(testString));
console.log(firstChar(emptyString));

console.log(lastChar(testString));
console.log(lastChar(emptyString));

function charAtPos(string, num){
    return string.charAt(num);
}

console.log(charAtPos(testString, 5));
console.log(charAtPos(emptyString, 4));

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function operator(string, num1, num2){
    if (string === "add") {return num1 + num2};
    if (string === "subtract") {return num1 - num2};
    if (string === "mult") {return num1 * num2};
    if (string === "div") {return num1 / num2};
    return 0;
}

console.log(operator("add", 2, 3));
console.log(operator("subtract", 2, 3));
console.log(operator("mult", 2, 3));
console.log(operator("div", 2, 3));

function multString(string, num){
    var newString = string;
    for (var i = 1; i < num; i++){
        newString = newString + string;
    }
    return newString;
}

console.log(multString("YCMA", 5));

function factorial(num){
    if (num === 0) {return 1;}
    else{return num * factorial(num - 1);}
}

console.log(factorial(5));

function largestWord(phrase){
    var words = phrase.split(" ");
    var largeWord = words[0];
    for (var i = 0; i < words.length; i++){
        if (words[i].length > largeWord.length){
            largeWord = words[i];
        }
    }
    return largeWord;
}

console.log(largestWord(testString));

function capitalize(phrase){
    var words = phrase.split(" ");
    var capPhrase = "";
    for (var i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        capPhrase = capPhrase +" "+ words[i];
    }
    return capPhrase.slice(1);
}

console.log(capitalize(testString));

function largestNumber(array){
    var largeNumber = array[0];
    for (var i = 1; i < array.length; i++){
        if (array[i] > largeNumber) {largeNumber = array[i];}
    }
    return largeNumber;
}

var numArray = [2, 5434, 231,324, 0, 0]
var boolArray = [1, "", 0, false, null, 1, 2]

console.log(largestNumber(numArray));

function truthyArray(array){
    var trueArray = [];
    
    for (var i = 0; i < array.length; i++){
        if (array[i]){trueArray.push(array[i])};
    }
    return trueArray;
}

console.log(truthyArray(boolArray));

function sumArray(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(numArray));

var numberArray1 = [1 , 2, 3];
var numberArray2 = [1, 2,4, 5];

function uniqueArray(array1, array2){
    var totalArray = array1.concat(array2);
    var unique = [];
    for (var i = 0; i < totalArray.length; i++){
        if (totalArray.indexOf(totalArray[i], i + 1) == -1 && totalArray.indexOf(totalArray[i]) == i){
            unique.push(totalArray[i]);
        }
    }
    return unique
}

console.log(uniqueArray(numberArray1, numberArray2));

function mapFunction(array, funct){
    for (var i = 0; i < array.length; i ++){
        array[i] = funct(array[i]);
    }
    return array;
}

function square(num){
    return num * num;
}

console.log(mapFunction(numberArray1, square));