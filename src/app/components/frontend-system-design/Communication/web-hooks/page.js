import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Webhooks Kya Hain?</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed">
          Webhooks ek event-driven mechanism hain jisme ek application doosre
          application ko real-time updates bhejta hai jab koi specific event
          trigger hota hai. Yeh mechanism client-server communication ko
          efficient banata hai kyunki yeh polling ke bina real-time data
          synchronization allow karta hai.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Webhooks tab kaam aate hain jab ek application ko doosri application
          ke event ke baare me turant pata lagana hota hai, jaise:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>Jab koi user signup kare.</li>
          <li>Jab payment complete ho jaye.</li>
          <li>Jab koi order place ho jaye.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Webhooks Kaise Kaam Karte Hain?
        </h2>
        <h3 className="text-lg font-semibold mb-2">Webhook Registration:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Client application ek webhook URL provide karti hai jo events ke
            liye notify hone ke liye ready hoti hai.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 mt-4">Event Trigger:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Jab server par koi specific event hota hai (jaise payment success,
            new order creation), server webhook URL par ek HTTP POST request
            bhejta hai.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 mt-4">Request Handling:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Client application webhook se aayi request ko process karti hai aur
            necessary actions leti hai (jaise database update karna,
            notification bhejna).
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Use Case of Webhooks</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Payment Notifications:</strong> Jab bhi koi transaction
            complete hoti hai, payment gateway webhook ke zariye merchant ko
            notify karta hai.
          </li>
          <li>
            <strong>GitHub Integration:</strong> Jab GitHub repository me koi
            commit ya pull request hota hai, toh CI/CD tools ko webhook ke
            through notify kiya jata hai.
          </li>
          <li>
            <strong>Messaging Services:</strong> Jab Slack ya Discord par koi
            message aata hai, toh webhook doosre integrations ko notify karta
            hai.
          </li>
          <li>
            <strong>E-commerce:</strong> Order creation, cancellation, ya
            shipment ke updates ke liye webhook ka use hota hai real-time
            synchronization ke liye.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Advantages of Webhooks</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Real-Time Communication:</strong> Webhooks ke zariye
            real-time updates milte hain bina client ko baar-baar request bhejne
            ki zarurat ke.
          </li>
          <li>
            <strong>Efficient:</strong> Polling ke comparison me webhooks
            efficient hote hain kyunki unnecessary requests avoid ki jati hain.
          </li>
          <li>
            <strong>Scalable:</strong> Webhooks ko large-scale applications me
            use kiya ja sakta hai kyunki sirf relevant events notify kiye jate
            hain.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Limitations of Webhooks</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Reliability Issues:</strong> Agar webhook receiver down hai
            ya request fail ho gayi, toh notification lost ho sakti hai jab tak
            retry mechanism na ho.
          </li>
          <li>
            <strong>Security Concerns:</strong> Webhook URLs ko guess karke
            attacker fake requests bhej sakta hai. Iska solution signing secret
            ya HMAC verification se kiya jata hai.
          </li>
          <li>
            <strong>Debugging Complexity:</strong> Webhooks ka debugging
            difficult hota hai kyunki sender aur receiver alag systems hote
            hain.
          </li>
          <li>
            <strong>Latency Sensitivity:</strong> Agar webhook receiver slow hai
            ya processing me time lagta hai, toh delay ho sakta hai.
          </li>
          <li>
            <strong>Duplicate Events:</strong> Kabhi-kabhi same event multiple
            baar receive ho sakta hai, isliye idempotency ensure karni hoti hai.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Concerns in Using Webhooks
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Error Handling:</strong> Proper retry mechanism hona chahiye
            agar webhook request fail hoti hai.
          </li>
          <li>
            <strong>Security:</strong> Webhooks ko secure karna zaroori hai by:
            <ul className="list-disc list-inside ml-6">
              <li>Using HTTPS for encrypted communication.</li>
              <li>Verifying incoming requests using a signature or secret.</li>
            </ul>
          </li>
          <li>
            <strong>Scalability:</strong> Agar bahut saare events generate hote
            hain, toh webhook receiver ko scale karna padta hai load handle
            karne ke liye.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
