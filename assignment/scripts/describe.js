// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The varaible 'name' is declared and intialized to the string 'Dane'.
// Because the varible 'name' does not equal 'Mary', the string
// 'How do you do?' is written to the console.
//    - If we had set name to Mary we would have written 'Hi, Mary!' to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we declare a variable called secret. 
// Then we declare a variable called code and initialize it to 123.
// Because the variable code is equal to 123, we set the variable secret to the 
//    string 'super', and then multiply 123 by 2 and put the result (246) into the code variable.
// Because the current value of code is 246 and that is NOT greater than 250, we don't reset
//    the variable secret. 
// So we print out 'super' to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, we declare the variable isStudent and initialize it to true.
// Then, we declare age and initialize to 34.
// Then, we declare zip and initialize to 55407.
// Then, we check if isStuden is true (it is) and zip > 80000 (it isn't)
//    because one of the two conditionals in the compound statement is false,
//    and we go to the next else if.
// Then, we check if isStudent is false (it isn't) and age < 30 (it isn't).
//    because both the two conditionals are false, the statement is false,
//    and we continue to the next else if.
// Then, we check if isStudent is true (it is).  Becasuse this statement is 
//    true, we execute the code within the else if, and log 'Welcome to Prime'
//    to the console.
//  (we do not continue on to the final else statement, as this would only execute
//    if the previous else if was false.)


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX -  colorOne should be set to blue:
//    let colorOne = 'blue';
let colorOne = 'red';
// FIX - colorTwo should be set to red:
//    let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// FIX - both colorOne and colorTwo should be purple:   
  colorOne = 'purple';
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX- We need to check if temp > 39 AND time>=4, this is an OR statement:
//      if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Kinda FIX- I'd rather have the variable you are testing first even though 
//    this would work?
//    if (age >= minAge) { 
if(minAge <= age) {

// FIX - if the age is >= minAge you want to log 'enter'
//      console.log('enter');
  console.log('no entry');
} else {
// FIX - else if the age is < minAge you want to log 'no entry'
//      console.log('enter');
  console.log('no entry');
}
*/



// text for pull test
