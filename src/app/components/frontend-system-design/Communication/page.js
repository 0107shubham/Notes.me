import React from "react";
import Link from "next/link";

const Category = [
  {
    id: 1,
    name: "Polling",
    link: "Polling",
  },
  {
    id: 2,
    name: "websocket",
    link: "websocket",
  },
  {
    id: 3,
    name: "sse-webhooks",
    link: "sse-webhooks",
  },
  {
    id: 3,
    name: "web-hooks",
    link: "web-hooks",
  },
];

const Page = () => {
  return (
    <div className="w-full bg-gray-400 h-screen overflow-y-scroll p-4">
      <ul className="flex flex-col gap-3">
        {Category.map((items) => (
          <li className="bg-slate-800 text-white p-2 rounded" key={items.id}>
            <Link
              href={`/components/frontend-system-design/Communication/${items.link}`}
            >
              <p>{items.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
