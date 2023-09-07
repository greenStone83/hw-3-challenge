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




//length between 8 and 128
var passwordLength = 30;

//whether or not password can include characters
var passwordContains = {
  numbers: true,
  lowercase: true,
  uppercase: true,
  special: true,
}

var numbers = '0123456789';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var special = '`~!@#$%^&*()-_=+{}[];:\'"<>,./?\\|';

//object of all characters
var characters = {
  numbers: numbers,
  lowercase: alphabet,
  uppercase: alphabet.toUpperCase(),
  special: special,
};

//generates string of available characters
var allCharacters = '';
for (var i in characters) {
  if (passwordContains[i]) {
    allCharacters += characters[i];
  }
}
//console.log(allCharacters);

//generates the password with the available characters
var password = '';
for (let i = 0; i < passwordLength; i++) {
  let r = Math.floor(allCharacters.length * Math.random());
  password += allCharacters[r];
}
console.log(password);
