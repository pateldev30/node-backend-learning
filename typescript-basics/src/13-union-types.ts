/**
 * Topic: Union Types
 *
 * Concepts Learned:
 * - union types
 * - OR types
 * - multiple allowed types
 * - unions in arrays
 *
 * Backend Relevance:
 * - API request handling
 * - dynamic IDs
 * - status responses
 * - flexible backend data
 *
 * Author: Dev Patel
 */

// ======================================================
// Basic Union Type
// ======================================================

let userId: number | string;

userId = 1;
userId = "1";

console.log(userId);

// Error Example
//
// userId = true;

// ======================================================
// Function Parameter
// ======================================================

function findUser(
    id: number | string
): void {
    console.log(id);
}

findUser(1);
findUser("1");

// ======================================================
// Union in Arrays
// ======================================================

const values:
    (number | string)[] = [
    1,
    "hello",
    10,
    "world"
];

console.log(values);

// ======================================================
// Backend Example
// ======================================================

type ApiStatus =
    "success"
    | "error";

let status: ApiStatus;

status = "success";

console.log(status);

// Error Example
//
// status = "loading";