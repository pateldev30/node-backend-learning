/**
 * Topic: Arrays of Objects
 *
 * Concepts Learned:
 * - arrays of objects
 * - object typing inside arrays
 * - type inference
 * - backend data modeling
 *
 * Backend Relevance:
 * - database records
 * - API responses
 * - users/products/orders data
 *
 * Author: Dev Patel
 */

// ======================================================
// Type Inference
// ======================================================

const users = [
    {
        id: 1,
        name: "Dev",
        isAdmin: true
    },
    {
        id: 2,
        name: "Rahul",
        isAdmin: false
    }
];

console.log(users);

// ======================================================
// Explicit Typing
// ======================================================

const products: {
    id: number;
    name: string;
    price: number;
}[] = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Phone",
        price: 30000
    }
];

console.log(products);

// ======================================================
// Accessing Values
// ======================================================

// @ts-ignore
console.log(users[0].name);
// @ts-ignore
console.log(products[1].price);

// ======================================================
// Type Safety
// ======================================================

// Error Example
//
// users.push({
//     id: 3,
//     name: 100,
//     isAdmin: true
// });
//
// Why?
// name must be string

// ======================================================
// Backend Example
// ======================================================

const loginHistory = [
    {
        email: "dev@gmail.com",
        success: true
    },
    {
        email: "rahul@gmail.com",
        success: false
    }
];

console.log(loginHistory);