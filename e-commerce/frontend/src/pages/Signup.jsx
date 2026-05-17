import React from 'react'
import { useState } from 'react'
import api from '../api/axios'


function Signup() {
  const [form, setForm] = useState({
    name : "",
    email : "",
    password: ""
  })
  const [msg, setMsg] = useState("")

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
  })
    e.preventDefault();
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await api.post("/auth/signup", form);
      setMsg(response.data.message);

    }catch(err){
      setMsg(err.response?.data?.message || "An error occured");
    }
  }


  return (
    <div>
     <h2>Create accoutn</h2>
     {msg && (<p>{msg}</p>)}


     <form onSubmit={handleSubmit}>
        <input placeholder='Enter name' type="text" name="name" value={form.name} onChange={handleChange} required /><br/>
        <input name='email' type='email' placeholder='Enter email' value={form.email} onChange={handleChange} required /><br/>
        <input name='password' type='password' placeholder='Enter password' value={form.password} onChange={handleChange} required /><br/>

        <button type='submit'>Sign Up</button>
     </form>
    </div>

    
  )
}

export default Signup