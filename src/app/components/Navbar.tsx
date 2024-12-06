'use client'
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#1d7a85] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 p-2 rounded-md">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          </div>
          <span className="text-xl font-semibold">Future Point</span>
        </div>

        {/* Nav Items */}
        <ul className={`md:flex space-x-6 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link href="/" ><li className=" cursor-pointer">Home</li></Link>
            <Link href="/about"><li className=" cursor-pointer">About</li></Link>
            <Link href="/courses"><li className=" cursor-pointer">Courses</li></Link>
            <Link href="/teachers"><li className=" cursor-pointer">Teachers</li></Link>
            <Link href="/students"><li className=" cursor-pointer">Students</li></Link>
            <Link href="/results"><li className=" cursor-pointer">Results</li></Link>
          
        </ul>
    
        {/* Buttons */}
        <div className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <button  className="bg-red-600  text-white py-2 px-4 rounded-3xl transition">Apply Now</button>
          <button onClick={Conatctlink} className="bg-[#1f828d] hover:bg-[#1d7a85] text-white py-2 px-4 rounded-3xl transition">Contact Us</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function Conatctlink(){
  return <Link href="/contact" ></Link>
}