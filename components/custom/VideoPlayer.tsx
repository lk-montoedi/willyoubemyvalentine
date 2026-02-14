'use client';

import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
      <div className="relative p-4 bg-white rounded-3xl shadow-lg">
        <div className="relative" style={{ paddingBottom: '177.78%' /* 9:16 aspect ratio */ }}>
          <video
            className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
            src="/video-together.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="absolute -top-4 -left-4 text-4xl">❤️</div>
        <div className="absolute -top-4 -right-4 text-4xl">❤️</div>
        <div className="absolute -bottom-4 -left-4 text-4xl">❤️</div>
        <div className="absolute -bottom-4 -right-4 text-4xl">❤️</div>
        <div className="absolute top-1/4 -left-8 text-4xl animate-bounce">❤️</div>
        <div className="absolute top-1/4 -right-8 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>❤️</div>
        <div className="absolute bottom-1/4 -left-8 text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>❤️</div>
        <div className="absolute bottom-1/4 -right-8 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>❤️</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
