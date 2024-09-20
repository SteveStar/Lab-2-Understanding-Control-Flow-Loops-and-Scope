/*Added console logged statements to make the output a little easier to
read and not just a blurb of numbers and text.*/


// else-if
let number = 5;

if (number > 0) {
    console.log("The number is positive!");
} else if ( number < 0) {
    console.log("The number is negative!");
} else {
    console.log("All else, is zero!");
}

// Switch case that uses the date function
switch (new Date().getDay()) {
    case 0:
        console.log("It is Sunday!");
        break;
    case 1:
        console.log("It is Monday!");
        break;
    case 2:
        console.log("It is Tuesday!");
        break;
    case 3:
        console.log("It is Wednesday!");
        break;
    case 4:
        console.log("It is Thursday!");
        break;
    case 5:
        console.log("It is Friday!");
        break;
    case 6:
        console.log("It is Saturday!");
        break;
}

// -- Loops --
// For Loop
console.log("--For Loop--");

for (let i = 1; i < 5; i++) {
    console.log(i);
    
}

// While Loop
console.log("--While Loop--");

let i = 1;

while (i <= 5) {
    console.log(i++);
}

// Do While Loop
console.log("--Do While--");

let j = 1;

do {
    console.log(j++);
} while (j <= 5);

// Control Flow with break and continue
console.log("--Break--");
// Utilizing breaks
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

console.log("--Continue--");
// Utilizing continue to skip over 3
for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        continue;
    }
    console.log(i);
  }

console.log("--Scope and Context--");
// scope and context
let globalVar = "Global Variable";

function scopeExample() {
    let localVar = "Local Variable";
    console.log(globalVar,localVar);
}
/*console.log(localVar); <-- would not work as its scope currently is exclusively
limited to the function as thats where it was declared */

scopeExample();

