import React from "react";

const page = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        1. HTTP/HTTPS (Hypertext Transfer Protocol/Secure) Kya Hai?
      </h2>
      <p className="text-gray-800 text-lg leading-relaxed">
        HTTP ek stateless protocol hai jo client aur server ke beech data
        exchange karne ke liye use hota hai. HTTPS iska secure version hai, jo
        data ko encryption ke sath transfer karta hai, ensuring ki data safe
        rahe aur unauthorized access na ho.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        Browser ek HTTP/HTTPS request bhejta hai server ko. Server request
        process karta hai aur response wapas bhejta hai. Agar HTTPS use ho raha
        hai, toh SSL/TLS ke through data encrypt hota hai.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        HTTP Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Client (browser) ek HTTP request bhejta hai server ko.
        <br />
        2. Server request ko receive karta hai aur process karta hai.
        <br />
        3. Server response bhejta hai client ko, jo HTML, CSS, JavaScript,
        images, etc. ho sakta hai.
        <br />
        4. Client response ko receive karta hai aur webpage ko render karta hai.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        HTTPS Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Client server se secure connection establish karne ke liye SSL/TLS
        handshake initiate karta hai.
        <br />
        2. Server apna SSL certificate client ko bhejta hai.
        <br />
        3. Client certificate verify karta hai aur session keys generate karta
        hai.
        <br />
        4. Client aur server encrypted connection establish karte hain.
        <br />
        5. Client HTTP request bhejta hai server ko encrypted form mein.
        <br />
        6. Server request ko decrypt karta hai, process karta hai aur encrypted
        response wapas bhejta hai.
        <br />
        7. Client response ko decrypt karta hai aur webpage ko render karta hai.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        WebSockets Kya Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        WebSockets ek protocol hai jo client aur server ke beech persistent
        connection establish karta hai. Yeh real-time, bi-directional
        communication allow karta hai, jo HTTP ke comparison mein zyada
        efficient hai.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        WebSockets Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Client ek WebSocket connection establish karne ke liye server ko
        handshake request bhejta hai.
        <br />
        2. Server handshake request accept karta hai aur WebSocket connection
        establish hota hai.
        <br />
        3. Ek baar connection establish ho jata hai, client aur server dono ek
        dusre ko messages bhej sakte hain.
        <br />
        4. Yeh connection tab tak open rehta hai jab tak client ya server isse
        explicitly close nahi karte.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        3. REST API (Representational State Transfer) Kya Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        REST API ek architectural style hai jo web services ko design karne ke
        liye use hota hai. Yeh HTTP protocols ka use karta hai resources ko
        access aur manipulate karne ke liye.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        REST API Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Client ek HTTP request bhejta hai server ko specific resource ko
        access ya manipulate karne ke liye.
        <br />
        2. Server request ko process karta hai aur appropriate response wapas
        bhejta hai.
        <br />
        3. REST APIs HTTP methods (GET, POST, PUT, DELETE) ka use karti hain
        resources ko access aur manipulate karne ke liye.
        <br />
        4. REST APIs stateless hoti hain, matlab har request independent hoti
        hai aur server ko client ke previous requests ke baare mein kuch nahi
        pata hota.
      </p>
      <h3 className="text-xl  font-semibold text-orange-600 mt-4 mb-2">
        GraphQL Kya Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        GraphQL ek query language hai jo APIs ke liye use hoti hai aur ek
        runtime environment provide karti hai jo queries ko execute karta hai.
        Yeh client ko allow karta hai ki woh specify kare ki usse kya data
        chahiye, aur server se exactly wahi data wapas milta hai.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        GraphQL Kaise Kaam Karta Hai?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Client ek GraphQL query bhejta hai server ko, jisme woh specify karta
        hai ki usse kya data chahiye.
        <br />
        2. Server query ko receive karta hai aur GraphQL runtime use karke query
        ko execute karta hai.
        <br />
        3. Server client ko exactly wahi data wapas bhejta hai jo usne query
        mein specify kiya tha.
        <br />
        4. GraphQL ek single endpoint use karta hai, unlike REST APIs jo
        multiple endpoints use karti hain.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
        GraphQL REST API Ki Jagah Kyo Use Karte Hain?
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed">
        1. Flexible Data Retrieval: GraphQL client ko allow karta hai ki woh
        specify kare ki usse kya data chahiye, jo over-fetching aur
        under-fetching ko prevent karta hai.
        <br />
        2. Single Endpoint: GraphQL ek single endpoint use karta hai, jo API
        management ko simplify karta hai.
        <br />
        3. Strongly Typed Schema: GraphQL ek strongly typed schema use karta
        hai, jo API ko self-documenting banata hai aur errors ko reduce karta
        hai.
        <br />
        4. Real-time Data: GraphQL subscriptions allow karti hain real-time data
        updates, jo real-time applications ke liye beneficial hai.
      </p>
    </div>
  );
};

export default page;
