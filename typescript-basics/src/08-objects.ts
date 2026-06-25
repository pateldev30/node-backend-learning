/**
 * Topic: Objects in TypeScript
 *
 * Concepts Learned:
 * - objects
 * - key value pairs
 * - object type inference
 * - object type annotation
 * - type safety
 *
 * Backend Relevance:
 * - API responses
 * - request body
 * - user models
 * - database records
 * - configuration objects
 *
 * Author: Dev Patel
 */

// ======================================================
// Object Type Inference
// ======================================================

const user = {
    name: "Dev Patel",
    age: 20,
    isAdmin: false
};

console.log(user);

// ======================================================
// Accessing Object Values
// ======================================================

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

// ======================================================
// Explicit Object Typing
// ======================================================

const product: {
    id: number;
    name: string;
    price: number;
} = {
    id: 1,
    name: "Laptop",
    price: 50000
};

console.log(product);

// ======================================================
// Type Safety
// ======================================================

// Error Example
//
// user.age = "twenty";
//
// Why?
// age is inferred as number

user.age = 21;

console.log(user);

// ======================================================
// Backend Example
// ======================================================

const apiResponse = {
    success: true,
    message: "User created successfully"
};

console.log(apiResponse);

const authUser = {
    id: 1,
    email: "dev@gmail.com",
    isVerified: true
};

console.log(authUser);