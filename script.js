var fruits = ["Mango", "Banana", "Grapes", "Papaya", "PineApple"];
var demo = fruits;
document.getElementById("res").innerText = demo.join(" | ");

function pop() {
  demo.pop();
  document.getElementById("res").innerText = demo;
}

// function push() {
//   demo.push("Orange");
//   document.getElementById("res").innerText = demo;
// }

function push() {
  var x = prompt("Please Enter a fruit: ");
  demo.push(x);
  document.getElementById("res").innerText = demo;
}

function slice() {
  var x = demo.slice(2);
  // var x = demo.slice(1, 2);
  document.getElementById("res").innerText = x;
}

function reverse() {
  demo.reverse();
  document.getElementById("res").innerText = demo;
}

function shift() {
  var x = demo.shift();
  document.getElementById("res").innerText = x;
}
