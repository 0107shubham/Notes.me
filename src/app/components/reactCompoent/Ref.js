"use client";
import React, { useRef, useState } from "react";

const RefExamples = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">useRef Hook in React</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">useRef kya hota hai?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          useRef ek React hook hai jo mutable reference object create karta hai.
          Yeh reference React components ke andar ek aise value ko hold karta
          hai jo re-render ke baad bhi change hoti hai, lekin render trigger
          nahi karti.
          <br />
          Yeh hook do cheezein karne ke liye useful hota hai:
          <br />
          - DOM elements ko directly access karna (like document.querySelector
          in vanilla JavaScript).
          <br />- Mutable values ko hold karna jo re-renders ke beech persist
          rehni chahiye (without causing a re-render).
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Syntax</h2>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`const refContainer = useRef(initialValue);`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          - <strong>initialValue:</strong> Ref ka initial value.
          <br />- <strong>refContainer:</strong> Ek object jisme{" "}
          {`{ current: initialValue }`} hota hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          1. Example: DOM Element ko access karna
        </h2>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();  // Directly accessing the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Explanation:</strong>
          <br />- <strong>useRef(null):</strong> se ek inputRef reference create
          kiya gaya.
          <br />- <strong>ref=inputRef:</strong> ko input element me pass kiya,
          jisse input element ka reference inputRef.current me aa gaya.
          <br />- <strong>handleFocus function:</strong> me
          inputRef.current.focus() call karke directly input box pe focus lagaya
          gaya.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          2. Example: Mutable Values ko hold karna (without causing re-render)
        </h2>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`import React, { useRef, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);  // Mutable reference to track renders

  renderCount.current += 1;

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Render Count: {renderCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Explanation:</strong>
          <br />- <strong>useRef(0):</strong> se ek renderCount reference create
          kiya gaya jo render ke beech persist hota hai.
          <br />
          - Har render pe renderCount.current ko increment kiya ja raha hai.
          <br />- Kyunki renderCount me changes hone se component re-render nahi
          hota, isliye yeh value re-render ke beech persist hoti hai bina render
          trigger kiye.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Kab useRef use karna chahiye?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          - DOM elements ko directly manipulate karne ke liye, jaise input
          fields ko focus dena ya kisi element ki height ya width access karna.
          <br />
          - Jab koi mutable value store karni ho jo render ke beech persist
          rehni chahiye, lekin uski change hone se render trigger nahi hona
          chahiye.
          <br />- Jab previous values ko track karna ho bina component ko
          re-render kiye.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Common Use Cases of useRef
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          - Accessing DOM elements (e.g. input field pe focus lagana, scroll
          position track karna, etc.)
          <br />
          - Storing mutable values (e.g. previous state values, render count
          track karna).
          <br />
          - Preventing unnecessary re-renders (e.g. kisi value ko update karte
          rehna bina render trigger kiye).
          <br />- Integrating third-party libraries (e.g. canvas elements,
          animations, or external JS libraries jo DOM elements ke saath kaam
          karti hain).
        </p>
      </div>
    </div>
  );
};

export default RefExamples;
