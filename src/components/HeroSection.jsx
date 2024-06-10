import React from 'react';

const HeroSection = () => {
  const handleScroll = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/w6.jpeg')" }}>
      <div className="flex items-center justify-center h-full bg-gray-800 bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">We Are Getting Married!</h1>
          <p className="mt-4 text-xl">Save the Date: 01 January 2025</p>
          <button
            onClick={handleScroll}
            className="mt-8 px-6 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-200 transition duration-400"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
