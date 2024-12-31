//Problem#1

document.write("Problem#1 <br><br>");

const zakatPercentage = 0.025;

function calculateZakat(amount, goldPrice) {
  let nesab = 85 * goldPrice;

  if (amount >= nesab) {
    let zakat = zakatPercentage * amount;
    document.write("Zakat Amount: " + zakat + "<hr> <br>");
  } else {
    document.write(
      "The amount does not meet the minimum threshold (Nisab) for Zakat. <hr> <br>"
    );
  }
}

calculateZakat(350, 59.8);

/* Problem#2 the correct syntax is:

let arr = [ 1, 7, 9, 45 ]

 ["Str", "alex","moh", 'the','fox', 'over', 'lazy', 'dog' ]

 */

document.write(
  "Problem#2 <br><br> You can find the solution as a comment in the code. <br><hr><br>"
);

//Problem#3

document.write("Problem#3 <br><br>");

var fruits = ["Tomato", "Banana", "Watermelon"];
document.write(
  "Index of Banana: " +
    fruits.indexOf("Banana") +
    "<br>" +
    "Index of Tomato: " +
    fruits.indexOf("Tomato")
);
document.write("<hr><br>");

//Problem#4

document.write("Problem#4 <br><br>");
let myFavorites = {
  food: ["Dawali", "Noodles"],
  sports: ["Dancing", "Fast Walking", "Sleeping :)"],
  movies: ["Frozen", "Beauty and the Beast"],
};
document.write("Favorite Food: " + myFavorites.food + "<br>");
document.write("Favorite Sports: " + myFavorites.sports + "<br>");
document.write("Favorite Movies: " + myFavorites.movies + "<br>");
document.write("<hr><br>");

//Problem#5
document.write("Problem#5 <br><br>");

function firstOfArra(array) {
  document.write("First of Array [" + array + "] is: " + array[0]);
}

firstOfArra(["t", "u", "g", "x"]);
document.write("<hr><br>");

//Problem#6
document.write("Problem#6 <br><br>");

function lastOfArray(array) {
  document.write(
    "Last of Array [" + array + "] is: " + array[array.length - 1]
  );
}

lastOfArray(["t", "u", "g", "x"]);
document.write("<hr><br>");

//Problem#7
document.write("Problem#7 <br><br>");
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
document.write("Check the console");
console.log(array);
document.write("<hr><br>");

//Problem#8
document.write("Problem#8 <br><br>");

var array2 = [5, 9, -7, 3.5];
let result = array2.pop();

console.log(result); //returns the last element which was removed

result = array2.push(12);
console.log(result); //returns the new length

result = array2.shift();
console.log(result); //returns the first element which was removed

result = array2.unshift();
console.log(result); //returns the new length

document.write("<hr><br>");

//Problem#9
document.write("Problem#9 <br><br>");

var sortArray = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
sortArray.sort((x, y) => x - y);
document.write(sortArray);

document.write("<hr><br>");

//Problem#10
document.write("Problem#10 <br><br>");

function grade(GPA) {
  if (GPA < 50) return "F";
  else if (GPA >= 50 && GPA <= 59) return "E";
  else if (GPA >= 60 && GPA <= 69) return "D";
  else if (GPA >= 70 && GPA <= 79) return "C";
  else if (GPA >= 80 && GPA <= 89) return "B";
  else if (GPA >= 90 && GPA <= 100) return "A";
  else return "Insert a correct GPA.";
}

let finalResult = grade(97);

document.write("Your result is: " + finalResult);
document.write("<hr><br>");

//Problem#11
document.write("Problem#11 <br><br>");

for (i = 1; i <= 8; i++) {
  for (j = 1; j <= i; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}

document.write("<hr><br>");

//Problem#12
document.write("Problem#12 <br><br>");

let number;

function factorial(number) {
  if (number == 0) {
    return 1;
  }
  for (i = number - 1; i > 0; i--) {
    number *= i;
  }
  return number;
}

number = 5;
document.write("Factorial of " + number + "= " + factorial(number));

// document.write("<hr><br>");
//
// function findFactorial(number){
//     if (number == 0){
//         return document.write("Factorial of " + number + "= " + 1);
//     }
//     let factorial = number;
//     for (i=factorial-1 ; i>0; i--){
//       factorial *= i;
//     }
//     return document.write("Factorial of " + number + "= " + factorial);
// }
//
// findFactorial(5);

document.write("<hr><br>");

function findOddBetween(num1, num2) {
  let fromNum, toNum;
  if (num1 > num2) {
    fromNum = num2;
    toNum = num1;
  } else {
    fromNum = num1;
    toNum = num2;
  }
  for (let i = fromNum; i <= toNum; i++) {
    if (i % 2 != 0) document.write(i + " ");
  }
}

findOddBetween(2, 15);
