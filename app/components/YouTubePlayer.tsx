'use client';

import React, { useState } from 'react';

interface Props {
  url?: string;
  videoId?: string;
  channel?: string;
  title?: string;
  notes?: string;
}

export default function YouTubePlayer({ url, videoId, channel, title, notes }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  // If YouTube video, we have a video ID
  if (videoId) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (isPlaying) {
      return (
        <div className="aspect-video w-full border border-neutral-900 bg-black relative rounded overflow-hidden shadow-2xl animate-fadeIn">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title || "YouTube video player"}
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
        className="aspect-video w-full border border-neutral-900 bg-[#080808] relative rounded overflow-hidden shadow-2xl group cursor-pointer flex flex-col justify-end"
      >
        {/* Thumbnail Background */}
        <img 
          src={thumbnailUrl} 
          alt={title || "Video Briefing Thumbnail"} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] contrast-[1.15] group-hover:brightness-[0.35] group-hover:scale-[1.02] transition-all duration-700"
          onError={(e) => {
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative p-5 z-10 w-full flex flex-col h-full justify-between">
          {/* Top Row: Channel Badge */}
          <div className="flex justify-between items-start">
            {channel && (
              <span className="bg-black/60 backdrop-blur-md border border-neutral-850 px-2 py-0.5 text-[9px] font-mono tracking-widest text-neutral-400 uppercase rounded-sm">
                {channel}
              </span>
            )}
            <span className="bg-[#050505]/80 backdrop-blur-md border border-neutral-850 text-neutral-500 text-[9px] font-mono px-2 py-0.5 tracking-wider rounded-sm">
              YOUTUBE
            </span>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-14 w-14 rounded-full bg-[#050505]/95 border border-neutral-850 flex items-center justify-center shadow-2xl group-hover:border-indigo-500 group-hover:bg-indigo-950/20 group-hover:scale-110 transition-all duration-350 pointer-events-auto">
              <svg 
                className="w-5 h-5 text-neutral-400 group-hover:text-indigo-400 transition-colors ml-0.5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom Row: Text Details */}
          <div className="space-y-1.5 text-left mt-auto">
            <h4 className="text-white text-sm font-bold tracking-tight leading-snug group-hover:text-indigo-300 transition-colors duration-300">
              {title || "Play Video Briefing"}
            </h4>
            {notes && (
              <p className="text-neutral-400 text-xs font-light line-clamp-2 leading-relaxed">
                {notes}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // External Video Link (e.g. CNBC, WSJ)
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="aspect-video w-full border border-neutral-900 bg-gradient-to-br from-[#0c0c0e] to-[#040405] relative rounded overflow-hidden shadow-2xl group cursor-pointer flex flex-col justify-between p-5 hover:border-neutral-800 transition-all duration-350"
    >
      {/* Top Row: Channel Badge & External Indicator */}
      <div className="flex justify-between items-start w-full">
        {channel && (
          <span className="bg-black/60 backdrop-blur-md border border-neutral-850 px-2 py-0.5 text-[9px] font-mono tracking-widest text-neutral-400 uppercase rounded-sm">
            {channel}
          </span>
        )}
        <span className="bg-neutral-950/90 border border-neutral-850 text-neutral-500 text-[9px] font-mono px-2 py-0.5 tracking-wider rounded-sm flex items-center gap-1">
          EXTERNAL ↗
        </span>
      </div>

      {/* Center Link Icon (Play-like but representing external link) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-14 w-14 rounded-full bg-[#050505]/95 border border-neutral-855 flex items-center justify-center shadow-2xl group-hover:border-indigo-500 group-hover:bg-indigo-950/20 group-hover:scale-110 transition-all duration-350 pointer-events-auto">
          <svg 
            className="w-5 h-5 text-neutral-400 group-hover:text-indigo-400 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Bottom Row: Text Details */}
      <div className="space-y-1.5 text-left mt-auto">
        <h4 className="text-white text-sm font-bold tracking-tight leading-snug group-hover:text-indigo-300 transition-colors duration-300">
          {title || "Open External Video"}
        </h4>
        {notes && (
          <p className="text-neutral-400 text-xs font-light line-clamp-2 leading-relaxed">
            {notes}
          </p>
        )}
      </div>
    </a>
  );
}

