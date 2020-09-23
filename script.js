// Object containing all of the randomizer functions.
const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Assigns button ID 'generate' to the variable 'generateBtn'.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. This is the generate password function.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', function initialPrompts (event) {
  let characterCount = prompt('How many characters would you like in your password?');
  let characterUpper =prompt('Would you like uppercase letters? Yes or No');
  let characterLower =prompt('Would you like lowercase letters? Yes or No');
  let characterNum =prompt('Would you like numbers? Yes or No');
  let characterSym =prompt('Would you like symbols? Yes or No');
});


  
















// Function that pulls random whole numbers for the corresponding lowercase letters from character chart.
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Test
console.log(getRandomLowerCase());

// Function that pulls random whole numbers for the corresponding uppercase letters from character chart.
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Test
console.log(getRandomUpperCase());

// Function that pulls random whole numbers for the corresponding numbers from the character chart.
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Test
console.log(getRandomNumber());

// Function that uses the symbol array to randomize what symbol gets picked.
function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Test
console.log(getRandomSymbol());
