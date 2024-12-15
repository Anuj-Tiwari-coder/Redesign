import React from 'react';

const FeaturedEmployers = () => {
    const employers = [
        { id: 1, name: 'V Logo', logo: '/images/v_logo.png' },
        { id: 2, name: 'Anish', logo: '/images/anish.png' },
        { id: 3, name: 'Fox India', logo: '/images/fox_india.png' },
        { id: 4, name: 'Global Synergizers', logo: '/images/global_synergizers.png' },
        { id: 5, name: 'Driven Steel', logo: '/images/driven_steel.png' },
        { id: 6, name: 'Blue Fox', logo: '/images/blue_fox.png' },
        { id: 7, name: 'KEM Hospital Pune', logo: '/images/kem_hospital.png' },
    ];

    return (
        <section className="py-8 bg-gradient-to-b from-gray-50 to-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Employers</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {employers.map((employer) => (
                        <div
                            key={employer.id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-transform transform hover:scale-105"
                        >
                            <img
                                src={employer.logo}
                                // alt={employer.name}
                                className="h-16 mx-auto mb-3 object-contain"
                            />
                            <h3 className="text-sm font-semibold text-gray-700">{employer.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEmployers;
