'use client';

import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  message: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-11/12 max-w-lg">
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg blur-xl opacity-75"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-4">
          <div className="relative h-96">
            <Image
              src={src}
              alt="Enlarged"
              layout="fill"
              className="object-contain filter blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl font-great-vibes text-center p-4 bg-black bg-opacity-50 rounded">
                {message}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
