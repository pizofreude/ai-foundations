import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoBackgroundProps {
  videoUrl?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasAudioTrack, setHasAudioTrack] = useState(false);
  const isResettingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const monitorLoop = () => {
      if (!video || isResettingRef.current) {
        rafId = requestAnimationFrame(monitorLoop);
        return;
      }

      const currentTime = video.currentTime;
      const duration = video.duration;

      if (duration && !isNaN(duration) && duration > 0) {
        let currentOpacity = 1;

        if (currentTime < 0.5) {
          // Fade in over 0.5s at the start (opacity 0 to 1)
          currentOpacity = Math.max(0, Math.min(1, currentTime / 0.5));
        } else if (currentTime > duration - 0.5) {
          // Fade out over 0.5s before the end (opacity 1 to 0)
          currentOpacity = Math.max(0, (duration - currentTime) / 0.5);
        } else {
          currentOpacity = 1;
        }

        // If paused, ensure frame remains visible
        if (video.paused && currentTime > 0) {
          currentOpacity = 1;
        }

        video.style.opacity = currentOpacity.toFixed(4);
      }

      rafId = requestAnimationFrame(monitorLoop);
    };

    const handleEnded = () => {
      isResettingRef.current = true;
      if (video) {
        video.style.opacity = '0';
      }

      // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().then(() => {
            isResettingRef.current = false;
          }).catch(() => {
            isResettingRef.current = false;
          });
        } else {
          isResettingRef.current = false;
        }
      }, 100);
    };

    const handleLoadedMetadata = () => {
      if (video.duration > 0) {
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked by browser policy: show first frame and update state
          setIsPlaying(false);
          video.style.opacity = '1';
        });
      }
    };

    // Keep React state in sync with real video element playback & volume events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => {
      if (video) setIsMuted(video.muted);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);

    // Initial play attempt
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
      video.style.opacity = '1';
    });

    rafId = requestAnimationFrame(monitorLoop);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [videoUrl]);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      // User gesture permits unmuted playback; ensure video is running
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn('Audio playback error:', err);
        });
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play error:', err);
      });
    } else {
      video.pause();
      setIsPlaying(false);
      video.style.opacity = '1';
    }
  };

  return (
    <>
      {/* Video Background Layer - visual only, pointer-events-none, z-0 */}
      <div
        className="absolute w-full overflow-hidden pointer-events-none select-none z-0"
        style={{
          inset: 'auto 0 0 0',
          top: '300px',
        }}
        aria-hidden="true"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover min-h-[500px]"
          style={{
            opacity: 0,
            transition: 'opacity 0.2s ease',
            willChange: 'opacity',
          }}
        />

        {/* Gradient overlays */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.5) 85%, #FFFFFF 100%)',
          }}
        />
      </div>

      {/* Floating Audio & Playback Controls - rendered outside z-0 stacking context with high z-index (z-30) */}
      <div 
        className="absolute bottom-24 sm:bottom-22 right-6 sm:right-8 pointer-events-auto flex items-center gap-2 z-30"
        role="group"
        aria-label="Cinematic video controls"
      >
        <button
          onClick={togglePlayPause}
          type="button"
          aria-label={isPlaying ? "Pause cinematic background" : "Play cinematic background"}
          className="p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/15 text-black hover:bg-black hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/20"
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={toggleSound}
          type="button"
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          className="p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/15 text-black hover:bg-black hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/20"
          title={isMuted ? "Sound is muted (click to unmute)" : "Mute sound"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#6F6F6F]" /> : <Volume2 className="w-3.5 h-3.5 text-black" />}
        </button>
      </div>
    </>
  );
};
