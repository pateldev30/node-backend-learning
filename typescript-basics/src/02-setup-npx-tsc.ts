/**
 * Topic: TypeScript Setup, npx and tsc
 *
 * Concepts Learned:
 * - npm init
 * - package.json
 * - TypeScript installation
 * - npx
 * - tsc compiler
 * - tsconfig.json
 * - Compile flow
 *
 * Backend Relevance:
 * - Local project tooling
 * - Consistent environments
 * - Project configuration
 *
 * Author: Dev Patel
 */

/**
 * IMPORTANT:
 *
 * This file is for learning and revision.
 *
 * TypeScript setup commands:
 *
 * 1. Initialize project
 * npm init -y
 *
 * 2. Install TypeScript
 * npm install -D typescript
 *
 * 3. Create tsconfig.json
 * npx tsc --init
 *
 * 4. Compile TypeScript → JavaScript
 * npx tsc
 *
 * 5. Run JavaScript using Node
 * node src/index.js
 */

// Example TypeScript code

const projectName: string = "TypeScript Backend Practice";

console.log(projectName);

// Example compiler safety

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(5, 10));

// Type error example:
//
// multiply(5, "10");

// ---------------------------------------------
// TypeScript Compilation Flow
//
// 07-arrays.ts
//    ↓
// npx tsc
//    ↓
// index.js
//    ↓
// node index.js
// ---------------------------------------------