import React from "react";
import "tailwindcss/tailwind.css";

const expressServer = () => {
  const notesContent = `
# Express Server

## Create a simple express server

1. **Express Framework:**
    - **Purpose:** Express is a web application framework for Node.js, designed to simplify the process of building web applications and APIs.
    - **Routing:** Express provides a powerful routing mechanism that allows you to define how your application responds to different HTTP requests (e.g., GET, POST).
    
2. **HTTP Methods:**
    - **GET:** Used to retrieve data from the server. Typically used for reading information.
    - **POST:** Used to submit data to the server. Often used for creating or updating resources.
    - **Other Methods (PUT, DELETE, etc.):** Used for various purposes, such as updating or deleting resources.
    
3. **Routes:**
    - **Definition:** Routes define the paths in your application and the HTTP methods they respond to.
    - **Parameters:** Routes can have parameters that allow dynamic handling of different values.
    
4. **Request and Response Objects:**
    - **Request (\`req\`):** Represents the incoming HTTP request from the client. Contains information about the request, such as parameters, headers, and body.
    - **Response (\`res\`):** Represents the outgoing HTTP response to be sent back to the client. Allows you to send data, set headers, and more.
    
    1. **Listening and Ports:**
    - **Server Creation:** After defining routes and middleware, the Express application needs to be "listened" to for incoming requests.
    - **Port:** The server listens on a specific port (e.g., 3000) for incoming HTTP requests.

\`\`\`jsx
//server.js
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, this is the root/main route!');
});

// Define another route for "/api" with JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'This is the API route.' });
});

// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(\`Hello, \${name}!\`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
\`\`\`

## Run the server

\`\`\`bash
node server.js
\`\`\`

Visit \`http://localhost:3000\` in your browser, and you should see the response from the root route. You can also try accessing other defined routes (\`/api\`, \`/greet/:name\`).
`;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: notesContent.replace(/\n/g, "<br>"),
          }}
        />
      </article>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Nodemon</h1>

          <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-200 pb-2">
            Use Nodemon to Auto Restart
          </h2>
          <p>
            Nodemon is a utility that monitors for changes in your source code
            and automatically restarts the server when changes are detected. To
            use Nodemon, you'll need to install it globally or locally in your
            project, and then you can start your server with Nodemon.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            To Install Nodemon Globally
          </h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <code>npm install -g nodemon</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            To Install Locally in Project
          </h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <code>npm install --save-dev nodemon</code>
          </pre>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            Use Nodemon to Start Your Server
          </h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <code>nodemon server.js</code>
          </pre>

          <p>
            With Nodemon, you can focus on your code, and the tool will take
            care of restarting your server whenever you make changes, making the
            development process smoother.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Difference between GET and POST
          </h1>

          <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-200 pb-2">
            GET
          </h2>
          <p>
            <strong>Purpose:</strong> <br />
            <span className="font-medium">GET</span> is used to request data
            from a specified resource. It is designed to retrieve information
            and should have no other effect.
          </p>
          <p>
            <strong>Data Submission:</strong> <br />
            Data is appended to the URL as query parameters. Limited amount of
            data can be sent because data is included in the URL, and URLs have
            a maximum length.
          </p>
          <p>
            <strong>Visibility:</strong> <br />
            Parameters are visible in the URL, which can impact security when
            dealing with sensitive information.
          </p>
          <p>
            <strong>Caching:</strong> <br />
            Requests can be cached by the browser, and URLs can be bookmarked.
            It is idempotent, meaning multiple identical requests will have the
            same effect as a single request.
          </p>
          <p>
            <strong>Examples:</strong> <br />
            Reading a blog post, searching on Google, fetching data from an API.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-200 pb-2">
            POST
          </h2>
          <p>
            <strong>Purpose:</strong> <br />
            <span className="font-medium">POST</span> is used to submit data to
            be processed to a specified resource. It can be used to create or
            update a resource on the server.
          </p>
          <p>
            <strong>Data Submission:</strong> <br />
            Data is sent in the request body, not in the URL. Can send a large
            amount of data compared to GET.
          </p>
          <p>
            <strong>Visibility:</strong> <br />
            Parameters are not visible in the URL, enhancing security.
          </p>
          <p>
            <strong>Caching:</strong> <br />
            Requests are not cached by the browser, and URLs cannot be
            bookmarked. It is not idempotent; multiple identical requests may
            have different effects.
          </p>
          <p>
            <strong>Examples:</strong> <br />
            Submitting a form, uploading a file, making a payment.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-200 pb-2">
            When to Use Each
          </h2>
          <p>
            <strong>GET:</strong> Use when you want to retrieve data from the
            server, and the request has no side effects. It's suitable for safe
            and idempotent operations.
          </p>
          <p>
            <strong>POST:</strong> Use when you want to submit data to the
            server, especially when the operation has side effects (e.g.,
            creating a new resource on the server). It's suitable for
            non-idempotent operations.
          </p>

          <p>
            In summary, the choice between GET and POST depends on the purpose
            of the request and the type of operation you are performing.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Handling GET Requests</h1>
          <p>
            Handling GET requests in an Express.js application involves defining
            routes that respond to GET HTTP requests. Here's a basic example of
            handling a GET request in an Express.js application:
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`// Define a simple GET route\n`}
              {`app.get('/', (req, res) => {\n`}
              {`  res.send('Hello, this is a GET request!');\n`}
              {`});\n\n`}
              {`// Define a route with a parameter\n`}
              {`app.get('/greet/:name', (req, res) => {\n`}
              {`  const { name } = req.params;\n`}
              {`  res.send(\`Hello, \${name}!\`);\n`}
              {`});\n\n`}
              {`// Start the server\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:\${port}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <p>In this example:</p>
          <ul className="list-disc ml-6">
            <li>
              We create an instance of the Express application using{" "}
              <code>express()</code>.
            </li>
            <li>
              We define a simple GET route for the root URL (<code>'/'</code>)
              that responds with a message.
            </li>
            <li>
              We define another GET route with a parameter (
              <code>'/greet/:name'</code>) that responds with a personalized
              greeting based on the parameter.
            </li>
            <li>
              We start the server with <code>app.listen</code> on port 3000.
            </li>
          </ul>

          <p>
            When you run this script (<code>node filename.js</code>) and visit{" "}
            <code>http://localhost:3000</code> in your browser, you should see
            the response from the root route. Additionally, visiting{" "}
            <code>http://localhost:3000/greet/John</code> should display a
            personalized greeting for the name "John."
          </p>

          <p>
            This is a basic example, and in a real-world application, you would
            likely have more complex routes and logic. Express provides a
            flexible and powerful routing system, allowing you to handle
            different HTTP methods, route parameters, query parameters, and
            more.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Handling POST Requests</h1>
          <p>
            When building web applications, it's common to use HTTP POST
            requests to send data from the client (e.g., a form submission) to
            the server. In Express.js, handling POST requests involves using
            middleware to parse the incoming data and defining route handlers to
            process the data accordingly.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            Middleware for Parsing JSON and Form Data:
          </h2>
          <p>
            Before handling POST requests, it's important to include middleware
            to parse the incoming data. Express provides built-in middleware for
            handling JSON and form data. Add the following middleware to your
            Express app:
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`// Middleware to parse JSON and form data\n`}
              {`app.use(express.json());\n`}
              {`app.use(express.urlencoded({ extended: true }));\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            Handling a POST Request:
          </h2>
          <p>
            To handle POST requests, define a route and process the incoming
            data. Here's an example:
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`// In-memory array to store text content\n`}
              {`const textContent = [];\n\n`}
              {`// Route to handle POST requests for adding text content\n`}
              {`app.post('/add-content', (req, res) => {\n`}
              {`  // Extract text content from the request body\n`}
              {`  const newContent = req.body.content;\n\n`}
              {`  // Validate the content (you might want to add more robust validation)\n`}
              {`  if (!newContent) {\n`}
              {`    // if there is an error it will send the code 400 and an error\n`}
              {`    return res.status(400).json({ error: 'Content is required' });\n`}
              {`  }\n\n`}
              {`  // Add the content to the in-memory array\n`}
              {`  textContent.push(newContent);\n\n`}
              {`  // Respond with a success message\n`}
              {`  res.status(201).json({ message: 'Content added successfully' });\n`}
              {`});\n`}
            </code>
          </pre>

          <p>In this example:</p>
          <ul className="list-disc ml-6">
            <li>Middleware is used to parse JSON and form data.</li>
            <li>
              A route is defined to handle POST requests, extract and validate
              content from the request body.
            </li>
            <li>
              The content is added to an in-memory array and a success message
              is sent as the response.
            </li>
          </ul>

          <p>
            This setup allows you to handle POST requests effectively, process
            incoming data, and provide appropriate responses. In a real-world
            application, you would typically use a database instead of an
            in-memory array to store and manage data.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Serving Different Routes</h1>
          <p>
            Use the <code>app</code> object to define routes for different URLs.
            Routes are defined using HTTP methods (such as <code>GET</code>,{" "}
            <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, etc.) and
            specify a callback function that gets executed when a request
            matches the specified URL and method.
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`// GET route\n`}
              {`app.get('/', (req, res) => {\n`}
              {`  res.send('Hello from GET route!');\n`}
              {`});\n\n`}
              {`// POST route\n`}
              {`app.post('/add', (req, res) => {\n`}
              {`  res.send('Hello from POST route!');\n`}
              {`});\n\n`}
              {`// PUT route - updation\n`}
              {`app.put('/put/:id', (req, res) => {\n`}
              {`  res.send('Hello from PUT route!');\n`}
              {`});\n\n`}
              {`// DELETE route\n`}
              {`app.delete('/delete/:id', (req, res) => {\n`}
              {`  res.send('Hello from DELETE route!');\n`}
              {`});\n\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <p>In this example:</p>
          <ul className="list-disc pl-5">
            <li>
              <code>app.get</code> defines a route for handling <code>GET</code>{" "}
              requests at the root URL.
            </li>
            <li>
              <code>app.post</code> defines a route for handling{" "}
              <code>POST</code> requests at the <code>/add</code> URL.
            </li>
            <li>
              <code>app.put</code> defines a route for handling <code>PUT</code>{" "}
              requests with an <code>id</code> parameter.
            </li>
            <li>
              <code>app.delete</code> defines a route for handling{" "}
              <code>DELETE</code> requests with an <code>id</code> parameter.
            </li>
          </ul>

          <p>
            This setup allows you to handle different HTTP methods and routes
            effectively, providing the necessary responses based on the type of
            request and URL.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Understanding ENV Variables
          </h1>

          <p>
            To start your Express application on a port defined by an
            environment variable, follow these steps:
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Install dotenv Package
          </h2>
          <p>
            Install the <code>dotenv</code> package using npm. This package
            allows you to load environment variables from a file.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>npm install dotenv</code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">2. Create a .env File</h2>
          <p>
            Create a file named <code>.env</code> in the root of your project.
            This file will contain your environment variables. Add a variable
            for the port, for example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>PORT=3000</code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">
            3. Load Environment Variables in Your Express App
          </h2>
          <p>
            In your main Express application file (e.g., <code>app.js</code> or{" "}
            <code>index.js</code>), load the environment variables using{" "}
            <code>dotenv</code>. Add the following lines at the top of your
            file:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`require('dotenv').config();\n`}
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = process.env.PORT || 3000;\n\n`}
              {`// Rest of your Express app code...\n\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">
            4. Run Your Express App
          </h2>
          <p>Run your Express application using Node.js:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>node app.js</code>
          </pre>

          <p>
            By following these steps, you can configure your Express application
            to use environment variables for setting the port and other
            configurations.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Parsing Body in POST Requests
          </h1>

          <p>
            To parse the body of a POST request in an Express application, you
            can use middleware to handle different types of data formats, such
            as JSON or form data. Express provides built-in middleware for
            parsing JSON and form data.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Middleware for Parsing JSON and Form Data
          </h2>
          <p>
            Use the following middleware to parse JSON and form data in your
            Express app:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`// Middleware to parse JSON data\n`}
              {`app.use(express.json());\n\n`}
              {`// Middleware to parse form data\n`}
              {`app.use(express.urlencoded({ extended: true }));\n\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">
            2. Handling POST Requests
          </h2>
          <p>Define POST routes to handle both JSON and form data:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`// POST route to handle form data\n`}
              {`app.post('/form', (req, res) => {\n`}
              {`  const formData = req.body;\n`}
              {`  res.json({ receivedData: formData });\n`}
              {`});\n\n`}
              {`// POST route to handle JSON data\n`}
              {`app.post('/json', (req, res) => {\n`}
              {`  const jsonData = req.body;\n`}
              {`  res.json({ receivedData: jsonData });\n`}
              {`});\n\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">3. Starting the Server</h2>
          <p>Start your Express server to listen on a specific port:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <p>
            With these steps, your Express application will be able to handle
            POST requests with both JSON and form data, parsing the request body
            and responding accordingly.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Parsing Headers in GET Requests
          </h1>

          <p>
            In an Express.js application, you can access headers sent with a GET
            request through the <code>req.headers</code> object in the route
            handler. This object contains all the headers sent by the client,
            and you can extract and use specific headers as needed.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Accessing Headers</h2>
          <p>
            You can access specific headers from <code>req.headers</code> and
            use them as needed in your application. Here is a basic example of
            how to handle headers in a GET request:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`app.get('/get-info', (req, res) => {\n`}
              {`  // Access headers from req.headers\n`}
              {`  const userAgent = req.headers['user-agent'];\n`}
              {`  const acceptLanguage = req.headers['accept-language'];\n\n`}
              {`  res.json({\n`}
              {`    userAgent,\n`}
              {`    acceptLanguage,\n`}
              {`  });\n`}
              {`});\n\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">2. Explanation</h2>
          <p>In the example above:</p>
          <ul className="list-disc pl-6">
            <li>
              We define a GET route <code>/get-info</code> that extracts headers
              from <code>req.headers</code>.
            </li>
            <li>
              We specifically access the <code>User-Agent</code> and{" "}
              <code>Accept-Language</code> headers.
            </li>
            <li>The headers are sent back in the response as a JSON object.</li>
          </ul>

          <p>
            You can use this method to handle and utilize different headers
            based on your application's requirements.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Parsing Query Parameters in Express
          </h1>

          <p>
            In an Express.js application, query parameters can be accessed from
            the URL using the <code>req.query</code> object. Query parameters
            are included in the URL after the <code>?</code> character and are
            separated by <code>&</code>.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Example of Parsing Query Parameters
          </h2>
          <p>
            Here is a simple example demonstrating how to handle query
            parameters in a GET request:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`app.get('/api/user', (req, res) => {\n`}
              {`  // Access query parameters from req.query\n`}
              {`  const userId = req.query.id;\n`}
              {`  const name = req.query.name;\n\n`}
              {`  // Process the parameters as needed\n`}
              {`  const user = {\n`}
              {`    id: userId,\n`}
              {`    name: name,\n`}
              {`  };\n\n`}
              {`  // Send a JSON response with the parsed parameters\n`}
              {`  res.json({ user });\n`}
              {`});\n\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">2. Explanation</h2>
          <p>In the example above:</p>
          <ul className="list-disc pl-6">
            <li>
              We define a GET route <code>/api/user</code> that extracts query
              parameters from <code>req.query</code>.
            </li>
            <li>
              We specifically access the <code>id</code> and <code>name</code>{" "}
              query parameters.
            </li>
            <li>
              The extracted parameters are used to create a <code>user</code>{" "}
              object, which is then sent back in the response as a JSON object.
            </li>
          </ul>

          <p>
            Query parameters are useful for passing additional information in a
            URL without changing the route itself.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Sending JSON Response in Express
          </h1>

          <p>
            In an Express.js application, you can send a JSON response using the{" "}
            <code>res.json()</code> method. This method automatically sets the
            appropriate <code>Content-Type</code> header to{" "}
            <code>application/json</code> and sends the JSON-formatted response
            to the client.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Example of Sending a JSON Response
          </h2>
          <p>
            Here is a simple example demonstrating how to send a JSON response:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>
              {`const express = require('express');\n`}
              {`const app = express();\n`}
              {`const port = 3000;\n\n`}
              {`app.get('/get-json', (req, res) => {\n`}
              {`  // Create an object to be sent as JSON\n`}
              {`  const responseData = {\n`}
              {`    message: 'This is a JSON response',\n`}
              {`    data: {\n`}
              {`      key1: 'value1',\n`}
              {`      key2: 'value2',\n`}
              {`    },\n`}
              {`  };\n\n`}
              {`  // Send the JSON response\n`}
              {`  res.json(responseData);\n`}
              {`});\n\n`}
              {`app.listen(port, () => {\n`}
              {`  console.log(\`Server is running on http://localhost:${"{"}port{'}'}\`);\n`}
              {`});\n`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6">2. Explanation</h2>
          <p>In the example above:</p>
          <ul className="list-disc pl-6">
            <li>
              We define a GET route <code>/get-json</code> that creates an
              object <code>responseData</code> to be sent as JSON.
            </li>
            <li>
              The <code>res.json()</code> method sends the{" "}
              <code>responseData</code> object as a JSON response.
            </li>
            <li>
              Express automatically sets the <code>Content-Type</code> header to{" "}
              <code>application/json</code> for this response.
            </li>
          </ul>

          <p>
            Sending JSON responses is commonly used to provide structured data
            in web APIs and applications.
          </p>
        </article>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Essential Git Commands</h1>

          <p>
            To get updated assignments from the original repository while
            preserving your existing changes, follow these essential Git
            commands:
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <span className="font-semibold">
                Add the Original Repository as Upstream:
              </span>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">
                <code>
                  git remote add upstream &lt;original-assignment URL&gt;
                </code>
              </pre>
              <p>
                This command adds the original repository as a remote named{" "}
                <code>upstream</code>.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Fetch Changes from Upstream:
              </span>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">
                <code>git fetch upstream</code>
              </pre>
              <p>
                This command fetches the latest changes from the upstream
                repository.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Merge Changes from Upstream:
              </span>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">
                <code>git merge upstream/master</code>
              </pre>
              <p>
                This command merges the changes from the upstream{" "}
                <code>master</code> branch into your current branch.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Rebase Your Changes on Top of Upstream:
              </span>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">
                <code>git rebase upstream/master</code>
              </pre>
              <p>
                This command rebases your current branch on top of the upstream{" "}
                <code>master</code> branch.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Push Your Changes to Origin:
              </span>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">
                <code>git push -f origin HEAD</code>
              </pre>
              <p>
                This command forcefully pushes your rebased changes to your
                remote repository.
              </p>
            </li>
          </ol>

          <p>
            Following these steps will ensure that you stay updated with the
            latest changes from the original repository while keeping your own
            modifications intact.
          </p>
        </article>
      </div>
    </div>
  );
};

export default expressServer;
