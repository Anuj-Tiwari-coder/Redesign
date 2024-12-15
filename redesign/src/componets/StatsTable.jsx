import React from "react";

const StatsTable = () => {
    const stats = [
        { label: "Jobs Posted", value: 32115 },
        { label: "Jobs Filled", value: 15153 },
        { label: "Employers", value: 20361 },
        { label: "Active Users", value: 1297059 },
    ];

    return (
        <div className="gap-10 bg-blue-50 p-10 rounded-lg shadow-md">
            <table className="w-full text-center border-collapse">
                <thead>
                    <tr className="border-b-2 border-blue-200">
                        {stats.map((stat, index) => (
                            <th
                                key={index}
                                className="text-blue-600  text-xl font-semibold p-1"
                            >
                                {stat.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {stats.map((stat, index) => (
                            <td key={index} className="text-blue-800 text-2xl font-bold py-3">
                                {stat.value.toLocaleString()}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StatsTable;
