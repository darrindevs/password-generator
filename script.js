
//when the user clicks the button prompt them to select criteria
//display the following criteria to the user:
//criteria: number of characters from 8-128 
//check: if below 8 or above 128 ask the user to try again
//criteria: include lowercase true/false
//criteria: include uppercase true/false
//criteria: include special characters true/false
//at least one character type should be selected 
//if all required conditions are met generate a random password 
//for all true criteria values include the character type in the randomly generated password
//display the password to the user 


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

function generatePassword() {
  var passLength = window.prompt("Please choose a password between 8 -128 characters");
  while (passLength < 8 || passLength > 128 ) { 
      passLength = window.prompt("Please try again with a number between 8 - 128"); 
  }
  var upperCase = window.confirm("Would you like to include UPPER CASE letters?");
  var lowerCase = window.confirm("Would you like to include lower case letters?");
  var sppecialChars = window.confirm("Would you like to include special characters?");
}

// use a loop to iterate thru and add our values in the variables 
// use a for loop ?
// use if statements 
