import React from "react";

const Typescript = () => {
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">
            Week 9.2 - Introduction to TypeScript
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Languages</h2>

            <h3 className="text-xl font-semibold mb-2">
              1. Loosely Typed Languages
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                Runtime Type Association: Data types are associated with values
                at runtime.
              </li>
              <li>
                Dynamic Type Changes: Variables can change types during
                execution.
              </li>
              <li>
                Runtime Error Discovery: Type errors may be discovered during
                runtime.
              </li>
              <li>Examples: JavaScript, Python, Ruby</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded mb-4">
              <h4 className="font-semibold mb-2">C++ Code (Doesn't Work ❌)</h4>
              <pre className="bg-gray-200 p-2 rounded">
                <code>
                  {`#include <iostream>

int main() {
  int number = 10;
  number = "text";  // Error: Cannot assign a string to an integer variable
  return 0;
}`}
                </code>
              </pre>
              <p className="text-sm">
                Explanation: C++ is a statically-typed language, meaning
                variable types must be declared and are enforced at
                compile-time. The type mismatch leads to a compilation failure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              2. Strongly Typed Languages
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                Compile-Time Enforcement: The data type of a variable is
                strictly enforced during compilation.
              </li>
              <li>
                Type Safety: The compiler or interpreter guarantees that
                operations are performed only on compatible types.
              </li>
              <li>
                Early Error Detection: Type errors are identified and addressed
                at compile-time.
              </li>
              <li>Examples: Java, C#, TypeScript</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded mb-4">
              <h4 className="font-semibold mb-2">
                JavaScript Code (Does Work ✅)
              </h4>
              <pre className="bg-gray-200 p-2 rounded">
                <code>
                  {`function main() {
  let number = 10;
  number = "text";  // Valid: JavaScript allows dynamic typing
  return number;
}`}
                </code>
              </pre>
              <p className="text-sm">
                Explanation: JavaScript is a dynamically-typed language,
                allowing variables to change types during runtime. The code
                executes without type-related errors.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Considerations</h2>
            <p className="mb-4">
              Statically-typed languages like C++ provide early error detection
              during compilation, ensuring type consistency. Dynamically-typed
              languages like JavaScript offer flexibility but may require
              careful handling to avoid unexpected runtime errors.
            </p>
            <p>
              The choice between strongly typed and loosely typed languages
              depends on project requirements, developer preferences, and the
              balance between early error detection and flexibility during
              development. Each type has its advantages and considerations,
              influencing their suitability for specific use cases.
            </p>
          </section>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">TypeScript</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why TypeScript</h2>
            <p className="mb-4">
              JavaScript is a powerful and widely used programming language, but
              it has a dynamic typing system, which means variable types are
              determined at runtime. While dynamic typing provides flexibility,
              it can lead to runtime errors that are challenging to catch during
              development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is TypeScript</h2>
            <p className="mb-4">
              In response to these challenges, Microsoft introduced TypeScript,
              a superset of JavaScript that adds static typing to the language.
              TypeScript is designed to address some of the limitations of
              JavaScript by providing developers with a more robust type system.
            </p>
            <div className="mb-4">
              <img
                src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/84491a98-70f5-4fd4-b15d-7e4fffe652fc/Untitled.png"
                alt="TypeScript Diagram"
                className="w-full rounded"
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How TypeScript</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Static Typing:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript introduces static typing, allowing developers to
                    declare the types of variables, parameters, and return
                    values at compile-time.
                  </li>
                  <li>
                    Static typing helps catch potential errors during
                    development, offering a level of code safety that may not be
                    achievable in pure JavaScript.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Compatibility with JavaScript:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript is a superset of JavaScript, meaning that any
                    valid JavaScript code is also valid TypeScript code.
                  </li>
                  <li>
                    Developers can gradually adopt TypeScript in existing
                    JavaScript projects without the need for a full rewrite.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tooling Support:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript comes with a rich set of tools and features for
                    development, including code editors (like Visual Studio
                    Code) with built-in TypeScript support.
                  </li>
                  <li>
                    The TypeScript compiler (tsc) translates TypeScript code
                    into plain JavaScript, allowing it to run in any JavaScript
                    environment.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Enhanced IDE Experience:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    IDEs (Integrated Development Environments) that support
                    TypeScript offer improved code navigation, autocompletion,
                    and better refactoring capabilities.
                  </li>
                  <li>
                    TypeScript's type information enhances the overall
                    development experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interfaces and Type Declarations:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript introduces concepts like interfaces and type
                    declarations, enabling developers to define clear contracts
                    for their code.
                  </li>
                  <li>
                    Interfaces help document the shape of objects, making it
                    easier to understand and maintain the code.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Compilation:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript code is transpiled to JavaScript during the
                    compilation process, ensuring that the resulting code is
                    compatible with various JavaScript environments and
                    browsers.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <blockquote className="italic border-l-4 border-blue-500 pl-4">
              Overall, TypeScript provides developers with the benefits of
              static typing while preserving the flexibility and features of
              JavaScript. It has gained popularity in large-scale applications
              and projects where maintaining code quality and catching errors
              early are crucial.
            </blockquote>
          </section>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">TypeScript</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why TypeScript</h2>
            <p className="mb-4">
              JavaScript is a powerful and widely used programming language, but
              it has a dynamic typing system, which means variable types are
              determined at runtime. While dynamic typing provides flexibility,
              it can lead to runtime errors that are challenging to catch during
              development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is TypeScript</h2>
            <p className="mb-4">
              In response to these challenges, Microsoft introduced TypeScript,
              a superset of JavaScript that adds static typing to the language.
              TypeScript is designed to address some of the limitations of
              JavaScript by providing developers with a more robust type system.
            </p>
            <div className="mb-4">
              <img
                src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/84491a98-70f5-4fd4-b15d-7e4fffe652fc/Untitled.png"
                alt="TypeScript Diagram"
                className="w-full rounded"
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How TypeScript</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Static Typing:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript introduces static typing, allowing developers to
                    declare the types of variables, parameters, and return
                    values at compile-time.
                  </li>
                  <li>
                    Static typing helps catch potential errors during
                    development, offering a level of code safety that may not be
                    achievable in pure JavaScript.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Compatibility with JavaScript:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript is a superset of JavaScript, meaning that any
                    valid JavaScript code is also valid TypeScript code.
                  </li>
                  <li>
                    Developers can gradually adopt TypeScript in existing
                    JavaScript projects without the need for a full rewrite.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tooling Support:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript comes with a rich set of tools and features for
                    development, including code editors (like Visual Studio
                    Code) with built-in TypeScript support.
                  </li>
                  <li>
                    The TypeScript compiler (tsc) translates TypeScript code
                    into plain JavaScript, allowing it to run in any JavaScript
                    environment.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Enhanced IDE Experience:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    IDEs (Integrated Development Environments) that support
                    TypeScript offer improved code navigation, autocompletion,
                    and better refactoring capabilities.
                  </li>
                  <li>
                    TypeScript's type information enhances the overall
                    development experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interfaces and Type Declarations:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript introduces concepts like interfaces and type
                    declarations, enabling developers to define clear contracts
                    for their code.
                  </li>
                  <li>
                    Interfaces help document the shape of objects, making it
                    easier to understand and maintain the code.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Compilation:</strong>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    TypeScript code is transpiled to JavaScript during the
                    compilation process, ensuring that the resulting code is
                    compatible with various JavaScript environments and
                    browsers.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-8">
              Overall, TypeScript provides developers with the benefits of
              static typing while preserving the flexibility and features of
              JavaScript. It has gained popularity in large-scale applications
              and projects where maintaining code quality and catching errors
              early are crucial.
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Execution of TypeScript Code
            </h2>
            <p className="mb-4">
              TypeScript code doesn't run natively in browsers or JavaScript
              environments. Instead, it undergoes a compilation process to
              generate equivalent JavaScript code. Here's an overview of how
              TypeScript code is executed:
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Writing TypeScript Code:</strong>
                <p>
                  Developers write TypeScript code using <code>.ts</code> or{" "}
                  <code>.tsx</code> files, employing TypeScript's syntax with
                  features like static typing, interfaces, and type annotations.
                </p>
              </li>
              <li>
                <strong>TypeScript Compiler (tsc):</strong>
                <p>
                  The TypeScript Compiler (<code>tsc</code>) is a command-line
                  tool that processes TypeScript code. Developers run{" "}
                  <code>tsc</code> to initiate the compilation process.
                </p>
              </li>
              <li>
                <strong>Compilation Process:</strong>
                <p>
                  The TypeScript Compiler parses and analyzes the TypeScript
                  code, checking for syntax errors and type-related issues. It
                  generates equivalent JavaScript code, typically in one or more{" "}
                  <code>.js</code> or <code>.jsx</code> files.
                </p>
              </li>
              <li>
                <strong>Generated JavaScript Code:</strong>
                <p>
                  The output JavaScript code closely resembles the original
                  TypeScript code but lacks TypeScript-specific constructs like
                  type annotations. TypeScript features that aren't present in
                  JavaScript (e.g., interfaces) are often transpiled or emitted
                  in a way that doesn't affect runtime behavior.
                </p>
              </li>
              <li>
                <strong>JavaScript Execution:</strong>
                <p>
                  The generated JavaScript code can now be executed by any
                  JavaScript runtime or browser. Developers can include the
                  resulting JavaScript files in HTML documents or use them in
                  Node.js environments.
                </p>
              </li>
              <li>
                <strong>Runtime Environment:</strong>
                <p>
                  In the chosen runtime environment, the JavaScript code is
                  interpreted or compiled by the JavaScript engine (e.g., V8 in
                  Chrome, SpiderMonkey in Firefox). Just-in-time (JIT)
                  compilation or interpretation occurs to convert the code into
                  machine code that the computer's processor can execute.
                </p>
              </li>
              <li>
                <strong>
                  Interacting with the DOM (Browser Environments):
                </strong>
                <p>
                  In browser environments, the JavaScript code, generated from
                  TypeScript, may interact with the Document Object Model (DOM)
                  to manipulate web page structure and behavior.
                </p>
              </li>
            </ul>
            <div className="mt-4">
              <img
                src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/aa505ccd-b070-4419-9c83-11766d371380/Untitled.png"
                alt="TypeScript Compilation Process"
                className="w-full rounded"
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              TypeScript Compiler (`tsc`)
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The TypeScript Compiler (`tsc`) is responsible for transpiling
                TypeScript code into JavaScript.
              </li>
              <li>
                It is a part of the official TypeScript distribution and can be
                installed using tools like npm.
              </li>
              <li>
                Developers run `tsc` from the command line, specifying the
                TypeScript file(s) they want to compile.
              </li>
              <li>
                Configuration for the compilation process can be provided via a
                `tsconfig.json` file.
              </li>
              <li>
                The compiler performs type checking, emits JavaScript files, and
                allows customization of compilation options.
              </li>
            </ul>
            <blockquote className="italic border-l-4 border-blue-500 pl-4 mt-4">
              In summary, TypeScript code is transformed into JavaScript through
              the TypeScript Compiler (`tsc`). This compilation process ensures
              that TypeScript's features are compatible with existing JavaScript
              environments, enabling developers to benefit from static typing
              during development while still producing standard JavaScript for
              execution.
            </blockquote>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Alternative TypeScript Compilers
            </h2>
            <p className="mb-4">
              In addition to the TypeScript Compiler (`tsc`), several
              alternative tools have gained popularity for their efficiency,
              speed, and additional features when transpiling TypeScript to
              JavaScript. Here are a couple of noteworthy ones:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>esbuild:</strong> A highly performant JavaScript bundler
                and minifier, but it also supports TypeScript.
              </li>
              <li>
                <strong>swc (Speedy Web Compiler):</strong> A fast and low-level
                JavaScript/TypeScript compiler.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">
            Setting up a TypeScript Node.js Application
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 1 - Install TypeScript Globally
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>npm install -g typescript</code>
            </pre>
            <p className="mt-2">
              This command installs TypeScript globally on your machine,
              allowing you to use the <code>tsc</code> command anywhere.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 2 - Initialize a Node.js Project with TypeScript
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>
                {`mkdir node-app
cd node-app
npm init -y
npx tsc --init`}
              </code>
            </pre>
            <p className="mt-2">
              These commands create a new directory (<code>node-app</code>),
              initialize a Node.js project with default settings (
              <code>npm init -y</code>), and then generate a{" "}
              <code>tsconfig.json</code> file using <code>npx tsc --init</code>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 3 - Create a TypeScript File (a.ts)
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>
                {`// a.ts
const x: number = 1;
console.log(x);`}
              </code>
            </pre>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 4 - Compile the TypeScript File to JavaScript
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>tsc -b</code>
            </pre>
            <p className="mt-2">
              The <code>-b</code> flag tells TypeScript to build the project
              based on the configuration in <code>tsconfig.json</code>. This
              generates a JavaScript file (<code>index.js</code>) from the
              TypeScript source (<code>a.ts</code>).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 5 - Explore the Generated JavaScript File (index.js)
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>
                {`// index.js
const x = 1;
console.log(x);`}
              </code>
            </pre>
            <p className="mt-2">
              Note that the generated JavaScript file doesn't include
              TypeScript-specific code. It's standard JavaScript without types.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 6 - Attempt to Assign a String to a Number
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>
                {`// a.ts
let x: number = 1;
x = "harkirat";
console.log(x);`}
              </code>
            </pre>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Step 7 - Try Compiling the Code Again
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>tsc -b</code>
            </pre>
            <p className="mt-2">
              Upon compiling, TypeScript detects the type error (<code>x</code>{" "}
              being assigned a string) and reports it in the console.
              Additionally, no <code>index.js</code> file is generated due to
              the type error.
            </p>
          </section>

          <section>
            <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-8">
              This example illustrates one of TypeScript's key benefits:
              catching type errors at compile time. By providing static typing,
              TypeScript enhances code reliability and helps identify potential
              issues before runtime. This is particularly valuable in large
              codebases where early error detection can save time and prevent
              bugs.
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Basic Types in TypeScript
            </h2>
            <p className="mb-4">
              In TypeScript, basic types serve as the building blocks for
              defining the data types of variables. Here's an overview of some
              fundamental types provided by TypeScript:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Number:</strong>
                <pre className="bg-gray-200 p-4 rounded mt-2">
                  <code>let age: number = 25;</code>
                </pre>
              </li>
              <li>
                <strong>String:</strong>
                <pre className="bg-gray-200 p-4 rounded mt-2">
                  <code>let name: string = "John";</code>
                </pre>
              </li>
              <li>
                <strong>Boolean:</strong>
                <pre className="bg-gray-200 p-4 rounded mt-2">
                  <code>let isStudent: boolean = true;</code>
                </pre>
              </li>
              <li>
                <strong>Null:</strong>
                <pre className="bg-gray-200 p-4 rounded mt-2">
                  <code>let myVar: null = null;</code>
                </pre>
              </li>
              <li>
                <strong>Undefined:</strong>
                <pre className="bg-gray-200 p-4 rounded mt-2">
                  <code>let myVar: undefined = undefined;</code>
                </pre>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">
            Problems and Code Implementation
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Hello World Greeting
            </h2>
            <p className="mb-2">
              <strong>Objective:</strong> Learn how to give types to function
              arguments in TypeScript.
            </p>
            <p className="mb-2">
              <strong>Task:</strong> Write a TypeScript function named{" "}
              <code>greet</code> that takes a user's first name as an argument
              and logs a greeting message to the console.
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4">
              <code>
                {`function greet(firstName: string): void {
    console.log("Hello " + firstName);
}

// Example Usage
greet("harkirat");`}
              </code>
            </pre>
            <p className="italic border-l-4 border-blue-500 pl-4">
              This example demonstrates the basic usage of TypeScript types in
              function parameters, ensuring that the expected data type is
              enforced and catching errors related to type mismatches during
              development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Sum Function</h2>
            <p className="mb-2">
              <strong>Objective:</strong> Learn how to assign a return type to a
              function in TypeScript.
            </p>
            <p className="mb-2">
              <strong>Task:</strong> Write a TypeScript function named{" "}
              <code>sum</code> that takes two numbers as arguments and returns
              their sum. Additionally, invoke the function with an example.
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4">
              <code>
                {`function sum(a: number, b: number): number {
    return a + b;
}

// Example Usage
console.log(sum(2, 3));`}
              </code>
            </pre>
            <p className="italic border-l-4 border-blue-500 pl-4">
              This example showcases how to specify the return type of a
              function in TypeScript, ensuring that the function returns the
              expected data type. In this case, the <code>sum</code> function
              returns a number.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Age Verification Function
            </h2>
            <p className="mb-2">
              <strong>Objective:</strong> Understand Type Inference in
              TypeScript.
            </p>
            <p className="mb-2">
              <strong>Task:</strong> Write a TypeScript function named{" "}
              <code>isLegal</code> that takes an <code>age</code> as a parameter
              and returns <code>true</code> if the user is 18 or older, and{" "}
              <code>false</code> otherwise. Also, invoke the function with an
              example.
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4">
              <code>
                {`function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

// Example Usage
console.log(isLegal(22)); // Output: true`}
              </code>
            </pre>
            <p className="italic border-l-4 border-blue-500 pl-4">
              This example demonstrates how TypeScript's type inference can be
              leveraged. The return type (<code>boolean</code>) is implicitly
              inferred based on the conditions within the function. The{" "}
              <code>isLegal</code> function is designed to return a boolean
              value indicating whether the provided age is 18 or older.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Delayed Function Execution
            </h2>
            <p className="mb-2">
              <strong>Objective:</strong> Learn to work with functions as
              parameters in TypeScript.
            </p>
            <p className="mb-2">
              <strong>Task:</strong> Write a TypeScript function named{" "}
              <code>delayedCall</code> that takes another function (
              <code>fn</code>) as input and executes it after a delay of 1
              second. Also, invoke the <code>delayedCall</code> function with an
              example.
            </p>
            <pre className="bg-gray-200 p-4 rounded mb-4">
              <code>
                {`function delayedCall(fn: () => void): void {
    setTimeout(fn, 1000);
}

// Example Usage
delayedCall(function() {
    console.log("hi there");
});`}
              </code>
            </pre>
            <p className="italic border-l-4 border-blue-500 pl-4">
              This example illustrates how TypeScript handles functions as
              first-class citizens, allowing them to be passed as arguments to
              other functions. The <code>delayedCall</code> function provides a
              way to execute a given function after a specified delay.
            </p>
          </section>
        </div>
      </div>

      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Interfaces</h1>
        <p className="text-lg mb-4">
          In TypeScript, an interface is a way to define a contract for the
          shape of an object. It allows you to specify the expected properties,
          their types, and whether they are optional or required. Interfaces are
          powerful tools for enforcing a specific structure in your code.
        </p>

        <h2 className="text-3xl font-semibold mb-4">
          Understanding Interfaces
        </h2>
        <p className="text-lg mb-4">
          Suppose you have an object representing a user:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`const user = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          To assign a type to the \`user\` object using an interface, you can
          create an interface named \`User\`:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          Now, you can explicitly specify that the \`user\` object adheres to
          the \`User\` interface:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`const user: User = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">Assignment 1</h2>
        <h3 className="text-2xl font-semibold mb-2">Problem:</h3>
        <p className="text-lg mb-4">
          Create a function \`isLegal\` that returns true or false if a user is
          above 18. It takes a user as an input.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Solution:</h3>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`// Define an interface to specify the structure of a user object
interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

// Create a function 'isLegal' that checks if a user is above 18
function isLegal(user: User): boolean {
    // Check if the user's age is greater than 18
    return user.age > 18;
}`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">Assignment 2</h2>
        <h3 className="text-2xl font-semibold mb-2">Problem:</h3>
        <p className="text-lg mb-4">
          Create a React component that takes todos as input and renders them.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Solution:</h3>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`// Define an interface to specify the structure of a todo object
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

// Define the input prop for the Todo component
interface TodoInput {
  todo: TodoType;
}

// Create a React component 'Todo' that takes a 'todo' prop and renders it
function Todo({ todo }: TodoInput): JSX.Element {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">Implementing Interfaces</h2>
        <p className="text-lg mb-4">
          In TypeScript, you can implement interfaces using classes. This
          provides a way to define a blueprint for the structure and behavior of
          a class. Let's take an example:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          Now, you can create a class that adheres to this interface:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(\`\${phrase} \${this.name}\`);
  }
}`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">Types</h2>
        <p className="text-lg mb-4">
          In TypeScript, **types** allow you to aggregate data together in a
          manner very similar to interfaces. They provide a way to define the
          structure of an object, similar to how interfaces do. Here's an
          example:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`type User = {
  firstName: string;
  lastName: string;
  age: number;
};`}
          </code>
        </pre>

        <h3 className="text-2xl font-semibold mb-2">Features</h3>
        <h4 className="text-xl font-semibold mb-2">Unions:</h4>
        <p className="text-lg mb-4">
          Unions allow you to define a type that can be one of several types.
          This is useful when dealing with values that could have different
          types. For instance, imagine you want to print the ID of a user, which
          can be either a number or a string:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(\`ID: \${id}\`);
}

printId(101);     // ID: 101
printId("202");   // ID: 202`}
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-2">Intersection:</h4>
        <p className="text-lg mb-4">
          Intersections allow you to create a type that has every property of
          multiple types or interfaces. If you have types like \`Employee\` and
          \`Manager\`, and you want to create a \`TeamLead\` type that combines
          properties of both:
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software Developer"
};`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">Interfaces vs Types</h2>
        <h3 className="text-2xl font-semibold mb-2">Major Differences</h3>
        <h4 className="text-xl font-semibold mb-2">1. Declaration Syntax:</h4>
        <p className="text-lg mb-4">
          <strong>Type:</strong> Uses the \`type\` keyword. More flexible
          syntax, can represent primitive types, unions, intersections, and
          more.
        </p>
        <p className="text-lg mb-4">
          <strong>Interface:</strong> Uses the \`interface\` keyword. Typically
          used for defining the structure of objects.
        </p>
        <h4 className="text-xl font-semibold mb-2">
          2. Extension and Merging:
        </h4>
        <p className="text-lg mb-4">
          <strong>Type:</strong> Supports extending types. Can't be merged; if
          you define another type with the same name, it will override the
          previous one.
        </p>
        <p className="text-lg mb-4">
          <strong>Interface:</strong> Supports extending interfaces using the
          \`extends\` keyword. Automatically merges with the same-name
          interfaces, combining their declarations.
        </p>
        <h4 className="text-xl font-semibold mb-2">
          3. Declaration vs. Implementation:
        </h4>
        <p className="text-lg mb-4">
          <strong>Type:</strong> Can represent any type, including primitives,
          unions, intersections, etc. Suitable for describing the shape of data.
        </p>
        <p className="text-lg mb-4">
          <strong>Interface:</strong> Mainly used for describing the shape of
          objects. Can also be used to define contracts for classes.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Other Differences</h3>
        <p className="text-lg mb-4">
          <strong>Type Overriding:</strong> Types cannot be overridden or
          merged. Redefining a type with the same name replaces the previous
          one.
        </p>
        <p className="text-lg mb-4">
          <strong>Object Literal Strictness:</strong> Types are more lenient
          when dealing with object literal assignments. Interfaces enforce
          strict object literal shapes.
        </p>
        <p className="text-lg mb-4">
          <strong>Implementation for Classes:</strong> Interfaces can be used to
          define contracts for class implementations. Types are more versatile
          for creating complex types and reusable utility types.
        </p>

        <h3 className="text-2xl font-semibold mb-2">When to Use Which</h3>
        <p className="text-lg mb-4">
          <strong>Use Types:</strong> For advanced scenarios requiring union
          types, intersections, or mapped types. When dealing with primitive
          types, tuples, or non-object-related types. Creating utility types
          using advanced features like conditional types.
        </p>
        <p className="text-lg mb-4">
          <strong>Use Interfaces:</strong> When defining the structure of
          objects or contracts for class implementations. Extending or
          implementing other interfaces. When consistency in object shape is a
          priority.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Examples</h3>
        <h4 className="text-xl font-semibold mb-2">Type Example:</h4>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(\`ID: \${id}\`);
}

printId(101);       // ID: 101
printId("202");     // ID: 202`}
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-2">Interface Example:</h4>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`interface Employee {
  name: string;
  startDate: Date;
}

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "Harkirat",
  startDate: new Date(),
  department: "Software Developer",
};`}
          </code>
        </pre>
      </div>

      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">
          The `tsconfig.json` File in TypeScript
        </h1>
        <p className="text-lg mb-6">
          The <strong>`tsconfig.json`</strong> file in TypeScript is a
          configuration file that provides settings for the TypeScript compiler
          (<strong>`tsc`</strong>). It allows you to customize various aspects
          of the compilation process and define how your TypeScript code should
          be transpiled into JavaScript.
        </p>

        <h2 className="text-3xl font-semibold mb-4">
          1] Target Option in `tsconfig.json`:
        </h2>
        <p className="text-lg mb-4">
          The <strong>`target`</strong> option in a{" "}
          <strong>`tsconfig.json`</strong> file specifies the ECMAScript target
          version to which the TypeScript compiler (<strong>`tsc`</strong>) will
          compile the TypeScript code. It allows you to define the lowest
          version of ECMAScript that your code should be compatible with. Here's
          an explanation and example usage:
        </p>

        <h3 className="text-2xl font-semibold mb-4">ES5 (ECMAScript 5):</h3>
        <p className="text-lg mb-4">
          When <strong>`target`</strong> is set to <code>"es5"</code>, the
          TypeScript compiler generates code compatible with ECMAScript 5, which
          is widely supported across browsers.
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "target": "es5",
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">TypeScript Code:</p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>{`const greet = (name: string) => \`Hello, \${name}!\`;`}</code>
        </pre>
        <p className="text-lg mb-4">Output:</p>
        <pre className="bg-gray-200 p-4 rounded mb-6">
          <code>
            {`"use strict";
const greet = function (name) { return "Hello, ".concat(name, "!"); };`}
          </code>
        </pre>

        <h3 className="text-2xl font-semibold mb-4">
          ES2020 (ECMAScript 2020):
        </h3>
        <p className="text-lg mb-4">
          When <strong>`target`</strong> is set to <code>"es2020"</code>, the
          TypeScript compiler generates code compatible with ECMAScript 2020,
          incorporating the latest features.
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "target": "es2020",
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">TypeScript Code:</p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>{`const greet = (name: string) => \`Hello, \${name}!\`;`}</code>
        </pre>
        <p className="text-lg mb-4">Output:</p>
        <pre className="bg-gray-200 p-4 rounded mb-6">
          <code>
            {`"use strict";
const greet = (name) => \`Hello, \${name}!\`;`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          By setting the <strong>`target`</strong> option, you ensure that the
          generated JavaScript code adheres to the specified ECMAScript version,
          allowing you to control the level of compatibility and take advantage
          of the features available in newer ECMAScript versions.
        </p>

        <h2 className="text-3xl font-semibold mb-4">2] `rootDir`:</h2>
        <p className="text-lg mb-4">
          The <strong>`rootDir`</strong> option in a{" "}
          <strong>`tsconfig.json`</strong> file specifies the root directory
          where the TypeScript compiler (<strong>`tsc`</strong>) should look for{" "}
          <code>.ts</code> files. It is considered a good practice to set{" "}
          <strong>`rootDir`</strong> to the source folder (<code>"src"</code>),
          indicating the starting point for TypeScript file discovery.
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "rootDir": "src",
    // Other options...
  }
}`}
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">3] `outDir`:</h2>
        <p className="text-lg mb-4">
          The <strong>`outDir`</strong> option defines the output directory
          where the TypeScript compiler will place the generated{" "}
          <code>.js</code> files. It determines the structure of the output
          directory relative to the <strong>`rootDir`</strong>.
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "outDir": "dist",
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          If <strong>`rootDir`</strong> is set to <code>"src"</code> and{" "}
          <strong>`outDir`</strong> is set to <code>"dist"</code>, the compiled
          files will be placed in the <code>dist</code> folder, mirroring the
          structure of the <code>src</code> folder.
        </p>

        <h2 className="text-3xl font-semibold mb-4">4] `noImplicitAny`:</h2>
        <p className="text-lg mb-4">
          The <strong>`noImplicitAny`</strong> option in a{" "}
          <strong>`tsconfig.json`</strong> file determines whether TypeScript
          should issue an error when it encounters a variable with an implicit{" "}
          <code>any</code> type.
        </p>
        <p className="text-lg mb-4">
          <strong>
            Enabled (<code>"noImplicitAny": true</code>):
          </strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "noImplicitAny": true,
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">Example:</p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`// Compilation Error: Implicit any type
const greet = (name) => \`Hello, \${name}!\`;`}
          </code>
        </pre>

        <p className="text-lg mb-4">
          <strong>
            Disabled (<code>"noImplicitAny": false</code>):
          </strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "noImplicitAny": false,
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          No error will be issued for implicit <code>any</code> types.
        </p>

        <h2 className="text-3xl font-semibold mb-4">5] `removeComments`:</h2>
        <p className="text-lg mb-4">
          The <strong>`removeComments`</strong> option in a{" "}
          <strong>`tsconfig.json`</strong> file determines whether comments
          should be included in the final JavaScript output.
        </p>
        <p className="text-lg mb-4">
          <strong>
            Enabled (<code>"removeComments": true</code>):
          </strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "removeComments": true,
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          Comments will be stripped from the generated JavaScript files.
        </p>

        <p className="text-lg mb-4">
          <strong>
            Disabled (<code>"removeComments": false</code>):
          </strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded mb-4">
          <code>
            {`{
  "compilerOptions": {
    "removeComments": false,
    // Other options...
  }
}`}
          </code>
        </pre>
        <p className="text-lg mb-4">
          Comments will be retained in the generated JavaScript files.
        </p>

        <p className="text-lg mb-4">
          These options provide flexibility and control over the compilation
          process, allowing you to structure your project and handle
          type-related scenarios according to your preferences.
        </p>
      </div>
    </div>
  );
};

export default Typescript;
