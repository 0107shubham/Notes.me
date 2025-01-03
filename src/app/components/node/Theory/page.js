import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">
        Node.js Interview Questions in Hinglish
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Node.js ke Features</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          1. Non-blocking I/O: Asynchronous operations se high scalability milti
          hai.
          <br />
          2. Single-threaded Event Loop: Multiple requests ko ek sath handle
          karta hai.
          <br />
          3. Fast Execution: Chrome ke V8 engine se jaldi se code execute hota
          hai.
          <br />
          4. NPM (Node Package Manager): Open-source libraries ka bada
          collection hai.
          <br />
          5. Cross-platform: Windows, Linux, Mac par chal sakta hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          V8 Engine Kya Hai? (with C++ Context)
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          V8 Engine, ek open-source JavaScript engine hai, jo Google ne develop
          kiya hai. Yeh engine JavaScript ko directly machine code mein compile
          karta hai, jisse JavaScript ki execution fast hoti hai. V8 engine ka
          use primarily Google Chrome browser aur Node.js mein hota hai.
          <br />
          Jab C++ aur V8 ki baat ki jati hai, toh yeh samajhna zaruri hai ki V8
          C++ me likha gaya hai. Matlab, V8 ke core components aur optimizations
          C++ mein likhe gaye hain, jisse JavaScript ko machine code mein
          convert karte waqt speed aur performance kaafi efficient hoti hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Node.js ka event-driven architecture kya hai?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Node.js event-driven architecture ka use karta hai jisme ek event loop
          hota hai. Ye background mein tasks ko handle karta hai aur callbacks
          ka use karke unhe complete hone par signal deta hai, isse non-blocking
          operations possible hote hain.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Event loop kya hai Node.js mein?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Event loop wo mechanism hai jo non-blocking I/O operations ko handle
          karta hai. Ye asynchronous tasks ko delegate karta hai aur unke
          complete hone par callbacks ko call karta hai, jisse multiple tasks ko
          ek sath handle karna possible hota hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Node.js mein common modules kaunse hote hain?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          http: HTTP server aur client banane ke liye.
          <br />
          fs: File system operations ke liye.
          <br />
          path: File paths ko handle karne ke liye.
          <br />
          os: OS-related utility methods ke liye.
          <br />
          events: Event-driven programming ke liye.
          <br />
          crypto: Cryptographic operations ke liye.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Memory leaks aur garbage collection kaise handle kiya jata hai Node.js
          mein?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Node.js V8’s garbage collector ka use karke memory management karta
          hai. Ye periodically unused objects ko check karta hai aur unhe free
          karke memory leaks ko prevent karta hai. Lekin, developers ko bhi
          potential memory leaks ke liye aware rehna chahiye jo large data
          structures ya unreferenced objects se hoti hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">ECMAScript kya hoti hai?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          ECMAScript ek standard hai jo JavaScript language ke specifications ko
          define karta hai. JavaScript ke naye features aur syntax ECMAScript ke
          naye versions ke through introduce kiye jate hain. Common versions:
          ES5, ES6 (ECMAScript 2015), aur uske baad ke updates.
          <br />
          V8 Engine ka ECMAScript par ye impact hai ki isne naye features ko
          efficiently implement kiya aur JavaScript execution ko bahut fast
          banaya. Is wajah se naye ECMAScript standards ko adopt karna easy ho
          gaya, aur server-side JavaScript (Node.js) ki popularity bhi badh
          gayi.
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735921804/node1_jkxhpa.png"
          alt="node1"
          className="w-full h-fit"
        />
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735921815/node2_yy6wmk.png"
          alt="node2"
          className="w-full h-fit"
        />
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735921834/node3_jsi7vd.png"
          alt="node3"
          className="w-full h-fit"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          CommonJS Module vs ES Module Explanation (with Examples)
        </h2>
        <h3 className="text-lg font-semibold mb-2">1. CommonJS Module</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          CommonJS (CJS) ek module system hai jo Node.js ke initial versions me
          introduce kiya gaya tha. Yeh synchronous modules ko import/export
          karne ka standard hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Syntax:</strong>
          <br />
          require ka use hota hai module ko import karne ke liye.
          <br />
          module.exports ka use hota hai module ko export karne ke liye.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Example (CommonJS Module)</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`// Exporting in CommonJS
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = { add, subtract };`}
          </code>
        </pre>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mt-4">
          <code className="text-sm">
            {`// Importing in CommonJS
const math = require('./math');

console.log(math.add(5, 3));       // Output: 8
console.log(math.subtract(5, 3));  // Output: 2`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Features of CommonJS:</strong>
          <br />
          Synchronous loading (used mainly in server-side applications).
          <br />
          Simple to use but not suitable for browsers due to synchronous nature.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-4">
          2. ES Module (ECMAScript Module)
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          ES Modules (ESM) ECMAScript ke standard module system hain, jo modern
          JavaScript me introduce kiye gaye. Yeh asynchronous modules ko
          import/export karne ka standard hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Syntax:</strong>
          <br />
          import ka use hota hai module ko import karne ke liye.
          <br />
          export ka use hota hai module ko export karne ke liye.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Example (ES Module)</strong>
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`// Exporting in ES Module
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;`}
          </code>
        </pre>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mt-4">
          <code className="text-sm">
            {`// Importing in ES Module
import { add, subtract } from './math.js';

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3));  // Output: 2`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Features of ES Module:</strong>
          <br />
          Asynchronous loading (works well for both client-side and
          server-side).
          <br />
          More modern and supports tree-shaking, which improves performance by
          only loading the required code.
          <br />
          Supported natively by browsers and modern versions of Node.js.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-4">Key Differences</h3>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Feature</th>
              <th className="py-2 px-4 border-b">CommonJS (CJS)</th>
              <th className="py-2 px-4 border-b">ES Module (ESM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Import Syntax</td>
              <td className="py-2 px-4 border-b">
                const module = require('...')
              </td>
              <td className="py-2 px-4 border-b">import ... from '...'</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Export Syntax</td>
              <td className="py-2 px-4 border-b">module.exports = ...</td>
              <td className="py-2 px-4 border-b">
                export ... / export default ...
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Loading Type</td>
              <td className="py-2 px-4 border-b">Synchronous</td>
              <td className="py-2 px-4 border-b">Asynchronous</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Use Case</td>
              <td className="py-2 px-4 border-b">Server-side (Node.js)</td>
              <td className="py-2 px-4 border-b">
                Client-side & Server-side (Browser & Node.js)
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Native Browser Support</td>
              <td className="py-2 px-4 border-b">❌ No</td>
              <td className="py-2 px-4 border-b">✅ Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Tree Shaking</td>
              <td className="py-2 px-4 border-b">❌ No</td>
              <td className="py-2 px-4 border-b">✅ Yes</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mb-2 mt-4">Which One to Use?</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>CommonJS:</strong> Agar aap purane Node.js projects ya legacy
          code ke saath kaam kar rahe hain to CommonJS ka use karna better hota
          hai.
          <br />
          <strong>ES Modules:</strong> Naye projects ke liye ES Modules
          recommend kiye jate hain kyunki yeh browsers aur modern tools ke sath
          compatible hain aur better performance dete hain.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735923703/node4_t3ztej.png"
        alt="node4"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930141/node7_zqsjk5.png"
        alt="node6"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930155/node6_ayxcyw.png"
        alt="node7"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930168/node8_tha3su.png"
        alt="node8"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930180/node9_g0ro2e.png"
        alt="node9"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930220/node10_agcu3y.png"
        alt="node10"
        className="w-full h-fit"
      />
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735930240/node11_yn5bbd.png"
        alt="node11"
        className="w-full h-fit"
      />
    </div>
  );
};

export default Page;
