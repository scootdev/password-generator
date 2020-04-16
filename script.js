// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword.generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = {
  pwLength: 0,
  lowerCase: true,
  upperCase: true,
  numbers: true,
  special: true,

  //Function to generate pw
  generate: function () {
    //prompt user for character selections
    this.pwLength = prompt("How many characters in your password? (8-128)");
    if (this.pwLength <= 128 && this.pwLength >= 8) {
      this.lowerCase = confirm("Do you want lowercase letters?");
      this.upperCase = confirm("Do you want uppercase letters?");
      this.numbers = confirm("Do you want numbers?");
      this.special = confirm("Do you want special characters?");

      //Creating the character set based on users selections
      var charSet = "";
      var password = "";
      //If no character set is selected, returns the default value
      if ((this.lowerCase === false) &&
        (this.upperCase === false) &&
        (this.numbers === false) &&
        (this.special === false)) {
        alert("Please select at least one character type");
        return ("Your Secure Password");
      }
      if (this.lowerCase === true) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
      }
      if (this.upperCase === true) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (this.numbers === true) {
        charSet += "1234567890";
      }
      if (this.special === true) {
        charSet += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      }

      //Loop for the password length, randomly adding a character from the character set
      for (var i = 0; i < this.pwLength; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      //console log pw to test
      return (password);
    }
    //If a number within the criteria is not selected, returns the default value
    else {
      alert("Please enter a number between 8-128");
      return ("Your Secure Password");
    }
  }
}

copyBtn.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  var copyText = document.querySelector("#password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}


