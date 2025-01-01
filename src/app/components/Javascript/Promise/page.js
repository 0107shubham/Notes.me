// components/PromisesComponent.js
import React from "react";

const page = () => {
  return (
    <div className="prose mx-auto p-6">
      <h1>Promises in JavaScript</h1>
      <p>
        Promise JavaScript mein ek asynchronous operation ko handle karne ka ek
        tareeka hai. Yeh ek object hota hai jo future mein kisi value ko
        represent karta hai, jo kisi asynchronous operation (like data fetching,
        file reading, etc.) ke complete hone par available hoti hai. Promise ka
        use hum asynchronous code ko easily handle karne ke liye karte hain,
        jisme hum success aur failure cases ko handle kar sakte hain.
        <br /> Promise Ka Structure: Promise ek object hota hai jo teen states
        mein ho sakta hai:
        <br /> Pending: Jab asynchronous operation abhi complete nahi hua hai.
        <br /> Fulfilled: Jab asynchronous operation successfully complete ho
        jata hai aur result milta hai.
        <br /> Rejected: Jab asynchronous operation fail ho jata hai aur koi
        error aata hai.
      </p>

      <h2>Key Characteristics of Promises:</h2>
      <ul>
        <li>
          <strong>Asynchronous Operations:</strong> Promises are commonly used
          to handle asynchronous operations, such as fetching data from a
          server, reading a file, or executing a timer.
        </li>
      </ul>

      <h2>Promise Example:</h2>
      <pre>
        <code>
          {`let promise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

promise
  .then((result) => {
    console.log(result); // Agar success hai toh "Operation Successful"
  })
  .catch((error) => {
    console.log(error); // Agar failure hai toh "Operation Failed"
  })
  .finally(() => {
    console.log("Promise completed"); // Yeh chahe promise successful ho ya fail, dono cases mein chalega
  });`}
        </code>
      </pre>

      <h2 className=" mt-20 text-orange-500 text-2xl">Promise Chaining:</h2>
      <p>
        Aap ek promise ke result ko dusre promise mein pass kar sakte hain, jo
        "chaining" kehlata hai. Jab ek promise fulfill hota hai, tab uska result
        dusre promise mein pass hota hai.
      </p>
      <pre>
        <code>
          {`let promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then((result) => {
    console.log(result); // 10
    return result * 2; // Next promise ko result pass karte hain
  })
  .then((result) => {
    console.log(result); // 20
  });`}
        </code>
      </pre>

      <h2>Key Characteristics of Promises:</h2>
      <ul>
        <li>
          <strong>Asynchronous Operations:</strong> Promises are commonly used
          to handle asynchronous operations, such as fetching data from a
          server, reading a file, or executing a timer.
        </li>
        <li>
          <strong>States:</strong> A promise can be in one of three states:
          <ul>
            <li>
              <strong>Pending:</strong> The initial state, before the promise is
              resolved or rejected.
            </li>
            <li>
              <strong>Fulfilled (Resolved):</strong> The operation completed
              successfully, and the promise has a resulting value.
            </li>
            <li>
              <strong>Rejected:</strong> There was an error during the
              operation, and the promise has a reason for the failure.
            </li>
          </ul>
        </li>
        <li>
          <strong>Chaining:</strong> Promises support chaining through the{" "}
          <code>then</code> method, allowing you to sequence asynchronous
          operations in a readable manner.
        </li>
        <li>
          <strong>Error Handling:</strong> Promises have built-in error handling
          through the <code>catch</code> method, making it easier to manage and
          propagate errors in asynchronous code.
        </li>
      </ul>

      <h2>Why Do We Need Promises?</h2>
      <ul>
        <li>
          <strong>Avoiding Callback Hell (Callback Pyramids):</strong> Promises
          help to mitigate the problem of callback hell, where nesting callbacks
          leads to unreadable and hard-to-maintain code.
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>
              {`// Without Promises
asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      // ...
    });
  });
});

// With Promises
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => {
    // ...
  });`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Sequential Execution of Asynchronous Code:</strong> Promises
          provide a clean way to execute asynchronous operations sequentially,
          improving code readability.
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>
              {`// Without Promises
asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      // ...
    });
  });
});

// With Promises
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => {
    // ...
  });`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Error Handling:</strong> Promises simplify error handling by
          providing a centralized <code>catch</code> block to handle errors for
          a sequence of asynchronous operations.
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>
              {`asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .catch((error) => {
    console.error('An error occurred:', error);
  });`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Promise.all for Parallel Execution:</strong> Promises offer
          the <code>Promise.all</code> method, allowing parallel execution of
          multiple asynchronous operations and waiting for all of them to
          complete.
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>
              {`const promise1 = asyncOperation1();
const promise2 = asyncOperation2();

Promise.all([promise1, promise2])
  .then((results) => {
    const result1 = results[0];
    const result2 = results[1];
    // ...
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });`}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Promises Basics:</h2>
      <h3>Creating a Promise:</h3>
      <p>
        A promise represents the eventual completion or failure of an
        asynchronous operation. The <code>Promise</code> constructor takes a
        function with two parameters: <code>resolve</code> and{" "}
        <code>reject</code>.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  // If successful, call resolve with the result
  // If there's an error, call reject with the error
});`}
        </code>
      </pre>

      <h3>Resolving a Promise:</h3>
      <p>
        Use the <code>resolve</code> function when the asynchronous operation is
        successful.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`const successfulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operation succeeded!');
  }, 1000);
});`}
        </code>
      </pre>

      <h3>Rejecting a Promise:</h3>
      <p>
        Use the <code>reject</code> function when there's an error during the
        asynchronous operation.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Operation failed!');
  }, 1000);
});`}
        </code>
      </pre>

      <h2>Consuming Promises:</h2>
      <h3>
        Using <code>then</code> and <code>catch</code>:
      </h3>
      <p>
        The <code>then</code> method is used to handle the resolved value. The{" "}
        <code>catch</code> method is used to handle errors.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`successfulPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded!
  })
  .catch((error) => {
    console.error(error); // This won't be called in this example
  });`}
        </code>
      </pre>

      <h3>Chaining Promises:</h3>
      <p>
        Promises can be chained using <code>then</code>. Each <code>then</code>{" "}
        returns a new promise.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`successfulPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded!
    return 'New value';
  })
  .then((newValue) => {
    console.log(newValue); // Output: New value
  })
  .catch((error) => {
    console.error(error);
  });`}
        </code>
      </pre>

      <h3>Promise All:</h3>
      <p>
        <code>Promise.all</code> is used to wait for multiple promises to
        complete.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          {`const promise1 = Promise.resolve('One');
const promise2 = Promise.resolve('Two');

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // Output: ['One', 'Two']
  })
  .catch((error) => {
    console.error(error);
  });`}
        </code>
      </pre>

      <p>
        Promises are essential for handling asynchronous code in a clean and
        readable way, especially when working with features like fetching data
        from a server, handling events, or working with timers.
      </p>
    </div>
  );
};

export default page;
