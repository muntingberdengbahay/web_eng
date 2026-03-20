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
    objectives: ["To equip the graduates with a strong foundation in the basic physical and engineering sciences which could be a tool in planning, designing, development, management, and maintenance of computer systems.",
"To prepare graduates to lead in the design, analysis and applications of hardware and software computing structures for professional Computer Engineering career.",
"To arm the graduates to be knowledgeable of human, financial, physical and resource management and equip them with essential graduate research skills, specializing in one of the Computer Engineering fields.",
"To promote the holistic growth of the graduates by providing them with opportunities to enhance not only their vocational skills but also their life perspectives and value-system.",
"To develop critical thinking and scientific inquiry through active participation and research endeavors.",
"To promote a strong sense of nationalism through productive involvement in extension and community outreach programs."],
    outcomes: ["Apply knowledge of mathematics and science to solve complex engineering problems;",
"Design and conduct experiments, as well as to analyze and interpret data;",
"Design a system, component or process to meet desired needs with realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards;",
"Function on multidisciplinary teams;",
"Identify, formulate, and solve complex engineering problems;",
"Understand the professional and ethical responsibility;",
"Communicate effectively;",
"Have a broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context;",
"Recognition of the need for, and an ability to engage in life-long learning;",
"Knowledge of contemporary issues;",
"Use techniques, skills and modern engineering tools necessary for engineering practices;",
"Have a knowledge of understanding of engineering and management principles as a member and leader in a team, to manage projects and in multidisciplinary environments."],
    image: "/comp-eng.jpg"
  },
  "Electrical Engineering": {
    title: "Electrical Engineering",
    description: "The Electrical Engineering program deals with the study and application of electricity, electronics, and electromagnetism.",
    objectives: ["Graduates of electrical engineering program are experts in their field of work to cope with the needs and demands of the society they serve.",
"Three to five years after graduation they will contribute to the advancement of technology and industrialization.",
"Their work as an electrical engineer imbued with Christian awareness, pride, honor and dignity.",
"The graduates are fully equipped with knowledge and experienced towards nation building.",
"Contribute to the nation's development with sense of social responsibility and accountability, establishing values of honors, sense of urgency and love of work."],
    outcomes: ["Apply knowledge of mathematics and sciences to solve complex engineering problems;",
"Develop and conduct appropriate experimentation, analyze and interpret data;",
"Design a system, components or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards;",
"Function effectively on multi-disciplinary and multi-cultural teams that establish goals, plan tasks, and meet deadlines;",
"Identify, formulate and solve complex problems in electrical engineering;",
"Recognize ethical and professional responsibilities in engineering practice;",
"Communicate effectively with a range of audience;",
"Understand the impact of engineering solution in a global, economic, environmental, and social context;",
"Recognize the need for additional knowledge and engage in lifelong learning;",
"Articulate and discuss the latest developments in the field of electrical engineering;",
"Apply techniques, skills, and modern engineering tools necessary for electrical engineering practice;",
"Demonstrate knowledge and understanding of engineering and management principles as a member and/or leader in a team to manage projects in multidisciplinary environments"],
    image: "/elec-eng.jpg"
  },
  "Electronics Engineering": {
    title: "Electronics Engineering",
    description: "Focuses on electronic circuits, devices, and systems for communication and control.",
    objectives: ["Graduates are industry-competent Electronics Engineer practitioner continually developing their technical skills across disciplines in Electronics Engineering.",
"Contributes significant and innovative solutions that support national development applying the principles and professional skills of Electronics Engineering.",
"Graduates are competitive leaders with sense of professional responsibility, social awareness and ethical values."],
    outcomes: ["Apply knowledge of mathematics and science to solve engineering problem;",
"Design and conduct experiments, as well as to analyze and interpret data;",
"Design a system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability and sustainability in accordance with standards;",
"Function on multidisciplinary teams;",
"Identify, formulate, and solve engineering problems;",
"Apply professional and ethical responsibility;",
"Communicate effectively;",
"Identify the impact of engineering solutions in a global, economic, environmental and societal context;",
"Recognize the need for and an ability to engage in a lifelong learning;",
"Apply knowledge of contemporary issues;",
"Use of techniques, skills, and modern engineering tools necessary for engineering practice;",
"Apply knowledge of engineering and management principles as a member or leader in a team to manage projects and in multidisciplinary projects;",
"Understand at least on specialized field of electronics engineering practice"],
    image: "/ece-eng.jpg"
  },
  "Industrial Engineering": {
    title: "Industrial Engineering",
    description: "Focuses on the optimization of complex processes, systems, or organizations.",
    objectives: ["Pursue the career as Industrial Engineers, including a leading role in the design, improvement and installation of integrated systems of people, materials, information, equipment and energy.",
"Demonstrate specialized knowledge and skills in the mathematical, physical and social sciences together with the principles and methods of engineering analysis and design to specify, predict and evaluate the results obtained from such system.",
"Assume supervisory positions in the manufacturing and service industries."],
    outcomes: ["Ability to apply knowledge of mathematics and science to solve complex industrial engineering problems;",
"Ability to design and conduct experiments, as well as to analyze and interpret data;",
"Ability to design a system component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards;",
"Ability to function on multidisciplinary and multicultural teams;",
"Ability to identify, formulate, and solve complex industrial engineering problems;",
"Understanding of professional and ethical responsibility;",
"Ability to communicate effectively;",
"Broad education necessary to understand the impact of engineering solutions in a global, economic, environmental and social context;",
"Recognition of the need for, and an ability to engage in life-long learning;",
"Knowledge of contemporary issues;",
"Ability to use techniques, skills, and modern engineering tools necessary for engineering practice;",
"Knowledge and understanding of engineering and management principles as a member and leader in a team, to manage projects in a multidisciplinary environment;",
"Ability to design, develop, implement, and improve integrated systems that include people, materials, information, equipment and energy."],
    image: "/ie-eng.jpg"
  },
  "Manufacturing Engineering": {
    title: "Manufacturing Engineering",
    description: "Focuses on the development and improvement of manufacturing systems.",
    objectives: ["Within 5 years after graduation, the graduates of Mechatronics Engineering Program shall have:",
"Undertaken, either in autonomous or in group environment, projects that show ability to solve  complex engineering systems.",
"Demonstrated professional success via promotions and/or positions of increasing responsibility.",
"Demonstrated life-long learning via progress toward completion of an advanced degree professional development/continuing education courses, or industrial training courses"],
    outcomes: [],
    image: "/mfg-eng.jpg"
  },
  "Mechanical Engineering": {
    title: "Mechanical Engineering",
    description: "Focuses on the design, analysis, manufacturing, and maintenance of mechanical systems.",
    objectives: ["Be equipped with the skills in planning, leading, organizing and controlling resources such as manpower, equipment, materials and energy",
"Provide technical knowledge and expertise in engineering analysis and design to provide the solution and sustain the demands and needs of the community and of the region",
"Assure the quality of the work and check against with the sustainability, occupational safety and health standards, policies and laws nationally and globally",
"Participate in activities that promote and support socio - economic development nationally and globally",
"Practice the career in Mechanical Engineering including a leading role in Thermal systems such as Air conditioning and Refrigeration or Power generation, or in the Design of Machineries"],
    outcomes: ["apply knowledge of mathematics and science to solve mechanical engineering problems;",
"design and conduct experiments, as well as to analyze and interpret data;",
"design a system, component, or process to meet desired needs within realistic constraints, in accordance with standards;",
"function in multidisciplinary and multi-cultural teams;",
"identify, formulate and solve mechanical engineering problems;",
"understand professional and ethical responsibility;",
"communicate effectively;",
"understand the impact of mechanical engineering solutions in a global, economic, environmental, and societal context;",
"recognize the need for, and engage in life-long learning;",
"know contemporary issues;",
"use techniques, skills and modern engineering tools necessary for mechanical engineering practice;",
"know and understand engineering and management principles as a member and leader of a team, and to manage projects in a multidisciplinary environment."],
    image: "/mech-eng.jpg"
  },
  "Mechatronics Engineering": {
    title: "Mechatronics Engineering",
    description: "A multidisciplinary field that combines mechanical, electronic, and computer engineering.",
    objectives: ["Service Driven Leadership – Practice leadership in the Manufacturing Engineering profession by holding key positions in top companies, academic institutions or starting up their own enterprise, while maintaining high standards of professional, ethical and social responsibility.",
"Professional and Personal Development – Pursue lifelong learning by continuously improving and expanding not only their technical skills but also personal skills with increasing independence and responsibility.",
"Social Responsibility – Active participation in MfE Professional societies or other professional organizations as well as community based organization with the purpose of being the transformers of the industry towards innovation."],
    outcomes: [],
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
          College of Engineering
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
          {/*<section>
            <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#FFB81C] pb-2">
              Program Description
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              {programData[activeProgram].description}
            </p>
          </section>*/}

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
          {programData[activeProgram].outcomes.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#FFB81C] pb-2">
              Program Outcomes
            </h3>
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              {programData[activeProgram].outcomes.map((out, idx) => (
                <li key={idx}>{out}</li>
              ))}
            </ul>
          </section> )}


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