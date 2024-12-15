import React from 'react';
import SearchBar from '../componets/SearchBar';
import ImageScroll from '../componets/ImageScroll';
import JobPortal from '../componets/JobPortal';
import FeaturedEmployers from '../componets/FeaturedEmployers';

const Home = () => (
    <div className=' mx-8'>
        
        <div className=' flex gap-4 '>
            <div>
                <SearchBar />
            </div>
            <div>
            <JobPortal />
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-semibold text-center my-6 ">Featured Jobs</h1>
        <ImageScroll />
        </div>
        <div>
            <h1 className="text-2xl font-semibold text-center my-6 ">Remote Jobs</h1>
        <ImageScroll />
        <FeaturedEmployers />
        </div>
    </div>
);


export default Home