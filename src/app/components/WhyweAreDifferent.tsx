"use client";

import React from "react";
import Image from "next/image";

const WhyweAreDifferent = () => {
  return (
    <div className="bg-white text-black relative">
      <h1 className="text-4xl text-[#1a7b85] text-center font-semibold pt-4">
        Why We Are Different From Other
      </h1>
      <p className="text-lg text-center line-clamp-2 mt-4">We have highly Professional mentors around the globe. we have great features than any other platform.</p>
      <div className=" relative grid  grid-cols-4  gap-8 min-h-[50vh] w-full p-6">
        <div className="h-20rem w-20rem bg-[#1a7b85] relative ">
          <div className=" relative h-[60%] w-full ">
            <Image fill
        className="object-cover absolute inset-0" src="https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></Image>
          </div>
          <h2 className="text-xl text-center text-white">Best Teachers</h2>
          <p className="text-lg p-2 text-center ">
            We have highly skilled teachers with experience
          </p>
          
        </div>
        <div className="h-20rem w-20rem bg-[#1a7b85] ">
          <div className=" relative h-[60%] w-full ">
          <Image fill
        className="object-cover absolute inset-0" src="https://media.gettyimages.com/id/498337698/vector/education-concept.jpg?s=1024x1024&w=gi&k=20&c=V3MDnBcGmxZOotuUKiLQciFC2z6OUgeApoJ0aGWXy-Q=" alt=""></Image>
          </div>
          <h2 className="text-xl text-center text-white">Best Curriculum</h2>
          <p className="text-lg p-2 text-center">
            We have our structure easy & understable
          </p>
        </div>
        <div className="h-20rem w-20rem bg-[#1a7b85] ">
          <div className=" relative h-[60%] w-full ">
          <Image fill
        className="object-cover absolute inset-0" src="https://media.gettyimages.com/id/1070643406/photo/counselling-appointment-for-college-student.jpg?s=1024x1024&w=gi&k=20&c=scaooOqPL-T4V4oKQiSVjGx2fOqRpw2ijElAExF9fLQ=" alt=""></Image>
          </div>
          <h2 className="text-xl text-center text-white">1 to 1 support</h2>
          <p className="text-lg p-2 text-center">
            We give 1 to 1 support to our students
          </p>
        </div>
        <div className="h-20rem w-20rem bg-[#1a7b85] ">
          <div className=" relative h-[60%] w-full ">
          <Image fill
        className="object-cover absolute inset-0" src="https://images.pexels.com/photos/29614944/pexels-photo-29614944/free-photo-of-big-data-book-on-work-desk-modern-office-scene.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></Image>
          </div>
          <h2 className="text-xl text-center text-white">100+ Courses</h2>
          <p className="text-lg p-2 text-center">
            We have more than 100+ top notch{" "}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default WhyweAreDifferent;
