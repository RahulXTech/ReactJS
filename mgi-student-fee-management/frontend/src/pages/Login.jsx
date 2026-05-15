// Login.jsx

import { useState } from "react";
import { GraduationCap } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    enrollment: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.enrollment === "123456" &&
      formData.password === "student123"
    ) {
      alert("Login Successful");
      setError("");
    } else {
      setError("Invalid Enrollment Number or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-end px-10">

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-[35px] p-10 border border-white/30">

        {/* TOP */}
        <div className="flex flex-col items-center mb-10">

          <div className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center shadow-lg mb-5">
            <GraduationCap size={40} className="text-white" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800">
            Student Login
          </h1>

          <p className="text-gray-500 mt-3 text-center">
            Login to access your student dashboard
          </p>

        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-2xl mb-6 text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ENROLLMENT */}
          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Enrollment Number
            </label>

            <input
              type="text"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              placeholder="Enter Enrollment Number"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />

          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right">

            <button
              type="button"
              className="text-blue-700 hover:underline text-sm"
            >
              Forgot Password?
            </button>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;