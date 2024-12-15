import React from 'react';

const JobPortal = () => {
    return (
        <div className="p-6 text-center bg-white shadow-md rounded-lg mx-4 my-8 md:mx-auto md:max-w-2xl">
            <h1 className="font-extrabold text-5xl mb-4 text-gray-800">Welcome to Job Ringer</h1>

            <p className="text-xl text-gray-700 mb-6">Your gateway to dream jobs and exceptional talent.</p>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
            </div>

            <p className="text-lg font-medium mb-4">Discover opportunities tailored just for you.</p>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
                {[
                    "#Fresher", "#WorkFromHome", "#WFH", "#IT", "#HR",
                    "#BackOffice", "#BPOJobs", "#ITES", "#Finance", "#Accounts",
                    "#Medical", "#Pharma", "#Manager", "#Developer",
                    "#Marketing", "#Engineering", "#NonGovernmentJobs"
                ].map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300 cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Search
            </button>
        </div>
    );
};

export default JobPortal;
