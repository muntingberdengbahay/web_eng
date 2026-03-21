import React, { useState, useEffect } from 'react'; // Add useEffect
import { useLocation } from 'react-router-dom'; // Add useLocation
import { Award, Search } from 'lucide-react';

const facultyData = [
  {
    id: 1,
    name: "Engr. Radger Teddy Manuel",
    role: "Program Chair",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 2,
    name: "Engr. Romualdo Caluag",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 3,
    name: "Engr. Joyce Evangelista",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 4,
    name: "Engr. Sarah Faustino",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 5,
    name: "Engr. Renato Gopez",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 6,
    name: "Engr. Merricris Pangilinan",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 7,
    name: "Engr. Jennie Roque",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 8,
    name: "Engr. Florence Samonte",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 9,
    name: "Engr. June-june Santos",
    role: "Faculty",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 10,
    name: "Engr. Maureen Therese Balayan",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 11,
    name: "Engr. Ace Dhenniel V. Daria",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 12,
    name: "Engr. Cecilia A.  Geronimo",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 13,
    name: "Engr. Rondolf Lobo",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 14,
    name: "Engr. Marbel Perez",
    role: "Part-time Instructor",
    specialty: "Civil Engineering",
    department: "Civil Engineering",
    image: "",
  },
  {
    id: 15,
    name: "Engr. Alexander M. Aquino",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 16,
    name: "Dr. Lech Walesa M. Navarra",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 17,
    name: "Engr. Maria Lorena SP. Villena",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 18,
    name: "Engr. Bernard G. Yasay",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 19,
    name: "Engr. Catherine V. Dela Cruz",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 20,
    name: "Engr. Richard Y. Dela Cruz",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 21,
    name: "Dr. Ma. Magdalena V. Gatdula",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 22,
    name: "Dr. Monaliza S. Jimenez",
    role: "Faculty",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 23,
    name: "Engr. Julius Vincent M. Abanel",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 24,
    name: "Engr. Hiroyoshi DG. Arai",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 25,
    name: "Engr. Robert Justin S. Chavez",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 26,
    name: "Engr. Albert C. Cruz Jr.",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 27,
    name: "Engr. Arlyne De Jesus",
    role: "Part-time Instructor",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 28,
    name: "Engr. Maria Ana G. Dangan",
    role: "Guest Lecturer",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
   {
    id: 29,
    name: "Engr. Sheila May M. Liwag",
    role: "Guest Lecturer",
    specialty: "Computer Engineering",
    department: "Computer Engineering",
    image: "",
  },
  {
    id: 30,
    name: "Engr. Donald M. Lapiguera",
    role: "Program Chair",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 31,
    name: "Engr. Mervin E. Albalate",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 32,
    name: "Dr. Russell N. Alfonso",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 33,
    name: "Engr. Hilario A. Calinao Jr.",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 34,
    name: "Engr. Jenette C. Centeno",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 35,
    name: "Engr. Dennis R. dela Cruz",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 36,
    name: "Dr. Reagan L. Galvez, PECE",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 37,
    name: "Engr. Albert Ian R. Javier",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 38,
    name: "Engr. Nasher G. Jimenez, PECE",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 39,
    name: "Engr. Amor A. Lacara",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 40,
    name: "Dr. Marlon C. Leyesa, PECE",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 41,
    name: "Prof. Oliver R. Mariano, PECE, ASEAN Engr.",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 42,
    name: "Engr. Dion Michael M. Mendoza",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 43,
    name: "Engr. Paul Ryan A. Santiago",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 44,
    name: "Engr. Rina S.P. Santiago",
    role: "Faculty",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
   {
    id: 45,
    name: "Engr. Jeffrey V. Cayetano",
    role: "Part-time Instructor",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 46,
    name: "Engr. Nemuel Norman F. Giron",
    role: "Part-time Instructor",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 47,
    name: "Engr. Evangelyn C. Samson",
    role: "Part-time Instructor",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 48,
    name: "Engr. Benjamin L. Santa maria, jr.",
    role: "Part-time Instructor",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
   {
    id: 49,
    name: "Engr. Christian S. Fajardo, PECE, ASEAN Engr.",
    role: "Industrial Lecturer",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
   {
    id: 50,
    name: "Engr. Richard R. Garcia, PECE, ASEAN, ACPE, APEC Engr.",
    role: "Industrial Lecturer",
    specialty: "Electronics Engineering",
    department: "Electronics Engineering",
    image: "",
  },
  {
    id: 51,
    name: "Engr. Arjay R. Alba",
    role: "Dean",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 52,
    name: "Engr. Dennis L. Aguirre",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 53,
    name: "Engr. Reynaldo C. Alejandria",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
   {
    id: 54,
    name: "Engr. Ronan Cadmiel C. Castro",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
   {
    id: 55,
    name: "Engr. Jovita SP. Domingo",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
   {
    id: 56,
    name: "Engr. Riah Ann DR. Fermin-Cayanan",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
   {
    id: 57,
    name: "Engr. Mark Adrian R. Lunaria",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 58,
    name: "Engr. Eleazer C. Nabong",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 59,
    name: "Engr. Allan Clark H. Timoteo",
    role: "Faculty",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
   {
    id: 60,
    name: "Engr. John Byrone A. Clavio",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 61,
    name: "Engr. Mark Louie D. Martinez",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 62,
    name: "Engr. Rogelio C. Pimentel",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 63,
    name: "Engr. Anthony T. Reyes",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 64,
    name: "Engr. Ronel I. Serrano",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 65,
    name: "Engr. Diane H. Villanueva",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 66,
    name: "Engr. Nhowel F. Jimenez",
    role: "Part-time Instructor",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 67,
    name: "Engr. John Paul V. Dela Cruz  ",
    role: "Industry Lecturer",
    specialty: "Electrical Engineering",
    department: "Electrical Engineering",
    image: "",
  },
  {
    id: 68,
    name: "Engr. Jeremy Laurence M. Bañez, MSIE, CIE, Assoc. ASEAN Eng.",
    role: "Program Chair",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 69,
    name: "Engr. Marianne B. Calayag, MSMfE, PIE, ASEAN Eng.",
    role: "Faculty",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 70,
    name: "Engr. Hazel A. Caparas, MSIE, PIE, ASEAN Eng.",
    role: "Faculty",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 71,
    name: "Dr. Rick Donald S. Manzon, PhD-Eng Mgt, MSIE, PIE",
    role: "Faculty",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 72,
    name: "Engr. Ivy Mar J. Ramos, MBA, PIE, ASEAN Eng.",
    role: "Faculty",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 73,
    name: "Engr. Dyan G. Rodriguez, MSIE, PIE, ASEAN Eng.",
    role: "Faculty",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 74,
    name: "Engr. Christian Lance P. Arojado",
    role: "Part-time Instructor",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 75,
    name: "Engr. Steven C. Co, Jr., CIE, Assoc. ASEAN Eng.",
    role: "Part-time Instructor",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 76,
    name: "Engr. Raph John P. Miranda, CIE",
    role: "Part-time Instructor",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 77,
    name: "Engr. Juan C. Tecson, LLB, PIE",
    role: "Part-time Instructor",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 78,
    name: "Engr. Jasper Kevin C. Dionisio, CIE, Assoc. ASEAN Eng.",
    role: "Industry Lecturer",
    specialty: "Industrial Engineering",
    department: "Industrial Engineering",
    image: "",
  },
  {
    id: 79,
    name: "Engr. Romano A. Gabrillo",
    role: "Program Chair",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 80,
    name: "Engr. Nancy M. Santiago",
    role: "Faculty",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 81,
    name: "Engr. Cyrus Lawrence C. Bual",
    role: "Faculty",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 82,
    name: "Engr. Rachel C. Bual",
    role: "Faculty",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 83,
    name: "Engr. Nasher G. Jimenez, PECE",
    role: "Faculty",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 84,
    name: "Engr. Jayvee L. Jimenez",
    role: "Part-time Instructor",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 85,
    name: "Engr. Precious Rose F. Galvez",
    role: "Part-time Instructor",
    specialty: "Manufacturing Engineering",
    department: "Manufacturing Engineering",
    image: "",
  },
  {
    id: 86,
    name: "Engr. Adrian C. Flores",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 87,
    name: "Engr. Aldrin C. Bernardo",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 88,
    name: "Engr. Boris R. Palao",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 89,
    name: "Engr. Felizardo S. Camilon Jr.",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 90,
    name: "Engr. Ian Jay T. Matias",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 91,
    name: "Engr. Romulo B. Panotes Jr.",
    role: "Faculty",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 92,
    name: "Engr. Amparo Cecilia DS. Sarmiento",
    role: "Part-time Instructor",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 93,
    name: "Engr. Haivell Joy C. Matias",
    role: "Part-time Instructor",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 94,
    name: "Engr. Arren B. Santos",
    role: "Part-time Instructor",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 95,
    name: "Engr. Zedrick T. Farin",
    role: "Part-time Instructor",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 96,
    name: "Engr. Aeron Cris C. Pacis",
    role: "Industry Lecturer",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 97,
    name: "Engr. Earl Jan L. Santos",
    role: "Guest Lecturer",
    specialty: "Mechanical Engineering",
    department: "Mechanical Engineering",
    image: "",
  },
  {
    id: 98,
    name: "Engr. Arvin Julius S. Tullao",
    role: "Program Chair",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
   {
    id: 99,
    name: "Engr. Nasher G. Jimenez, PECE",
    role: "Faculty",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 100,
    name: "Engr. Gabriel Angelo V. Pascual",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 101,
    name: "Engr. Al Justin S. Geronimo",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 102,
    name: "Engr. Jerome B. Bagsic",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 103,
    name: "Engr. Juan Martin R. Cruz",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 104,
    name: "Engr. Reggiel Clint L. Valdez",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 105,
    name: "Engr. Jason D. Lozano",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
  {
    id: 106,
    name: "Engr. John Darwin P. Quintal",
    role: "Part-time Instructor",
    specialty: "Mechatronics Engineering",
    department: "Mechatronics Engineering",
    image: "",
  },
];

const FacultyPage = () => {
  const { search } = useLocation(); // Hook to listen to the URL (?dept=...)
  const [activeFilter, setActiveFilter] = useState("All");

  const departments = [
    "All", 
    "Civil Engineering", 
    "Computer Engineering", 
    "Electronics Engineering", 
    "Electrical Engineering", 
    "Mechanical Engineering", 
    "Manufacturing Engineering", 
    "Mechatronics Engineering", 
    "Industrial Engineering"
  ];

  // Logic to read the URL parameter whenever it changes
  useEffect(() => {
    const params = new URLSearchParams(search);
    const dept = params.get('dept');
    if (dept && departments.includes(dept)) {
      setActiveFilter(dept);
    } else {
      setActiveFilter("All");
    }
  }, [search]);

  const filteredFaculty = activeFilter === "All" 
    ? facultyData 
    : facultyData.filter(member => member.department === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-[#800000] py-16 px-8 text-white">
        <h1 className="text-4xl font-serif font-bold">Faculty Members</h1>
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