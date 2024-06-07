import React from "react";
import myPhoto from "../assets/images/my-photo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full max-w-4xl flex justify-between items-center py-4 px-10">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-14 h-14 rounded-full" src={myPhoto} alt="Profile" />
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/about" className="text-gray-800 hover:text-blue-400 font-medium">
          About
        </Link>
        <Link to="/skills" className="text-gray-800 hover:text-blue-400 font-medium">
          Skills
        </Link>
        <Link to="/projects" className="text-gray-800 hover:text-blue-400 font-medium">
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
