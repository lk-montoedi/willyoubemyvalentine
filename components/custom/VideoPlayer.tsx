'use client';

import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative w-[400px] mx-auto">
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
        <div className="absolute -top-2 -left-2 text-2xl">❤️</div>
        <div className="absolute -top-2 -right-2 text-2xl">❤️</div>
        <div className="absolute -bottom-2 -left-2 text-2xl">❤️</div>
        <div className="absolute -bottom-2 -right-2 text-2xl">❤️</div>
        <div className="absolute top-1/4 -left-4 text-2xl animate-bounce">❤️</div>
        <div className="absolute top-1/4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>❤️</div>
        <div className="absolute bottom-1/4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>❤️</div>
        <div className="absolute bottom-1/4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0.6s' }}>❤️</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
