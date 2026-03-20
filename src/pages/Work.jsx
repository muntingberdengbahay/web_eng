import placeholder from "../assets/images/Work at BulSu.png"; // 🔴 replace later

const Work = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">

      {/* CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">

        {/* HERO IMAGE */}
        <img
          src={placeholder}
          alt="We are hiring"
          className="w-full max-h-[420px] object-contain mb-10 rounded-xl shadow-md"
        />

        {/* SECTION */}
        <h2 className="text-2xl font-bold text-red-700 mb-2" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>
          Work at BulSU
        </h2>
        <p className="text-red-600 font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Be part of the flame that shapes future leaders.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          At Bulacan State University, careers are more than just jobs—they are opportunities to inspire, lead, and create meaningful impact. Driven by ALAB, we are looking for passionate individuals who are ready to contribute their expertise and grow within a dynamic academic community.
        </p>

        <p className="text-yellow-600 font-semibold mb-10">
          Step into a workplace where your passion fuels progress.
        </p>

        {/* WHY WORK */}
        <h2 className="text-2xl font-bold text-red-700 mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>
          Why Work at BulSU?
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Joining Bulacan State University means entering a professional environment that values excellence, innovation, collaboration, and purpose. Employees are encouraged to deliver quality service, explore new ideas, and work alongside committed professionals who share the same goal of shaping future leaders. In this community, every role carries significance, and every contribution helps build a stronger institution.
        </p>

        {/* CAREER */}
        <h2 className="text-2xl font-bold text-red-700 mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>
          Career Opportunities
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Bulacan State University offers a wide range of career opportunities for individuals with diverse expertise. From academic roles such as professors, instructors, and lecturers, to administrative and support positions, the university provides avenues for professional growth. Opportunities also extend to technical and IT roles, as well as creative and media-related positions. Regardless of the field, each role plays an important part in advancing the university’s mission and empowering students.
        </p>

        {/* APPLY */}
        <h2 className="text-2xl font-bold text-red-700 mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>
          How to Apply?
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Applying to Bulacan State University is a step toward a meaningful and fulfilling career. Interested applicants are encouraged to prepare their updated resume or curriculum vitae along with the necessary documents, and submit them through the university’s official application channels. This process ensures that qualified and passionate individuals can join and contribute to the BulSU community.
        </p>

        {/* CONNECT */}
        <h2 className="text-2xl font-bold text-red-700 mb-4" style={{ fontFamily: 'Enriqueta, serif', fontWeight: 700 }}>
          Connect with Us
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          For inquiries regarding career opportunities, applicants may reach out to the Human Resources Office of Bulacan State University. The university welcomes individuals who are ready to take part in its mission and encourages aspiring professionals to connect, ask questions, and begin their journey toward becoming part of a passionate and driven institution.
        </p>

        {/* BUTTON */}
        <div className="flex justify-end">
          <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded">
            Apply Now!
          </button>
        </div>

      </div>
    </div>
  );
};

export default Work;