console.log("hello World");


const backPack = [];
backPack.push("rag");
backPack.push("rope");
backPack.push("pan");

console.log(backPack);
console.log(backPack.indexOf('rope'));

console.log(Array.isArray(backPack)); // test if something is an array (true)
console.log(backPack instanceof Array); // test if something is an array (true)
console.log(backPack instanceof String); // test if something is an array (false)

