const CalendarSection = () => {
  return (
    <div className="py-28 px-6 max-w-[1480px] mx-auto text-center">
      {/* TITLE */}
      <h2
        className="font-bold text-3xl md:text-4xl mb-12"
        style={{ fontFamily: "Enriqueta, serif", fontWeight: 700 }}
      >
        UNIVERSITY CALENDAR
      </h2>

      {/* CALENDAR CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
        <div className="border-4 border-yellow-500 rounded-2xl w-full h-60 flex flex-col justify-center items-center p-4">
          <h3 className="font-bold text-2xl">DEC</h3>
          <p className="font-bold text-3xl">19</p>
          <p className="text-xs mt-3 text-gray-600">
            *University-wide Christmas Party
          </p>
        </div>

        <div className="border-4 border-yellow-500 rounded-2xl w-full h-60 flex flex-col justify-center items-center p-4">
          <h3 className="font-bold text-2xl">DEC</h3>
          <p className="font-bold text-3xl">25</p>
          <p className="text-xs mt-3 text-gray-600">Christmas Day</p>
        </div>

        <div className="border-4 border-yellow-500 rounded-2xl w-full h-60 flex flex-col justify-center items-center p-4">
          <h3 className="font-bold text-2xl">JAN</h3>
          <p className="font-bold text-3xl">01</p>
          <p className="text-xs mt-3 text-gray-600">New Year Celebration</p>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded">
            View Calendar &gt;
          </button>
        </div>
      </div>

      {/* ABOUT TEXT */}
      <div
        className="max-w-4xl mx-auto text-gray-700 text-sm md:text-base"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <p className="mb-6">
          At Bulacan State University, ALAB is more than a tagline— it is the
          fire that drives excellence, leadership, and innovation. Discover a
          university where passion meets purpose, and every learner is empowered
          to rise, lead, and make an impact.
        </p>

        <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CalendarSection;
