import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const EnrollmentSection = () => {
  const steps = [
    { step: "01", title: "Submit Application", desc: "Fill out the online form and pay the fee." },
    { step: "02", title: "Upload Documents", desc: "Send your transcripts and IDs for review." },
    { step: "03", title: "Entrance Exam", desc: "Schedule and take the required assessment." },
    { step: "04", title: "Interview", desc: "Meet with our faculty for a brief discussion." }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle>How to Enroll</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;