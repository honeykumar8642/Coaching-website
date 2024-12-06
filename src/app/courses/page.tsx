import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Master complex mathematical concepts and problem-solving techniques.',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      description: 'Understand the principles of physics with hands-on experiments.',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      title: 'Creative Writing',
      description: 'Enhance your writing skills with engaging creative exercises.',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      title: 'Biology Insights',
      description: 'Explore the wonders of biology with interactive learning modules.',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      title: 'World History',
      description: 'Dive deep into historical events and their impact on the modern world.',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 6,
      title: 'Chemistry Basics',
      description: 'Learn the foundations of chemistry with practical demonstrations.',
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
