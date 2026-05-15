function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

          {/* BRAND */}
          <div>

            <h1 className="text-4xl font-bold mb-5">
              Millennium Group
            </h1>

            <p className="text-gray-400 leading-8 text-lg">
              Central India’s Top Choice for Research &
              Excellence with world-class education,
              innovation, and placements.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                Admissions
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Courses
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Placements
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Contact
            </h2>

            <div className="space-y-4 text-gray-400">

              <p>
                Neelbad, Bhopal, Madhya Pradesh
              </p>

              <p>
                +91 9876543210
              </p>

              <p>
                info@millennium.edu.in
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-gray-500 text-sm">

          <p>
            © 2025 Millennium Group of Institutions.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Support
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;