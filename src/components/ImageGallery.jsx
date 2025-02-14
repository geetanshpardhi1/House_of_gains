import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

// Gallery image data
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Modern gym equipment at House of Gains, best gym in Indore"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Weight training area at House of Gains, gym in Indore"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80",
    alt: "Cardio section at House of Gains, best gym in Indore"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Yoga area at House of Gains, gym in Indore"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    alt: "Free weights section at House of Gains, best gym in Indore"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80",
    alt: "Functional training zone at House of Gains, gym in Indore"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=800&q=80",
    alt: "Stretching area at House of Gains, best gym in Indore"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    alt: "Personal training space at House of Gains, gym in Indore"
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-10 px-4">

      <div className="w-full max-w-screen-xl px-6 mt-20">
        <h1 className="text-5xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to House of Gains
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Experience the best gym in Indore at House of Gains. Our state-of-the-art equipment and modern training spaces will help you achieve your fitness goals.
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer backdrop-blur-md"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 z-50 bg-white/10 text-white hover:text-white hover:bg-white/20 transition-all duration-300 p-2 rounded-full backdrop-blur-sm border border-white/20"
              aria-label="Close popup"
            >
              <IoCloseCircle />
            </button>
            <div className="bg-gradient-to-b from-white/5 to-white/10 p-2 rounded-2xl backdrop-blur-sm">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-xl shadow-2xl cursor-default"
              />
              <p className="text-white/90 text-sm mt-4 px-2">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
