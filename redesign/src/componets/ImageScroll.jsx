import React, { useRef, useEffect } from "react";
import JobCard from "./JobCard";

const ImageScroll = () => {
    const scrollContainer = useRef(null);

    // Duplicate the cards for infinite effect
    const cards = Array.from({ length: 10 }); // Original cards
    const infiniteCards = [...cards, ...cards, ...cards]; // Duplicate cards for smooth infinite scroll

    // Scroll smoothly to the right
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
            // Reset scroll position when reaching the end
            if (
                scrollContainer.current.scrollLeft >=
                scrollContainer.current.scrollWidth / 2
            ) {
                scrollContainer.current.scrollLeft =
                    scrollContainer.current.scrollWidth / 4;
            }
        }
    };

    // Scroll smoothly to the left
    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
            // Reset scroll position when reaching the beginning
            if (scrollContainer.current.scrollLeft <= scrollContainer.current.scrollWidth / 4) {
                scrollContainer.current.scrollLeft =
                    scrollContainer.current.scrollWidth / 2;
            }
        }
    };

    // Auto-scroll effect every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 3000);

        // Initial scroll position to the middle for infinite effect
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth / 4;
        }

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full">
            <div
                ref={scrollContainer}
                className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory space-x-4 p-4 hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {infiniteCards.map((_, index) => (
                    <div key={index} className="snap-center flex-shrink-0">
                        <JobCard />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 z-10"
            >
                &#8592;
            </button>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 z-10"
            >
                &#8594;
            </button>
            <style>
                {`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </div>
    );
};

export default ImageScroll;
