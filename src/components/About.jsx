import React, { useState, useEffect } from 'react';

const About = () => {
  const weddingDate = new Date('2025-01-01T00:00:00');
  
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed mb-8">
          Here you can share your love story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="countdown mb-8">
          <h3 className="text-2xl font-bold mb-4" >Wedding Day Countdown</h3>
          {timerComponents.length ? (
            <div className="text-xl">
              {timerComponents}
            </div>
          ) : (
            <span>Time's up!</span>
          )}
        </div>
        <div className="wedding-details mb-8">
          <h3 className="text-2xl font-bold mb-4">Akad Nikah</h3>
          <p className="text-lg">
            Hari: Senin<br />
            Tanggal: 01 Januari 2025<br />
            Waktu: 10:00 WIB
          </p>
        </div>
        <button
          onClick={() => window.open('https://maps.google.com/?q=Your+Wedding+Location', '_blank')}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300"
        >
          Lihat Lokasi
        </button>
      </div>
    </section>
  );
};

export default About;
