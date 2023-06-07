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
// Loops Area
//



//
// Loops Area END
//



