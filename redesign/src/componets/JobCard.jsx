import React from "react";

const JobCard = () => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-md p-4 w-72 relative bg-white">
            <div className="m-6">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 mb-8 rounded-full">
                    In Office job
                </div>
            </div>
            <h2 className="text-blue-700 font-bold text-lg hover:underline cursor-pointer">
                Associate-Client Engagement
            </h2>

            <p className="text-gray-700 font-medium mt-2">Goodera</p>

            <div className="text-gray-600 mt-3">
                <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>Full Time - Permanent</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span>📅</span>
                    <span>0 - 1 Years</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span>📍</span>
                    <span>Bengaluru / Bangalore / India</span>
                </div>
            </div>

            <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-1">
                Apply
                <span>➤</span>
            </button>
        </div>
    );
};

export default JobCard;
