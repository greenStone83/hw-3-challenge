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

  // Throws error if no character type selected
  if (Object.values(passwordContains).every(i => !i)) {
    alert("At least one character type must be selected");
  } else {

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
    document.querySelector("#password").value = password;
  }
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);