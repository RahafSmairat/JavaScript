///// Exercise #1 /////
document.write("Exercise #1 <br><br>");

function tellFortune(numOfChildren, partnerName, location, jobTitle) {
    document.write("You will be a " + jobTitle + " in, " + location + " and married to " + partnerName + " with" + numOfChildren + " kids.")
}

tellFortune(3, "Alice", "Jordan", "software engineer");
document.write("<hr><br>");

///// Exercise #2 /////
document.write("Exercise #2 <br><br>");

function calculateDogAge(puppyAge) {
    document.write("Your doggie is " + puppyAge * 7 + " years old in dog years!");
}

calculateDogAge(1);
document.write("<hr><br>");

///// Exercise #3 /////
document.write("Exercise #3 <br><br>");

function calculateSupply(age, amountPerDay) {
    if (age > 100) {
        return document.write("Age out of range! Please enter age up to 100.");
    }

    return document.write("You will need " + (100 - age) * amountPerDay * 365 + " cups of tea to last you until the ripe old age of 100!");
}

calculateSupply(30, 3);
document.write("<hr><br>");

///// Exercise #4 /////
document.write("Exercise #4 <br><br>");
function greet(name) {
    return document.write("Hello " + name + "!");
}

greet("Rahaf");
document.write("<hr><br>");

///// Exercise #5 /////
document.write("Exercise #5 <br><br>");
document.write("Check the comment for the solution.");
/*
5
function double(cat) {       ///// The x variable is not declared anywhere so we cannot use it
  return 2 * cat;
}

function double(num) {      ///// the parameter should be a variable and does not start with a number
  return 2 * num;
}

function double(x) {       ///// the parameter should be a variable
  return 2 * 'x';
}
*/
document.write("<hr><br>");

///// Exercise #6 /////
document.write("Exercise #6 <br><br>");
document.write("Check the comment for the solution.");
/*
6
function double1(x) {          ///// A missing bracket for the parameter and the reserved word function
  return 2 * x ;
}

function double2 (x){         ///// Missing brackets and the reserved word function
return 2 * x;
}

function double3(x) {         ///// A missing curly bracket and the parameter should always be after the function name
  return 2 * x;
}
*/
document.write("<hr><br>");

///// Exercise #7 /////
document.write("Exercise #7 <br><br>");
function cube(number) {
    return document.write("The cube of " + number + " = " + number * number * number);
}

cube(4);
document.write("<hr><br>");

///// Exercise #8 /////
document.write("Exercise #8 <br><br>");
function multiply(number1, number2) {
    return document.write(number1 + " x " + number2 + " = " + number1 * number2);
}

multiply(2, 6);
document.write("<hr><br>");

///// Exercise #9 /////
document.write("Exercise #9 <br><br>");
function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return document.write("Yes you can! :)")
    }
    return document.write("Please come back after " + (20 - age) + " years!");
}

canIGetADrivingLicense(26);
document.write("<hr><br>");

///// Exercise #10 /////
document.write("Exercise #10 <br><br>");
function sameLength(string1, string2) {
    if (string1.length == string2.length)
        return "True";
    return "False";
}

document.write(sameLength("Rahaf", "Alsmairat"));
document.write("<hr><br>");

///// Exercise #11 /////
document.write("Exercise #11 <br><br>");
function largerNubmer(number1, number2) {
    if (number1 > number2)
        return number1;
    if (number2 > number1)
        return number2;
    return "The two numbers are equal!";
}

document.write(largerNubmer(6, 10) + "<br>" + largerNubmer(10, 10));
document.write("<hr><br>");

///// Exercise #12 /////
document.write("Exercise #12 <br><br>");
function smallerNubmer(number1, number2, number3) {
    let min = number1, i = 1; //i points to the min number and min to the value of it
    if (number2 < min) {
        min = number2;
        i = 2;
    }
    if (number3 < min) {
        min = number3;
        i = 3;
    }
    return document.write("Smaller number is " + min + " ,which is number" + i);
}

smallerNubmer(5, 3, 3);
document.write("<hr><br>");

///// Exercise #13 /////
document.write("Exercise #13 <br><br>");
function shorterString(string1, string2, string3, string4, string5) {
    let short = string1, string = 1;
    if (string2.length < short.length) {
        short = string2;
        string = 2;
    }
    if (string3.length < short.length) {
        short = string3;
        string = 3;
    }
    if (string4.length < short.length) {
        short = string4;
        string = 4;
    }
    if (string5.length < short.length) {
        short = string5;
        string = 5;
    }
    return document.write("Shorter string is " + short + " ,which is String" + string);
}

document.write("Using 5 strings as parameters <br><br>");
shorterString("air", "school", "car", "by", "github");
document.write("<br>");
shorterString("air", "tr", "car", "by", "github");
document.write("<br>");
shorterString("by", "tr", "car", "air", "github");
document.write("<br>");
shorterString("air", "by", "car", "school", "github");
document.write("<br>");
shorterString("air", "tr", "by", "car", "github");
document.write("<br>");
shorterString("air", "tr", "car", "github", "by");
document.write("<br>");
document.write("<br> <br>");


//Just another way to solve it using the forOf loop
function arrayShorterString(stringsArray) {
    let short = stringsArray[0], i = 1;
    for (const string of stringsArray) {
        if (string.length < short.length) {
            short = string;
            i = stringsArray.indexOf(string) + 1;
        }
    }
    return document.write("Shorter string is " + short + " ,which is String" + i);
}

document.write("Using an array of strings as parameters <br><br>");
arrayShorterString(["air", "school", "car", "by", "github"]);
document.write("<br>");
arrayShorterString(["air", "tr", "car", "by", "github"]);
document.write("<br>");
arrayShorterString(["by", "tr", "car", "air", "github"]);
document.write("<br>");
arrayShorterString(["air", "by", "car", "school", "github"]);
document.write("<br>");
arrayShorterString(["air", "tr", "by", "car", "github"]);
document.write("<br>");
arrayShorterString(["air", "tr", "car", "github", "by"]);
document.write("<hr><br>");

///// Exercise #14 ///// 
document.write("Exercise #14 <br><br>");
function longerString(string1, string2, string3, string4) {
    let long = string1, string = 1;
    if (string2.length > long.length) {
        long = string2;
        string = 2;
    }
    if (string3.length > long.length) {
        long = string3;
        string = 3;
    }
    if (string4.length > long.length) {
        long = string4;
        string = 4;
    }

    return document.write("Longest string is " + long + " ,which is String" + string);
}

longerString("air", "school", "car", "github");
document.write("<br>");
longerString("air", "schoo", "car", "github");
document.write("<br>");
longerString("air", "school", "car", "school");
document.write("<hr><br>");

///// Exercise #15 /////
document.write("Exercise #15 <br><br>");
function isEven(number) {
    if (number % 2 == 0)
        return true;
    return false;
}

document.write(isEven(9) + "<br>" + isEven(12));
document.write("<hr><br>");

///// Exercise #16 /////
document.write("Exercise #16 <br><br>");
function isOdd(number) {
    if (number % 2 == 0)
        return false;
    return true;
}

document.write(isOdd(9) + "<br>" + isOdd(12));
document.write("<hr><br>");

///// Exercise #17 /////
document.write("Exercise #17 <br><br>");
function positive(number) {
    if (number < 0)
        return document.write("Positive of " + number + ": " + (number * -1));
    return document.write(number + " is already positive.");
}

positive(12);
document.write("<br>");
positive(-12);
document.write("<hr><br>");

///// Exercise #18 /////
document.write("Exercise #18 <br><br>");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

document.write(fullName("Rahaf", "Alsmairat"));
document.write("<hr><br>");

///// Exercise #19 /////
document.write("Exercise #19 <br><br>");
function average(grade1, grade2, grade3, grade4, grade5) {
    return (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
}

document.write(average(5, 7, 9, 3, 5));
document.write("<hr><br>");

///// Exercise #20 /////
document.write("Exercise #20 <br><br>");
function randomNumber() {                      ////For this solution and after i searched i found out
    let random = Math.random() * 2;            ////that recursive method can affect the performance
    if (random > 1)
        return randomNumber();
    return random;
}

document.write(randomNumber());
document.write("<br>");

////Another solution to avoid this problem

function randomNumber() {
    let random = Math.random();
    if (random > 0.9)
        return 1;
    return random;
}

document.write(randomNumber());
document.write("<hr><br>");

///// Exercise #21 /////
document.write("Exercise #21 <br><br>");
function randomBetweenNumbers(number1, number2) {
    let min, max;
    if (number1 > number2) {
        max = number1;
        min = number2;
    }
    else {
        max = number2;
        min = number1;
    }
    return Math.random() * (max - min) + min;
}

document.write(randomBetweenNumbers(5, 10));
document.write("<hr><br>");

///// Exercise #22 /////
document.write("Exercise #22 <br><br>");
function scoreInUniversty(grade) {
    if (grade < 50)
        return "F";
    else if (grade >= 50 && grade <= 69)
        return "D";
    else if (grade >= 70 && grade <= 84)
        return "C";
    else if (grade >= 85 && grade <= 94)
        return "B";
    else if (grade >= 95 && grade <= 100)
        return "A";
}

document.write(scoreInUniversty(96));
document.write("<br>");
document.write(scoreInUniversty(3));
document.write("<br>");
document.write(scoreInUniversty(71));
document.write("<hr><br>");

///// Exercise #23 /////
document.write("Exercise #23 <br><br>");
let count = 0;
function counter() {
    count += 1;
    return count;
}
document.write(counter() + " " + counter() + " " + counter() + " " + counter() + " ");
document.write("<hr><br>");

///// Exercise #24 /////
document.write("Exercise #24 <br><br>");
function resetCounter(){
    let lastCount = count;
    count = 0;
    return document.write(lastCount + " and the counter reset now.");
}
resetCounter();
document.write("<br>");
document.write(counter() + " " + counter() + " " + counter()+"<br>");
resetCounter();