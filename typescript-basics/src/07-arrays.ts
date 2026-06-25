/**
 * Topic: Arrays in TypeScript
 *
 * Concepts Learned:
 * - arrays
 * - array type annotations
 * - type inference
 * - string[]
 * - number[]
 * - boolean[]
 *
 * Backend Relevance:
 * - API responses
 * - users list
 * - balances
 * - permissions
 * - database records
 *
 * Author: Dev Patel
 */

// ======================================================
// Array Type Annotation
// ======================================================

const users: string[] = [
    "dev",
    "rahul",
    "amit"
];

console.log(users);

// ======================================================
// Number Array
// ======================================================

const balances: number[] = [
    1000,
    2000,
    5000
];

console.log(balances);

// ======================================================
// Boolean Array
// ======================================================

const permissions: boolean[] = [
    true,
    false,
    true
];

console.log(permissions);

// ======================================================
// Type Inference
// TypeScript automatically detects array type
// ======================================================

const emails = [
    "a@gmail.com",
    "b@gmail.com"
];

const prices = [
    100,
    200,
    500
];

console.log(emails);
console.log(prices);

// ======================================================
// Type Safety
// ======================================================

// Error Example
//
// users.push(100);
//
// Why?
// users is string[]

// Allowed
users.push("rohan");

console.log(users);

// ======================================================
// Backend Example
// ======================================================

const transactionAmounts: number[] = [
    100,
    500,
    1500
];

console.log(transactionAmounts);