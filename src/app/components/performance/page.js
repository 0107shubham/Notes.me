import React from "react";

const MinimizeJavaScript = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-4">
        1. Minimize JavaScript​: Remove unused code, defer non-essential
        scripts, and split code using modules or dynamic imports to avoid
        blocking the main thread.
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Remove Unused Code (अनावश्यक कोड हटाएं)
        </h2>
        <p className="mb-2">
          Delete any code you don’t use, such as unused imports or components.
          For example, if you imported a file but didn’t use it, remove that
          import to reduce the size of your app.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm mb-4">
          <code>
            {`// Remove unused import
import UnusedComponent from './UnusedComponent';`}
          </code>
        </pre>
        <p>
          React में <strong>Webpack</strong> या <strong>esbuild</strong> जैसे
          टूल्स अनावश्यक कोड को बिल्ड के समय ऑटोमैटिकली हटा देते हैं
          (tree-shaking)।
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Defer Non-Essential Scripts (जरूरी नहीं स्क्रिप्ट्स को बाद में लोड
          करें)
        </h2>
        <p className="mb-2">
          Load scripts (like analytics or other tools) only when they are
          needed. This helps the important parts of your app load first, without
          delays.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm mb-4">
          <code>{`<script src="analytics.js" defer></script>`}</code>
        </pre>
        <p>
          React में, आप <strong>lazy loading</strong> का उपयोग करके बड़े और भारी
          components को बाद में लोड कर सकते हैं:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm">
          <code>
            {`const LazyComponent = React.lazy(() => import('./HeavyComponent'));`}
          </code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Split Code Using Modules (कोड को छोटे-छोटे हिस्सों में बांटना)
        </h2>
        <p className="mb-2">
          Break your app into smaller chunks (code-splitting) to load only the
          necessary parts of your app on demand. Use <strong>React.lazy</strong>{" "}
          and <strong>React.Suspense</strong> for dynamic imports.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm mb-4">
          <code>
            {`import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
          </code>
        </pre>
        <p>
          इस तरीके से आप अपने React ऐप का साइज कम कर सकते हैं, जिससे ऐप तेज़ और
          ज्यादा efficient बनेगा। 😊
        </p>
      </section>

      <div className="bg-gray-100 py-10 px-6">
        <h1 className="text-black text-4xl font-bold mb-4">
          2. Use Caching: Implement browser caching, HTTP caching headers, and
          service workers for offline support and faster repeat visits. explain
          all these concept in react in hIndi+enghlish
        </h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-teal-600 mb-6">
            Caching Concepts in React
          </h1>

          {/* Browser Caching */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Browser Caching (ब्राउज़र कैशिंग)
            </h2>
            <p className="text-gray-700 mb-2">
              Browser caching allows static files (like images, CSS, and
              JavaScript) to be saved in the browser for reuse, reducing load
              time on repeat visits.
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Example:</span> जब आप पहली बार
              वेबसाइट खोलते हो, तो फाइल्स सर्वर से डाउनलोड होती हैं और कैश में
              सेव होती हैं। अगली बार वही फाइल्स कैश से लोड होती हैं।
            </p>
            <code className="block bg-gray-200 text-sm p-4 rounded mb-2">
              Cache-Control: public, max-age=31536000
            </code>
          </div>

          {/* HTTP Caching Headers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. HTTP Caching Headers (HTTP कैशिंग हेडर्स)
            </h2>
            <p className="text-gray-700 mb-2">
              HTTP caching headers tell the browser how long to cache resources
              and when to fetch new ones. Common headers include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>
                <strong>Cache-Control:</strong> Defines caching rules.
              </li>
              <li>
                <strong>ETag:</strong> Tracks changes in files.
              </li>
            </ul>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Example in Next.js:</span>
            </p>
            <code className="block bg-gray-200 text-sm p-4 rounded mb-2">
              {`export default function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json({ message: 'Hello World!' });
}`}
            </code>
          </div>

          {/* Service Workers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Service Workers (सर्विस वर्कर्स)
            </h2>
            <p className="text-gray-700 mb-2">
              Service workers allow your React app to work offline by caching
              files in the background. This is especially useful for PWAs
              (Progressive Web Apps).
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Example:</span>
            </p>
            <code className="block bg-gray-200 text-sm p-4 rounded mb-2">
              {`self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll(['/index.html', '/static/js/main.js']);
    })
  );
});`}
            </code>
          </div>

          {/* Advantages */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advantages (फायदे)
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Faster Load Times (तेज़ लोडिंग)</li>
              <li>Offline Support (बिना इंटरनेट)</li>
              <li>Reduced Server Load (सर्वर का कम उपयोग)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimizeJavaScript;
