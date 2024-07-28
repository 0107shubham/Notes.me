import React from "react";

const sampleCode = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Express Server Code</h1>

        <h2 className="text-2xl font-bold mb-4">Server Setup /api/index.js</h2>

        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`import express from "express";
import route from "../Route/routes.js"; // Updated import statement
const app = express();
import cors from "cors";

const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World for shbham!");
});
app.get("/status", (req, res) => {
  res.send("Hello, World for status!");
});
app.get("/status:name", (req, res) => {
  const { name } = req.params;

  res.send(\`name, \${name}!\`);
});
// app.post("/user", (req, res) => {
//   const { user, password } = req.body;

//   res.json({ message: "working", data: { user, password } });
//   console.log(user, "username");
// });

app.use("/", route);

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});

export default app;`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold mb-4">Prisma Client Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        {`import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function User(req, res) {
  try {
    const { name, email, password } = req.body;

    console.log("User creation started");
    const start = Date.now();

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const end = Date.now();
    console.log(\`User created in \${end - start}ms\`);

    // Return a success response
    return res.json({
      message: "success",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Return an error response
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}`}
      </pre>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Express Route Code /Route</h1>

        <h2 className="text-2xl font-bold mb-4">Route Definition</h2>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`import express from "express";
const route = express.Router();
import { User } from "../controller/user.js";

route.post("/user", User);

export default route;`}
        </pre>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Prisma Schema Code</h1>

        <h2 className="text-2xl font-bold mb-4">Prisma Client Generator</h2>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`generator client {
  provider = "prisma-client-js"
}`}
        </pre>

        <h2 className="text-2xl font-bold mb-4">Datasource Configuration</h2>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}`}
        </pre>

        <h2 className="text-2xl font-bold mb-4">User Model</h2>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  name     String
  email    String
  password String
  Post     Post[]

  @@unique([email])
}`}
        </pre>

        <h2 className="text-2xl font-bold mb-4">Post Model</h2>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          {`model Post {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String?
  status      String
  author      User     @relation(fields: [authorId], references: [id])
  priority    String
  deadline    DateTime
  authorId    String   @db.ObjectId
}`}
        </pre>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Vercel Configuration / vercel.json
        </h1>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>
            {`
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [{ "src": "/(.*)", "dest": "api/index.js" }]
}
          `}
          </code>
        </pre>
      </div>

      <pre className="bg-gray-800 text-white p-4 rounded">
        <code>
          {` .env///
DATABASE_URL="mongodb+srv://shubhamtyagilncte:hgPPaKOqKn6PtMqL@cluster0.9n0qzyu.mongodb.net/trelloy?retryWrites=true&w=majority&appName=Cluster0"

PORT:3000
NAME=Express
          `}
        </code>
      </pre>
    </div>
  );
};

export default sampleCode;
