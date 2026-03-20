import hero1 from "../../assets/images/hero-1.jpg"; // 🔴 placeholder
import hero2 from "../../assets/images/hero-2.jpg"; // 🔴 placeholder
import hero3 from "../../assets/images/hero-3.jpg"; // 🔴 placeholder

const NewsSection = () => {
  return (
<div className="py-16 px-4 max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT - BulSU Updates */}
        <div>
          <h2 className="font-bold text-lg mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>Traffic Advisory (News)</h2>
          <div className="cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            <img
              src={hero1}
              alt="updates"
              className="w-full h-[250px] object-cover"
            />
          </div>

          {/* Bottom small sections */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold mb-2" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>BulSU Awards</h3>
              <img
                src={hero2}
                alt="awards"
                className="w-full h-[150px] object-cover"
              />
            </div>

            <div className="cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold mb-2" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>Upcoming Events</h3>
              <img
                src={hero3}
                alt="events"
                className="w-full h-[150px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - Announcements */}
        <div>
          <h2 className="font-bold text-lg mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>Announcements</h2>

          <div className="flex flex-col gap-4">

            {/* ITEM */}
            <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-yellow-600 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                January 13, 2026
              </p>
              <h3 className="text-red-700 font-bold" style={{ fontFamily: 'Enriqueta, serif' }}>
                Traffic Advisory
              </h3>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-yellow-600 text-sm font-semibold">
                November 7, 2025
              </p>
              <h3 className="text-red-700 font-bold">
                Implementation of Online ...
              </h3>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-yellow-600 text-sm font-semibold">
                October 3, 2025
              </p>
              <h3 className="text-red-700 font-bold">
                Notice of Postponement ...
              </h3>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-yellow-600 text-sm font-semibold">
                October 2, 2025
              </p>
              <h3 className="text-red-700 font-bold">
                KULTURUN 2025 Hakbang ...
              </h3>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-yellow-600 text-sm font-semibold">
                August 19, 2026
              </p>
              <h3 className="text-red-700 font-bold">
                BOARD OF REGENTS ...
              </h3>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default NewsSection;