// Get the value of the slider
var slider = document.querySelector("#slider");
var output = document.querySelector("#slider-number");

// Set the value of the slider
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Object of all characters
var characters = {
  numbers: '0123456789',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
  special: '`~!@#$%^&*()-_=+{}[];:\'"<>,./?\\|',
};

// Generate Password
function generatePassword() {

  // Whether or not password can include said characters
  var passwordContains = {
    numbers: document.querySelector("#numbers").checked,
    lowercase: document.querySelector("#lowercase").checked,
    uppercase: document.querySelector("#uppercase").checked,
    special: document.querySelector("#special").checked,
  }

  for (i in passwordContains) {
    
  }

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
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);