import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

const AdmissionSection = () => {
  const cards = [
    { title: "Undergraduate", desc: "Start your journey with a Bachelor's degree.", link: "/apply" },
    { title: "Graduate Studies", desc: "Advance your career with our Master's programs.", link: "/apply" },
    { title: "International", desc: "Global education for students worldwide.", link: "/apply" }
  ];

  return (
    <section className="py-16 bg-white -mt-10 relative z-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} description={item.desc}>
            <Button variant="primary" className="w-full mt-4 text-sm">Apply Now</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AdmissionSection;