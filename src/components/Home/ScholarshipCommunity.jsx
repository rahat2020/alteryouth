"use client";
import Image from "next/image";
import { Students } from "@/helpers/data/Students";
import { AustraliaFlags, UkFlags, UsaFlags } from "@/utils/ui/customSvg/Flags";

const getCountryFlags = (params) => {
  if (params?.country === "USA") {
    console.log("prams", params);
    return <UsaFlags />;
  }
  if (params?.country === "UK") {
    return <UkFlags />;
  }
  if (params?.country === "Australia") {
    return <AustraliaFlags />;
  }
  return <UsaFlags />;
};
const ScholarshipCommunity = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 max-w-6xl mt-20">
          <div className="text-center mb-12">
            <span className="text-green-500 font-medium mb-4 block">
              #alteryouthrevolution
            </span>
            <h2 className="text-3xl font-bold mb-4">
              The Scholarship Community
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Despite public primary schools being free of cost in Bangladesh,
              many students still{" "}
              <span className="font-medium">drop out of school</span> to work
              and earn in order to support their families. Your scholarship
              helps a child attend school and support their families at the same
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Students.map((student, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex bg-green w-full">
                      @<span className="font-medium">{student?.username}</span>
                      {getCountryFlags(student)}
                    </div>
                    <p className="text-10 text-green-600 bg-green-50 font-medium rounded-full p-1">
                      <span>{student.scholarships}</span>{" "}
                      <span>
                        {student.scholarships === 1
                          ? "Scholarship"
                          : "Scholarships"}
                      </span>
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">More options</span>
                    •••
                  </button>
                </div>

                <div className="flex gap-3">
                  <Image
                    src={student.avatar || "/placeholder.svg"}
                    alt={student.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {student.name}, {student.class}
                    </h3>
                    <p className="text-sm text-gray-500">{student.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-green-500 hover:text-green-600 font-medium">
              See all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCommunity;
