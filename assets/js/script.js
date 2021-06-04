// DOM element variables
var passwordEl = document.querySelector('#password');
var lengthEl = document.querySelector('#length');
var uppercaseEl = document.querySelector('#uppercase');
var lowercaseEl = document.querySelector('#lowercase');
var numbersEl = document.querySelector('#numbers');
var specialCharactersEl = document.querySelector('#special-characters');
var generateEl = document.querySelector('#generate');
var cardHeaderEl = document.querySelector('.card-header');

var UPPER_CASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LOWER_CASE = ["a" , "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var NUMBERS_CASE = ["1" , "2" , "3", "4", "5", "6", "7", "8", "9", "0"]
var SPECIAL_CASE = ["!" , "@" , "#", "$", "%", "^", "&", "*", "(", ")"]

var generatePassword = function (passwordLength, useUpper, useLower, useNumbers, useSpecial) {
    var result = ""
    if (lengthEl.value < 8 || lengthEl.value > 128) {
        alert("Please choose a length between 8 and 128!")
        
        return result
    }

    var characterPool = []
    if (useUpper){
        characterPool = characterPool.concat(UPPER_CASE);
    }
    if (useLower){
        characterPool = characterPool.concat(LOWER_CASE);
    }
    if (useNumbers){
        characterPool = characterPool.concat(NUMBERS_CASE);
    }
    if (useSpecial){
        characterPool = characterPool.concat(SPECIAL_CASE);
    }
    else {
        alert("Please check at least one requirement");

    }
    console.log(characterPool);

    for (var x = 0 ; x < passwordLength ; x++) {
        var randomNum = (Math.floor(Math.random() * characterPool.length))
        var character = characterPool[randomNum]
        console.log(character)
        result += character
    }

    return result

}
// When you click on generate password button the filters show up
generateEl.addEventListener ("click" , function (){

   var passwordLength = lengthEl.value
   var useUpper = uppercaseEl.checked
   var useLower = lowercaseEl.checked
   var useNumbers = numbersEl.checked
   var useSpecial = specialCharactersEl.checked
   console.log(passwordLength, useUpper, useLower, useNumbers, useSpecial);
   var password = generatePassword(passwordLength, useUpper, useLower, useNumbers, useSpecial);
   passwordEl.innerHTML = password;
   var password = generatePassword(passwordLength, useUpper, useLower, useNumbers, useSpecial);
   passwordEl.innerHTML = password;
   
}) 
