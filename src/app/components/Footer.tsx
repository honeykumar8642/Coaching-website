"use client"
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0 pl-4">
            <h4 className="text-xl font-semibold mb-4" >Links</h4>
            
            
          <ul className='text-sm'>
            <Link href="/" ><li className=" cursor-pointer">Home</li></Link>
            <Link href="/about"><li className=" cursor-pointer">About</li></Link>
            <Link href="/courses"><li className=" cursor-pointer">Courses</li></Link>
            <Link href="/results"><li className=" cursor-pointer">Results</li></Link>
            <Link href="/teachers"><li className=" cursor-pointer">Contact Us</li></Link>
            <Link href="/students"><li className=" cursor-pointer">Apply Now</li></Link>
            
          
        </ul>
          </div>
          

          {/* Contact Details Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Details</h4>
            <p className="text-sm mb-2">Email: honeykumar8642@gmail.com</p>
            <p className="text-sm mb-2">Phone: +91 7739178704</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
          {/* Address */}
          <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Address</h4>
            <p className="text-sm mb-2">Coaching Name : The Future Study Point</p>
            <p className="text-sm mb-2">Owner's Name : Vicky , Ranjan $ its team</p>
            <p className="text-sm mb-2">Place : Jurawanpur</p>
            <p className="text-sm mb-2">PIN Code : 844504</p>
            
            
          
          </div>
          

          {/* Have a Question Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Have a Question?</h4>
            <form className="flex flex-col md:flex-row">
              <input type="text" placeholder="Ask your question..." className="w-full md:w-2/3 px-4 py-2 mb-2 md:mb-0 border border-gray-600 text-black ounded focus:outline-none focus:ring-2 focus:ring-gray-500" />
              <button type="submit" className="w-full md:w-1/3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2 mt-6">
        <p className="text-center text-sm">&copy; 2024 Future Study Point. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
