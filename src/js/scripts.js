const arrOut = document.getElementById('arrayOutput');

//
// Arrays Area
//
const backPack = [];
backPack.push("rag");
backPack.push("rope");
backPack.push("pan");

// DISPLAY ARRAY'S CURRENT STATE
arrOut.innerHTML += `<h3>Contents of Backpack: <span class="posAnswer">${backPack.toString()}</span></h3>`;
arrOut.innerHTML += `<br>`


// .toString()
arrOut.innerHTML += "<h3>.toString() / .join( 'delineator' )</h3>";
arrOut.innerHTML += `<p> - arrayName.toString(): <span class="posAnswer">${backPack.toString()}</span></p>`;

// .join()
arrOut.innerHTML += `<p> - arrayName.join(" ** "): <span class="posAnswer">${backPack.join(" ** ")}</span></p>`;

// is an array? (true)
arrOut.innerHTML += "<h3>isArray()</h3>";
arrOut.innerHTML += `<p> - Is 'backPack' an Array?: <span class="posAnswer">` + Array.isArray(backPack); + `</span></p>`;

// is instanceof array (true)
arrOut.innerHTML += "<h3>instanceof</h3>";
arrOut.innerHTML += `<p> - Is 'backPack' an 'instanceof' Array?: <span class="posAnswer">` + (backPack instanceof Array) + `</span></p>`; 
arrOut.innerHTML += `<p> - Is 'backPack' an 'instanceof' String?: <span class="negAnswer">` + (backPack instanceof String) + `</span></p>`; 

// .pop() / .push()
arrOut.innerHTML += "<h3>.pop() / .push()</h3>";
arrOut.innerHTML += `<p> - 'backPack.pop()' returns: <span class="posAnswer">` + (backPack.pop()) + `</span></p>`; 
arrOut.innerHTML += `<p> - 'backPack.push('Grabthars Hammer')' returns new array length: <span class="posAnswer">` + (backPack.push("Grabthars Hammer")) + `</span></p>`; 
arrOut.innerHTML += `<p> - arrayName.toString(): <span class="posAnswer">${backPack.toString()}</span></p>`;

// .shift() / .unshift()
arrOut.innerHTML += "<h3>.shift() / .unshift()</h3>";
arrOut.innerHTML += `<p> - 'backPack.shift()' returns: <span class="posAnswer">` + (backPack.shift()) + `</span></p>`; 
arrOut.innerHTML += `<p> - 'backPack.unshift('Carp')' returns new array length: <span class="posAnswer">` + (backPack.unshift("Carp")) + `</span></p>`; 
arrOut.innerHTML += `<p> - arrayName.toString(): <span class="posAnswer">${backPack.toString()}</span></p>`;

// .length
arrOut.innerHTML += "<h3>.length</h3>";
arrOut.innerHTML += `<p> - 'backPack.length' returns: <span class="posAnswer">` + (backPack.length) + `</span></p>`; 

// .splice() / .slice()
arrOut.innerHTML += "<h3>.splice() / .slice()</h3>";
arrOut.innerHTML += `<p> - ADD TEXT AREA AND BUTTON HERE: <span class="negAnswer">text area + button go here.</span></p>`

//
// Arrays Area END
//

//
// LOOPS AREA
//

// Canvas Loops Area
let circleColors = ['rgba(185, 152, 244,0.5)', 'rgba(255,0,0,0.5)', 'yellow', 'blue'];

const btn = document.getElementById("canvasButton");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function drawLoop(color, repetitions) {
  for (let i = 0; i < repetitions; i++) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circleColors.forEach(element => drawLoop(element, 20));
  // drawLoop('blue', 20);
  // drawLoop('green', 20);
  // drawLoop('rgba(255,0,0,0.5)', 90);
}

btn.addEventListener("click", draw);
//
// Canvas Loops Area End

// While Loops Start
//

// variables
const names = ['Dale', 'Gale', 'Dillon', 'Miki', 'Douglas', 'Thoms', 'Derek', 'Warik'];
const invited = document.querySelector('#invited');
const notInvited = document.querySelector('#notInvited');

let i = names.length;
while (i) {
  --i;
  if (names[i] == 'Gale' || names[i] == 'Warik') {
    notInvited.innerHTML += `<p>${names[i]} is NOT invited</p>`;
  } else {
    invited.innerHTML += (`<p>${names[i]} is invited</p>`);
  }
}

//
// While Loops End

// For Loops Start
//

const forLoopsOutput = document.querySelector("#forLoopsContent");

function oddRange(output) {
  let oddNums = [];
  // use these definitions for 'low' and 'high' if you want to prompt user for input.
  // let low = parseInt(prompt("Low number?"));
  // let high = parseInt(prompt("High number?"));
  let low = 1;
  let high = 8;
  for (let i = low; i < high; i++) {
    if (i % 2 == 0) continue;
    oddNums.push(i);
    i++;
  }
if(low > high) {
    output.innerHTML += (`<p>Invalid Range</p>`);
  } else {
    output.innerHTML += `<p>The Odd Numbers between ${low} and ${high} are: ${oddNums}</p>`;
  }
}
oddRange(forLoopsOutput);

let testA = 12;
let testB = 22;
(testA > testB) ? console.log("testA is bigger than testB") : console.log("TestA is smaller than Test B");

// using labels ('outer' is the label for the outer for loop [can also be placed inline. ex. outer: for(i=...)])
outer:
for (let i=0; i<10; i++) {
  while (i > 4 && i < 7) {
    console.log("i is between 4 and 7")
    break outer;
  }
  console.log(`I is: ${i}`);
}

//
// For Loops end

// LOOP TEST START (Run a loop that keeps asking for input untill user enters 100 or more. Also exit loop if no input)
//

// let inTest;
// while (inTest < 100 || isNaN(inTest)) {
//   inTest = parseInt(prompt("Enter a number"));
//   if (inTest >= 100) {
//     console.log(`${inTest}: is indeed 100 or more! Exiting.`)
//   } else if (isNaN(inTest) == false) {
//     console.log(`${inTest}: is less than 100. Try again!`)
//   } else {
//     console.log("No number entered. Exiting.");
//     break;
//   }
// }

//
// LOOP TEST END

// Output prime numbers Start (not divisible by 2, 3, 5, 7) (only by one and itself)
//
// let primesToThis = parseInt(prompt("Enter ending number of range."));
const primesServe = document.querySelector("#primes");
let primesToThis = 20;
let primes = [];
let nonPrimes = [];


nextPrime:
for(let i = 2; i < primesToThis; i++) {
  for(let j = 2; j < i; j++) {
    if (i % j == 0) {
      nonPrimes.push(i);
      continue nextPrime // not prime
    }
  }
  primes.push(i);
}
primesServe.innerHTML += `<p>Primes: ${primes}</p>`;
primesServe.innerHTML += `<p>Non Primes: ${nonPrimes}</p>`;
//
// Output prime numbers end

// DOM MANIPULATION start
//
console.log(" ")
console.log(" ")
console.log("Dom Manipulation Start")
console.log(" ")
// Setting up containers variables start
const domManipulation_Container = document.querySelector('.domManipulationContainer'); // select container



// Dom Manipulation Heading
const domManipulation_mainHeadingH3 = document.createElement('h3');
domManipulation_mainHeadingH3.textContent = "Dom Manipulation Playground";
domManipulation_mainHeadingH3.style.backgroundColor = 'green';
domManipulation_mainHeadingH3.style.color = 'blue';
domManipulation_mainHeadingH3.style.display = 'inline-block';


// Dom Manipulation Paragraph
const domManipulation_paragraphOne = document.createElement('p');
domManipulation_paragraphOne.textContent = "This is paragraph one.";
domManipulation_paragraphOne.classList.add('domManipulation_paragraph'); // can use .toggle instead of .add

// Dom Manipulation SECONDARY DIV WITH CONTENTS
//    1) create div with [border: black, backgroundColor: pink]
//    2) add h1{I'm in a div}, &&, p{ME TOO!}
//    3) append h1 & p to created div
//    4) append to hardcoded html.
const domManipulation_insertedDiv = document.createElement('div'); // div
domManipulation_insertedDiv.style.border = 'black 3px solid';
domManipulation_insertedDiv.style.backgroundColor = 'pink';

const domManipulation_inserted_h1 = document.createElement('h1'); // h1 and content then append
domManipulation_inserted_h1.textContent = "I'm in a div!";
domManipulation_insertedDiv.appendChild(domManipulation_inserted_h1);

const domManipulation_inserted_p = document.createElement('p'); // p and content then append
domManipulation_inserted_p.textContent = "ME TOO!";
domManipulation_insertedDiv.appendChild(domManipulation_inserted_p);

// DomManipulation_button
const domManipulation_button = document.createElement('button');
domManipulation_button.setAttribute('id', 'domManipulation_button');
domManipulation_button.textContent = 'Click me. ;)';
domManipulation_button.onclick = () => {
  if (domManipulation_button.textContent == 'Click me. ;)') {
    domManipulation_button.textContent = 'Ouch!!!';
  } else {
    domManipulation_button.textContent = 'Click me. ;)';
  }
}
domManipulation_insertedDiv.appendChild(domManipulation_button);

//
// Adding Elements to HTML
//
domManipulation_Container.appendChild(domManipulation_mainHeadingH3); // main heading
domManipulation_Container.appendChild(domManipulation_paragraphOne); // first paragraph
domManipulation_Container.appendChild(domManipulation_insertedDiv); // div containing h1 and p elements.


console.log(" ")
console.log("Dom Manipulation End")
console.log(" ")
//
// DOM MANIPULATION end


// Calculator START
//

//
//
// UNCOMMENT THE LINES BELOW TO ACTIVATE PROMPTS
//
//
//
// const firstNum = parseInt(prompt("Enter First Number"));
// const opperation = prompt("Enter opperation");
// const secondNum = parseInt(prompt("Enter Second Number"));

const add = function (a, b, opperation) {
  if (opperation == "+") {
    console.log(`${a} ${opperation} ${b} equals ${a + b} `);
    return a + b;
  } else {
    return "Can't be doin that bud!";
  }
}

// add(firstNum, secondNum, opperation);
//
// Calculator END


console.log(' ');
console.log('Callback Functions Start');
console.log(' ');

const callbackArray = [1, 2, 3];

function doOpperation (array, opperationFunc) { // main function utilizing callback function.
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Result of ${opperationFunc.name} on array element ${index} is: ${opperationFunc(element)}`);
  }
}

const increase = function(arrayElement) { return (parseInt(arrayElement) + 2)}
const decrease = function(arrayElement) { return (parseInt(arrayElement) - 2)}

console.log('increase by 2');
doOpperation(callbackArray, increase);
console.log('decrease by 2');
doOpperation(callbackArray, decrease);

console.log(' ');
console.log('Callback Functions End');
console.log(' ');

// TESTING AREA START
//
console.log(" ")
console.log(" ")
console.log("Testing Area Start")
console.log(" ")



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(`You clicked button: ${button.id}`);
    console.log(`This is 'e' automatically fed to the function: ${e}`);
    console.log(`This is 'e.target'?: ${e.target}`);
    e.target.classList.toggle("yellowAndBlue");
  });
  button.addEventListener('mousedown', () => {
    console.log('The mouse button is compressed now.');
  });
  button.addEventListener('mouseup', () => {
    console.log('The mouse button is depressed now.');
  });
});


console.log(" ")
console.log("Testing Area End")
console.log(" ")

function runPrintOne (printFunc) {
  printFunc();
}

runPrintOne(myPrintFunc);

function myPrintFunc () {
  console.log("stuff");
}
//
// TESTING AREA END




