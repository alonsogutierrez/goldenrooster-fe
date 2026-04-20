"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { PROJECT_VIDEOS } from "@/lib/constants";

function VideoCard({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative rounded-sm overflow-hidden bg-primary aspect-video shadow-md group">
      <video
        ref={videoRef}
        src={src}
        preload="none"
        controls={playing}
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          aria-label="Play video"
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-primary/50 hover:bg-primary/40 transition-colors duration-200 cursor-pointer"
        >
          <span className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Play size={22} className="text-white ml-1" fill="white" />
          </span>
        </button>
      )}
    </div>
  );
}

interface VideoGalleryProps {
  tag: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export default function VideoGallery({ tag, title, titleHighlight, subtitle }: VideoGalleryProps) {
  return (
    <section className="section-padding bg-gray-50" aria-label="Project videos">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-tag">{tag}</span>
          <h2 className="font-heading font-black text-primary text-3xl lg:text-4xl mt-3">
            {title}{" "}
            <span className="text-accent">{titleHighlight}</span>
          </h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECT_VIDEOS.map((video) => (
            <VideoCard key={video.id} src={video.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
