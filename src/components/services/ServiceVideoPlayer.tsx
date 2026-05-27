"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface ServiceVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  icon: React.ReactNode;
}

export default function ServiceVideoPlayer({ src, poster, title, icon }: ServiceVideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative rounded-sm overflow-hidden aspect-video shadow-primary-lg group">
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          controls
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <>
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
          <div className="absolute top-4 left-4 w-11 h-11 rounded-sm bg-accent flex items-center justify-center text-white shadow-accent">
            {icon}
          </div>
          <button
            onClick={handlePlay}
            aria-label={`Play ${title} video`}
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group/btn"
          >
            <span className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-lg group-hover/btn:scale-110 group-hover/btn:bg-accent transition-all duration-300">
              <Play size={26} className="text-white ml-1" fill="white" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
