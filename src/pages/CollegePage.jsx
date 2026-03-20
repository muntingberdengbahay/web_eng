import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const programData = {
  "Civil Engineering": {
    title: "Civil Engineering",
    description: "The Civil Engineering program is a comprehensive four-year program designed to equip students with essential knowledge and skills for planning, design, and construction...",
    objectives: [
      "Practice the career as Civil Engineers including a leading role in the Structural Engineering, Construction Engineering and Management, Water Resources Engineering, Geotechnical and Environmental Engineering and Transportation Engineering.",
      "Provide professional and technical knowledge and expertise in the engineering analysis and design to sustain the needs and demands of the community and of the region.",
      "Perform supervisory, managerial and consultancy role that adopts the current trends and practices in the civil engineering fields and industries."
    ],
    outcomes: [
      "Apply knowledge of mathematics and science to solve civil engineering problems;",
      "Design and conduct experiments, as well as to analyze and interpret data;",
      "Design a system, component, or process to meet desired needs within realistic constraints, in accordance with standards;",
      "Function in multidisciplinary and multi-cultural teams;",
    "Identify, formulate, and solve complex civil engineering problems;",
"Understand professional and ethical responsibility;",
"Communicate effectively civil engineering activities with the engineering community and with society at large;",
"Understand the impact of civil engineering solutions in a global, economic, environmental, and societal context;",
"Recognize the need for, and engage in life-long learning;",
"Know contemporary issues;",
"Use techniques, skills, and modern engineering tools necessary for civil engineering practice;",
"Know and understand engineering and management principles as a member and leader of a team, and to manage projects in a multidisciplinary environment;",
"Understand at least one specialized field of Civil Engineering practice.",
    ],
    image: "/civil-eng.jpg"
  },
  "Computer Engineering": {
    title: "Computer Engineering",
    description: "The Computer Engineering program focuses on the design, development, and operation of computer systems, integrating hardware and software expertise.",
    objectives: ["Be equipped with the skills in planning, leading, organizing and controlling resources such as manpower, equipment, materials and energy",
"Provide technical knowledge and expertise in engineering analysis and design to provide the solution and sustain the demands and needs of the community and of the region",
"Assure the quality of the work and check against with the sustainability, occupational safety and health standards, policies and laws nationally and globally",
"Participate in activities that promote and support socio - economic development nationally and globally",
"Practice the career in Mechanical Engineering including a leading role in Thermal systems such as Air conditioning and Refrigeration or Power generation, or in the Design of Machineries"],
    outcomes: ["Outcome 1", "Outcome 2"],
    image: "/comp-eng.jpg"
  },
  "Electrical Engineering": {
    title: "Electrical Engineering",
    description: "The Electrical Engineering program deals with the study and application of electricity, electronics, and electromagnetism.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/elec-eng.jpg"
  },
  "Electronics Engineering": {
    title: "Electronics Engineering",
    description: "Focuses on electronic circuits, devices, and systems for communication and control.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/ece-eng.jpg"
  },
  "Industrial Engineering": {
    title: "Industrial Engineering",
    description: "Focuses on the optimization of complex processes, systems, or organizations.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/ie-eng.jpg"
  },
  "Manufacturing Engineering": {
    title: "Manufacturing Engineering",
    description: "Focuses on the development and improvement of manufacturing systems.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/mfg-eng.jpg"
  },
  "Mechanical Engineering": {
    title: "Mechanical Engineering",
    description: "Focuses on the design, analysis, manufacturing, and maintenance of mechanical systems.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/mech-eng.jpg"
  },
  "Mechatronics Engineering": {
    title: "Mechatronics Engineering",
    description: "A multidisciplinary field that combines mechanical, electronic, and computer engineering.",
    objectives: ["Objective 1"],
    outcomes: ["Outcome 1"],
    image: "/mt-eng.jpg"
  },
};

const CollegePage = () => {
  const [activeProgram, setActiveProgram] = useState("Civil Engineering");
  const programs = Object.keys(programData);

  return (
    <div className="bg-white font-sans">
      {/* 1. Hero Header */}
      <div className="bg-[#FFB81C] py-12 px-8 md:px-24">
        <h1 className="text-4xl font-serif font-bold text-[#800000]">
          College of Engineering and Architecture
        </h1>
        <p className="text-sm mt-2 text-[#800000]/80 font-medium">
          Home &gt; Programs &gt; <span className="font-bold">{activeProgram}</span>
        </p>
      </div>

      {/* 2. Main Grid Layout */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="space-y-1">
          {programs.map((name) => (
            <button 
              key={name}
              onClick={() => setActiveProgram(name)}
              className={`w-full text-left px-4 py-3 text-sm font-semibold transition-all
                ${activeProgram === name 
                  ? "bg-[#FFB81C] text-[#800000] border-l-4 border-[#800000] shadow-sm" 
                  : "text-gray-600 hover:bg-gray-100"}`}
            >
              {name}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <article className="space-y-10">
          
          {/* Banner Section */}
          <div className="flex flex-col md:flex-row bg-[#FFB81C] rounded-sm overflow-hidden shadow-md">
            <div className="p-12 flex-1 flex items-center justify-center">
               <h2 className="text-5xl font-black uppercase text-[#800000] leading-tight text-center">
                 {programData[activeProgram].title}
               </h2>
            </div>
            <div className="flex-1 bg-gray-200">
               <img 
                 src={programData[activeProgram].image} 
                 alt={activeProgram} 
                 className="w-full h-full object-cover min-h-[300px]" 
               />
            </div>
          </div>

          {/* Program Description */}
          <section>
            <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#FFB81C] pb-2">
              Program Description
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              {programData[activeProgram].description}
            </p>
          </section>

          {/* Program Objectives */}
          <section>
            <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#FFB81C] pb-2">
              Program Educational Objectives
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {programData[activeProgram].objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </section>

          {/* Program Outcomes */}
          <section>
            <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#FFB81C] pb-2">
              Program Outcomes
            </h3>
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              {programData[activeProgram].outcomes.map((out, idx) => (
                <li key={idx}>{out}</li>
              ))}
            </ul>
          </section>

          {/* Faculty Button */}
          <div className="pt-8 border-t border-gray-100">
            <Link 
              to="/faculty-list" 
              className="inline-block bg-[#800000] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-[#FFB81C] hover:text-[#800000] transition-all shadow-md"
            >
              View {activeProgram} Faculty Members
            </Link>
          </div>

        </article>
      </div>
    </div>
  );
};

export default CollegePage;