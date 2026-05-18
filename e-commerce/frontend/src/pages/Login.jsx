import React, { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [msg, setMsg] = useState("")

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await api.post("/auth/login", form)

      // Save token in localStorage
      localStorage.setItem("token", response.data.token)

      setMsg(response.data.message)

      // Redirect to home page
      setTimeout(() => {
        navigate("/")
      }, 2000)

    } catch (err) {

      setMsg(err.response?.data?.message || "An error occurred.")

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>

        </div>

        {msg && (
          <div className="bg-blue-100 text-blue-700 text-sm p-3 rounded-lg mb-4 text-center">
            {msg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login