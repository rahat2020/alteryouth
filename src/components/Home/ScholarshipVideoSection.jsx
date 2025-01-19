"use client";

import Image from "next/image";
import { Play } from "react-feather";

const ScholarshipVideoSection = () => {
  const handlePlayVideo = () => {
    console.log("Play video clicked");
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Thumbnail Section */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
            onClick={handlePlayVideo}
            role="button"
            tabIndex={0}
            aria-label="Play video about the scholarship program"
          >
            <Image
              src="/assets/ay_video_poster.jpg"
              alt="Student with graduation cap showing certificate"
              fill
              className="object-cover"
              priority
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              The scholarship app
            </h1>
            <p className="text-gray-600 leading-relaxed">
              In Bangladesh, while 98% of children enroll in school, 2 million
              children drop out to work before achieving literacy in order to
              support their families financially. On the flipside, Bangladesh
              has a diaspora population of 10 million in advanced economies who
              wish to make an impact on their homeland. AfterYouth, imagine Uber
              for scholarships, is a C2C scholarship app enabling users from
              around the world to start scholarships directly for financially
              struggling students in Government Primary Schools of Bangladesh
              through digital banking.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScholarshipVideoSection;
