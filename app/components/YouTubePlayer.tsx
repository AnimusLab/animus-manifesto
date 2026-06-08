'use client';

import React, { useState } from 'react';

interface Props {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div className="my-8 aspect-video w-full max-w-3xl border border-neutral-900 bg-black relative rounded overflow-hidden shadow-2xl animate-fadeIn">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      onClick={() => setIsPlaying(true)}
      className="my-8 aspect-video w-full max-w-3xl border border-neutral-900 bg-[#080808] relative rounded overflow-hidden shadow-2xl group cursor-pointer"
    >
      {/* Thumbnail */}
      <img 
        src={thumbnailUrl} 
        alt="Video Briefing Thumbnail" 
        className="w-full h-full object-cover filter brightness-[0.35] contrast-125 group-hover:brightness-[0.55] group-hover:scale-[1.01] transition-all duration-500"
        onError={(e) => {
          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-[#050505]/80 backdrop-blur-md border border-neutral-800 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-950/20 shadow-2xl transition-all duration-350 transform group-hover:scale-105">
          <svg 
            className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400 transition-colors ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-widest text-neutral-500 border border-neutral-800/40 rounded-sm select-none">
        DOCS // PLAY_BRIEFING
      </div>
    </div>
  );
}
