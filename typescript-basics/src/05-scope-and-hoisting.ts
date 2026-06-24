/**
 * Topic: Scope and Hoisting
 *
 * Concepts Learned:
 * - global scope
 * - function scope
 * - block scope
 * - hoisting basics
 * - var vs let vs const scope
 *
 * Backend Relevance:
 * - safer variable access
 * - predictable backend logic
 * - avoiding scope bugs
 *
 * Author: Dev Patel
 */

// ======================================================
// Global Scope
// Variable can be accessed anywhere in the file
// ======================================================

const appName = "Backend API";

function startServer() {
    console.log("Server started for:", appName);
}

startServer();

// Output:
// Server started for: Backend API

// ======================================================
// Function Scope
// Variable only exists inside the function
// ======================================================

function login() {
    const token = "jwt-token";

    console.log("Inside function:", token);
}

login();

// Error Example:
//
// console.log(token);
//
// Why?
// token only exists inside login()

// ======================================================
// Block Scope
// let and const are block scoped
// {} creates block scope
// ======================================================

if (true) {
    let age = 20;

    console.log("Inside block:", age);
}

// Error Example:
//
// console.log(age);
//
// Why?
// age exists only inside the if block

// ======================================================
// var Problem
// var ignores block scope
// Avoid in modern backend development
// ======================================================

if (true) {
    var score = 100;
}

console.log("Outside block:", score);

// Output:
// Outside block: 100
//
// Why?
// var is function-scoped, not block-scoped

// ======================================================
// Hoisting with var
// Declaration is hoisted
// Assignment is NOT hoisted
// ======================================================

// @ts-ignore
console.log("Before assignment:", testVar);

var testVar = "hello";

console.log("After assignment:", testVar);

// Internal behavior:
//
// var testVar;
//
// console.log(testVar); // undefined
//
// testVar = "hello";
//
// console.log(testVar); // hello

// Output:
// Before assignment: undefined
// After assignment: hello

// ======================================================
// let / const Hoisting Difference
// Hoisted but cannot be used before initialization
// ======================================================

// Error Example:
//
// console.log(testLet);
//
// let testLet = "world";
//
// Why?
// let and const exist in Temporal Dead Zone (TDZ)