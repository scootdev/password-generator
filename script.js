var generatePassword = {
    pwLength: 12,
    lowerCase: true,
    upperCase: true,
    numbers: true,
    special: true,
    howMany: 5,

    //Function to generate pw
generate: function () {
        //Creating the character set based on users selections
        var charSet = "";
        var password = "";
        if (this.lowerCase === true) {
            charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
        }
        if (this.upperCase === true) {
            charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (this.numbers === true) {
            charSet = charSet + "1234567890";
        }
        if (this.special === true) {
            charSet = charSet + " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        }

        //Loop for the password length, randomly adding a character from the character set
        for (var i = 0; i < this.pwLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        //console log pw to test
        console.log(password)
    }
}

for (var i = 0; i < generatePassword.howMany; i++) {
    generatePassword.generate();

}
