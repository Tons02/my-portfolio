import { useEffect, useState, useRef } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const interval = !pause && setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length, pause]);

    const handleUserInteraction = (nextIndex) => {
        setCurrentIndex(nextIndex);
        setPause(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
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
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden border-4 border-gray-600 bg-gray-800 rounded-lg">
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
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-75 hover:opacity-100"
            >
                &#10095;
            </button>

            {/* Dots outside the carousel */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4 mb-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-400'}`}
                        onClick={() => handleUserInteraction(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
