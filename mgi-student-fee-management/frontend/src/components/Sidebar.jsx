import logo from "../assets/logo.jpg";

const menuItems = [
  "About Us",
  "Courses",
  "Admissions",
  "Placement",
  "Important Links",
  "Virtual Tour",
  "Tarkash SAC",
  "MARC",
  "MAITRIM 2026",
  "News and Events",
  "Contact Us",
];

function Sidebar() {
  return (
    <div className="w-[240px] h-screen bg-[#1b237e] text-white fixed left-0 top-0 z-50 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center pt-5">
          <img
            src={logo}
            alt="logo"
            className="w-20 mb-3"
          />

          <h1 className="text-[34px] font-bold leading-none">
            MILLENNIUM
          </h1>

          <h2 className="text-[#f5b400] text-[18px] font-semibold mt-1 text-center px-2">
            GROUP OF INSTITUTIONS
          </h2>
        </div>

        {/* Menu */}
        <ul className="mt-8 px-5 space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-yellow-400 transition-all duration-300 text-[17px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Login Button */}
      <div className="px-5 pb-6">
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300">
          Student Login
        </button>
      </div>
    </div>
  );
}

export default Sidebar;