// created arrays for lowercase, uppercase, numbers, and special symbols + a var for callback when the password is needed
let caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numChar=["0","1","2","3","4","5","6","7","8","9"];
let symbolChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Assigns button ID 'generate' to the variable 'generateBtn'.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. This is the generate password function.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', function writePassword (event) {
  let characterCount = prompt('How many characters would you like in your password? Enter a number from 8 to 128.');
  console.log(characterCount);
  let characterUseUpper = confirm('Would you like uppercase letters?');
  console.log(characterUseUpper);
  let characterUseLower = confirm('Would you like lowercase letters?');
  console.log(characterUseLower);
  let characterUseNum = confirm('Would you like numbers?');
  console.log(characterUseNum);
  let characterUseSym = confirm('Would you like symbols?');
  console.log(characterUseSym);
  
    // while loop that checks if the user entered any of the char sets.
    while (characterUseUpper === false && characterUseLower === false && characterUseNum === false && characterUseSym === false) {
    alert("Please select one of the following options.");
    characterUseUpper = confirm('Would you like uppercase letters?');
    characterUseLower = confirm('Would you like lowercase letters?');
    characterUseNum = confirm('Would you like numbers?');
    characterUseSym = confirm('Would you like symbols?');

}});
























