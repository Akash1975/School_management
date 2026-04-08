import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const menu = [
    { name: "Add School", path: "/" },
    { name: "List Schools", path: "/list" },
  ];

  return (
    <div
      className={`fixed top-0 ${
        isOpen ? "left-0" : "-left-64"
      } h-full w-64 bg-gradient-to-b from-blue-700 to-indigo-800 text-white p-5
  transition-all duration-300 ease-in-out z-50`}
    >
      {/* Logo */}
      <h1
        className={`text-xl font-bold mb-6 text-center ${!isOpen && "hidden"}`}
      >
        🏫 Dashboard
      </h1>

      {/* Menu */}
      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer
              ${
                location.pathname === item.path
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              {/* Icon */}
              <span>📌</span>

              {/* Text (hide when collapsed) */}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
