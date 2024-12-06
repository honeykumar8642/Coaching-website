"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Herobg from "@/app/images/hero-background.png"
import Applyimage from "@/app/images/portrait-cute-little-girl-with-glasses-striped-t-shirt-with-notebooks-textbooks-her-hands-backpack-concept-education-photo-studio-yellow-background-space-text 1.png"

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    fatherName: '',
    fatherPhone: '',
    motherName: '',
    address: '',
    marks10th: '',
    marks12th: '',
    admissionClass: '',
  });

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <section className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center py-12" >
        
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-center text-[#1a7d85] mb-6">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Father's Name */}
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Father's Phone Number */}
            <div>
              <label htmlFor="fatherPhone" className="block text-sm font-medium text-gray-700">
                Father's Phone Number
              </label>
              <input
                type="tel"
                name="fatherPhone"
                id="fatherPhone"
                value={formData.fatherPhone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Mother's Name */}
            <div>
              <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                Mother's Name
              </label>
              <input
                type="text"
                name="motherName"
                id="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Village/Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* 10th Marks */}
            <div>
              <label htmlFor="marks10th" className="block text-sm font-medium text-gray-700">
                10th Marks (%)
              </label>
              <input
                type="number"
                name="marks10th"
                id="marks10th"
                value={formData.marks10th}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* 12th Marks */}
            <div>
              <label htmlFor="marks12th" className="block text-sm font-medium text-gray-700">
                12th Marks (%)
              </label>
              <input
                type="number"
                name="marks12th"
                id="marks12th"
                value={formData.marks12th}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Class for Admission */}
            <div>
              <label htmlFor="admissionClass" className="block text-sm font-medium text-gray-700">
                Class for Admission
              </label>
              <input
                type="text"
                name="admissionClass"
                id="admissionClass"
                value={formData.admissionClass}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ApplyNowForm;
