"use client";
import { GoogleIcon } from "@/utils/ui/customSvg/GoogleIcon";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* UNDP Award */}
          <div className="flex justify-evenly items-center text-start space-y-2 border-r-2">
            <div className="relative w-44 h-44">
              <Image
                src="/assets/undp.jpg"
                alt="UNDP Logo"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <p className="text-16 text-dark font-semibold">
              Asia Pacific
              <br />
              SDG Enterprise Award
            </p>
          </div>

          {/* Expo Live */}
          <div className="flex flex-col items-center text-center space-y-4 border-r-2">
            <p className="text-18 font-semibold text-dark">
              In Association With
            </p>
            <div className="relative w-40 h-40">
              <Image
                src="/assets/expo.jpg"
                alt="Expo Live Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
              An Expo 2020
              <br />
              Dubai Initiative
            </p>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="relative w-32 h-12">
              <GoogleIcon />
            </div>
            <p className="text-16 font-semibold pt-2 text-dark">
              Winner of Google Business Group Stories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
