import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="w-full bg-blue-800 text-white flex justify-between p-2 items-center">
      <img src="/vite.svg" alt="Logo" className="" />
      <ul className="flex justify-between gap-4">
        <li className={location.pathname === "/" ? "underline font-bold" : ""}>
          <a href="/">Entity List</a>
        </li>
        <li
          className={
            location.pathname === "/create-entity" ? "underline font-bold" : ""
          }
        >
          <a href="/create-entity">Create Entity</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
