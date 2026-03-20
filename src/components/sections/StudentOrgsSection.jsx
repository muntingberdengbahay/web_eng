import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Card from '../shared/Card';
import Button from '../shared/Button';

const StudentOrgsSection = () => {
  // This would typically come from your events.js data file
  const orgs = [
    { id: 1, name: "Student Council", category: "Leadership", members: "15" },
    { id: 2, name: "Tech Innovators", category: "Academic", members: "45" },
    { id: 3, name: "Arts & Culture Club", category: "Creative", members: "30" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionTitle>Student Life & OSOA</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Get involved beyond the classroom. From leadership roles to creative hubs, 
            our student organizations are the heartbeat of campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orgs.map((org) => (
            <div key={org.id} className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-blue-50/30">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {org.category}
              </span>
              <h3 className="text-xl font-bold mt-4 text-gray-800">{org.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{org.members} Active Members</p>
              <hr className="my-4 border-gray-200" />
              <button className="text-blue-700 font-semibold text-sm hover:underline">
                View Organization Details →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">Browse All Organizations</Button>
        </div>
      </div>
    </section>
  );
};

export default StudentOrgsSection;