/**
 * Topic: let, const and var
 *
 * Concepts Learned:
 * - let
 * - const
 * - var
 * - reassignment
 * - mutation
 * - scope basics
 *
 * Backend Relevance:
 * - immutable config values
 * - changing business logic values
 * - preventing accidental reassignment
 *
 * Author: Dev Patel
 */

// =====================================
// const
// =====================================

const appName: string = "Backend API";

console.log(appName);

// Error example
//
// appName = "New API"

// =====================================
// let
// =====================================

let bankBalance: number = 5000;

bankBalance += 1000;

console.log(bankBalance);

// =====================================
// var (avoid)
// =====================================

var oldVariable = "legacy js";

console.log(oldVariable);

// =====================================
// const with object
// =====================================

const user = {
    name: "Dev"
};

// Allowed
user.name = "Patel";

console.log(user);

// Not allowed
//
// user = {}