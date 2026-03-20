import Bustos from "../assets/images/Bustos.png";
import Meneses from "../assets/images/Meneses.png";
import Sarmiento from "../assets/images/Sarmiento.png";
import Hagonoy from "../assets/images/Hagonoy.png";
import SanRafael from "../assets/images/SanRafael.png";
import Malolos from "../assets/images/Malolos.png";
import elib from "../assets/images/elib.png";
const Services = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">
        {/* OVERVIEW */}
        <h2 className="text-2xl font-bold text-red-700 mb-2">Overview</h2>
        <div className="border-b-2 border-black mb-4"></div>

        <p className="text-gray-600 mb-10 leading-relaxed">
          The Bulacan State University is committed to the advancement of the
          knowledge and values common to all educated person. Excellence in
          instruction, research, extension and student life is encouraged. The
          University strives to offer learning, experiences and opportunities
          designed to help students think effectively, develop the capacity to
          communicate, discriminate among values, and make relevant judgements.
        </p>

        {/* CAMPUSES */}
        <h2 className="text-2xl font-bold text-red-700 mb-2">BulSU Campuses</h2>
        <div className="border-b-2 border-black mb-8"></div>

        {/* CAMPUS ITEM */}
        {[
          {
            title: "Bustos Campus",
            img: Bustos,
            desc: "The Bulacan State University Bustos Campus, one of the largest satellite campuses, has transformed over decades from a small vocational training site into a major institution offering degree programs in education, technology, and engineering pathways. From humble beginnings in shared facilities and repurposed buildings, it has grown into a fully developed campus with modernized curricula. Today, it stands as a key contributor to the university’s mission, producing skilled graduates and future professionals.",
          },
          {
            title: "Meneses Campus",
            img: Meneses,
            desc: "Meneses Campus of Bulacan State University was established in 2001 in Bambang, Bulakan, Bulacan, initially offering general engineering programs. It began through the efforts of local officials and university leadership, with temporary facilities at Doña Candelaria Meneses Duque High School before transferring to its permanent site in Matungao in 2005. Named in honor of Dr. Anacleto R. Meneses, the campus now offers programs in engineering, teacher education, information technology, and hospitality management, supporting the university’s mission to provide accessible and quality education in the region.",
          },
          {
            title: "Sarmiento Campus",
            img: Sarmiento,
            desc: "The Bulacan State University Sarmiento Campus in San Jose del Monte began in 1998 through the generous donation of land by Cong. Angelito M. Sarmiento, initially holding classes in a garment building before transferring to its permanent site in Kaypian. Starting with engineering and industrial technology programs, the campus steadily expanded its academic offerings while nurturing academic excellence and student potential. Now under the supervision of Director Ms. Zenaida J. Buendia, the campus continues to uphold its mission of providing quality education rooted in strong community support.",
          },
          {
            title: "Hagonoy Campus",
            img: Hagonoy,
            desc: "The Bulacan State University Hagonoy Campus traces its roots to 1995 when an 8-hectare land was donated for its establishment, although political challenges delayed operations and the site temporarily served as a Philippine Army barracks. The campus was officially relaunched in 2011 under the leadership of Dr. Ladislao D. Marcelo, who significantly increased enrollment and expanded academic offerings from four to ten programs. Today, the campus continues to grow under Dr. Felicidad A. Eleogo, aspiring to achieve global competence while maintaining strong environmental responsibility.",
          },
          {
            title: "San Rafael Campus",
            img: SanRafael,
            desc: "The Bulacan State University San Rafael Campus serves as one of the university’s extension campuses aimed at expanding access to quality higher education in the province of Bulacan. It offers programs primarily focused on nursing, medical technology, and other health-relevant fields, supporting local development and student accessibility. Guided by the university’s vision of academic excellence, the campus continues to provide opportunities for students to grow professionally while contributing to regional progress.",
          },
          {
            title: "Malolos Campus - Main Campus",
            img: Malolos,
            desc: "The Bulacan State University Main Campus in Malolos serves as the heart of the university, where its legacy of academic excellence and innovation continues to thrive. As the central hub of BulSU, it houses the majority of colleges, administrative offices, and key facilities that support diverse programs in engineering, education, business, arts, and technology. With modern infrastructure, active student life, and a strong commitment to research and community engagement, the Main Campus stands as a symbol of BulSU’s enduring ALAB—shaping future professionals and leaders in the region and beyond.",
          },
        ].map((campus, index) => (
          <div key={index} className="mb-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* IMAGE */}
              <img
                src={campus.img}
                alt={campus.title}
                className="w-32 h-32 object-contain"
              />

              {/* TEXT */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3
                    className="text-yellow-600 font-bold mb-2"
                    style={{ fontFamily: "Enriqueta, serif" }}
                  >
                    {campus.title}
                  </h3>

                  <p
                    className="text-gray-600 mb-4 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {campus.desc}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded">
                    View List of Programs
                  </button>
                </div>
              </div>
            </div>

            {/* LINE */}
            <div className="border-b border-black mt-8"></div>
          </div>
        ))}

        {/* E-LIBRARY */}
        <h2
          className="text-2xl font-bold text-red-700 mb-2"
          style={{ fontFamily: "Enriqueta, serif" }}
        >
          BulSU E-Library Overview
        </h2>
        <div className="border-b-2 border-black mb-8"></div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src={elib} alt="elib" className="w-32 h-32 object-contain" />

          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h3
                className="text-yellow-600 font-bold mb-2"
                style={{ fontFamily: "Enriqueta, serif" }}
              >
                BulSU E-Library
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                The Bulacan State University Library serves as a hub for
                information, learning, and innovation, supporting the university’s
                mission by providing diverse print and digital resources, modern
                technology, and expert assistance. It promotes information
                literacy, academic growth, and cultural enrichment through quality
                materials, instructional programs, and a conducive learning
                environment. With services such as research assistance, online
                catalogs, internet access, and library orientations, the library
                empowers students and faculty to effectively access, evaluate, and
                utilize information while fostering a strong academic community.
              </p>
            </div>

            <div className="flex justify-end">
              <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded min-w-[170px]">
                Visit BulSU E-Lib
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
