// components/PromisesComponent.js
import React from "react";

const PromisesComponent = () => {
  return (
    <div className="prose mx-auto p-6">
      <h1>Promises in JavaScript</h1>
      <p>
        Promises are a JavaScript feature that provides a more structured and
        readable way to work with asynchronous code. They represent the eventual
        completion or failure of an asynchronous operation, allowing you to
        handle the result or error in a more organized and manageable manner.
      </p>

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

export default PromisesComponent;
