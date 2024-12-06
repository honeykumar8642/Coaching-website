"use client"
import React from 'react';

const TeacherSection = () => {
  const teachers = [
    {
      id: 1,
      name: 'Ms. Emily Smith',
      subject: 'Mathematics',
      description: 'An expert in advanced mathematics with 10+ years of teaching experience.',
      image: 'https://as2.ftcdn.net/v2/jpg/04/05/29/89/1000_F_405298963_2A9tdEd4EJpmR8fJc9pIdnL9kndFjJsb.jpg',
    },
    {
      id: 2,
      name: 'Ms. Emily Johnson',
      subject: 'Science',
      description: 'Specializes in Physics and Chemistry, with a passion for practical learning.',
      image: 'https://as2.ftcdn.net/v2/jpg/03/18/40/09/1000_F_318400976_8xA8EmS76mI0wZKP9gF0H9h4DDYO7CI6.jpg',
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      subject: 'History',
      description: 'Holds a PhD in History and loves sharing insights into ancient civilizations.',
      image: 'https://as1.ftcdn.net/v2/jpg/01/04/93/90/1000_F_104939026_zfARs9vI4VUlXRU72XJTHXcV8VMIJD38.jpg',
    },
    {
      id: 4,
      name: 'Mrs. Sarah Williams',
      subject: 'English',
      description: 'A linguist with a focus on creative writing and literature.',
      image: 'https://as2.ftcdn.net/v2/jpg/01/13/31/65/1000_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg',
    },
    {
      id: 9,
      name: 'Mr. John Smith',
      subject: 'Mathematics',
      description: 'An expert in advanced mathematics with 10+ years of teaching experience.',
      image: 'https://as1.ftcdn.net/v2/jpg/02/73/14/56/1000_F_273145672_vfC87aUAPDOJVqUqP09gY7m1sDeTSDCE.jpg',
    },
    {
      id: 10,
      name: 'Ms. Emily Johnson',
      subject: 'Science',
      description: 'Specializes in Physics and Chemistry, with a passion for practical learning.',
      image: 'https://as1.ftcdn.net/v2/jpg/01/94/36/38/1000_F_194363896_ZVQcHOf5L7zAmG7a60QC8TLUplTszgeO.jpg',
    },
    
    {
      id: 5,
      name: 'Mr. John Smith',
      subject: 'Mathematics',
      description: 'An expert in advanced mathematics with 10+ years of teaching experience.',
      image: 'https://as1.ftcdn.net/v2/jpg/02/46/42/42/1000_F_246424242_bcEVQXsP3nnZW0t5N4PY0R6vDeLUArYc.jpg',
    },
    {
      id: 6,
      name: 'Ms. Emily Johnson',
      subject: 'Science',
      description: 'Specializes in Physics and Chemistry, with a passion for practical learning.',
      image: 'https://as1.ftcdn.net/v2/jpg/02/65/18/30/1000_F_265183063_Qhws5HebqXncNjlIW3WknSwDIjq5FCiV.jpg',
    },
    {
      id: 7,
      name: 'Dr. Michael Brown',
      subject: 'History',
      description: 'Holds a PhD in History and loves sharing insights into ancient civilizations.',
      image: 'https://as2.ftcdn.net/v2/jpg/01/71/56/67/1000_F_171566781_kJGO4GlRpGiUAXLoYuWhCXWbTDjdYZI9.jpg',
    },
    {
      id: 8,
      name: 'Mrs. Sarah Williams',
      subject: 'English',
      description: 'A linguist with a focus on creative writing and literature.',
      image: 'https://as1.ftcdn.net/v2/jpg/05/62/38/18/1000_F_562381894_qC86VIwYdzNzcAIgc3cDNwbQlkx5fcoO.jpg',
    },
  ];

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a7d85] mb-8">Meet Our Teachers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-600">{teacher.subject}</p>
                <p className="mt-2 text-gray-600">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
