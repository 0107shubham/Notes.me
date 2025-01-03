import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <p className="text-gray-700 text-lg leading-relaxed">
        Internet ek aisa computer network hai jo duniya bhar ke billions of
        computing devices ko ek saath connect karta hai.
        <br />
        <strong>Billions of Users:</strong> Duniya mein billions log Internet ka
        use karte hain.
        <br />
        <strong>Billions of Devices:</strong> Har user ke paas multiple devices
        hote hain, jaise smartphones, laptops, smart TVs, aur IoT devices.
        <br />
        <strong>Millions of Applications:</strong> Internet par millions of
        applications available hain, jaise social media apps, gaming platforms,
        video streaming, aur online tools.
        <br />
        Internet ek tarah se duniya ke sabhi logon aur devices ke beech ek
        global connection ka kaam karta hai.
      </p>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Network Model</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Network ki complexity ko kam karne ke liye, usse ek stack of layers
          mein organize kiya jaata hai.
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Layers ka role:</strong> Har layer apne upar waali layer ko
            specific services provide karti hai aur neeche waali layers ko
            abstract kar deti hai.
          </li>
          <li>
            <strong>Simplified Design:</strong> Is tarah ka model design aur
            implementation ko easy banata hai, kyunki har layer apne kaam ke
            liye responsible hoti hai.
          </li>
        </ul>
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735812831/networkmodel_iwfu0e.webp"
          alt="net1"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Yeh layering approach communication process ko systematic aur
          efficient banati hai.
        </p>
      </div>
      <div>
        {" "}
        <h2 className="text-2xl font-bold text-gray-800 mt-8">
          Protocol Data Unit (PDU)
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Header aur footer ke saath data milkar ek PDU (Protocol Data Unit)
          banata hai jo agli layer ke liye use hota hai. Ye process tab tak
          repeat hota hai jab tak sabse neeche waali layer (physical layer ya
          network access layer) tak data pahunchta hai, jo data ko receiving
          device tak transmit karti hai.
        </p>
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735812831/networkmodel_iwfu0e.webp"
          alt="net1"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Receiving device is process ko ulta karta hai:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            Har layer par data ko de-encapsulate kiya jaata hai, aur header aur
            footer ki information operations ko direct karti hai.
          </li>
          <li>
            Jab saara processing complete hota hai, tab application finally data
            ka use karti hai.
          </li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ye process tab tak chalta hai jab tak saara data transmit aur receive
          na ho jaaye.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">
          Network Layers
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">
          Physical Layer
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ye layer physical devices ko represent karti hai jo computers ko
          interconnect karte hain aur unhe banane waali technologies ko define
          karti hai:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>Networking Cables</li>
          <li>Wi-Fi aur Cellular Hardware</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed">
          Is layer mein signals in media ke zariye bheje jaate hain.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">
          Data Link Layer
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ye layer signals ko samajhne ke liye ek common method define karne ke
          liye responsible hoti hai.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">
          Network Layer
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Network layer ka kaam hota hai data ko alag-alag networks ke
          collection ke across deliver karna.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Internet Protocol (IP):</strong> Ye protocol is layer mein use
          hota hai.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">
          Transport Layer
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ye layer ensure karti hai ki data sahi process ya application tak
          pahunch jaye.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">
          Application Layer
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Is layer ke protocols aapko web browse karne, email bhejne aur receive
          karne jaise kaam karne ki permission dete hain.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">
          TCP/IP Network Model
        </h2>
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735812831/networkmodel_iwfu0e.webp"
          alt="net1"
        />
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1735812831/networkmodel_iwfu0e.webp"
          alt="net1"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Is model ko samajhne ke liye layers ko ek package delivery ke example
          se samjha jaa sakta hai:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>
            <strong>Physical Layer:</strong> Delivery truck aur roads hai.
          </li>
          <li>
            <strong>Data Link Layer:</strong> Kaise delivery truck ek
            intersection se doosre tak repeat karte hue pahuchta hai.
          </li>
          <li>
            <strong>Network Layer:</strong> Kaunse roads lene hain address A se
            address B tak pahunchne ke liye.
          </li>
          <li>
            <strong>Transport Layer:</strong> Delivery driver ko kaise knock
            karna hai aur package appropriate person tak dena hai.
          </li>
          <li>
            <strong>Application Layer:</strong> Package ke andar ka content jo
            aap use karenge.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Protocol</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Protocol ek standard set of rules hota hai jo electronic devices ko ek
          doosre se communicate karne aur samajhne ki permission deta hai.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
          <li>Format of message (Message ka format)</li>
          <li>Order of messages (Messages ki order)</li>
        </ul>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Layer Name</th>
              <th className="py-2 px-4 border-b">Protocol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Application</td>
              <td className="py-2 px-4 border-b">HTTP, SMTP, ...</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Transport</td>
              <td className="py-2 px-4 border-b">TCP, UDP</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Network</td>
              <td className="py-2 px-4 border-b">IP</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Data Link</td>
              <td className="py-2 px-4 border-b">Ethernet, Wi-Fi</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Physical</td>
              <td className="py-2 px-4 border-b">10 Base T, 802.11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
