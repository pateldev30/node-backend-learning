/**
 * Topic: Interface vs Type
 *
 * Concepts Learned:
 * - interface
 * - type aliases
 * - differences
 * - backend conventions
 *
 * Backend Relevance:
 * - request DTOs
 * - response models
 * - API contracts
 * - role systems
 *
 * Author: Dev Patel
 */

// ======================================================
// Interface
// Object Shape
// ======================================================

interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

const user: User = {
    id: 1,
    name: "Dev",
    isAdmin: true
};

console.log(user);

// ======================================================
// Type
// Union Type
// ======================================================

type UserRole =
    "admin"
    | "user"
    | "guest";

const role: UserRole = "admin";

console.log(role);

// ======================================================
// Backend Example
// ======================================================

interface LoginResponse {
    success: boolean;
    token: string;
}

const response: LoginResponse = {
    success: true,
    token: "jwt-token"
};

console.log(response);

// Error Example
//
// const role: UserRole = "manager";