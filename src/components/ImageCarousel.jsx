import { useEffect, useState, useRef } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false); // State to track manual interaction
    const timeoutRef = useRef(null); // Ref to store timeout for resuming auto-scroll

    useEffect(() => {
        // Set interval for auto-scrolling if not paused
        const interval = !pause && setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        // Cleanup interval on component unmount or when pause changes
        return () => clearInterval(interval);
    }, [images.length, pause]);

    const handleUserInteraction = (nextIndex) => {
        // Set current index based on interaction (next or previous)
        setCurrentIndex(nextIndex);

        // Pause auto-scroll for 5 seconds
        setPause(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Resume auto-scroll after 5 seconds of inactivity
        timeoutRef.current = setTimeout(() => {
            setPause(false);
        }, 5000);
    };

    const goToPrevious = () => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        handleUserInteraction(prevIndex);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        handleUserInteraction(nextIndex);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Carousel Image ${index}`}
                        className="w-full object-cover"
                    />
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-75 hover:opacity-100"
            >
                &#10094; {/* Left arrow symbol */}
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-75 hover:opacity-100"
            >
                &#10095; {/* Right arrow symbol */}
            </button>

            {/* Optional: Dots to show current image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
                        onClick={() => handleUserInteraction(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
