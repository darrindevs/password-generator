// * create the values to use in the randomly generated password  
var empty = "";
var uCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCaseValues = "abcdefghijklmnopqrstuvwxyz";
var numberValues = "0123456789";
var symbolValues = "!@#$%^&*()<>?";

//* Declare user confirm variables 
var pLength ;
var numbers = false;
var upperCase = false;
var lowerCase = false;
var symbols = false;
var range = {
  from: 8,
  to: 128
};



//* Assignment Code: when the user clicks the button prompt them to select criteria
var generateBtn = document.querySelector("#generate");

// * Assignment Code: Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

//* ask the user to confirm the criteria using window.prompt 
// ! not sure this is working - see console.log below 
function generatePassword() {
  // *the user inputs the length of the password 
  pLength = window.prompt("Please enter a number between 8-128 characters to set password length");
  while (pLength < 8 || pLength > 128)  { 
      pLength = window.prompt("Please try again with a number between 8 - 128"); 
  }
  //*the user inputs either ok = true or cancel = false for these values 
  numbers = window.confirm("Click OK to include numbers in your password. Otherwise click cancel.");
  upperCase = window.confirm("Click OK to include UPPER CASE letters in your password. Otherwise click cancel.");
  lowerCase = window.confirm("Click OK to include lower case letters in your password. Otherwise click cancel.");
  symbols = window.confirm("Click OK to include symbols in your password. Otherwise click cancel.");
  var bank = "";
if (numbers) {
  bank += numberValues;
} 
if (upperCase) {
  bank += uCaseValues;
}
if (lowerCase) {
  bank += lCaseValues;
}
if (symbols) {
  bank += symbolValues;
}
return randomize(bank);

};


//* Loop through the value variables to generate a random password
//* vault equals an empty variable into which we are going to put our password variables
//* the loop takes vault as an empty space and iterates through the boolean values for the length of pLength
//* if a value is positive it is added to the vault 
//* vault then randomizes the numbers using math floor and random 
//* when we return vault it is ready to pass the values to password 
function randomize(bank) {
 var vault = "";
 for (i = 0; i < pLength; i++) {
  // loop thru bank and pull characters 
  // += keeps what was in the value before and adds 
  vault += bank[Math.floor(Math.random() * bank.length)]
}
// * if the user doesn't select any criteria then prompt them to start over
if (!numbers && !upperCase && !lowerCase && !symbols) {
  window.alert("Please start over and select at least one of upper case, lower case, numbers or symbols!");
} else {
//* otherwise generate the password
console.log(vault);
return vault;
}

}; 


// todo vault should pass the value of the password to below

var vault = password;

// * Assignment Code: Write password to the #password input
// * This is going to write to the form once the password has been generated 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//*let's check the values confirmed by user 

console.log(pLength);// a number between 8-128
console.log(numbers); //true/false
console.log(upperCase);//true/false
console.log(lowerCase);//true/false
console.log(symbols);//true/false
