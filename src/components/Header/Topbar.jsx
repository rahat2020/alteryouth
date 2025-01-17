"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@/utils/ui/customSvg/LogoIcon";
import { Menu } from "react-feather";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
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
                <Menu className="text-white" />
              </div>
              <span className="text-white text-xl font-semibold">
                <LogoIcon />
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-18 font-medium">
            <Link
              href="/about"
              className="text-white transition-colors hover:border-b-4 hover:border-b-green"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-white transition-colors hover:border-b-4 hover:border-b-green"
            >
              How it works
            </Link>
            <Link
              href="/scholarships"
              className="text-white transition-colors hover:border-b-4 hover:border-b-green"
            >
              Scholarships
            </Link>
            <Link
              href="/collaborate"
              className="text-white transition-colors hover:border-b-4 hover:border-b-green"
            >
              Collaborate
            </Link>
            <Link
              href="/login"
              className="text-white transition-colors hover:border-b-4 hover:border-b-green"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-white transition-colors hover:border-b-4 hover:border-b-green"
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-white transition-colors hover:border-b-4 hover:border-b-green"
              >
                How it works
              </Link>
              <Link
                href="/scholarships"
                className="text-white transition-colors hover:border-b-4 hover:border-b-green"
              >
                Scholarships
              </Link>
              <Link
                href="/collaborate"
                className="text-white transition-colors hover:border-b-4 hover:border-b-green"
              >
                Collaborate
              </Link>
              <Link
                href="/login"
                className="text-white hover:text-gray-200 transition-colors hover:border-b-green"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
