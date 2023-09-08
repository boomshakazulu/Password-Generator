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

// popup windows for password selections
function generatePassword() {
var passwordLength = prompt("How many Characters do you want?(between 8-128)")
//failure on invalid length placed here to avoid going through all options before receiving an error
if (passwordLength < 8 || passwordLength > 128){
  alert("Please insert a valid length between 8-128");
} else {
var lowerCase = confirm ("Would you like lowercase letters?")
var upperCase = confirm ("Would you like uppercase letters?")
var numbers = confirm("Would you like to include numbers?")
var specialChar = confirm ("Would you like to include special characters?")
//variables
var letters = "abcdefghijklmnopqrstuvwxyz";
var capitals = letters.toUpperCase();
var numbersaray = "0123456789";
var special = "!@#$%^&*()";
//variable groups
var allChars = letters+capitals+numbersaray+special;
var lowUpNumber=letters+capitals+numbersaray;
var lowUpSpecial = letters+capitals+special;
var lowSpecNumber= letters+special+numbersaray;
var upNumbSpecial =capitals+numbersaray+special;
var lowUpper = letters+capitals;
var lowNumber = letters +numbersaray;
var lowSpecial = letters+special;
var upNumber = capitals+numbersaray;
var upSpecial= capitals+special;
var numSpecial = numbersaray+special;

let randomPassword = "";
//nested for statement for password length
for(var i=0; i<parseInt(passwordLength); i++){
  // opted for else if with individual variables instead of a function array
 if (lowerCase&&upperCase&&numbers&&specialChar){
  let randomNumber = Math.floor(Math.random()* allChars.length + 1);
  randomPassword += allChars.charAt(randomNumber)
 
  }else if (lowerCase&&upperCase&&numbers){
  var randomNumber = Math.floor(Math.random() * lowUpNumber.length);
  randomPassword += lowUpNumber.substring(randomNumber, randomNumber +1);
 
  }else if (lowerCase&&upperCase&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowUpSpecial.length);
    randomPassword += lowUpSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowSpecNumber.length);
    randomPassword += lowSpecNumber.substring(randomNumber, randomNumber +1);
  
  }else if (upperCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * upNumbSpecial.length);
    randomPassword += upNumbSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&upperCase){
    var randomNumber = Math.floor(Math.random() * lowUpper.length);
    randomPassword += ulowUpper.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers){
    var randomNumber = Math.floor(Math.random() * lowNumber.length);
    randomPassword += lowNumber.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowSpecial.length);
    randomPassword += lowSpecial.substring(randomNumber, randomNumber +1);

  }else if (upperCase&&numbers){
    var randomNumber = Math.floor(Math.random() * upNumber.length);
    randomPassword += upNumber.substring(randomNumber, randomNumber +1);

  }else if (upperCase&&specialChar){
    var randomNumber = Math.floor(Math.random() * upSpecial.length);
    randomPassword += upSpecial.substring(randomNumber, randomNumber +1);

  }else if (numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * numSpecial.length);
    randomPassword += numSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase){
    var randomNumber = Math.floor(Math.random() * letters.length);
    randomPassword += letters.substring(randomNumber, randomNumber +1);

  }else if (upperCase){
    var randomNumber = Math.floor(Math.random() * capitals.length);
    randomPassword += capitals.substring(randomNumber, randomNumber +1);

  }else if (numbers){
    var randomNumber = Math.floor(Math.random() * numbersaray.length);
    randomPassword += numbersaray.substring(randomNumber, randomNumber +1);

  }else if (specialChar){
    var randomNumber = Math.floor(Math.random() * specialChar.length);
    randomPassword += specialChar.substring(randomNumber, randomNumber +1);
// returns a message if no options are selected
  }else {
    alert("Please select at least 1 option")
    return "invalid"
  }
}
return randomPassword;
}
}






