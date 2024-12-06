"use client"
import Image from 'next/image';

export default function Contact() {
  return (
    <>
    <h1 className='text-center text-4xl font-semibold text-[#1a7d85] pt-4 bg-white'>Contact US</h1>
    <div className="w-full h-screen flex flex-col pt-4 bg-white md:flex-row">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center bg-blue-200">
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src="https://media.istockphoto.com/id/1169711473/photo/ai-concept-communication-network.jpg?s=2048x2048&w=is&k=20&c=u926r8Fzr-FX6S4VS0xj3roomihQblprpn1zS_goYHU="
              alt="Student"
              layout="fill"
              objectFit="cover"
              className="opacity-75"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black opacity-70"></div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col p-8 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Love to hear from You</h1>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Just Send
            </button>
          </form>
        </div>
      </div>
    </>
    
  );
}
