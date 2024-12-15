import React from 'react';
import StatsTable from './StatsTable'; // Assuming StatsTable is another component in your project

const JobPortal = () => {
  return (
    <div className="p-8 text-center bg-white shadow-md rounded-lg mx-4 my-8 md:mx-auto md:max-w-2xl">
      <h1 className="font-extrabold text-5xl mb-4">Bringing you the Perfect Job!</h1>
      
      <p className="font-medium text-2xl mb-2">FREE JOB Postings and Much More.</p>
      <p className="text-xl text-gray-600 mb-4">11,000+ JOBS to Apply</p>

      <div className="m-2">
        <StatsTable />
      </div>

      <div className="flex gap-8 justify-center mt-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full md:w-auto">
          Register for free
        </button>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full md:w-auto">
          Post a job
        </button>
      </div>
    </div>
  );
};

export default JobPortal;
