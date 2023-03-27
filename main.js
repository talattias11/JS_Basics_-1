//1 prompts the user to enter a number and checks whether the number is positive, negative, or zero
// let num1 = prompt('please type a number')
// if(num1 > 0)
//     console.log("The Number Is Positive")
//     else if (num1 < 0)
//         console.log("The Number Is Negative")
//         else
//             console.log("The Number Is Zero")

//2 prompts the user to enter two numbers and checks whether they are equal or not.
// let firstNumber = prompt('please type the First number')
// let seconedNumber = prompt('please type the Seconed number')
// if(firstNumber === seconedNumber)
//     console.log("The Numbers are Equal")
// else
//     console.log("The Numbers unEqual")

//3 check whether a given string is empty or not
// let str = prompt('please provide a String for check')
// if((str === '') && (typeof str === "string"))
//     console.log("The String is Empty")
// else
//     console.log("The String is NOT Empty")

//4 prompts the user to enter a temperature in Celsius and converts it to Fahrenheit
// let degree = prompt('please enter a temperature in Celsius to convert')
// console.log("The temerature is Fahrenheit is:" + ((degree*1.8)+32))

//5  prompts the user to enter three numbers and finds the largest of them
// let firstNumber = prompt('please type the First number')
// let seconedNumber = prompt('please type the Seconed number')
// let thirdNumber = prompt('please type the Third number')
// if ((firstNumber > seconedNumber) && (firstNumber > thirdNumber)){
//     console.log(firstNumber + " Which Is First number is the hightest Number")
// } else if (seconedNumber > thirdNumber) {
//     console.log(seconedNumber + " Which Is the Seconed number is the hightest Number")
// }       else
//         console.log(thirdNumber + " Which Is the Third number is the hightest Number")

//6 checks whether it is a vowel or not
// var tav = prompt('Please enter a character for check')
// if ((typeof tav === "string") && (tav.length === 1)) {
//     if ((tav.charAt() === 'a')||(tav.charAt() === 'o')||(tav.charAt() === 'i')||(tav.charAt() === 'e')||(tav.charAt() === 'u')) {
//         console.log("The character is a Vowel character")
//     } else
//         console.log("The character is NOT a Vowel character")
// } else
//     console.log("please type a valid character")

//7 prompts the user to enter a year and checks whether it is a leap year or not.
// let year = prompt('Please type a wanted Year for check if its a Leap Year')
// if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
//     console.log('The Year is a Leap Year');
// } else
//     console.log("The year is Not a Leap year");

//8 prompts the user to enter a number between 1 and 7 and displays the corresponding day of the week
// let itemNumber = prompt('PLease Type a Number From 1 - 7 for checking the day')
// itemNumber = +itemNumber
// if(((itemNumber < 1) || (itemNumber > 7))){
//     console.log("Please Enter a Valid Number From 1 - 7")
// } 
// if (itemNumber === 1) {
//     console.log("It\'s Sunday")
// }
//  else if (itemNumber === 2) {
//     console.log("It\'s Monday")
// }
//  else if (itemNumber === 3) {
//     console.log("It\'s Tuesday")
// }
//  else if (itemNumber === 4) {
//     console.log("It\'s Wednesday")
// }
//  else if (itemNumber === 5) {
//     console.log("It\'s Thursday")
// }
//  else if (itemNumber === 6) {
//     console.log("It\'s Friday")
// }
//  else if (itemNumber === 7) {
//     console.log("It\'s Saturday")    
// }

//9  prompts the user to enter two numbers and checks whether the first number is divisible by the second number
// let firstNum1 = prompt('Please Enter First Number')
// let seconedNum2 = prompt('Please Enter Seconed Number')
// firstNum1 = +firstNum1
// seconedNum2 = +seconedNum2
// if (seconedNum2 % firstNum1 === 0) {
//     console.log('The first number is divisible by the second number')
// } else
//     console.log('The first number is NOT divisible by the second number')

//10 checks whether it is a perfect square or not
let numSquar = prompt('Please Enter a Number To Check for Perfect Squar')
if (Math.sqrt(numSquar) % 1 === 0) {
    console.log("It's a Perfect Squar")
} else 
    console.log("It's NOT a Perfect Squar")