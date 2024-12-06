"use client"
import React from 'react';
import { motion } from 'framer-motion';

const StudentSection = () => {
  const topStudents = [
    {
      id: 1,
      name: 'John Doe',
      rank:"1",
      achievement: 'Top Scorer in Mathematics',
      image: 'https://media.istockphoto.com/id/1129859002/photo/college-student-outdoor-stock-image.jpg?s=2048x2048&w=is&k=20&c=cd_CJlMhNjBy_NM_4bT36RCfiWi9RucBOGP4RWDAgSs=',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rank:"2",
      achievement: 'Top Scorer in Science',
      image: 'https://media.istockphoto.com/id/1158971390/photo/university-student-stock-images.jpg?s=2048x2048&w=is&k=20&c=qyuqDk9vcEFnmpTReNgSNf6We0rxcnfsCa3XvW70mwo=',
    },
    {
      id: 3,
      name: 'Emily Davis',
      rank:"3",
      achievement: 'Top Scorer in English',
      image: 'https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=2048x2048&w=is&k=20&c=tEE-C5-IAeXkdpoE0PAFSidP56_wSsQamNFDH9D-GmE=',
    },
  ];

  const otherStudents = [
    { id: 4, name: 'Michael Brown', achievement: 'History Excellence', image: 'https://media.istockphoto.com/id/487556490/photo/happy-smiling-college-student-with-laptop.jpg?s=2048x2048&w=is&k=20&c=El_7a8AVC5KwXa6YJwAWbhzb4pmQOtCyBT27iMDEyZM=' },
    { id: 5, name: 'Sarah Wilson', achievement: 'Physics Top Performer', image: 'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=jH-i5rEcMlrpgSk1-485MLwC8mnzth8PJYYkfgFz2KQ=' },
    { id: 6, name: 'David Lee', achievement: 'Creative Writing Genius', image: 'https://media.istockphoto.com/id/2052475296/photo/portrait-of-indian-young-woman-wearing-casual-clothing-isolated-on-white-background-stock.jpg?s=2048x2048&w=is&k=20&c=A62oufXb-6k1KMVELv2eGt7WE8D-jQFdJxnXCj_VTL0=' },
    { id: 7, name: 'Laura Adams', achievement: 'Biology Excellence', image: 'https://media.istockphoto.com/id/1159240048/photo/elegant-businesswoman-standing-in-office.jpg?s=2048x2048&w=is&k=20&c=huQJ79-7hbM4G88l4TQaM8QSYhGLuwpZ8P_eChTY4lw=' },
  ];

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a7d85] mb-8">Excellence in Every Step</h2>

        {/* Top Students */}
        <h1 className='text-center text-3xl text-white pb-4'>Our Top 3 Students</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mx-4">
          {topStudents.map((student) => (
            <motion.div
              key={student.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1a7d85]">{student.name}</h3>
                <h4 className="text-gray-600 mt-2">Rank : 0{student.rank}</h4>
                <p className="text-gray-600 mt-2">{student.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Students */}
        <h1 className='text-center text-3xl text-white pb-4'>Our Remaining Top  Students</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1a7d85]">{student.name}</h3>
                <p className="text-gray-600 mt-1">{student.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
