'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';
import ImageModal from './ImageModal';

interface ImageCollageProps {
  images: string[];
  children: React.ReactNode;
}

const sweetMessages = [
  "You're my everything.",
  "My heart is yours.",
  "You make me the happiest person.",
  "I love you more than words can say.",
  "You are the sunshine of my life.",
  "Every moment with you is a treasure.",
  "You're the one I've always dreamed of.",
  "I'm so lucky to have you.",
  "You're my soulmate.",
  "I fall for you more and more every day.",
];

const ImageCollage: React.FC<ImageCollageProps> = ({ images, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [randomMessage, setRandomMessage] = useState('');

  const openModal = (src: string) => {
    setSelectedImage(src);
    setRandomMessage(sweetMessages[Math.floor(Math.random() * sweetMessages.length)]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
    setRandomMessage('');
  };

  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col w-full min-h-screen p-4">
      <h1 className="text-4xl text-pink-500 font-great-vibes text-center my-4">
        Click Picture
      </h1>
      <div className="w-full flex justify-center mb-8">
        {children}
      </div>
      <div className="flex flex-col items-center">
        {pairs.map((pair, index) => (
          <div key={index} className="flex my-4">
            <Draggable>
              <div className="w-40 h-40 p-2 bg-white shadow-lg z-10" onClick={() => openModal(`/${pair[0]}`)}>
                <Image src={`/${pair[0]}`} alt="" width={150} height={150} className="object-cover w-full h-full" />
              </div>
            </Draggable>
            {pair[1] && (
              <Draggable>
                <div className="w-40 h-40 p-2 bg-white shadow-lg -ml-10 mt-10" onClick={() => openModal(`/${pair[1]}`)}>
                  <Image src={`/${pair[1]}`} alt="" width={150} height={150} className="object-cover w-full h-full" />
                </div>
              </Draggable>
            )}
          </div>
        ))}
      </div>
      {modalOpen && (
        <ImageModal src={selectedImage} message={randomMessage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageCollage;
