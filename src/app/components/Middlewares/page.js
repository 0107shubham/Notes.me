"use client";
import React from "react";

const Middlewares = () => {
  const PORT = 3000;
  return (
    <div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Understanding Middlewares</h1>
        <p className="text-lg mb-4">
          **Imagine a Busy Hospital:** Think of a hospital where there's a
          doctor, patients waiting in line, and a few helpful assistants making
          sure everything runs smoothly.
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            1. Doctor's Cabin (Application Logic):
          </h2>
          <p className="text-lg">
            The doctor is like the main brain of our hospital – ready to help
            patients with their problems.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            2. Waiting Room (Callback Queue):
          </h2>
          <p className="text-lg">
            The waiting room is where patients hang out before seeing the
            doctor. Each patient has a unique situation.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            3. Intermediates (Middlewares):
          </h2>
          <p className="text-lg">
            Before a patient sees the doctor, there are some helpers doing
            important tasks. One helper checks if patients have the right
            paperwork. This is like ensuring everyone is who they say they are
            (Authentication). Another helper does quick health checks – like
            making sure patients' blood pressure is okay. This is similar to
            checking if the information coming to the doctor is healthy and
            makes sense (Input Validation)
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-2">
          Middlewares in JS Context & Problem Statement:
        </h2>
        <p className="text-lg mb-4">
          Earlier we used to organize all our prechecks followed by the
          application logic all in one route.
          <br />
          <strong>
            Middlewares emerged as a solution to enhance code organization by
            extracting prechecks from the core application logic. The motivation
            behind their introduction lies in our commitment to the "Don't
            Repeat Yourself" (DRY) principle.
          </strong>
          <br />
          By isolating these preliminary checks into distinct functions or code
          blocks known as middlewares, we achieve a more modular and
          maintainable codebase. This separation not only streamlines the
          primary application logic but also promotes code reuse, making it
          easier to manage, understand, and scale our software architecture.
          <br />
          Furthermore, with middleware, we can easily include as many precheck
          functions as needed. This means we have the freedom to add various
          checks or operations to our application without making the main code
          complex. It's like having building blocks that we can mix and match to
          create a customized process for our application, making it more
          adaptable and easier to manage.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Some Associated Concepts:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>next() Keyword:</strong> In middleware functions in Express,
            next is a callback function that is used to pass control to the next
            middleware function in the stack. When you call next(), it tells
            Express to move to the next middleware in line. If next() is not
            called within a middleware function, the request-response cycle
            stops, and the client receives no response.
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              {`
app.use((req, res, next) => {
  console.log('This middleware runs first.');
  next(); // Move to the next middleware
});

app.use((req, res) => {
  console.log('This middleware runs second.');
  res.send('Response sent from the second middleware.');
});
            `}
            </pre>
          </li>
          <li>
            <strong>Difference between res.send and res.json:</strong> res.send:
            Sends a response of various types (string, Buffer, object, etc.).
            Express tries to guess the content type based on the data provided.
            res.send('Hello, World!'); // Sends a plain text response
            <br />
            res.json: Sends a JSON response. It automatically sets the
            Content-Type header to application/json. res.json "message": 'Hello,
            JSON!' ; // Sends a JSON response
          </li>
          <li>
            <strong>Importance of app.use(express.json()):</strong>{" "}
            app.use(express.json()) is middleware that parses incoming JSON
            payloads in the request body. It is crucial when dealing with JSON
            data sent in the request body, typically in POST or PUT requests.
            Without this middleware, you might receive the JSON data as a raw
            string, and you'd need to manually parse it.
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              {`
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON in the request body

app.post('/api/data', (req, res) => {
  const jsonData = req.body; // Now req.body contains the parsed JSON data
  // Process the data...
  res.json({ success: true });
});
            // `}
            </pre>
          </li>
          <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">
              Middleware and `req.body`
            </h1>
            <p className="text-lg mb-4">
              <strong>req.query</strong> and <strong>req.headers</strong> don't
              require middleware because they represent the query parameters and
              headers of the incoming request, respectively. Express
              automatically parses them.
              <br />
              <strong>req.body</strong> requires middleware like{" "}
              <code>express.json()</code> to parse the request body, especially
              when the body contains JSON data. Other middleware, like{" "}
              <code>express.urlencoded()</code>, is used for parsing form data
              in the request body.
              <br />
              Middleware helps in processing the request at different stages and
              is essential for tasks like parsing, logging, authentication, and
              more in a modular and organized way.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              3 Ways of Sending Inputs to a Response
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                1. Query Parameter:
              </h3>
              <p className="text-lg mb-2">
                <strong>What it is:</strong> Like giving specific instructions
                in the web address.
              </p>
              <p className="text-lg mb-4">
                <strong>Example:</strong> In{" "}
                <code>www.example.com/search?topic=animals</code>, the query
                parameter is <strong>topic</strong> with the value{" "}
                <strong>animals</strong>.
              </p>
              <p className="text-lg mb-4">
                <strong>Use Case:</strong> Good for simple stuff you want
                everyone to see, like search terms in a URL.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">2. Body:</h3>
              <p className="text-lg mb-2">
                <strong>What it is:</strong> Imagine it as the hidden part of a
                request, carrying more detailed information.
              </p>
              <p className="text-lg mb-4">
                <strong>Example:</strong> When you fill out a form on a website,
                the details you enter (name, email) go in the body of the
                request.
              </p>
              <p className="text-lg mb-4">
                <strong>Use Case:</strong> Great for sending lots of
                information, especially when you're submitting something like a
                form.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">3. Headers:</h3>
              <p className="text-lg mb-2">
                <strong>What it is:</strong> Extra information attached to the
                request, kind of like details about a letter.
              </p>
              <p className="text-lg mb-4">
                <strong>Example:</strong> Headers could include things like your
                identity or the type of data you're sending.
              </p>
              <p className="text-lg mb-4">
                <strong>Use Case:</strong> Perfect for passing along special
                information that doesn't fit neatly in the URL or body, like who
                you are or how to handle the data.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Bottom Line:</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Query Parameters:</strong> Simple instructions visible
                in the web address.
              </li>
              <li>
                <strong>Body:</strong> Hidden part of the request for more
                detailed info, great for forms.
              </li>
              <li>
                <strong>Headers:</strong> Extra details about the request,
                useful for special information.
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Global Catches</h1>
        <p className="text-lg mb-4">
          It essentially helps us, the developers, give a better error message
          to the user.
          <br />
          Global Catch or Error-Handling Middleware is a special type of
          middleware function in Express that has four arguments instead of
          three (err, req, res, next). Express recognizes it as an
          error-handling middleware because of these four arguments.
          <pre className="bg-gray-800 text-white p-4 rounded mt-2">
            {`
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Customize the error response based on your requirements
  res.status(500).json({ error: 'Something went wrong!' });
};
          `}
          </pre>
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Importance of Global Error Handling:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>1. Centralized Handling:</strong> Global catch blocks allow
            you to centrally manage and handle errors that occur anywhere in
            your application. Instead of handling errors at each specific
            location, you can capture and process them in a centralized
            location.
          </li>
          <li>
            <strong>2. Consistent Error Handling:</strong> Using a global catch
            mechanism ensures a consistent approach to error handling throughout
            the application. You can define how errors are logged, reported, or
            displayed in one place, making it easier to maintain a uniform user
            experience.
          </li>
          <li>
            <strong>3. Fallback Mechanism:</strong> Global catches often serve
            as a fallback mechanism. If an unexpected error occurs and is not
            handled locally, the global catch can capture it, preventing the
            application from crashing and providing an opportunity to log the
            error for further analysis.
          </li>
        </ul>
      </div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Input Validation</h1>
        <p className="text-lg mb-4">
          Input validation is a crucial aspect of securing your application. It
          helps ensure that the data received by your server is in the expected
          format and meets certain criteria.
          <br />
          Take for instance a login schema. Instead of passing a username and
          password in the body, the user can pass in any gibberish and may try
          to crash the server. Thus, it is our responsibility to ensure that our
          application logic handles all these input vulnerabilities.
          <br />
          Let's explore two approaches to input validation: the naive way with
          multiple if-else statements and using the <strong>zod</strong> library
          for schema validation.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          1. Naive Way - Multiple If-Else Statements:
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`
const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || username.length < 3 ||
      !password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server is running on http://localhost:${PORT}'));
        `}
        </pre>
        <h2 className="text-2xl font-semibold mb-2">
          2. Using Zod Library for Schema Validation:
        </h2>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`
const express = require('express');
const { z } = require('zod');
const app = express();

app.use(express.json());

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  try {
    loginSchema.parse({ username, password });
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input.', details: error.errors });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server is running on http://localhost:${PORT}'));
        `}
        </pre>
        <h2 className="text-2xl font-semibold mb-2">Zod Syntax Overview:</h2>
        <div className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Zod Syntax Overview</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Basic Types:</h2>
            <p className="text-lg mb-2">
              Zod provides basic types such as string, number, boolean, null,
              undefined, etc.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const schema = z.string();`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Object Schema:</h2>
            <p className="text-lg mb-2">
              You can define the structure of an object using the{" "}
              <code>object</code> method and specify the shape of its
              properties.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nested Schemas:</h2>
            <p className="text-lg mb-2">
              You can nest schemas within each other to create more complex
              structures.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});

const userSchema = z.object({
  username: z.string(),
  address: addressSchema,
});`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Array Schema:</h2>
            <p className="text-lg mb-2">
              You can define the schema for arrays using the <code>array</code>{" "}
              method.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const numbersSchema = z.array(z.number());`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Union and Intersection Types:
            </h2>
            <p className="text-lg mb-2">
              Zod supports union and intersection types for more flexibility.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const numberOrStringSchema = z.union([z.number(), z.string()]);
const combinedSchema = z.intersection([userSchema, addressSchema]);`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Optional and Nullable:
            </h2>
            <p className="text-lg mb-2">
              You can make properties optional or nullable using{" "}
              <code>optional</code> and <code>nullable</code> methods.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const userSchema = z.object({
  username: z.string(),
  age: z.optional(z.number()),
  email: z.nullable(z.string()),
});`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Custom Validators:</h2>
            <p className="text-lg mb-2">
              Zod allows you to define custom validation logic using the{" "}
              <code>refine</code> method.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`const positiveNumberSchema = z.number().refine((num) => num > 0, {
  message: 'Number must be positive',
});`}
              </code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Parsing and Validation:
            </h2>
            <p className="text-lg mb-2">
              To validate and parse data, use the <code>parse</code> method. If
              the data is invalid, it throws an error with details about the
              validation failure.
            </p>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">
              <code className="text-gray-800">
                {`try {
  const userData = userSchema.parse({
    username: 'john_doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
    },
  });
  console.log('Parsed data:', userData);
} catch (error) {
  console.error('Validation error:', error.errors);
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Why Zod</h1>

        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong className="text-lg">TypeScript-First Approach:</strong>
            Zod is designed with TypeScript in mind, providing strong
            type-checking and autocompletion for your schemas.
          </li>
          <li>
            <strong className="text-lg">Concise and Expressive Syntax:</strong>
            Zod's syntax is concise and expressive, making it easy to define
            complex data structures with minimal code.
          </li>
          <li>
            <strong className="text-lg">Validation and Parsing:</strong>
            Zod not only validates data but also automatically parses it into
            the expected TypeScript types.
          </li>
          <li>
            <strong className="text-lg">Rich Set of Features:</strong>
            Zod includes a variety of features, such as custom validation,
            optional and nullable types, union and intersection types, making it
            a powerful tool for data validation in your applications.
          </li>
        </ul>

        <p className="mt-6 text-lg">
          Overall, Zod simplifies the process of declaring and validating data
          structures, reducing the likelihood of runtime errors and improving
          the overall robustness of your code.
        </p>
      </div>
      <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Understanding Asynchronous Concepts
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">The `fetch()` Method</h2>
          <p className="text-lg mb-4">
            The <code className="bg-gray-200 p-1 rounded">fetch()</code> method
            in JavaScript is a modern API for making network requests, primarily
            to retrieve data from a server. It returns a{" "}
            <strong>Promise</strong> that resolves to the <code>Response</code>{" "}
            to that request, whether it is successful or not.
          </p>

          <h3 className="text-xl font-semibold mb-2">Why is it Used?</h3>
          <ul className="list-disc list-inside space-y-4 mb-4">
            <li>
              <strong>Asynchronous Data Retrieval:</strong> Allows for
              non-blocking network requests, essential for responsive
              applications.
            </li>
            <li>
              <strong>Web API Interaction:</strong> Simplifies making HTTP
              requests to external services or APIs.
            </li>
            <li>
              <strong>Promise-Based:</strong> Makes handling asynchronous
              operations cleaner with <code>.then()</code> and{" "}
              <code>.catch()</code>.
            </li>
            <li>
              <strong>Flexible and Powerful:</strong> Supports various options
              like headers, request methods, and response types.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Basic Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`fetch('<https://api.example.com/data>')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(\`HTTP error! Status: \${response.status}\`);\n    }\n    return response.json();\n  })\n  .then(data => {\n    console.log('Data from server:', data);\n  })\n  .catch(error => {\n    console.error('Fetch error:', error);\n  });`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Some Asynchronous Concepts
          </h2>

          <h3 className="text-xl font-semibold mb-2">1. Callback Functions:</h3>
          <p className="text-lg mb-4">
            A callback function is passed as an argument to another function and
            executed after that function completes.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`function fetchData(callback) {\n  setTimeout(() => {\n    const data = 'Hello, callback!';\n    callback(data);\n  }, 1000);\n}\n\nfetchData(result => {\n  console.log(result);\n});`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">2. Promises:</h3>
          <p className="text-lg mb-4">
            A Promise represents the eventual completion or failure of an
            asynchronous operation, providing a structured way to handle
            asynchronous code.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`function fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const success = true;\n      if (success) {\n        const data = 'Hello, Promise!';\n        resolve(data);\n      } else {\n        reject('Oops! Something went wrong.');\n      }\n    }, 1000);\n  });\n}\n\nfetchData()\n  .then(result => {\n    console.log(result);\n  })\n  .catch(error => {\n    console.error(error);\n  });`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">3. Async/Await:</h3>
          <p className="text-lg mb-4">
            <code>async/await</code> is a syntax that makes working with
            Promises easier and more readable by allowing asynchronous code to
            be written in a synchronous style.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`async function fetchData() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const data = 'Hello, Async/Await!';\n      resolve(data);\n    }, 1000);\n  });\n}\n\nasync function fetchDataAndPrint() {\n  try {\n    const result = await fetchData();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\nfetchDataAndPrint();`}
            </code>
          </pre>
        </section>
      </div>{" "}
      <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Understanding Asynchronous Concepts
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">The `fetch()` Method</h2>
          <p className="text-lg mb-4">
            The <code className="bg-gray-200 p-1 rounded">fetch()</code> method
            in JavaScript is a modern API for making network requests. It
            returns a <strong>Promise</strong> that resolves to the{" "}
            <code>Response</code> to that request, whether it is successful or
            not.
          </p>

          <h3 className="text-xl font-semibold mb-2">Why is it Used?</h3>
          <ul className="list-disc list-inside space-y-4 mb-4">
            <li>
              <strong>Asynchronous Data Retrieval:</strong> Allows for
              non-blocking network requests, essential for responsive
              applications.
            </li>
            <li>
              <strong>Web API Interaction:</strong> Simplifies making HTTP
              requests to external services or APIs.
            </li>
            <li>
              <strong>Promise-Based:</strong> Makes handling asynchronous
              operations cleaner with <code>.then()</code> and{" "}
              <code>.catch()</code>.
            </li>
            <li>
              <strong>Flexible and Powerful:</strong> Supports various options
              like headers, request methods, and response types.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Basic Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`fetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(\`HTTP error! Status: \${response.status}\`);\n    }\n    return response.json();\n  })\n  .then(data => {\n    console.log('Data from server:', data);\n  })\n  .catch(error => {\n    console.error('Fetch error:', error);\n  });`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Some Asynchronous Concepts
          </h2>

          <h3 className="text-xl font-semibold mb-2">1. Callback Functions:</h3>
          <p className="text-lg mb-4">
            A callback function is passed as an argument to another function and
            executed after that function completes.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`function fetchData(callback) {\n  setTimeout(() => {\n    const data = 'Hello, Callback!';\n    callback(data);\n  }, 1000);\n}\n\nfetchData(result => {\n  console.log(result);\n});`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">2. Promises:</h3>
          <p className="text-lg mb-4">
            A Promise represents the eventual completion or failure of an
            asynchronous operation, providing a structured way to handle
            asynchronous code.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`function fetchDataPromise() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const data = 'Hello, Promise!';\n      resolve(data);\n    }, 1000);\n  });\n}\n\nfetchDataPromise()\n  .then(result => {\n    console.log(result);\n  })\n  .catch(error => {\n    console.error(error);\n  });`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">3. Async/Await:</h3>
          <p className="text-lg mb-4">
            <code>async/await</code> is a syntax that makes working with
            Promises easier and more readable by allowing asynchronous code to
            be written in a synchronous style.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`async function fetchDataAsyncAwait() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const data = 'Hello, Async/Await!';\n      resolve(data);\n    }, 1000);\n  });\n}\n\nasync function fetchDataAndPrint() {\n  try {\n    const result = await fetchDataAsyncAwait();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\nfetchDataAndPrint();`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Overall Relationship:</h3>
          <p className="text-lg mb-4">
            - Callbacks were the traditional way of handling asynchronous code.
            <br />
            - Promises introduced a more structured and readable way to handle
            async operations.
            <br />- <code>async/await</code> builds on top of Promises, offering
            a more synchronous coding style, making asynchronous code look
            similar to synchronous code.
          </p>

          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`function fetchData(callback) {\n  setTimeout(() => {\n    const data = 'Hello, Callback!';\n    callback(data);\n  }, 1000);\n}\n\nfunction fetchDataPromise() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const data = 'Hello, Promise!';\n      resolve(data);\n    }, 1000);\n  });\n}\n\nasync function fetchDataAsyncAwait() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const data = 'Hello, Async/Await!';\n      resolve(data);\n    }, 1000);\n  });\n}\n\n// Using callback\nfetchData(result => {\n  console.log(result);\n\n  // Using Promise\n  fetchDataPromise()\n    .then(result => {\n      console.log(result);\n\n      // Using Async/Await\n      fetchDataAsyncAwait()\n        .then(result => {\n          console.log(result);\n        })\n        .catch(error => {\n          console.error(error);\n        });\n    })\n    .catch(error => {\n      console.error(error);\n    });\n});`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Try-Catch Blocks</h2>
          <p className="text-lg mb-4">
            A <code>try-catch</code> block is a mechanism for handling
            exceptions or errors in a structured way. It allows developers to
            anticipate potential issues and implement a fallback strategy,
            preventing abrupt program termination.
          </p>

          <h3 className="text-xl font-semibold mb-2">Purpose:</h3>
          <p className="text-lg mb-4">
            The primary purpose of a <code>try-catch</code> block is to
            gracefully handle runtime errors or exceptions that may occur during
            the execution of a program. This prevents the program from crashing
            and allows for a controlled response to errors.
          </p>

          <h3 className="text-xl font-semibold mb-2">Syntax:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`try {\n  // Code that may throw an exception\n} catch (error) {\n  // Code to handle the exception\n}`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">How It Works:</h3>
          <ol className="list-decimal list-inside space-y-4 mb-4">
            <li>
              <strong>Execution in the Try Block:</strong> Code inside the{" "}
              <code>try</code> block is executed sequentially. If an exception
              occurs at any point, the normal flow of execution is interrupted.
            </li>
            <li>
              <strong>Control Transfer to Catch Block:</strong> When an
              exception is thrown, control is transferred to the corresponding{" "}
              <code>catch</code> block, where the <code>error</code> parameter
              holds information about the exception.
            </li>
            <li>
              <strong>Exception Handling:</strong> Inside the <code>catch</code>{" "}
              block, developers can implement error-handling logic, such as
              logging the error, displaying a user-friendly message, or taking
              alternative actions to recover from the error.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`try {\n  // Code that may throw an exception\n  const result = 10 / 0; // Division by zero, will throw an exception\n  console.log(result); // This line won't be executed\n} catch (error) {\n  // Code to handle the exception\n  console.error('An error occurred:', error.message); // Output: An error occurred: Cannot divide by zero\n} finally {\n  // Code inside the finally block will execute regardless of whether an exception occurred or not\n  console.log('Finally block executed');\n}`}
            </code>
          </pre>

          <p className="text-lg mb-4">
            - In this example, a division by zero operation inside the{" "}
            <code>try</code> block will throw an exception.
            <br />- The control is then transferred to the <code>
              catch
            </code>{" "}
            block, where an error message is logged.
            <br />- The <code>finally</code> block, if present, will always
            execute, providing an opportunity for cleanup or finalization tasks.
          </p>
        </section>
      </div>
      <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Authentication</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Hashing</h2>
          <p className="text-lg mb-4">
            Hashing is a one-way process that converts a password or any data
            into a fixed-size string of characters, which is typically a hash
            value. The primary purpose of hashing passwords before storing them
            in a database is to enhance security.
          </p>
          <p className="text-lg mb-4">
            When a user signs up and provides a password, the application hashes
            the password using a cryptographic hash function (e.g., bcrypt,
            SHA-256). The resulting hash is a fixed-length string unique to the
            input, making it difficult to reverse engineer the original
            password.
          </p>
          <p className="text-lg mb-4">
            Hashing prevents storing plaintext passwords in the database,
            reducing the risk of data breaches. Even if the database is
            compromised, attackers only obtain hashed values, which are
            challenging to convert back to the original passwords.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`const bcrypt = require('bcrypt');\n\n// Hashing a password\nconst plainPassword = 'user123';\nbcrypt.hash(plainPassword, 10, (err, hash) => {\n  if (err) throw err;\n  console.log('Hashed Password:', hash);\n\n  // Verify a password\n  bcrypt.compare('user123', hash, (err, result) => {\n    if (err) throw err;\n    console.log('Password Match:', result);\n  });\n});`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Encryption</h2>
          <p className="text-lg mb-4">
            Unlike hashing, encryption is a two-way process that involves
            converting data into a format that can be easily reversed using a
            decryption key. Encryption is used to protect the confidentiality of
            data.
          </p>
          <p className="text-lg mb-4">
            Users' sensitive information (e.g., credit card details) may be
            encrypted before storing it in a database. To view or use the
            original data, a decryption key is required.
          </p>
          <p className="text-lg mb-4">
            Encrypting sensitive data adds an extra layer of security. Even if
            unauthorized access occurs, the data remains unreadable without the
            decryption key.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`const crypto = require('crypto');\n\n// Encryption\nconst dataToEncrypt = 'Sensitive information';\nconst encryptionKey = 'secretKey';\nconst cipher = crypto.createCipher('aes-256-cbc', encryptionKey);\nlet encryptedData = cipher.update(dataToEncrypt, 'utf-8', 'hex');\nencryptedData += cipher.final('hex');\nconsole.log('Encrypted Data:', encryptedData);\n\n// Decryption\nconst decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);\nlet decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');\ndecryptedData += decipher.final('utf-8');\nconsole.log('Decrypted Data:', decryptedData);`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            3. JSON Web Tokens (JWT)
          </h2>
          <p className="text-lg mb-4">
            A JSON Web Token, or JWT, is like a digital passport for
            information. It's a special kind of code that carries details about
            a user or some data. Imagine you have a passport when you travel to
            different countries – the passport holds your information and proves
            who you are. Similarly, a JWT carries information and proves certain
            things about you or the data it holds.
          </p>
          <p className="text-lg mb-4">
            A JWT is made up of three parts, and they are separated by dots:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Header:</strong> This part says how the JWT is encoded
              (like secret coding instructions).
            </li>
            <li>
              <strong>Payload:</strong> This part holds the actual information
              or claims. For example, it might say who you are and when the JWT
              was created.
            </li>
            <li>
              <strong>Signature:</strong> This part ensures that the JWT hasn't
              been tampered with. It's like a seal that shows the information is
              genuine.
            </li>
          </ul>
          <p className="text-lg mb-4">
            When you put these parts together, you get a long string that looks
            like a secret code.
          </p>
          <p className="text-lg mb-4">JWTs work as follows:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              <strong>Getting the JWT:</strong> Imagine you log in to a website.
              After you enter your username and password, the website creates a
              JWT just for you.
            </li>
            <li>
              <strong>Using the JWT:</strong> Now, instead of asking you for
              your username and password every time you click on something, the
              website sends your JWT with each request. It's like having a
              special pass – once you show it, the website knows it's you.
            </li>
            <li>
              <strong>Checking the JWT:</strong> The website has a special key
              to check if the JWT is real. If everything is okay, the website
              knows the information in the JWT is trustworthy.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Local Storage</h2>
          <p className="text-lg mb-4">
            Local Storage is a client-side web storage mechanism that allows
            websites to store key-value pairs persistently on a user's device.
            In the realm of authentication, Local Storage often plays a crucial
            role in maintaining user sessions and preserving authentication
            tokens.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Technical Implementation:
          </h3>
          <ol className="list-decimal list-inside mb-4">
            <li>
              <strong>Token Storage:</strong> After a successful authentication,
              the server generates an authentication token (e.g., JWT) for the
              user. This token is securely stored in the Local Storage of the
              user's browser.
            </li>
            <li>
              <strong>Session Persistence:</strong> Local Storage provides a
              means to persistently store this token across browser sessions.
              This persistence ensures that the user remains authenticated even
              if they close the browser and return later.
            </li>
            <li>
              <strong>Reducing Authentication Overhead:</strong> Instead of
              requiring users to authenticate themselves on every interaction,
              the stored token allows the server to recognize and validate the
              user swiftly, enhancing the user experience.
            </li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">
            Benefits of Local Storage in Authentication:
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Efficient Session Management:</strong> Local Storage
              facilitates efficient session management by enabling the storage
              of authentication tokens client-side. This reduces the need for
              frequent server-side authentication checks.
            </li>
            <li>
              <strong>Improved Performance:</strong> Since authentication tokens
              are readily available locally, the authentication process becomes
              faster, contributing to an improved overall performance of the
              application.
            </li>
            <li>
              <strong>Enhanced User Experience:</strong> Users experience the
              convenience of being automatically recognized and authenticated
              without the hassle of repeated logins, contributing to a seamless
              and user-friendly interface.
            </li>
          </ul>
          <p className="text-lg mb-4">
            Local Storage serves as a valuable tool in the authentication
            landscape, contributing to efficient session management and enhanced
            user experiences. However, its use should be tempered with a keen
            awareness of security considerations, adherence to best practices,
            and a strategic approach to token management.
          </p>
        </section>
      </div>
      <div className="p-8 bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Authentication and Authorization
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Authorization Header</h2>
          <p className="text-lg mb-4">
            The Authorization header is a crucial component of HTTP requests
            that plays a key role in authenticating and authorizing users or
            clients to access certain resources on a server.
          </p>
          <p className="text-lg mb-4">
            The Authorization header is used to transmit credentials (such as
            tokens or API keys) from the client to the server. These credentials
            are then verified by the server to determine whether the client has
            the necessary permissions to access the requested resource.
          </p>
          <p className="text-lg mb-4">
            The Authorization header typically follows this basic structure:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`Authorization: <type> <credentials>`}
            </code>
          </pre>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Type:</strong> Specifies the type of credentials being
              sent. Common types include "Bearer" for token-based authentication
              and "Basic" for basic authentication.
            </li>
            <li>
              <strong>Credentials:</strong> The actual credentials, which could
              be a token, username and password combination, or other relevant
              information, depending on the chosen authentication type.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">
            Bearer Token Authentication Type:
          </h3>
          <p className="text-lg mb-4">
            Example:{" "}
            <code className="bg-gray-100 p-2 rounded-md">
              Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
            </code>
          </p>
          <h3 className="text-xl font-semibold mb-2">How it Works:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>
              <strong>Client Request:</strong> The client includes the
              Authorization header in an HTTP request when accessing a secured
              resource.
            </li>
            <li>
              <strong>Server Verification:</strong> The server receives the
              request and extracts the credentials from the Authorization
              header.
            </li>
            <li>
              <strong>Credential Verification:</strong> The server verifies the
              credentials, usually by checking against a user database,
              validating a token, or using other authentication mechanisms.
            </li>
            <li>
              <strong>Access Decision:</strong> Based on the verification
              result, the server decides whether to grant or deny access to the
              requested resource.
            </li>
          </ol>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`const axios = require('axios');\n\nconst url = 'https://api.example.com/resource';\nconst token = 'your-access-token';\n\naxios.get(url, {\n  headers: {\n    'Authorization': \`Bearer \${token}\`\n  }\n})\n  .then(response => console.log(response.data))\n  .catch(error => console.error('Error:', error));`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Cookies vs. Local Storage for Storing JWT Tokens
          </h2>
          <p className="text-lg mb-4">
            When it comes to storing JWT (JSON Web Tokens), both cookies and
            local storage are commonly used, but they have distinct
            characteristics and use cases. Here's a comparison to help you
            choose the appropriate option for your specific scenario:
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Cookies:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Security:</strong> Cookies can be more secure than local
              storage because they have an additional security feature called
              HTTP-only. When a cookie is marked as HTTP-only, it cannot be
              accessed by JavaScript, reducing the risk of cross-site scripting
              (XSS) attacks.
            </li>
            <li>
              <strong>Automatic Handling:</strong> Cookies are automatically
              sent with every HTTP request to the domain, including requests for
              images, stylesheets, and scripts. This automatic handling can be
              advantageous for authenticating API requests made by the browser.
            </li>
            <li>
              <strong>Expiration:</strong> Cookies can have an expiration date,
              allowing the server to set a specific duration for which the token
              is valid. After expiration, the browser automatically removes the
              cookie.
            </li>
            <li>
              <strong>Domain Restriction:</strong> Cookies can be set to be
              domain-restricted, meaning they are only sent to the server from
              the same domain that set the cookie. This provides a level of
              security.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. Local Storage:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ease of Use:</strong> Local storage is easier to use from
              a JavaScript perspective. You can set, get, and remove items
              directly using JavaScript without additional HTTP requests.
            </li>
            <li>
              <strong>Capacity:</strong> Local storage generally has a larger
              storage capacity compared to cookies.
            </li>
            <li>
              <strong>No Automatic Handling:</strong> Unlike cookies, local
              storage data is not automatically sent with every HTTP request.
              This means you need to manually attach the token to the headers of
              your API requests if you're using it for authentication.
            </li>
            <li>
              <strong>No Expiration Handling:</strong> Local storage does not
              provide built-in expiration handling. If you want to implement
              token expiration, you need to manage it manually in your code.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Choosing Between Cookies and Local Storage:
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>For Authentication:</strong> Use cookies with HTTP-only
              flag for enhanced security, especially if you need to make
              authenticated API requests directly from the browser.
            </li>
            <li>
              <strong>For Client-Side Interactions:</strong> Use local storage
              if you primarily need to access the token on the client side and
              manage API requests manually.
            </li>
            <li>
              <strong>Considerations:</strong> Consider factors like security,
              automatic handling, and token expiration requirements when making
              your decision.
            </li>
          </ul>
          <p className="text-lg mb-4">
            In many cases, a combination of both cookies and local storage might
            be used. Cookies can be employed for secure, HTTP-only storage,
            while local storage can be used for easy client-side access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">fetch() vs. axios()</h2>
          <p className="text-lg mb-4">
            Here’s a comparison between the `fetch()` API and Axios for making
            HTTP requests:
          </p>

          <h3 className="text-xl font-semibold mb-2">Fetch API</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Native Browser API:</strong> `fetch` is a native
              JavaScript function built into modern browsers for making HTTP
              requests.
            </li>
            <li>
              <strong>Promise-Based:</strong> It returns a Promise, allowing for
              a more modern asynchronous coding style with `async/await` or
              using `.then()`.
            </li>
            <li>
              <strong>Lightweight:</strong> `fetch` is lightweight and comes
              bundled with browsers, reducing the need for external
              dependencies.
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Axios</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>External Library:</strong> Axios is a standalone
              JavaScript library designed to work in both browsers and Node.js
              environments.
            </li>
            <li>
              <strong>Promise-Based:</strong> Similar to `fetch`, Axios also
              returns a Promise, providing a consistent interface for handling
              asynchronous operations.
            </li>
            <li>
              <strong>HTTP Request and Response Interceptors:</strong> Axios
              allows the use of interceptors, enabling the modification of
              requests or responses globally before they are handled by `then`
              or `catch`.
            </li>
            <li>
              <strong>Automatic JSON Parsing:</strong> Axios automatically
              parses JSON responses, simplifying the process compared to
              `fetch`.
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm">
              {`import axios from 'axios';\n\naxios.get('https://api.example.com/data')\n  .then(response => console.log(response.data))\n  .catch(error => console.error('Error:', error));`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Comparison Points</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Syntax:</strong> `fetch` uses a chain of `.then()` to
              handle responses, which might lead to a more verbose syntax.
              Axios, on the other hand, provides a concise syntax with `.then()`
              directly on the Axios instance.
            </li>
            <li>
              <strong>Handling HTTP Errors:</strong> Both `fetch` and Axios
              allow error handling using `.catch()` or `.finally()`, but Axios
              may provide more detailed error information by default.
            </li>
            <li>
              <strong>Interceptors:</strong> Axios provides a powerful feature
              with interceptors for both requests and responses, allowing global
              modifications. `fetch` lacks built-in support for interceptors.
            </li>
            <li>
              <strong>Request Configuration:</strong> Axios allows detailed
              configuration of requests through a variety of options. `fetch`
              may require more manual setup for headers, methods, and other
              configurations.
            </li>
            <li>
              <strong>JSON Parsing:</strong> Axios automatically parses JSON
              responses, while with `fetch`, you need to manually call `.json()`
              on the response.
            </li>
            <li>
              <strong>Browser Support:</strong> `fetch` is natively supported in
              modern browsers, but if you need to support older browsers, you
              might need a polyfill. Axios has consistent behavior across
              various browsers and does not rely on native implementations.
            </li>
            <li>
              <strong>Size:</strong> `fetch` is generally considered
              lightweight, being a part of the browser. Axios, being a separate
              library, introduces an additional file size to your project.
            </li>
          </ul>
          <p className="text-lg mb-4">
            In summary, both `fetch` and Axios have their strengths, and the
            choice depends on the specific requirements and preferences of the
            project. `fetch` is excellent for simplicity and lightweight
            projects, while Axios provides additional features and consistent
            behavior across different environments.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Middlewares;
