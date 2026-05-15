function NewsSection() {
  return (
    <div className="py-24 px-10 bg-gray-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-16">
          News & Events
        </h1>

        <div className="grid grid-cols-3 gap-10">

          {[1,2,3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                MANZIL 2025 Job Fair
              </h2>

              <p className="text-gray-600">
                MP’s biggest job fair hosted by Millennium Group.
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default NewsSection;