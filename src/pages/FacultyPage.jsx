import React, { useState } from 'react';
import { Award, Search, User } from 'lucide-react'; // Removed Mail icon

const facultyData = [
  {
    id: 1,
    name: "Engr. Radger Teddy Manuel",
    role: "Program Chair",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    id: 2,
    name: "Engr. Romualdo Caluag",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 3,
    name: "Engr. Joyce Evangelista",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 4,
    name: "Engr. Sarah Faustino",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 5,
    name: "Engr. Renato Gopez",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 6,
    name: "Engr. Merricris Pangilinan",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 7,
    name: "Engr. Jennie Roque",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 8,
    name: "Engr. Florence Samonte",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 9,
    name: "Engr. June-june Santos",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 10,
    name: "Engr. Maureen Therese Balayan",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 11,
    name: "Engr. Ace Dhenniel V. Daria",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 12,
    name: "Engr. Cecilia A.  Geronimo",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 13,
    name: "Engr. Rondolf Lobo",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 14,
    name: "Engr. Marbel Perez",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 15,
    name: "Engr. Alexander M. Aquino",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 16,
    name: "Dr. Lech Walesa M. Navarra",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 17,
    name: "Engr. Maria Lorena SP. Villena",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 18,
    name: "Engr. Bernard G. Yasay",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 19,
    name: "Engr. Catherine V. Dela Cruz",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 20,
    name: "Engr. Richard Y. Dela Cruz",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 21,
    name: "Dr. Ma. Magdalena V. Gatdula",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 22,
    name: "Dr. Monaliza S. Jimenez",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 23,
    name: "Engr. Julius Vincent M. Abanel",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 24,
    name: "Engr. Hiroyoshi DG. Arai",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 25,
    name: "Engr. Robert Justin S. Chavez",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 26,
    name: "Engr. Albert C. Cruz Jr.",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 27,
    name: "Engr. Arlyne De Jesus",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 28,
    name: "Engr. Maria Ana G. Dangan",
    role: "Guest Lecturer",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
   {
    id: 29,
    name: "Engr. Sheila May M. Liwag",
    role: "Guest Lecturer",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

];

const FacultyPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const departments = ["All", "Civil Engineering", "Computer Engineering", "Electronics Engineering", "Electrical Engineering", "Mechanical Engineering", "Industrial Engineering"];

  const filteredFaculty = activeFilter === "All" 
    ? facultyData 
    : facultyData.filter(member => member.department === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-[#800000] py-16 px-8 text-white">
        <h1 className="text-4xl font-serif font-bold">Faculty & Staff</h1>
        <p className="text-[#FFB81C] mt-2 uppercase text-sm tracking-widest">Directory</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b sticky top-[104px] z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 overflow-x-auto flex gap-4 no-scrollbar">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all
                ${activeFilter === dept 
                  ? "bg-[#800000] text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-[#FFB81C] hover:text-[#800000]"}`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <p className="mb-8 text-gray-500 font-medium italic">
          Showing {filteredFaculty.length} members in {activeFilter}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#FFB81C] hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center p-8 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 mb-4" />
                <h2 className="text-xl font-bold text-[#800000]">{member.name}</h2>
                <p className="text-gray-500 font-medium text-sm mb-4">{member.role}</p>
                
                <div className="w-full pt-4 border-t border-gray-100 text-left">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Award size={18} className="text-[#FFB81C]" />
                    <span>{member.specialty}</span>
                  </div>
                  {/* Email block has been removed from here */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No faculty members found for this department yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyPage;