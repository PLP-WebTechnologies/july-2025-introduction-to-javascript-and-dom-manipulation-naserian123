// ====================
// Part 1: Basics
// ====================

// Variables and conditionals
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Capture user input via DOM later (see Part 4)


// ====================
// Part 2: Functions
// ====================

// Function 1: greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome.`;
}

// Function 2: calculate total
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

console.log(calculateTotal([10, 20, 30])); // Example test


// ====================
// Part 3: Loops
// ====================

// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// While loop example
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


// ====================
// Part 4: DOM
// ====================

// 1. DOM: greet button interaction
document.getElementById("greetBtn").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  document.getElementById("greetOutput").textContent = greetUser(name);
});

// 2. DOM: toggle theme
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// 3. DOM: dynamically create list items
let items = ["Apple", "Banana", "Cherry"];
let listContainer = document.getElementById("listContainer");
items.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  listContainer.appendChild(li);
});
