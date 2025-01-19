"use client";
import Link from "next/link";
import Image from "next/image";
import { DisabledIcon } from "@/utils/ui/customSvg/DisabledIcon";
import { SingleMotherIcon } from "@/utils/ui/customSvg/SingleMotherIcon";
import { OrphanIcon } from "@/utils/ui/customSvg/OrphanIcon";
import { scholarsShipData } from "@/helpers/data/scholarsShipData";

const eligbleScholarshipData = [
  {
    id: 1,
    icon: DisabledIcon,
    title: "Disabled Father",
    desc: "Student's father is physically unable to work",
  },
  {
    id: 2,
    icon: SingleMotherIcon,
    title: "Single Mother",
    desc: "Student's father is deceased or has abandoned the family",
  },
  {
    id: 1,
    icon: OrphanIcon,
    title: "Orphan",
    desc: "Both parents are deceased or have abandoned the child",
  },
];

const ScholarshipPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Eligibility Section */}
      <section className="text-center mb-16">
        <h1 className="text-2xl font-bold mb-4">Scholarship Eligibility</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Only students who are currently enrolled in Government Primary Schools
          and fall under any of the following criteria are eligible to apply for
          scholarships
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Disabled Father */}
          {eligbleScholarshipData?.map((item) => (
            <div
              className="flex justify-between items-center gap-4 shadow-lg px-4 rounded-lg"
              key={item?.id}
            >
              <item.icon />
              <div className="flex flex-col items-start text-start py-4">
                <h3 className="font-semibold mb-2">{item?.title}</h3>
                <p className="text-14 text-black">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6 px-8">
        {scholarsShipData?.map((item) => {
          const { id, title, avatar, linkText, link, desc } = item || {};
          return (
            <div
              className="relative overflow-hidden h-[80vh] rounded-2xl group"
              key={id}
            >
              <Link href={link}>
                <div className="absolute inset-0">
                  <Image
                    src={avatar}
                    alt={title}
                    fill
                    loading="lazy"
                    className="object-cover brightness-50 transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6 min-h-[300px] flex flex-col justify-start text-white">
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <span className="text-sm underline hover:text-emerald-300 transition-colors">
                    {linkText} →
                  </span>
                  {desc && <p className="text-xs mt-4">{desc}</p>}
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ScholarshipPage;
