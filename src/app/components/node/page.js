// components/NodeInterviewQuestions.js
import React from "react";

const NodeInterviewQuestions = () => {
  const questions = [
    {
      question: "Node.js kya hai?",
      explanation:
        "Node.js ek open-source, cross-platform runtime environment hai jo JavaScript code ko server side par chalane ke liye use hota hai. Ye Chrome ke V8 JavaScript engine par based hai aur scalable, high-performance applications banane ke liye use hota hai.",
    },
    {
      question: "Node.js ke key features kya hain?",
      explanation: `
        1. Non-blocking I/O: Asynchronous operations se high scalability milti hai.
        2. Single-threaded Event Loop: Multiple requests ko ek sath handle karta hai.
        3. Fast Execution: Chrome ke V8 engine se jaldi se code execute hota hai.
        4. NPM (Node Package Manager): Open-source libraries ka bada collection hai.
        5. Cross-platform: Windows, Linux, Mac par chal sakta hai.
      `,
    },
    {
      question: "Node.js ka event-driven architecture kya hai?",
      explanation:
        "Node.js event-driven architecture ka use karta hai jisme ek event loop hota hai. Ye background mein tasks ko handle karta hai aur callbacks ka use karke unhe complete hone par signal deta hai, isse non-blocking operations possible hote hain.",
    },
    {
      question: "Event loop kya hai Node.js mein?",
      explanation:
        "Event loop wo mechanism hai jo non-blocking I/O operations ko handle karta hai. Ye asynchronous tasks ko delegate karta hai aur unke complete hone par callbacks ko call karta hai, jisse multiple tasks ko ek sath handle karna possible hota hai.",
    },
    {
      question: "Node.js mein callbacks kya hote hain?",
      explanation:
        "Callbacks wo functions hote hain jo dusre functions ke arguments ke roop mein diye jate hain aur ek asynchronous task ke complete hone ke baad call kiye jate hain. Ye asynchronous operations ko handle karne ke liye use hote hain.",
    },
    {
      question: "Synchronous aur Asynchronous functions mein kya fark hai?",
      explanation: `
        Synchronous functions: Ek ke baad ek execute hote hain aur current function ke complete hone tak code execution ruk jata hai.
        Asynchronous functions: Independent hote hain aur ek operation ke complete hone ka wait nahi karte, code execution ko aage badhate hain.
      `,
    },
    {
      question: "Promises kya hote hain aur kaise kaam karte hain?",
      explanation:
        "Promises wo objects hote hain jo ek asynchronous operation ke eventually complete (ya fail) hone ko represent karte hain. Inki teen states hoti hain: pending, fulfilled, aur rejected. .then() se success handle hota hai aur .catch() se error handle hota hai.",
    },
    {
      question: "Async/await kya hai Node.js mein?",
      explanation:
        "Async/await Promises ke liye ek syntactic sugar hai jo asynchronous code ko synchronous tarike se likhne ki suvidha deta hai. async keyword se function ek Promise return karta hai aur await se function execution tab tak rukta hai jab tak Promise resolve nahi hota.",
    },
    {
      question: "require keyword ka use kya hai Node.js mein?",
      explanation:
        "require ka use modules, JSON files, aur local files ko import karne ke liye hota hai. Ye code ko modular banane aur reusability ko badhane mein madad karta hai.",
    },
    {
      question: "require aur import mein kya fark hai Node.js mein?",
      explanation: `
        require: CommonJS syntax hai jo purane versions mein use hota tha.
        import: ES6 module syntax hai jo modern Node.js mein use hota hai aur JavaScript modules ke saath better integration deta hai.
      `,
    },
    {
      question: "Node.js streams kya hote hain?",
      explanation:
        "Streams wo objects hote hain jo data ko continuous flow mein read ya write karte hain. Ye large data ko efficiently handle karte hain bina memory mein sab kuch load kiye. Streams ke 4 types hote hain: Readable, Writable, Duplex, aur Transform.",
    },
    {
      question: "process object ka purpose kya hai Node.js mein?",
      explanation:
        "process object current Node.js process ke baare mein information aur control deta hai. Ye environment variables, command-line arguments, aur process-related operations ko handle karta hai.",
    },
    {
      question: "Express.js mein middleware kya hote hain?",
      explanation:
        "Middleware functions wo functions hote hain jinke paas request, response, aur next middleware function ka access hota hai. Ye logging, authentication, request body parsing, etc. jaise tasks ke liye use hote hain.",
    },
    {
      question: "app.use() aur app.all() mein kya fark hai Express.js mein?",
      explanation: `
        app.use(): Middleware ko define karne ke liye use hota hai jo specific route ke liye sabhi HTTP methods (GET, POST, etc.) par run karta hai.
        app.all(): Specific route ke liye sabhi HTTP methods ko handle karta hai aur generally tab use hota hai jab aap sabhi types of requests ko process karna chahte hain.
      `,
    },
    {
      question: "Event emitter module kya hai Node.js mein?",
      explanation:
        "EventEmitter module ka use custom events ko create, handle, aur manage karne ke liye hota hai. Ye event-driven programming ko enable karta hai Node.js mein.",
    },
    {
      question: "Clustering kya hai Node.js mein?",
      explanation:
        "Clustering se aap ek server port par multiple instances of Node.js create kar sakte hain, jisse multi-core systems ka use karke better performance milti hai aur zyada concurrent connections handle hote hain.",
    },
    {
      question: "Node.js REPL kya hai?",
      explanation:
        "REPL (Read-Eval-Print Loop) ek interactive shell hai jo command line par JavaScript code ko execute karne, evaluate karne, aur output print karne ki suvidha deta hai. Ye code snippets ko test aur debug karne ke liye acha tool hai.",
    },
    {
      question: "Node.js concurrency kaise handle karta hai?",
      explanation:
        "Node.js event loop aur non-blocking I/O ka use karke concurrency handle karta hai. Internal libuv library asynchronous I/O operations ko manage karti hai aur event-driven callbacks ka use karke concurrency ko enable karti hai.",
    },
    {
      question: "Node.js mein common modules kaunse hote hain?",
      explanation: `
        http: HTTP server aur client banane ke liye.
        fs: File system operations ke liye.
        path: File paths ko handle karne ke liye.
        os: OS-related utility methods ke liye.
        events: Event-driven programming ke liye.
        crypto: Cryptographic operations ke liye.
      `,
    },
    {
      question:
        "Memory leaks aur garbage collection kaise handle kiya jata hai Node.js mein?",
      explanation:
        "Node.js V8’s garbage collector ka use karke memory management karta hai. Ye periodically unused objects ko check karta hai aur unhe free karke memory leaks ko prevent karta hai. Lekin, developers ko bhi potential memory leaks ke liye aware rehna chahiye jo large data structures ya unreferenced objects se hoti hai.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Node.js Interview Questions in Hinglish
      </h1>
      {questions.map((item, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            {index + 1}. {item.question}
          </h2>
          <p className="text-sm">{item.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default NodeInterviewQuestions;
