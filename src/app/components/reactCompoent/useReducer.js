"use client";
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">useReducer Hook in React</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">useReducer kya hota hai?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          useReducer ek React hook hai jo complex state management ke liye use
          hota hai. Yeh hook tab useful hota hai jab:
          <br />
          - State kaafi complex hoti hai, ya multiple state variables hote hain.
          <br />
          - State transitions predictable hone chahiye, jaise ki Redux mein hoti
          hain.
          <br />- Ek action par alag-alag state updates perform karni hoti hain.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">useReducer ka syntax</h2>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`const [state, dispatch] = useReducer(reducer, initialState);`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          - <strong>reducer:</strong> Ek function jo current state aur action ko
          input leta hai aur nayi state return karta hai.
          <br />- <strong>initialState:</strong> State ka initial value.
          <br />- <strong>state:</strong> Current state ka value.
          <br />- <strong>dispatch:</strong> Ek function jo action ko trigger
          karta hai (jaise Redux mein hota hai).
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Example with Explanation</h2>
        <h3 className="text-lg font-semibold mb-2">
          1. Simple Counter Example
        </h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">
            {`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;`}
          </code>
        </pre>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Explanation:</strong>
          <br />- <strong>initialState:</strong> count ki initial value{" "}
          {`{ count: 0 }`} hai.
          <br />- <strong>reducer function:</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Yeh ek pure function hai jo state aur action
          ko input leta hai aur ek nayi state return karta hai.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Har action ka ek type hota hai (jaise
          'increment', 'decrement', 'reset').
          <br />- <strong>dispatch function:</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Jab user button click karta hai, dispatch
          function ko call kiya jata hai.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;dispatch ko ek object pass kiya jata hai jisme
          type property hoti hai.
          <br />- <strong>State Update:</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Reducer function ko current state aur action
          diya jata hai, aur yeh function nayi updated state return karta hai.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;React automatically UI ko update karta hai jab
          nayi state milti hai.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Kab useState ki jagah useReducer use karna chahiye?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          - Jab state management complex ho aur ek hi state par multiple actions
          perform karne ho.
          <br />
          - Jab state transitions predictable rakhni ho (jaise ek finite state
          machine mein hoti hain).
          <br />- Jab aapko ek centralized state management chahiye (Redux ki
          tarah) bina external library use kiye.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Advantages of useReducer</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          - Complex state transitions ko handle karna easy ho jata hai.
          <br />
          - Reducer function ke saath, actions aur state changes ka structure
          clear aur predictable hota hai.
          <br />- dispatch function use karke ek clean API milta hai, jisme
          actions ko trigger kiya ja sakta hai.
        </p>
      </div>
    </div>
  );
}

export default Reducer;
