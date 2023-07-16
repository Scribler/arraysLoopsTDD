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

const forLoopsOutput = document.querySelector(".forLoopsContent");

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
let inTest;
while (inTest < 100 || isNaN(inTest)) {
  inTest = parseInt(prompt("Enter a number"));
  if (inTest >= 100) {
    console.log(`${inTest}: is indeed 100 or more! Exiting.`)
  } else if (isNaN(inTest) == false) {
    console.log(`${inTest}: is less than 100. Try again!`)
  } else {
    console.log("No number entered. Exiting.");
    break;
  }
}

//
// LOOP TEST END
