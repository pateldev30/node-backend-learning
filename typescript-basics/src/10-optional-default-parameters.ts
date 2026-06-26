/**
 * Topic: Optional and Default Parameters
 *
 * Concepts Learned:
 * - optional parameters
 * - default parameters
 * - parameter flexibility
 *
 * Backend Relevance:
 * - optional API values
 * - user roles
 * - default configurations
 * - request handling
 *
 * Author: Dev Patel
 */

// ======================================================
// Optional Parameters
// ======================================================

function greet(
    name: string,
    city?: string
): void {
    console.log(name, city);
}

greet("Dev");

greet(
    "Dev",
    "Vadodara"
);

// ======================================================
// Default Parameters
// ======================================================

function welcomeUser(
    name: string,
    city: string = "Vadodara"
): void {
    console.log(
        `Hello ${name} from ${city}`
    );
}

welcomeUser("Dev");

welcomeUser(
    "Dev",
    "Ahmedabad"
);

// ======================================================
// Backend Example
// ======================================================

function createUser(
    name: string,
    role: string = "user"
): void {
    console.log(
        `Created user: ${name}, Role: ${role}`
    );
}

createUser("Dev");

createUser(
    "Rahul",
    "admin"
);