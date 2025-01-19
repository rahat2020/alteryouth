"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@/utils/ui/customSvg/LogoIcon";
import { Menu } from "react-feather";
import { navData } from "@/helpers/data/navData";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    // changeColor()
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        color ? "bg-white shadow-md" : " bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center">
                <Menu className={`${color ? "text-brand" : "text-white"}`} />
              </div>
              <span className="text-white text-xl font-semibold">
                <LogoIcon bgColor={color ? "#1DC468" : "white"} />
              </span>
            </Link>
          </div>
          {/* web */}
          <div className="hidden lg:flex items-center gap-8 text-18 font-medium relative">
            {navData?.map((item) => (
              <Link
                href={item?.link}
                key={item?.id}
                id="Navbar_animatedUnderline__pGbA3"
                className={`relative ${
                  color ? "text-brand" : "text-white"
                } text-15`}
              >
                {item?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navData?.map((item) => (
                <Link
                  href={item?.link}
                  key={item?.id}
                  className={`${
                    color ? "text-brand" : "text-white"
                  } transition-colors hover:border-b-4 hover:border-b-green`}
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
