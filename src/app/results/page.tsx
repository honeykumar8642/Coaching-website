"use client"
import React, { useState } from 'react';

const ResultsSection = () => {
  const [search, setSearch] = useState('');

  const results = [
    { id: 1, name: 'Puja Kumari', test: 'Math Test', score: '20%', date: '2024-12-01' },
    { id: 2, name: 'Jane Smith', test: 'Science Exam', score: '88%', date: '2024-12-02' },
    { id: 3, name: 'Emily Davis', test: 'History Quiz', score: '92%', date: '2024-12-03' },
    { id: 4, name: 'Michael Brown', test: 'English Exam', score: '85%', date: '2024-12-04' },
    { id: 4, name: 'Honey Kumar', test: 'English Exam', score: '100%', date: '2024-12-04' },
  ];

  const filteredResults = results.filter((result) =>
    result.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a7d85] mb-6">Student Results</h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by student name..."
            className="w-full md:w-1/2 px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#1a7d85] text-white">
                <th className="px-4 py-5">Student Name</th>
                <th className="px-4 py-5">Test/Exam</th>
                <th className="px-4 py-5">Score</th>
                <th className="px-4 py-5">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <tr key={result.id} className="text-center text-black border-b">
                    <td className="px-4 py-4">{result.name}</td>
                    <td className="px-4 py-4">{result.test}</td>
                    <td className="px-4 py-4">{result.score}</td>
                    <td className="px-4 py-4">{result.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 text-center col-span-4" >No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 bg-[#218c94] text-white rounded hover:bg-[#1a7d85] transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
