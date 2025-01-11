import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">
        SSE (Server-Sent Events) Kya Hai?
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed">
          SSE (Server-Sent Events) ek unidirectional communication protocol hai
          jo client ko server se real-time updates receive karne deta hai bina
          baar-baar request bhejne ki zarurat ke. SSE kaafi useful hota hai jab
          server ko continuously data push karna ho jaise live notifications,
          stock price updates, or live score feeds.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          SSE Kaise Kaam Karta Hai?
        </h2>
        <h3 className="text-lg font-semibold mb-2">
          Client-initiated Connection:
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Client ek HTTP request ke zariye SSE connection initiate karta hai.
          </li>
          <li>
            Server is connection ko persistent bana leta hai aur continuously
            data push karta hai jab bhi naya data available hota hai.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 mt-4">Event Stream:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>Server data ko text/event-stream format me send karta hai.</li>
          <li>
            Client is stream ko continuously listen karta hai aur UI ko
            real-time me update karta hai.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Advantages of SSE</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Simpler than WebSockets:</strong> SSE ka implementation
            kaafi simple hai kyunki yeh HTTP-based hai aur har browser ke saath
            achhe se kaam karta hai.
          </li>
          <li>
            <strong>Built-in Reconnection:</strong> Agar connection kisi wajah
            se break ho jata hai, client automatic reconnection attempt karta
            hai.
          </li>
          <li>
            <strong>Lightweight Protocol:</strong> SSE me sirf server-to-client
            communication hota hai, toh overhead WebSocket ke mukable kam hota
            hai jab sirf server se data push karna ho.
          </li>
          <li>
            <strong>No Extra Libraries:</strong> SSE ka support modern browsers
            me built-in hota hai, toh additional libraries ki zarurat nahi hoti.
          </li>
          <li>
            <strong>Ideal for Real-Time Data Streaming:</strong> SSE real-time
            data feeds ke liye kaafi effective hota hai jaise live score
            updates, news feeds, or IoT data streaming.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Limitations of SSE</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Unidirectional Communication:</strong> SSE sirf
            server-to-client data transfer support karta hai. Agar client ko bhi
            server ko real-time me data bhejna hai toh WebSocket zyada suitable
            hoga.
          </li>
          <li>
            <strong>Limited Browser Support:</strong> Modern browsers SSE ko
            support karte hain, lekin older versions me iska support nahi hota.
          </li>
          <li>
            <strong>Scalability Issues:</strong> Har client ke liye server ko ek
            persistent connection maintain karna padta hai, jo high load par
            scalability issues create kar sakta hai.
          </li>
          <li>
            <strong>No Binary Data Support:</strong> SSE sirf text-based data
            support karta hai. Agar aapko binary data (images, videos, etc.)
            transfer karna hai toh WebSocket zyada useful hoga.
          </li>
          <li>
            <strong>Limited in Cross-Origin Requests:</strong> SSE cross-origin
            requests ke liye CORS headers ki zarurat hoti hai, warna browser
            connection ko block kar deta hai.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Use Cases of SSE</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Live Notifications:</strong> Real-time updates jaise
            breaking news, live scores, or weather alerts ke liye SSE ideal hai.
          </li>
          <li>
            <strong>Stock Price Updates:</strong> Continuously changing data
            jaise stock prices aur cryptocurrency rates ke liye SSE kaafi
            effective hota hai.
          </li>
          <li>
            <strong>Live Feeds:</strong> Social media apps me live comments,
            likes, or real-time feed updates ke liye SSE ka use kiya ja sakta
            hai.
          </li>
          <li>
            <strong>IoT Data Streaming:</strong> IoT devices se continuous data
            stream karne ke liye SSE useful hai, jab data sirf server se client
            ko bhejna ho.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Comparison: SSE vs WebSocket
        </h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Feature</th>
              <th className="py-2 px-4 border-b">SSE</th>
              <th className="py-2 px-4 border-b">WebSocket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Communication</td>
              <td className="py-2 px-4 border-b">
                Unidirectional (Server → Client)
              </td>
              <td className="py-2 px-4 border-b">
                Bidirectional (Server ↔ Client)
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Protocol</td>
              <td className="py-2 px-4 border-b">HTTP-based</td>
              <td className="py-2 px-4 border-b">TCP-based</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Reconnection</td>
              <td className="py-2 px-4 border-b">
                Built-in automatic reconnection
              </td>
              <td className="py-2 px-4 border-b">
                Manual reconnection required
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Data Format</td>
              <td className="py-2 px-4 border-b">Text-based (UTF-8)</td>
              <td className="py-2 px-4 border-b">
                Supports both text and binary data
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Scalability</td>
              <td className="py-2 px-4 border-b">
                Limited (1 connection per client)
              </td>
              <td className="py-2 px-4 border-b">
                Better for large-scale real-time apps
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Complexity</td>
              <td className="py-2 px-4 border-b">Simple to implement</td>
              <td className="py-2 px-4 border-b">More complex to implement</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Use Cases</td>
              <td className="py-2 px-4 border-b">
                Live data feeds, notifications
              </td>
              <td className="py-2 px-4 border-b">
                Chat apps, multiplayer games
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
