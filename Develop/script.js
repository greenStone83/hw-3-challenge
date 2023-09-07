// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {
  
  //length between 8 and 128
  var passwordLength = 30;

  // Whether or not password can include said characters
  var passwordContains = {
    numbers: true,
    lowercase: true,
    uppercase: true,
    special: true,
  }

  var numbers = '0123456789';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var special = '`~!@#$%^&*()-_=+{}[];:\'"<>,./?\\|';

  // Object of all characters
  var characters = {
    numbers: numbers,
    lowercase: alphabet,
    uppercase: alphabet.toUpperCase(),
    special: special,
  };

  // Generates string of available characters
  var allCharacters = '';
  for (var i in characters) {
    if (passwordContains[i]) {
      allCharacters += characters[i];
    }
  }

  // Generates the password with the available characters
  var password = '';
  for (let i = 0; i < passwordLength; i++) {
    let r = Math.floor(allCharacters.length * Math.random());
    password += allCharacters[r];
  }
  console.log(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);