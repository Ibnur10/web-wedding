import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wedding</h1>
        <nav>
          <a href="#about" className="mx-2">About</a>
          <a href="#gallery" className="mx-2">Gallery</a>
          <a href="#footer" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
