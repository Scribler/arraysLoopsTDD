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
  circleColors.forEach(element => {
    drawLoop(element, 20);
  });
  // drawLoop('blue', 20);
  // drawLoop('green', 20);
  // drawLoop('rgba(255,0,0,0.5)', 90);
}

btn.addEventListener("click", draw);
// Canvas Loops Area End

// Array Loops 
// --build cards for each input set--
const maintenanceItem = {
  serviceUrgency: function() {
    // let urgency;
    if (this.needService == 0) {
      return "No service required at this time.";
    } else if (this.needService == 1) {
      return "Item needs servicing";
    } else if (this.needService == 2) {
      return "Service item IMMEDIATELY! URGENT!";
    } else {
      return "No value";
    }
  },
  logDetails: function() {
    // TO DO > if "name" ends with "s" change "was" to "were"
    console.log(`- ${this.name.toUpperCase()} was last serviced ${this.lastServiced}\n- Next service is ${this.nextService}.\n- ${this.serviceUrgency()}`);
  },
  toHTMLCards: function() {
    // make cards
  }
}

// declaring maintenance items
const oil = Object.create(maintenanceItem);
oil.name = "Oil";
oil.lastServiced = "March 23 2023";
oil.nextService = "June 23 2024";
oil.needService = 0;

const brakeFluid = Object.create(maintenanceItem);
brakeFluid.name = "Brake Fluid";
brakeFluid.lastServiced = "never";
brakeFluid.nextService = "June 23 2023";
brakeFluid.needService = 2;

const brakePads = Object.create(maintenanceItem);
brakePads.name = "Brake Pads";
brakePads.lastServiced = "June 1 2022";
brakePads.nextService = "June 1 2023";
brakePads.needService = 1;

oil.logDetails();
brakeFluid.logDetails();
brakePads.logDetails();
console.log(`Brakes pads were last serviced ${brakePads.lastServiced}.`);

//
// map() > runs a function on each element of the array.
//
function changeToUpperCase(string) {
  return string.toUpperCase();
}

const myMapLoop = ["test", "best", "this", "ding"];
const newLoopCapped = myMapLoop.map(changeToUpperCase);

console.log(myMapLoop);
console.log(newLoopCapped);

//
// filter() > runs a function THAT RETURNS A BOOLEAN on each element of the array and RETURNS THE 1's.
//
function doesHas(string) {
  return string.includes('est');
}
const newFiltered = myMapLoop.filter(doesHas);
console.log(newFiltered);
const newestFilter = myMapLoop.filter((word) => word.includes('s'));
console.log(newestFilter);

for (const key in myMapLoop) {
  console.log(`${myMapLoop[key]} is in array`);
}

// do code block at least once (as opposed to for loops and while loops which may never run)
let dwile = 1;
do {
  console.log(`test ${dwile}`);
  dwile ++;
} while (dwile < 6);

// Array Loops End

//
// LAUNCH COUNTDOWN START
//

console.log("Make launch countdown here");

//
// LAUNCH COUNTDOWN END
//

//
// LOOPS AREA END
//



