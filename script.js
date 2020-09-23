// Object containing all of the randomizer functions.
const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















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
