/**
 * Topic: Type Aliases
 *
 * Concepts Learned:
 * - type aliases
 * - reusable types
 * - custom object types
 * - arrays of custom types
 *
 * Backend Relevance:
 * - API contracts
 * - request/response models
 * - database entities
 * - reusable backend types
 *
 * Author: Dev Patel
 */

// ======================================================
// Type Alias
// Reusable object type
// ======================================================

type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};

const user1: User = {
    id: 1,
    name: "Dev",
    isAdmin: true
};

const user2: User = {
    id: 2,
    name: "Rahul",
    isAdmin: false
};

console.log(user1);
console.log(user2);

// ======================================================
// Array of Custom Types
// ======================================================

const users: User[] = [
    user1,
    user2
];

console.log(users);

// ======================================================
// Backend Example
// ======================================================

type LoginResponse = {
    success: boolean;
    token: string;
};

const response: LoginResponse = {
    success: true,
    token: "jwt-token"
};

console.log(response);

// ======================================================
// Type Safety
// ======================================================

// Error Example
//
// const invalidUser: User = {
//     id: 1,
//     name: 100,
//     isAdmin: true
// };
//
// Why?
// name must be string