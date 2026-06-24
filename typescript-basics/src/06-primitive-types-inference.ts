/**
 * Topic: Primitive Types, Type Inference and Type Annotation
 *
 * Concepts Learned:
 * - primitive types
 * - number
 * - string
 * - boolean
 * - null
 * - undefined
 * - type annotations
 * - type inference
 *
 * Backend Relevance:
 * - request data typing
 * - auth systems
 * - database values
 * - payment systems
 * - safer backend logic
 *
 * Author: Dev Patel
 */

// ======================================================
// Type Annotation
// Explicitly defining type
// ======================================================

const username: string = "devpatel";
const age: number = 20;
const isAdmin: boolean = false;

console.log(username);
console.log(age);
console.log(isAdmin);

// ======================================================
// Primitive Types
// ======================================================

const bankBalance: number = 5000;
const email: string = "dev@gmail.com";
const loggedIn: boolean = true;
const currentUser: null = null;
const city: undefined = undefined;

console.log(bankBalance);
console.log(email);
console.log(loggedIn);
console.log(currentUser);
console.log(city);

// ======================================================
// Type Inference
// TypeScript automatically detects type
// ======================================================

const price = 100;
const fullName = "Dev Patel";
const hasAccess = true;

console.log(price);
console.log(fullName);
console.log(hasAccess);

// Error Example
//
// fullName = 100
//
// Why?
// TypeScript inferred fullName as string

// ======================================================
// Backend Example
// ======================================================

const authToken = "jwt-token";
const userBalance = 15000;
const hasAdminPermission = true;
const loggedInUser = null;

console.log(authToken);
console.log(userBalance);
console.log(hasAdminPermission);
console.log(loggedInUser);

// ======================================================
// Function Example
// Explicit typing matters in backend APIs
// ======================================================

function login(
    email: string,
    password: string
): boolean {
    console.log("Login request:", email);

    return true;
}

const loginResult = login(
    "test@gmail.com",
    "123456"
);

console.log(loginResult);

// Error Example
//
// login(123, true);