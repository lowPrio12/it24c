//Activity Java Applets
//Data types
let name = "Jacob Israel A. Ranin ";
let Age = 20;
let sex = 'M';
let Student = true;
console.log("Name: " + name + "\nAge: " + Age + "\nSex: " + sex + "\nStudent: " + Student);

//Arithmetic Operation
let num1 = 99;
let num2 = 9;
quo = num1 / num2;
console.log("quotient = " + quo);

// -CONDITIONAL STATEMENTS
//if else Statement
let age = 20;
if (age >= 18) {
    console.log(age + ": Eligible to drink alcohol");
} else if (age < 18) {
    console.log(age + ": Not Eligible to drink alcohol");
}
else {
    console.log("Not Human");
}

//switch Statement
let month = 7;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("eptember");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");

}
// -LOOPS-
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
let countDown = 10;
while (countDown >= 1) {
    console.log(countDown);
    countDown--;
}

// -FUNCTIONAL PROGRAMMING-
//Part 1
for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log("Even: " + number);
    }
    else {
        console.log("Odd: " + number);
    }
}

//Part 2
let primes = [];

for (let num = 1; num <= 50; num++) {
    let isPrime = true;


    if (num <= 1) {
        isPrime = false;
    } else if (num === 2) {
        isPrime = true;
    } else if (num % 2 === 0) {
        isPrime = false;
    } else {

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes.push(num);
    }
}

console.log("Prime numbers between 1 and 50:", primes);


//Part 3
function isPalindrome(str) {

    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

let testString = "Was it a car or a cat I saw?";
console.log(`"${testString}" is a palindrome:`, isPalindrome(testString));