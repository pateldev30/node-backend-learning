/**
 * Topic: Functions in TypeScript
 *
 * Concepts Learned:
 * - functions
 * - function parameters
 * - parameter typing
 * - return type
 * - function type inference
 *
 * Backend Relevance:
 * - authentication
 * - payment processing
 * - API services
 * - business logic
 *
 * Author: Dev Patel
 */

// ======================================================
// Function Parameters
// ======================================================

function greet(name: string): void {
    console.log("Hello", name);
}

greet("Dev");

// Error Example
//
// greet(100);

// ======================================================
// Return Type
// ======================================================

function add(
    a: number,
    b: number
): number {
    return a + b;
}

const result = add(10, 20);

console.log(result);

// ======================================================
// Function Type Inference
// ======================================================

function multiply(
    a: number,
    b: number
) {
    return a * b;
}

console.log(multiply(5, 2));

// ======================================================
// Backend Example
// ======================================================

function login(
    email: string,
    password: string
): boolean {
    return email === "dev@gmail.com"
        && password === "123456";
}

const loginResult = login(
    "dev@gmail.com",
    "123456"
);

console.log(loginResult);

// ======================================================
// Payment Example
// ======================================================

function calculateTax(
    amount: number
): number {
    return amount * 0.18;
}

console.log(calculateTax(1000));