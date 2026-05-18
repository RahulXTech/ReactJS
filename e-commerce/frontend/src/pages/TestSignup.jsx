import React from 'react'
import { useState } from 'react'
import api from '../api/axios'



function TestSignup() {

    const [form, setForm]=useState({
        name : "",
        email : "",
        password : ""
    })
    const [msg, setMsg] = useState("");


    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        e.preventDefault()
    }

    const handleSubmit = ()=>{

    }

  return (
    <div>
        <h1> {form.name}</h1>
        <h1> {form.email}</h1> 
        <h1> {form.password}</h1> 

        <form>
            <input placeholder='Enter name' type="text" name="name" value={form.name} onChange={handleChange} required /><br/>
            <input name='email' type='email' placeholder='Enter email' value={form.email} onChange={handleChange} required /><br/>
            <input name='password' type='password' placeholder='Enter password' value={form.password} onChange={handleChange} required /><br/>
            
            <button>Submit</button>
        </form>

    </div>
  )
}

export default TestSignup