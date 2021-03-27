# Awesome Password Generator

<img src="https://zno.s3-us-west-1.amazonaws.com/Awesome-Password-Generator.png" alt="Pic of application"
title="Class Portfolio" width="150" />

## Deployed Application
[Awesome Password Generator](https://darrindevs.github.io/password-generator/)

## Summary 
This project is a basic (Awesome!) password generator which allows the user to select a series of criteria to generate a random password up to 128 characters. 

JavaScript does all the heavy lifting with a handful of methods like window.prompt, Math.floor and Math.random, an event listener and several custom functions. 


## Technologies Used
- 🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
- 🦴 HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- 👗 CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. 
- ☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
- ⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet

 function randomize(bank) {
 var vault = "";
 for (i = 0; i < pLength; i++) {
 // loop thru bank and pull characters 
 // += keeps what was in the value before and adds 
 vault += bank[Math.floor(Math.random() * bank.length)]
 }

## Notes

- Fully responsive

## Author Links
[LinkedIn](https://www.linkedin.com/in/darrinweyers/)
[GitHub](https://github.com/darrindevs)
