/**
 * Topic: Why TypeScript Exists
 *
 * Concepts Learned:
 * - What TypeScript is
 * - Dynamic vs static typing
 * - Compile-time safety
 * - TypeScript → JavaScript compilation
 * - Why backend engineers use TypeScript
 *
 * Backend Relevance:
 * - Prevent runtime bugs
 * - Safer APIs
 * - Better maintainability
 *
 * Author: Dev Patel
 */

// JavaScript problem example
// In JS, this can create unexpected behavior.

const jsPrice = "100";
const jsTax = 10;

// Result becomes "10010" (string concatenation)
console.log(jsPrice + jsTax);

// ---------------------------------------------

// TypeScript safety example

function add(a: number, b: number): number {
    return a + b;
}

const total = add(100, 50);

console.log(total);

// This would cause a TypeScript error:
//
// add(100, "50");
//
// Error:
// Argument of type 'string'
// is not assignable to parameter of type 'number'

// ---------------------------------------------

// Backend example

function processPayment(amount: number): number {
    return amount + 100;
}

const finalAmount = processPayment(500);

console.log(finalAmount);

// Wrong type example (compile-time error)
//
// processPayment("500");