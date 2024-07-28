import React from "react";

const Prisma = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Understanding Prisma</h1>
        <p className="mb-4">
          In today's lecture, Harkirat provides an insightful overview of{" "}
          <code>Prisma</code>, discussing the role of{" "}
          <code>Object-Relational Mapping (ORM)</code> systems and how Prisma
          serves as a powerful ORM for modern application development.
        </p>
        <p className="mb-4">
          The session later explores the use of Prisma with various databases,
          the functionality of the <code>Prisma Client</code>, and culminated in
          a hands-on demonstration of{" "}
          <code>creating a first application using Prisma</code> showcasing its
          ease of use and versatility in managing database operations.
        </p>

        <h2 className="text-2xl font-bold mb-4">ORMs</h2>
        <p className="mb-4">
          Object-Relational Mapping (ORM) is a crucial concept in modern
          software development, particularly when dealing with databases in
          object-oriented programming languages. Prisma is an ORM that
          exemplifies the use of this technique. Here's an elaboration on ORMs,
          with a focus on how Prisma fits into this context:
        </p>

        <img
          src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/fb396a8a-5a2f-47e3-8c4c-eb5857b70643/Untitled.png"
          alt="ORM Diagram"
          className="w-full mb-4"
        />

        <h3 className="text-xl font-bold mb-2">What are ORMs?</h3>
        <h4 className="text-lg font-semibold mb-2">Official Definition</h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>ORM</strong>: Object-Relational Mapping is a programming
            technique for converting data between incompatible systems using
            object-oriented programming languages. It creates a "virtual object
            database" that developers can interact with using their programming
            language instead of direct database queries.
          </li>
          <li>
            <strong>Abstraction</strong>: ORMs abstract the complexities of the
            database, allowing developers to work with database records as if
            they were objects in their code. This includes handling CRUD
            operations (Create, Read, Update, Delete) and managing database
            connections and transactions.
          </li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Simplified Definition</h4>
        <p className="mb-4">
          <strong>Ease of Use</strong>: ORMs simplify database interactions by
          letting developers use the syntax and paradigms of their programming
          language rather than writing SQL queries. This can make code more
          readable and maintainable.
        </p>

        <h3 className="text-xl font-bold mb-2">Prisma as an ORM</h3>
        <p className="mb-4">
          Prisma is a next-generation ORM that takes the concept of ORMs further
          by providing additional tools and features that enhance the developer
          experience:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Schema Definition</strong>: Prisma uses a declarative Prisma
            schema to define the application's data model. This schema is used
            to generate a Prisma Client that provides type-safe database access.
          </li>
          <li>
            <strong>Migrations</strong>: Prisma Migrate allows developers to
            define and perform database schema migrations in a controlled and
            versioned manner.
          </li>
          <li>
            <strong>Type Safety</strong>: Prisma ensures type safety by
            generating a client that is tailored to the schema, reducing the
            risk of runtime errors due to mismatched data types.
          </li>
          <li>
            <strong>Query Building</strong>: Prisma Client provides a fluent API
            for building queries, which can be more intuitive than writing raw
            SQL, especially for complex queries.
          </li>
          <li>
            <strong>Performance</strong>: Prisma is designed to be performant
            and efficient, with a focus on minimizing the overhead typically
            associated with ORMs.
          </li>
        </ul>

        <blockquote className="italic border-l-4 border-gray-500 pl-4 mb-4">
          ORMs, including Prisma, offer a high-level abstraction over database
          interactions, making it easier for developers to work with data in the
          context of their applications.
        </blockquote>

        <h2 className="text-2xl font-bold mb-4">Why ORMs?</h2>
        <p className="mb-4">
          Object-Relational Mapping (ORM) frameworks provide a bridge between
          the object-oriented world of application development and the
          relational world of databases. They offer several advantages that make
          them an attractive choice for developers. Let's delve into these
          benefits with explanations and code snippets to illustrate their
          impact.
        </p>

        <h3 className="text-xl font-bold mb-2">1. Simpler Syntax</h3>
        <p className="mb-4">
          ORMs allow developers to work with high-level programming constructs
          instead of writing SQL queries directly. This means you can manipulate
          database entries using objects and methods in your programming
          language.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">Without ORM: SQL Query</p>
          <pre>
            <code>
              INSERT INTO users (name, email) VALUES ('John Doe',
              'john@example.com');
            </code>
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">
            With ORM: Object Manipulation (Example in JavaScript using Prisma)
          </p>
          <pre>
            <code>
              {`await prisma.users.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
  },
});`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">2. Database Abstraction</h3>
        <p className="mb-4">
          ORMs provide a unified API to interact with different databases,
          making it easier to switch databases if needed without rewriting your
          data access layer.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">
            Prisma Example: The same Prisma client code works across different
            databases. Switching from PostgreSQL to MySQL, for instance,
            primarily requires changes in the configuration, not in the code
            that interacts with the database.
          </p>
          <pre>
            <code>
              {`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}`}
            </code>
          </pre>
          <pre>
            <code>
              {`datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">
          3. Type Safety/Auto-completion
        </h3>
        <p className="mb-4">
          Modern ORMs, especially those used in statically typed languages or
          with TypeScript support, offer type safety and auto-completion,
          reducing runtime errors and improving developer productivity.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">
            TypeScript Example with Prisma: When you query the database, the
            Prisma client provides auto-completion for table names and columns,
            and the returned data is automatically typed.
          </p>
          <pre>
            <code>
              {`// TypeScript understands the structure of the expected result,
// providing auto-completion and type checking
const user = await prisma.user.findUnique({
  where: {
    email: 'john@example.com',
  },
});`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">4. Automatic Migrations</h3>
        <p className="mb-4">
          ORMs can automate the process of generating and applying database
          schema migrations, making it easier to evolve your database schema as
          your application grows.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">
            Prisma Migration Example: Prisma Migrate generates SQL migration
            files for your schema changes, which can be applied to update the
            database schema.
          </p>
          <p className="font-mono mb-2">Generate Migration</p>
          <pre>
            <code>npx prisma migrate dev --name add_phone_number</code>
          </pre>
          <p className="font-mono mb-2">
            This command might generate a SQL file similar to:
          </p>
          <pre>
            <code>
              {`-- Migration SQL generated by Prisma Migrate
ALTER TABLE "users"
ADD COLUMN "phone_number" VARCHAR(15);`}
            </code>
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Prisma</h1>
        <p className="mb-4">
          Prisma is a next-generation ORM (Object-Relational Mapping) tool for
          Node.js and TypeScript applications. It simplifies database workflows
          by providing a robust set of features that enhance developer
          productivity and code quality. Let's delve into the core components
          that make Prisma a powerful tool for modern application development.
        </p>

        <img
          src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/1b691f2a-30cb-466f-b685-147394d18c0b/Untitled.png"
          alt="Prisma Overview"
          className="w-full mb-4"
        />

        <h2 className="text-2xl font-bold mb-4">1. Data Model</h2>
        <p className="mb-4">
          Prisma uses a Prisma Schema file to define the data model of your
          application. This schema acts as a single source of truth for your
          database structure, including tables, columns, relationships, and
          more. The Prisma Schema Language (PSL) is intuitive yet powerful,
          allowing you to define your database schema in a clear and concise
          manner.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">Example Prisma Schema:</p>
          <pre>
            <code>
              {`// schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          This schema defines two models, <code>User</code> and{" "}
          <code>Post</code>, representing tables in the database. It specifies
          fields for each table, their types, and the relationship between users
          and posts.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Automated Migrations</h2>
        <p className="mb-4">
          Prisma Migrate is a feature that automatically generates and runs
          database migrations based on changes to your Prisma schema. This means
          that when you modify your data model, Prisma Migrate can automatically
          update your database schema to match, without the need for manual SQL
          migration scripts.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">Generating and Applying Migrations:</p>
          <pre>
            <code>{`npx prisma migrate dev --name init`}</code>
          </pre>
        </div>

        <p className="mb-4">
          This command generates SQL migration files for the current state of
          your Prisma schema and applies them to your database, creating or
          altering tables and relationships as defined.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Type Safety</h2>
        <p className="mb-4">
          Prisma Client is a type-safe database client generated based on your
          Prisma schema. This means that every database query you write is
          checked against the schema, significantly reducing the risk of runtime
          errors due to data type mismatches. The client provides full
          auto-completion and type checking in supported editors, making it
          easier to write and refactor code confidently.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">Example Usage of Prisma Client:</p>
          <pre>
            <code>
              {`import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(newUser);
}

main();`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">4. Auto-Completion</h2>
        <p className="mb-4">
          Prisma's integration with code editors (such as VSCode) provides
          auto-completion for model fields, operations, and even potential query
          results. This feature not only speeds up development but also helps
          prevent errors by ensuring that your queries align with the defined
          schema.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-mono mb-2">Auto-Completion Example:</p>
          <pre>
            <code>
              {`// When writing queries with Prisma Client, your editor can suggest model fields, available methods, and more, based on the Prisma schema.`}
            </code>
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Installing Prisma</h1>
        <p className="mb-4">
          Creating a simple TODO app with Prisma in a Node.js environment
          involves several steps, from initializing your Node.js project to
          setting up Prisma. Here's a detailed guide to get you started:
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 1: Initialize an Empty Node.js Project
        </h2>
        <p className="mb-4">
          First, create a new directory for your project and navigate into it.
          Then, initialize a new Node.js project:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`mkdir todo-app
cd todo-app
npm init -y`}
            </code>
          </pre>
        </div>
        <p className="mb-4">
          This command creates a <code>package.json</code> file with default
          values.
        </p>

        <h2 className="text-2xl font-bold mb-4">Step 2: Add Dependencies</h2>
        <p className="mb-4">
          Install Prisma, TypeScript, ts-node (for running TypeScript files
          directly), and @types/node (for Node.js type definitions) as
          development dependencies:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`npm install prisma typescript ts-node @types/node --save-dev`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Step 3: Initialize TypeScript
        </h2>
        <p className="mb-4">Set up TypeScript in your project:</p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>{`npx tsc --init`}</code>
          </pre>
        </div>
        <p className="mb-4">
          This command creates a <code>tsconfig.json</code> file, which
          configures TypeScript options.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 4: Configure TypeScript
        </h2>
        <p className="mb-4">
          Edit the <code>tsconfig.json</code> file to specify the root directory
          and the output directory for the compiled JavaScript files:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Step 5: Initialize a Fresh Prisma Project
        </h2>
        <p className="mb-4">Initialize Prisma in your project:</p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>{`npx prisma init`}</code>
          </pre>
        </div>
        <p className="mb-4">This command performs several actions:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Creates a <code>prisma</code> directory with a{" "}
            <code>schema.prisma</code> file inside. This is where you define
            your database schema.
          </li>
          <li>
            Creates a <code>.env</code> file in the root of your project. This
            is where you set environment variables, such as your database
            connection string.
          </li>
        </ul>
        <img
          src="https://prod-files-secure.s3.us-west-2.amazonaws.com/dd624914-6876-4b58-9694-424f7aa5e22a/87101674-4129-4d54-8a81-a8154aeaeab2/Untitled.png"
          alt="Prisma Init Output"
          className="w-full mb-4"
        />

        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="mb-4">
          After initializing Prisma, you can proceed to define your database
          schema in the <code>schema.prisma</code> file. For a TODO app, you
          might define a <code>Todo</code> model like this:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`// prisma/schema.prisma

datasource db {
  provider = "postgresql" // Or another database provider like "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}

model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
}`}
            </code>
          </pre>
        </div>
        <p className="mb-4">
          Remember to replace <code>"postgresql"</code> with your database
          provider and set your database connection string in the{" "}
          <code>.env</code> file:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"`}
            </code>
          </pre>
        </div>
        <p className="mb-4">
          Finally, to create the <code>Todo</code> table in your database, run
          Prisma Migrate:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>{`npx prisma migrate dev --name init`}</code>
          </pre>
        </div>
        <p className="mb-4">
          This command generates and applies a migration based on your schema
          changes.
        </p>

        <blockquote className="p-4 italic border-l-4 border-gray-300 bg-gray-50 mb-4">
          <p>
            You can start adding functionality to your TODO app, such as
            creating, reading, updating, and deleting TODO items using Prisma
            Client in your application code.
          </p>
        </blockquote>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Selecting Your Database</h1>
        <p className="mb-4">
          Prisma supports a variety of databases, including relational databases
          like MySQL and PostgreSQL, as well as the document-oriented database
          MongoDB (in Preview). Selecting and configuring your database with
          Prisma involves updating the <code>schema.prisma</code> file and
          setting the database connection URL in your environment variables.
          Here's how you can do it:
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 1: Update <code>schema.prisma</code> for Your Database
        </h2>
        <p className="mb-4">
          The <code>schema.prisma</code> file contains a <code>datasource</code>{" "}
          block where you specify your database connection. You need to update
          the <code>provider</code> field according to the database you want to
          use.
        </p>

        <h3 className="text-xl font-bold mb-2">For PostgreSQL</h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">For MySQL</h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">For MongoDB (Preview)</h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Step 2: Set Your Database Connection URL
        </h2>
        <p className="mb-4">
          The <code>url</code> field in the <code>datasource</code> block
          references an environment variable <code>DATABASE_URL</code> where you
          should set your database connection string. This is done in the{" "}
          <code>.env</code> file in the root of your project.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Example <code>.env</code> Content for PostgreSQL
        </h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"`}
            </code>
          </pre>
        </div>
        <p className="mb-4">
          Replace <code>username</code>, <code>password</code>,{" "}
          <code>localhost</code>, <code>5432</code>, and <code>mydatabase</code>{" "}
          with your actual database credentials and details.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Example <code>.env</code> Content for MySQL
        </h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"`}
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-bold mb-2">
          Example <code>.env</code> Content for MongoDB
        </h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`DATABASE_URL="mongodb+srv://username:password@cluster0.example.mongodb.net/mydatabase"`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Step 3: Install the Prisma VSCode Extension
        </h2>
        <p className="mb-4">
          To enhance your development experience with Prisma, it's highly
          recommended to install the Prisma VSCode extension. This extension
          provides features like syntax highlighting, formatting,
          auto-completion, and a visual overview of your Prisma schema.
        </p>
        <p className="mb-4">
          You can install the Prisma extension directly from the Visual Studio
          Code Marketplace:
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Open VSCode.</li>
          <li>
            Go to the Extensions view by clicking on the square icon on the
            sidebar or pressing <code>Ctrl+Shift+X</code>.
          </li>
          <li>Search for "Prisma".</li>
          <li>Find the Prisma extension by Prisma and click "Install".</li>
        </ol>
        <blockquote className="p-4 italic border-l-4 border-gray-300 bg-gray-50 mb-4">
          <p>
            Remember, when using MongoDB with Prisma, it's currently in Preview,
            so it's a good idea to keep an eye on the official Prisma
            documentation for any updates or changes.
          </p>
        </blockquote>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Defining Models</h1>
        <p className="mb-4">
          Defining your data model in Prisma involves specifying the structure
          of your database tables and their relationships directly in the{" "}
          <code>schema.prisma</code> file. This schema acts as a blueprint for
          your database, allowing Prisma to generate the necessary code to
          interact with your data in a type-safe manner. Let's walk through the
          process of defining a data model for a simple application with Users
          and Todos tables, and then generating the corresponding migrations to
          update your database schema.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 1: Define Your Data Model in <code>schema.prisma</code>
        </h2>
        <p className="mb-4">
          To add a Users and a Todos table to your application, you'll define
          two models in your <code>schema.prisma</code> file: <code>User</code>{" "}
          and <code>Todo</code>. At this stage, we won't worry about defining
          relationships between these tables.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Or your database provider of choice
  url      = env("DATABASE_URL")
}

model User {
  id        Int     @id @default(autoincrement())
  username  String  @unique
  password  String
  firstName String
  lastName  String
}

model Todo {
  id          Int     @id @default(autoincrement())
  title       String
  description String
  done        Boolean @default(false)
  userId      Int     // This will later be used to establish a relationship
}`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          In this schema:
          <ul className="list-disc pl-5">
            <li>
              Each <code>model</code> keyword defines a table in your database.
            </li>
            <li>
              The fields within each model represent columns in the table.
            </li>
            <li>
              Attributes like <code>@id</code>,{" "}
              <code>@default(autoincrement())</code>, and <code>@unique</code>{" "}
              specify column constraints and behaviors.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4">Step 2: Generate Migrations</h2>
        <p className="mb-4">
          After defining your data model, the next step is to generate
          migrations to create these tables in your database. Prisma Migrate
          translates changes in your Prisma schema into SQL migration files,
          which are then applied to your database to update its schema.
        </p>

        <p className="mb-4">
          Run the following command to generate and apply migrations:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>npx prisma migrate dev --name initialize_schema</code>
          </pre>
        </div>

        <p className="mb-4">
          This command does a few things:
          <ul className="list-disc pl-5">
            <li>
              It generates SQL migration files that represent the schema changes
              (in this case, creating the <code>User</code> and{" "}
              <code>Todo</code> tables).
            </li>
            <li>
              It applies these migrations to your database, creating the tables.
            </li>
            <li>
              It generates or updates the Prisma Client, which you use to
              interact with your database in your application code.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 3: Inspect the Migrations Folder
        </h2>
        <p className="mb-4">
          After running the migrations, you can find them in the{" "}
          <code>prisma/migrations</code> folder in your project directory. Each
          migration is stored in a separate folder, named with a timestamp and
          the name you provided (<code>initialize_schema</code> in this case).
          Inside, you'll find:
          <ul className="list-disc pl-5">
            <li>
              A <code>migration.sql</code> file containing the SQL commands that
              were run against your database.
            </li>
            <li>
              A <code>README.md</code> file with information about the
              migration.
            </li>
          </ul>
        </p>

        <blockquote className="p-4 italic border-l-4 border-gray-300 bg-gray-50 mb-4">
          <p>
            By defining your data model in the <code>schema.prisma</code> file
            and using Prisma Migrate, you've successfully created a Users and a
            Todos table in your database without manually writing any SQL.
          </p>
        </blockquote>

        <p className="mb-4">
          This process not only simplifies database schema management but also
          ensures that your application's data model is version-controlled and
          easily reproducible across different environments.
        </p>

        <h1 className="text-3xl font-bold mb-4">Exploring Your Databases</h1>
        <p className="mb-4">
          Exploring your database with <code>psql</code> after Prisma has
          created tables for you is a straightforward process. <code>psql</code>{" "}
          is a command-line interface for interacting with PostgreSQL that
          allows you to execute queries, view table structures, and manage your
          database. Here's how you can use <code>psql</code> to explore the
          tables created by Prisma:
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 1: Connect to Your Database
        </h2>
        <p className="mb-4">
          Open your terminal and use the <code>psql</code> command to connect to
          your PostgreSQL database. Replace <code>localhost</code>,{" "}
          <code>postgres</code>, and <code>postgres</code> with your database's
          host, database name, and user, respectively, if they are different.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>psql -h localhost -d postgres -U postgres</code>
          </pre>
        </div>

        <p className="mb-4">
          You might be prompted to enter the password for the PostgreSQL user.
        </p>

        <h2 className="text-2xl font-bold mb-4">Step 2: List Tables</h2>
        <p className="mb-4">
          Once connected, you can list all the tables in your database using the{" "}
          <code>\\dt</code> command.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>\\dt</code>
          </pre>
        </div>

        <p className="mb-4">
          This command will display a list of tables, including those created by
          Prisma. You should see the <code>User</code> and <code>Todo</code>{" "}
          tables listed if you followed the previous steps to define your data
          model and run migrations.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Step 3: Describe Table Structure
        </h2>
        <p className="mb-4">
          To get detailed information about the structure of a specific table,
          use the <code>\\d</code> command followed by the table name. For
          example, to describe the <code>User</code> table:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>\\d "User"</code>
          </pre>
        </div>

        <p className="mb-4">
          This will show you the columns, their data types, and any constraints
          or indexes associated with the table.
        </p>

        <h2 className="text-2xl font-bold mb-4">Step 4: Query Data</h2>
        <p className="mb-4">
          You can also execute SQL queries directly to retrieve data from your
          tables. For instance, to select all records from the <code>User</code>{" "}
          table:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>SELECT * FROM "User";</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Step 5: Exit <code>psql</code>
        </h2>
        <p className="mb-4">
          When you're done exploring, you can exit <code>psql</code> by typing{" "}
          <code>\\q</code> and pressing Enter.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>\\q</code>
          </pre>
        </div>

        <blockquote className="p-4 italic border-l-4 border-gray-300 bg-gray-50 mb-4">
          <p>
            Using <code>psql</code> to explore your database gives you a direct
            view of the underlying structure and data. It's a powerful tool for
            database administration and can be particularly useful for verifying
            the results of ORM operations, such as those performed by Prisma.
            Whether you're developing, debugging, or simply curious about the
            state of your database, <code>psql</code> provides the necessary
            commands to interact with and inspect your PostgreSQL database
            effectively.
          </p>
        </blockquote>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Prisma Client</h1>

        <h2 className="text-2xl font-bold mb-4">What is a Prisma Client?</h2>
        <p className="mb-4">
          The Prisma Client is an auto-generated and type-safe query builder
          that's tailored to your data model. It provides a fluent API that lets
          you compose queries in a way that is both intuitive and close to
          natural language. The client abstracts away the SQL layer, offering
          methods that correspond to various database operations, such as
          creating, reading, updating, and deleting records.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          How Does the Prisma Client Work?
        </h2>
        <p className="mb-4">
          When you use Prisma Client in your application, you write code like
          this:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`const newUser = await prisma.user.create({
  data: {
    email: "harkirat@gmail.com",
  },
});`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          Under the hood, Prisma Client converts this operation into an SQL
          query similar to:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`INSERT INTO users (email) VALUES ('harkirat@gmail.com');`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          This conversion is handled automatically, so you don't need to write
          SQL queries manually.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          How to Generate the Prisma Client?
        </h2>
        <p className="mb-4">
          After defining your data model in the <code>schema.prisma</code> file,
          you can generate the Prisma Client by running the following command in
          your terminal:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>{`npx prisma generate`}</code>
          </pre>
        </div>

        <p className="mb-4">
          This command reads your Prisma schema and generates the client code
          accordingly. The generated client includes all the necessary functions
          to interact with your database based on the models you've defined.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Using the Generated Prisma Client
        </h2>
        <p className="mb-4">
          Once generated, you can import and use the Prisma Client in your
          Node.js application to perform database operations. Here's an example
          of how you might use the client in an async function:
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "harkirat@gmail.com",
    },
  });
  console.log(newUser);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          In this example, we're using the <code>create</code> method on the{" "}
          <code>user</code> model to insert a new user into the database. The
          Prisma Client provides similar methods for other CRUD operations and
          supports complex queries, including filtering, sorting, and joining
          data across tables.
        </p>

        <h1 className="text-3xl font-bold mb-4">
          Creating Your First Application
        </h1>

        <h2 className="text-2xl font-bold mb-4">Insert</h2>
        <p className="mb-4">
          Creating a function to insert data into the <code>Users</code> table
          using Prisma in a TypeScript application.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  });
  console.log(res);
}

insertUser("admin1", "123456", "harkirat", "singh");`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          Here's a breakdown of the key parts of this function:
          <ul className="list-disc pl-5">
            <li>
              <strong>Prisma Client Initialization</strong>:{" "}
              <code>const prisma = new PrismaClient();</code> creates a new
              instance of the Prisma Client. This instance is used to perform
              operations on your database.
            </li>
            <li>
              <strong>
                The <code>insertUser</code> Function
              </strong>
              : This is an asynchronous function, indicated by the{" "}
              <code>async</code> keyword. It's designed to insert a new user
              into the database.
            </li>
            <li>
              <strong>Inserting Data</strong>: <code>prisma.user.create()</code>{" "}
              is a method provided by the Prisma Client to create (or insert) a
              new record in the <code>user</code> table. The method takes an
              object with a <code>data</code> property, which itself is an
              object containing the fields to be inserted into the table.
            </li>
            <li>
              <strong>Awaiting the Promise</strong>: The <code>await</code>{" "}
              keyword is used to wait for the promise returned by{" "}
              <code>prisma.user.create()</code> to resolve. This is necessary
              because database operations are asynchronous.
            </li>
            <li>
              <strong>Logging the Result</strong>: The result of the insert
              operation (the newly created user record) is stored in the{" "}
              <code>res</code> variable and then logged to the console.
            </li>
            <li>
              <strong>Executing the Function</strong>: Finally,{" "}
              <code>insertUser("admin1", "123456", "harkirat", "singh");</code>{" "}
              calls the function with sample data. In a real application, you
              would likely call this function in response to user input, such as
              a form submission.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4">Update</h2>
        <p className="mb-4">
          Updating data in the <code>Users</code> table using Prisma in a
          TypeScript application involves specifying the criteria for selecting
          the user to update and providing the new data for the selected fields.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
});`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          Here's a breakdown of the key components:
          <ul className="list-disc pl-5">
            <li>
              <strong>Prisma Client Initialization</strong>:{" "}
              <code>const prisma = new PrismaClient();</code> creates a new
              instance of the Prisma Client, which is used to interact with your
              database.
            </li>
            <li>
              <strong>
                The <code>UpdateParams</code> Interface
              </strong>
              : This TypeScript interface defines the shape of the object
              expected by the <code>updateUser</code> function for the update
              operation. It specifies that both <code>firstName</code> and{" "}
              <code>lastName</code> should be strings.
            </li>
            <li>
              <strong>
                The <code>updateUser</code> Function
              </strong>
              : This asynchronous function is designed to update a user's{" "}
              <code>firstName</code> and <code>lastName</code> in the database.
              It takes a <code>username</code> to identify the user to update
              and an <code>UpdateParams</code> object containing the new values.
            </li>
            <li>
              <strong>Updating Data</strong>: <code>prisma.user.update()</code>{" "}
              is a method provided by the Prisma Client to update a record in
              the <code>user</code> table. It requires two main arguments:
              <ul className="list-disc pl-5">
                <li>
                  <code>where</code>: An object specifying the criteria to find
                  the record to update. In this case, it's the{" "}
                  <code>username</code> of the user.
                </li>
                <li>
                  <code>data</code>: An object containing the fields to update
                  and their new values.
                </li>
              </ul>
            </li>
            <li>
              <strong>Awaiting the Promise</strong>: The <code>await</code>{" "}
              keyword pauses execution until the promise returned by{" "}
              <code>prisma.user.update()</code> is resolved, ensuring the update
              operation completes before proceeding.
            </li>
            <li>
              <strong>Logging the Result</strong>: The result of the update
              operation (the updated user record) is stored in the{" "}
              <code>res</code> variable and then logged to the console.
            </li>
            <li>
              <strong>Executing the Function</strong>: The function is called
              with a sample <code>username</code> and new values for{" "}
              <code>firstName</code> and <code>lastName</code>. In a real
              application, these values would likely come from user input.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4">Get a User’s Detail</h2>
        <p className="mb-4">
          Fetching a user's details from the database based on their username
          can be done efficiently using Prisma Client.
        </p>

        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>
            <code>
              {`import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username
    }
  });
  console.log(user);
}

getUser("admin1");`}
            </code>
          </pre>
        </div>

        <p className="mb-4">
          Here's a breakdown of the key components:
          <ul className="list-disc pl-5">
            <li>
              <strong>Prisma Client Initialization</strong>:{" "}
              <code>const prisma = new PrismaClient();</code> creates a new
              instance of the Prisma Client, which is used to interact with your
              database.
            </li>
            <li>
              <strong>
                The <code>getUser</code> Function
              </strong>
              : This asynchronous function is designed to fetch a user's details
              from the database. It takes a <code>username</code> to identify
              the user.
            </li>
            <li>
              <strong>Fetching Data</strong>:{" "}
              <code>prisma.user.findFirst()</code> is a method provided by the
              Prisma Client to retrieve the first record that matches the given
              criteria from the <code>user</code> table. It requires an object
              with a <code>where</code> clause:
              <ul className="list-disc pl-5">
                <li>
                  <code>where</code>: An object specifying the criteria to find
                  the record. In this case, it's looking for a user with a
                  matching <code>username</code>.
                </li>
              </ul>
            </li>
            <li>
              <strong>Awaiting the Promise</strong>: The <code>await</code>{" "}
              keyword is used to wait for the promise returned by{" "}
              <code>prisma.user.findFirst()</code> to resolve. This is necessary
              because database operations are asynchronous.
            </li>
            <li>
              <strong>Logging the Result</strong>: The result of the fetch
              operation (the user record) is stored in the <code>user</code>{" "}
              variable and then logged to the console.
            </li>
            <li>
              <strong>Executing the Function</strong>: The function is called
              with a sample <code>username</code> of "admin1". In a real
              application, this value would likely come from user input, such as
              a login form or a search query.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Prisma;
