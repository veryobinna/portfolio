import React from 'react';
import myPhoto from '../assets/images/my-photo.jpg';

const Navbar = () => {
  return (

     <header className="w-full max-w-4xl flex justify-between items-center py-4 px-10">
     <div className="flex items-center">
       <img
         className="w-14 h-14 rounded-full"
         src={myPhoto}
         alt="Profile"
       />
     </div>
     <nav className="flex space-x-4">
       <a href="#about" className="text-gray-800 font-medium">
         About
       </a>
       <a href="#skills" className="text-gray-800 font-medium">
         Skills
       </a>
       <a href="#projects" className="text-gray-800 font-medium">
         Projects
       </a>
     </nav>
   </header>
  );
};

export default Navbar;
