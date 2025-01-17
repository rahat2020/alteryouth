"use client";
import Image from "next/image";
import Topbar from "./Topbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const Header = () => {
  const [mutationData, setMutationData] = useState({
    name: "",
    email: "",
    phone: "",
    number_of_scholar: "",
  });

  const handleFormChange = (value, context) => {
    setMutationData((prev) => ({ ...prev, [context]: value }));
  };

  return (
    <div className="min-h-screen relative">
      <Topbar />
      <div className="relative min-h-screen">
        <Image
          src="/assets/hero_pc.jpg"
          alt="Students on rickshaw"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 pt-24 px-4">
            <div className="text-white pt-12">
              <h1 className="text-6xl font-bold leading-tight mb-6">
                Start your
                <br />
                scholarship
              </h1>
              <p className="text-xl">
                Directly for students in Government Primary
                <br />
                Schools throughout Bangladesh
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-6">
                Join the{" "}
                <span className="text-green-500">#alteryouthrevolution</span>
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <div className="flex gap-2">
                  <PhoneInput
                    country={"bd"}
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                    value={mutationData?.phone}
                    onChange={(phone) => handleFormChange("phone", phone)}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Number of Scholarships
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        -
                      </button>
                      <span className="mx-4 text-xl">1</span>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold">BDT 1,650</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  START NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
