"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogoIcon } from "@/utils/ui/customSvg/LogoIcon";
import { Menu, X } from "react-feather";
import { navData, sidebarData } from "@/helpers/data/navData";

const Topbar = () => {
  const sidebarRef = useRef(null);
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [color, setColor] = useState(false);

  // show different color when scrolling down
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  // close sidebar when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
            <div
              className="w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center"
              role="button"
              tabIndex={0}
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className={`${color ? "text-brand" : "text-white"}`} />
            </div>
            <Link href="/" className="flex items-center gap-2">
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

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="px-8 pt-8 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="text-green" />
        </button>
        <nav className="mt-16 flex flex-col gap-2 px-6 w-full">
          {sidebarData?.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-green-500 w-full text-border-dark p-2 font-semibold px-6 rounded"
            >
              <p className="flex items-center justify-start gap-1 w-full">
                {item?.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Topbar;
