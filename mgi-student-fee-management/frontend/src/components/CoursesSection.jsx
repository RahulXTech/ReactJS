import {
  GraduationCap,
  Pill,
  BriefcaseBusiness,
  HeartPulse,
  Scale,
  Wrench,
} from "lucide-react";

const courses = [
  {
    name: "Engineering",
    icon: <GraduationCap size={40} />,
    color: "from-blue-500 to-indigo-600",
  },

  {
    name: "Pharmacy",
    icon: <Pill size={40} />,
    color: "from-pink-500 to-rose-500",
  },

  {
    name: "Management",
    icon: <BriefcaseBusiness size={40} />,
    color: "from-orange-500 to-amber-500",
  },

  {
    name: "Nursing",
    icon: <HeartPulse size={40} />,
    color: "from-red-500 to-pink-500",
  },

  {
    name: "Law",
    icon: <Scale size={40} />,
    color: "from-violet-500 to-purple-600",
  },

  {
    name: "ITI",
    icon: <Wrench size={40} />,
    color: "from-green-500 to-emerald-600",
  },
];

function CoursesSection() {
  return (
    <div className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-800 mb-5">
            Explore Our Programs
          </h1>

          <p className="text-gray-500 text-xl max-w-3xl mx-auto">
            Discover industry-focused programs designed to build
            innovation, leadership, and career excellence.
          </p>

        </div>

        {/* COURSE GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-[35px] p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >

              {/* ICON */}
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white shadow-lg mb-8`}
              >
                {course.icon}
              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {course.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 leading-8 mb-8">
                Modern curriculum with practical training,
                industry exposure, innovation, and career-focused learning.
              </p>

              {/* BUTTON */}
              <button
                className={`bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition`}
              >
                Explore Program
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default CoursesSection;