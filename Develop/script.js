// Get the value of the slider
var slider = document.querySelector("#slider");
var output = document.querySelector("#slider-number");

// Set the value of the slider
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

// All characters
var numbers = '0123456789';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var special = '`~!@#$%^&*()-_=+{}[];:\'"<>,./?\\|';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {

  // Whether or not password can include said characters
  var passwordContains = {
    numbers: document.querySelector("#numbers").value,
    lowercase: document.querySelector("#lowercase").value,
    uppercase: document.querySelector("#uppercase").value,
    special: document.querySelector("#special").value,
  }

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
  for (let i = 0; i < slider.value; i++) {
    let r = Math.floor(allCharacters.length * Math.random());
    password += allCharacters[r];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);