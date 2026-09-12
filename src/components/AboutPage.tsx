import React, { useState } from 'react';
import { PageId } from '../types';
import { IMAGES, SITE_INFO } from '../data';
import { User, Lightbulb, Trophy, Volume2, VolumeX, Maximize2, RefreshCw } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate: _onNavigate, onOpenBooking: _onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoKey, setVideoKey] = useState(0);

  // Build the embed URL with seamless autoplay, loop, and playsinline
  // Using playlist parameter with the same video ID ensures YouTube loops indefinitely
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${SITE_INFO.youtubeVideoId}?autoplay=1&mute=${
    isMuted ? '1' : '0'
  }&loop=1&playlist=${SITE_INFO.youtubeVideoId}&playsinline=1&controls=1&modestbranding=1&rel=0&enablejsapi=1`;

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Reload iframe with the updated mute setting
    setVideoKey((prev) => prev + 1);
  };

  const reloadVideo = () => {
    setVideoKey((prev) => prev + 1);
  };

  return (
    <div id="about-page" className="w-full">
      {/* 1. HERO BANNER WITH CURVED ARCH CUT */}
      <section
        id="about-hero"
        className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center bg-cover bg-center text-white pt-28 pb-20"
        style={{
          backgroundImage: `url('${IMAGES.aboutHero}')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0c160c]/70 backdrop-brightness-90" />

        {/* Curved arch bottom edge matching screenshot */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-12 sm:h-16 md:h-20 text-[#fbfbf9]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            About Us
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow">
            Hi, I'm Dr. Evelyn Sterling, licensed somatic psychotherapist and founder of InnerBloom. For more than twelve years, I have walked alongside women reclaiming their calm, grounded essence from trauma, burnout, and chronic nervous system exhaustion. Integrating clinical psychotherapy with gentle somatic experiencing, breathwork, and polyvagal regulation, we cultivate a safe sanctuary where your body learns to release held tension and rediscover deep, lasting vitality.
          </p>
        </div>
      </section>

      {/* 2. MISSION, VISION, VALUES SECTION */}
      <section id="mission-vision-values" className="py-20 bg-[#fbfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Mission */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#eef3eb] text-[#557c4a] flex items-center justify-center mx-auto shadow-sm">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2618]">Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To provide an unhurried, compassionate sanctuary where women can safely unwind chronic trauma, regulate their nervous systems, and reclaim embodiment. We walk beside each client with gentle pacing, honoring personal boundaries and restoring deep inner resilience.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#eef3eb] text-[#557c4a] flex items-center justify-center mx-auto shadow-sm">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2618]">Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To pioneer an integrative standard of mental health where emotional recovery is experienced through bodily safety and neurological harmony. We envision empowered women moving beyond survival mode into enduring self-trust, clarity, and creative joy.
              </p>
            </div>

            {/* Values */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#eef3eb] text-[#557c4a] flex items-center justify-center mx-auto shadow-sm">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2618]">Values</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rooted in embodied presence, trauma-informed respect, radical empathy, and holistic authenticity. We believe healing is never about fixing what is broken, but gently welcoming every part of yourself back into coherent wholeness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURED SERENE PIER IMAGE */}
      <section id="about-pier-image" className="py-8 bg-[#fbfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-md aspect-[16/8] sm:aspect-[16/7] w-full">
            <img
              src={IMAGES.pierTranquility}
              alt="Woman walking along serene white dock into tranquil waters"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. SPLIT EXPERTISE SECTION */}
      <section id="about-expertise" className="py-16 bg-[#fbfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618] leading-tight">
                We Provide The Best Psychotherapy Service From 10 Years
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Over a decade of specialized clinical practice in Somatic Experiencing, mindfulness-based cognitive therapies, and nervous system recalibration. We blend neuroscientific precision with genuine therapeutic warmth to help you unburden generational stress and cultivate grounded emotional freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIDEO SECTION (Seamless Autoplay & Looping) */}
      <section id="about-video-section" className="pb-24 pt-6 bg-[#fbfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Top helper bar with sound toggle & status */}
          <div className="flex items-center justify-between text-xs text-gray-600 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-emerald-800">
                Nature Ambience Video • Autoplay & Seamless Loop Active
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="toggle-video-mute-btn"
                onClick={toggleMute}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:border-emerald-500 rounded-full text-xs font-medium text-gray-700 hover:text-emerald-700 shadow-xs transition-colors cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-gray-400" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Muted: No</span>
                  </>
                )}
              </button>

              <button
                id="reload-video-btn"
                onClick={reloadVideo}
                className="p-1.5 bg-white border border-gray-200 hover:border-emerald-500 rounded-full text-gray-600 hover:text-emerald-700 shadow-xs transition-colors cursor-pointer"
                title="Restart Video"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Responsive 16:9 Video Container with seamless iframe */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-emerald-950/20">
            <iframe
              key={videoKey}
              id="seamless-youtube-player"
              src={youtubeEmbedUrl}
              title="Relaxing Nature Ambience Meditation"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-center text-xs text-gray-500 italic">
            * Note: Autoplay starts with sound muted to comply with mobile and modern desktop browser policies. Click "Unmute" anytime to enjoy full nature ambience sounds.
          </p>
        </div>
      </section>
    </div>
  );
};
