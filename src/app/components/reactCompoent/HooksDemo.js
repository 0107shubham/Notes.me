"use client";
import React from "react";

const HooksDemo = () => {
  const firstCodeSnippet = `
import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Expensive loop
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
`;

  const secondCodeSnippet = `
import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child Rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;
`;
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        React Hooks: useMemo & useCallback
      </h1>

      {/* Input Section */}

      {/* Counter Section */}
      <div className="mb-6">
        <h2 className="text-lg font-medium">Counter: </h2>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Increment Counter
        </button>
        <p className="mt-2 text-gray-700">Expensive Calculation Result:</p>
      </div>

      {/* Theory Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          What are useMemo and useCallback?
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">useMemo:</h3>
          <p className="text-gray-700">
            <code>useMemo</code> React Hook का उपयोग महंगे (expensive) कैलकुलेशन
            के परिणाम को मेमोराइज़ करने के लिए किया जाता है। जब तक इसकी
            डिपेंडेंसी (dependencies) नहीं बदलती, यह कैलकुलेशन दोबारा नहीं चलती।
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>परफॉर्मेंस बढ़ाने के लिए उपयोग होता है।</li>
            <li>ज्यादा रेंडरिंग वाले कंपोनेंट्स में मददगार है।</li>
            <li>
              सिंटैक्स:{" "}
              <code>{"useMemo(() => calculation, [dependencies])"}</code>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">useCallback:</h3>
          <p className="text-gray-700">
            <code>useCallback</code> React Hook का उपयोग किसी फंक्शन को
            मेमोराइज़ करने के लिए किया जाता है। जब तक इसकी डिपेंडेंसी नहीं
            बदलती, यह नया फंक्शन नहीं बनाता।
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>अनावश्यक रेंडरिंग को रोकने के लिए उपयोग होता है।</li>
            <li>कस्टम हुक्स और ऑप्टिमाइज़ेशन में मददगार है।</li>
            <li>
              सिंटैक्स:{" "}
              <code>{"useCallback(() => function, [dependencies])"}</code>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Difference between useMemo and useCallback:
          </h3>
          <table className="border border-gray-300 w-full text-left mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Aspect</th>
                <th className="border px-4 py-2">useMemo</th>
                <th className="border px-4 py-2">useCallback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Purpose</td>
                <td className="border px-4 py-2">
                  Memoize calculation results
                </td>
                <td className="border px-4 py-2">Memoize functions</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Returns</td>
                <td className="border px-4 py-2">Calculated value</td>
                <td className="border px-4 py-2">Memoized function</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Use case</td>
                <td className="border px-4 py-2">Expensive computations</td>
                <td className="border px-4 py-2">
                  Prevent re-rendering functions
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">When to Use?</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              <strong>useMemo:</strong> जब कोई कैलकुलेशन महंगी हो और हर बार
              रेंडर पर दोबारा ना करनी हो।
            </li>
            <li>
              <strong>useCallback:</strong> जब कोई फंक्शन बार-बार रेंडर हो रहा
              हो लेकिन उसकी डिपेंडेंसी में बदलाव न हुआ हो।
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Possible Interview Questions:
          </h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>React में useMemo और useCallback के बीच क्या अंतर है?</li>
            <li>useMemo और useCallback का उपयोग कब करना चाहिए?</li>
            <li>क्या useMemo केवल परफॉर्मेंस के लिए ही उपयोग किया जाता है?</li>
            <li>useCallback के लिए dependency array क्यों आवश्यक है?</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Snippet 1</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
          <code>{firstCodeSnippet}</code>
        </pre>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Snippet 2</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
          <code>{secondCodeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

export default HooksDemo;
