"use client";
import { useState } from "react";
import Image from "next/image";
import Topbar from "./Topbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useMediaQuery from "@/helpers/data/hooks/useMediaQuery";
import { Minus, Plus } from "react-feather";

const Header = () => {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  const [scholarshipValue, setScholarshipValue] = useState({
    scholarshipValue: 1650,
  });
  const [numberOfScholarship, setNumberOfScholarship] = useState({
    shcolarship: 1,
  });
  const [mutationData, setMutationData] = useState({
    name: "",
    email: "",
    phone: "",
    number_of_scholar: "",
  });

  const isIncreaseOrDecreaseValue = scholarshipValue?.scholarshipValue !== 1650;
  console.log(isIncreaseOrDecreaseValue);
  const isScholarshipEqualValue = scholarshipValue?.scholarshipValue === 4950;

  const handleFormChange = (value, context) => {
    setMutationData((prev) => ({ ...prev, [context]: value }));
  };

  const handleIncreaseScholarship = () => {
    setScholarshipValue((prev) => ({
      ...prev,
      scholarshipValue:
        prev.scholarshipValue < 4950
          ? prev.scholarshipValue + 1650
          : prev.scholarshipValue,
    }));
    setNumberOfScholarship((prev) => ({
      ...prev,
      shcolarship:
        prev?.shcolarship < 3 ? prev?.shcolarship + 1 : prev?.shcolarship,
    }));
  };

  const handleDecreaseScholarship = () => {
    setScholarshipValue((prev) => ({
      ...prev,
      scholarshipValue:
        prev.scholarshipValue > 1650
          ? prev.scholarshipValue - 1650
          : prev.scholarshipValue,
    }));
    setNumberOfScholarship((prev) => ({
      ...prev,
      shcolarship:
        prev?.shcolarship > 1 ? prev?.shcolarship - 1 : prev?.shcolarship,
    }));
  };

  return (
    <div className="lg-[100vh] relative">
      <Topbar />
      <div className="relative lg:h-[90vh] md:h-[90vh]">
        <Image
          src={
            isMobileScreen
              ? "/assets/hero_home_phone.jpg"
              : "/assets/hero_pc.jpg"
          }
          alt="Students on rickshaw"
          fill
          priority
          className="object-cover h-[70vh]"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container md:mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-24 px-4">
            <div className="text-white pt-12">
              <h1 className="md:text-6xl text-24 font-bold leading-tight mb-6">
                Start your
                <br />
                scholarship
              </h1>
              <p className="lg:text-xl text-15 text-start">
                Directly for students in Government Primary
                <br />
                Schools throughout Bangladesh
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:px-8 px-4 shadow-lg md:w-[400px] ">
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
                  <div className="flex items-center md:gap-4 gap-2">
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={!isIncreaseOrDecreaseValue}
                        className={`w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center ${
                          isIncreaseOrDecreaseValue
                            ? "bg-green"
                            : "bg-gray-300 cursor-not-allowed"
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        onClick={handleDecreaseScholarship}
                      >
                        <Minus className="text-white" />
                      </button>
                      <span className="mx-4 text-xl">
                        {numberOfScholarship?.shcolarship}
                      </span>
                      <button
                        type="button"
                        disabled={isScholarshipEqualValue}
                        className={`w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center ${
                          isScholarshipEqualValue
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-green"
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        onClick={handleIncreaseScholarship}
                      >
                        <Plus className="text-white" />
                      </button>
                    </div>

                    {isMobileScreen ? (
                      <div className="flex">
                        <span className="text-12">
                          BDT {scholarshipValue?.scholarshipValue}/month
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">
                          BDT {scholarshipValue?.scholarshipValue}
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>
                    )}
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
