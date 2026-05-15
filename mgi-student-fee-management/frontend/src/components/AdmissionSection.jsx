import slide1 from "../assets/slide1.jpg";

function AdmissionSection() {
  return (
    <div className="py-20 px-10 bg-gray-100">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">

        <div>
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            Admission Enquiry
          </h1>

          <p className="text-gray-600 text-xl leading-9 mb-8">
            Begin your academic journey with Millennium Group of Institutions.
          </p>

          <img
            src={slide1}
            alt="campus"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold mb-8">
            Apply Now
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Mobile"
              className="w-full border rounded-xl p-4"
            />

            <button className="w-full bg-blue-700 text-white py-4 rounded-xl">
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AdmissionSection;