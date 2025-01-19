"use client";

import { FooterData } from "@/helpers/data/FooterData";
import Link from "next/link";
import { Facebook, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 md:lg-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium mb-4">
                Learn About AlterYouth
              </h2>
              <nav className="space-y-3">
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
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Towards a literate Bangladesh
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-sm text-gray-600">© 2015 AlterYouth Limited</p>
            <div className="flex items-center space-x-4">
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">-</span>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://facebook.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
