import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">WebSocket Kya Hai?</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed">
          WebSocket ek protocol hai jo client aur server ke beech full-duplex
          (bidirectional) communication ko enable karta hai. Yeh ek persistent
          connection establish karta hai jisme client aur server real-time data
          exchange kar sakte hain bina baar-baar HTTP requests bhejne ki zarurat
          ke.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Kaise Kaam Karta Hai?</h2>
        <h3 className="text-lg font-semibold mb-2">Initial Handshake:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            WebSocket connection ek normal HTTP request se start hoti hai.
          </li>
          <li>
            Client ek request bhejta hai <code>Upgrade: websocket</code> header
            ke saath.
          </li>
          <li>
            Agar server is request ko accept karta hai, toh HTTP se WebSocket
            protocol par switch ho jata hai.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 mt-4">
          Persistent Connection:
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Connection establish hone ke baad, dono taraf se data bina kisi nayi
            request ke continuously exchange ho sakta hai.
          </li>
          <li>
            Jab tak connection close nahi hota, client aur server ek doosre se
            real-time data bhejte rahte hain.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Advantages of WebSocket</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Real-Time Communication:</strong> WebSockets real-time
            communication ko enable karte hain, jo ideal hai real-time apps
            jaise ke chat applications, online gaming, or collaborative tools ke
            liye.
          </li>
          <li>
            <strong>Low Latency:</strong> Persistent connection hone ki wajah se
            data exchange kaafi fast hota hai, kyunki har baar nayi
            request-response ka overhead nahi hota.
          </li>
          <li>
            <strong>Efficient Data Transfer:</strong> WebSockets me sirf payload
            data bheja jata hai (without HTTP headers), jo bandwidth kaafi save
            karta hai.
          </li>
          <li>
            <strong>Full-Duplex Communication:</strong> Server aur client dono
            ek doosre ko bina kisi delay ke data bhej sakte hain, unlike
            traditional HTTP polling jisme client hi request initiate karta hai.
          </li>
          <li>
            <strong>Scalability for Real-Time Apps:</strong> Real-time apps
            jaise multiplayer games, collaborative editors, or live data feeds
            ke liye WebSocket kaafi scalable hota hai.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Disadvantages of WebSocket
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Server Resource Usage:</strong> Har WebSocket connection ke
            liye server ko ek persistent connection maintain karna padta hai, jo
            high resource usage ka sabab ban sakta hai.
          </li>
          <li>
            <strong>Complexity:</strong> WebSocket-based apps ka implementation
            aur maintenance complex ho sakta hai, especially jab large-scale
            distributed systems ke saath kaam karte hain.
          </li>
          <li>
            <strong>Security Concerns:</strong> WebSockets ka misuse kar ke DDoS
            attacks aur man-in-the-middle (MITM) attacks hone ka khatra hota hai
            agar proper security mechanisms (TLS/SSL) implement nahi kiye
            jayein.
          </li>
          <li>
            <strong>Browser Compatibility:</strong> Modern browsers WebSocket
            support karte hain, lekin kuch older browsers me compatibility
            issues ho sakte hain.
          </li>
          <li>
            <strong>Scalability Issues in Large Networks:</strong> Agar bahut
            saare concurrent users hain, toh server pe load kaafi zyada badh
            jata hai, jise handle karna difficult ho sakta hai without proper
            architecture.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Use Cases of WebSocket</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Chat Applications:</strong> Real-time messaging ke liye
            WebSockets kaafi effective hote hain, jaise WhatsApp Web ya Slack.
          </li>
          <li>
            <strong>Live Notifications:</strong> Jab real-time notifications
            push karne ki zarurat ho, jaise social media apps me notifications.
          </li>
          <li>
            <strong>Collaborative Tools:</strong> Google Docs jaise apps jisme
            multiple users ek document pe ek saath kaam karte hain.
          </li>
          <li>
            <strong>Online Gaming:</strong> Multiplayer games jisme low-latency
            real-time updates chahiye hote hain.
          </li>
          <li>
            <strong>Live Data Feeds:</strong> Financial apps jisme stock prices
            aur currency exchange rates real-time update hote hain.
          </li>
          <li>
            <strong>IoT (Internet of Things):</strong> IoT devices se real-time
            data exchange karne ke liye WebSocket kaafi useful hote hain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
