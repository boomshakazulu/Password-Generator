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
var passwordLength = prompt("How many Characters do you want?<br> (between 8-128)")
if (passwordLength < 8 || passwordLength > 128){
  alert("Please insert a valid length between 8-128");  
} else {
var lowerCase = confirm ("Would you like lowercase letters?")
var upperCase = confirm ("Would you like uppercase letters?")
var numbers = confirm("Would you like to include numbers?")
var specialChar = confirm ("Would you like to include special characters?")
}

var letters = "abcdefghijklmnopqrstuvwxyz";
var capitals = letters.toUpperCase();
var numbersaray = "0123456789";
var special = "!@#$%^&*()";

var allChars = letters+capitals+numbersaray+special;
var lowUpNumber=letters+capitals+numbersaray;
var lowUpSpecial = letters+capitals+special;
var lowSpecNumber= letters+special+numbers;
var upNumbSpecial =capitals+numbers+special;
var lowUpper = letters+capitals;
var lowNumber = letters +numbers;
var lowSpecial = letters+special;
var upNumber = capitals+numbers;
var upSpecial= capitals+special;
var numSpecial = numbers+special;

let randomPassword = "";

for(var i=0; i<parseInt(passwordLength); i++){
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
  
  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * upNumbSpecial.length);
    randomPassword += upNumbSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowUpper.length);
    randomPassword += ulowUpper.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowNumber.length);
    randomPassword += lowNumber.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * lowSpecial.length);
    randomPassword += lowSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * upNumber.length);
    randomPassword += upNumber.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * upSpecial.length);
    randomPassword += upSpecial.substring(randomNumber, randomNumber +1);

  }else if (lowerCase&&numbers&&specialChar){
    var randomNumber = Math.floor(Math.random() * numSpecial.length);
    randomPassword += numSpecial.substring(randomNumber, randomNumber +1);


  }else {
    alert("Please select at least 1 option")
  }
}
return randomPassword;
}






