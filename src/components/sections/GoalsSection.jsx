import React from 'react';
import { Target, Award, Users, Globe } from 'lucide-react'; // Icons for visual flair

const GoalsSection = () => {
  const goals = [
    { 
      icon: <Target className="w-8 h-8 text-university-red" />, 
      title: "Academic Excellence", 
      desc: "Top 5% ranking in national licensure examinations across all departments." 
    },
    { 
      icon: <Globe className="w-8 h-8 text-university-gold" />, 
      title: "Global Reach", 
      desc: "Expanding partnerships with 50+ international universities by 2027." 
    },
    { 
      icon: <Users className="w-8 h-8 text-university-red" />, 
      title: "Student Success", 
      desc: "Maintaining a 90% employment rate for our graduates within 6 months." 
    },
    { 
      icon: <Award className="w-8 h-8 text-university-gold" />, 
      title: "Research Innovation", 
      desc: "Increasing funding for student-led sustainable technology projects." 
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our 2026 Strategic Goals</h2>
            <div className="w-20 h-1.5 bg-university-gold mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {goals.map((goal, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    {goal.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{goal.title}</h4>
                  <p className="text-gray-600 leading-relaxed italic border-l-2 border-gray-100 pl-4">
                    "{goal.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;