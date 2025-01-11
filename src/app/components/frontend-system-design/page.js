import React from "react";
import Link from "next/link";

const Category = [
  {
    id: 1,
    name: "CommunicationProtocall",
    link: "CommunicationProtocall",
  },
  {
    id: 2,
    name: "Communication",
    link: "Communication",
  },
];

const page = () => {
  return (
    <div className="w-full bg-gray-400 h-screen overflow-y-scroll p-4">
      <ul className="flex flex-col gap-3">
        {Category.map((items) => (
          <li className="bg-slate-800 text-white p-2 rounded" key={items.id}>
            <Link href={`/components/frontend-system-design/${items.link}`}>
              <p>{items.name}</p>
            </Link>
            {items.category && (
              <ul className="ml-4 mt-2">
                {items.category.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="bg-slate-600 text-white p-2 rounded mt-1"
                  >
                    <Link
                      href={`/components/frontend-system-design/${subItem.link}`}
                    >
                      <p>{subItem.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
