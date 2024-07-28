import React from "react";
import Link from "next/link";

const Category = [
  {
    id: 1,
    name: "Node",
    link: "node",
    category: [{ id: 1, name: "", link: "PromisesComponent" }],
  },
  {
    id: 2,
    name: "Express",
    link: "express",
    category: [
      { id: 1, name: "Express Server", link: "expressServer" },
      { id: 2, name: "Middlewares and authorization", link: "Middlewares" },
    ],
  },
  {
    id: 3,
    name: "JAVAScript",
    link: "javascript",
    category: [{ id: 1, name: "Promise", link: "PromisesComponent" }],
  },
  {
    id: 4,
    name: "Database",
    link: "",
    category: [{ id: 1, name: "Prisma", link: "prisma" }],
  },
];

const Sidebar = () => {
  return (
    <div className="w-full bg-gray-400 h-screen p-4">
      <ul className="flex flex-col gap-3">
        {Category.map((items) => (
          <li className="bg-slate-800 text-white p-2 rounded" key={items.id}>
            <Link href={`/components/${items.link}`}>
              <p>{items.name}</p>
            </Link>
            {items.category && (
              <ul className="ml-4 mt-2">
                {items.category.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="bg-slate-600 text-white p-2 rounded mt-1"
                  >
                    <Link href={`/components/${subItem.link}`}>
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

export default Sidebar;
