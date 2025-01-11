import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">
        Short Polling vs Long Polling in Express.js
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">1. Short Polling</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Short polling ka matlab hai ki client baar-baar server se request
          karta hai ki koi naya data aaya hai ya nahi. Agar server ke paas naya
          data hota hai, toh wo turant response bhej deta hai, warna ek empty
          response deta hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Kaise kaam karta hai?</strong>
          <br />
          - Client ek fixed interval (e.g. har 5 second me) par server se
          request karta rahta hai.
          <br />
          - Server turant response deta hai chahe data ho ya na ho.
          <br />- Ye bandwidth aur server resources pe zyada load dalta hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Example in Express.js (Short Polling)</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`const express = require('express');
const app = express();

let message = "No new messages";

app.get('/poll', (req, res) => {
  res.json({ message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Client har 5 second me request karega:</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`setInterval(() => {
  fetch('http://localhost:3000/poll')
    .then(response => response.json())
    .then(data => console.log(data.message));
}, 5000);`}
          </code>
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">2. Long Polling</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Long polling me client request karta hai, aur agar server ke paas
          turant data nahi hota, toh wo wait karta hai jab tak naya data
          available na ho. Jab server ke paas naya data hota hai, tabhi wo
          response deta hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Kaise kaam karta hai?</strong>
          <br />
          - Client ek request karta hai aur server tab tak response nahi bhejta
          jab tak koi naya data available na ho.
          <br />
          - Jaise hi data available hota hai, server response deta hai.
          <br />
          - Client response milte hi turant ek nayi request bhejta hai.
          <br />- Long polling bandwidth efficient hota hai, kyunki client
          baar-baar request nahi bhejta, sirf response milne ke baad hi nayi
          request karta hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Example in Express.js (Long Polling)</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`const express = require('express');
const app = express();

let message = "No new messages";

app.get('/poll', (req, res) => {
  setTimeout(() => {
    res.json({ message: "New message available!" });
    message = "No new messages"; // Reset message after sending
  }, 10000); // Simulate delay of 10 seconds
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Client request karega:</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`function pollServer() {
  fetch('http://localhost:3000/poll')
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      pollServer(); // Send next request after receiving response
    });
}

pollServer();`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Page;
