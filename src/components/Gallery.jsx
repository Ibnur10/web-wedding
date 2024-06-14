import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/img/w7.jpg" alt="Gallery Image 1" className="w-full h-auto"/>
          <img src="/img/w8.jpg" alt="Gallery Image 2" className="w-full h-auto"/>
          <img src="/img/w9.jpg" alt="Gallery Image 3" className="w-full h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
