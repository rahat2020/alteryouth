"use client";
import ImageSlider from "@/utils/ui/ImageSlider";
import { slidersData } from "@/helpers/data/SlidersData";
import { schoolsData } from "@/helpers/data/SchoolsData";

const CommunityImpact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
          <p className="text-gray-600">
            Every scholarship begins with shipping a mobile phone to the parent
            of the student. Then they create their own mobile bank account using
            that phone, to start receiving their child's scholarships directly,
            every month.
          </p>
        </div>
      </div>
      <ImageSlider data={slidersData} from="community_impact" />
      <p className="text-2xl font-bold mx-auto px-4 lg:px-16  text-border-dark py-6">
        Students from Government Primary Schools Nationwide
      </p>
      <ImageSlider
        data={schoolsData}
        perSlide={5}
        spaces={14}
        from="schools_nation_wide"
      />
    </section>
  );
};

export default CommunityImpact;
