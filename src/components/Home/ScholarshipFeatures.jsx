"use client";
import Image from "next/image";
import { AppStoreIcon } from "@/utils/ui/customSvg/AppStore";
import { PlayStoreIcon } from "@/utils/ui/customSvg/PlayStore";
import Link from "next/link";

const ScholarshipFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">The Uber for Scholarships</h2>
          <p className="text-gray-600 mb-8">
            A platform connecting the world with financially struggling students
            <br />
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://apps.apple.com/us/app/alteryouth-start-scholarships/id1569106859"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <AppStoreIcon />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.alteryouth.userapp&pli=1"
              className="inline-block"
              aria-label="Get it on Google Play"
            >
              <PlayStoreIcon />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Transfer directly */}
          <div className="text-center">
            <div className="relative w-[280px] h-[560px] mx-auto mb-6">
              <Image
                src="/assets/app_scholarship.jpg"
                alt="Transfer directly interface"
                fill
                loading="lazy"
                className="object-cover rounded-[3rem]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transfer directly</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              Your scholarship is transferred directly to your student's family
              on their mobile bank account.
            </p>
          </div>

          {/* Get school reports */}
          <div className="text-center">
            <div className="relative w-[280px] h-[560px] mx-auto mb-6">
              <Image
                src="/assets/app_school.jpg"
                alt="School reports interface"
                fill
                loading="lazy"
                className="object-cover rounded-[3rem]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get school reports</h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              View attendance data and report cards from your student's school,
              until completion of Class 5.
            </p>
          </div>

          {/* Ensure a literate citizen */}
          <div className="text-center">
            <div className="relative w-[280px] h-[560px] mx-auto mb-6">
              <Image
                src="/assets/app_graduation.jpg"
                alt="Literate citizen interface"
                fill
                loading="lazy"
                className="object-cover rounded-[3rem]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Ensure a literate citizen
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto">
              Your scholarship continues until completion of class 5, when your
              student achieves literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipFeatures;
