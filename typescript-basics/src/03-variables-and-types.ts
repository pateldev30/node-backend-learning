/**
 * Topic: Variables, Primitive Types & Type Inference
 *
 * Concepts Learned:
 * - Type annotations
 * - Type inference
 * - Primitive types
 * - number
 * - string
 * - boolean
 * - null
 * - undefined
 *
 * Backend Relevance:
 * - User data typing
 * - API safety
 * - Authentication data
 * - Payment logic safety
 *
 * Author: Dev Patel
 */

// =============================================
// Type Annotation
// =============================================

let age: number = 20;
let username: string = "devpatel";
let isLoggedIn: boolean = true;

console.log(age);
console.log(username);
console.log(isLoggedIn);

// =============================================
// Primitive Types
// =============================================

const bankBalance: number = 5000;
const email: string = "dev@gmail.com";
const isAdmin: boolean = false;
const currentUser: null = null;
const city: undefined = undefined;

console.log(bankBalance);
console.log(email);
console.log(isAdmin);
console.log(currentUser);
console.log(city);

// =============================================
// Type Inference
// TypeScript automatically understands type
// =============================================

let price = 199;
let userEmail = "user@gmail.com";
let loggedIn = false;

console.log(price);
console.log(userEmail);
console.log(loggedIn);

// Type safety example
//
// price = "hello";
//
// Error:
// Type 'string' is not assignable to type 'number'

// =============================================
// Backend Example
// =============================================

const authToken = "jwt-token";
const userBalance = 10000;
const hasAdminPermission = true;
const loggedInUser = null;

console.log(authToken);
console.log(userBalance);
console.log(hasAdminPermission);
console.log(loggedInUser);

// =============================================
// Function Example
// =============================================

function login(email: string, password: string): boolean {
    console.log(`User logged in with email: ${email}`);

    return true;
}

const loginResult = login("test@gmail.com", "123456");

console.log(loginResult);

// Wrong type example
//
// login(123, true);