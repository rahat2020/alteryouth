"use client";
import { FooterData } from "@/helpers/data/FooterData";
import Link from "next/link";
import { Facebook, Instagram } from "react-feather";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Learn About Section */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium">Learn About AfterYouth</h2>
              <nav className="space-y-2">
                {FooterData?.map((item) => (
                  <Link
                    key={item?.id}
                    href={item?.link}
                    className="block text-sm text-black hover:text-gray-900"
                  >
                    {item?.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="border-t"></div>
            {/* Copyright and Legal */}
            <div className="space-y-2">
              <p className="text-sm text-dark">
                © {currentYear} AfterYouth Limited
              </p>
              <div className="text-sm text-dark">
                <Link href="/terms" className="hover:text-gray-900">
                  Terms of Service
                </Link>
                {" - "}
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end justify-end">
            <p className="text-sm text-dark lg:mb-12">
              Towards a literate Bangladesh
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/alteryouthapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/alteryouth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
