import React from 'react'
import "./index.css"
import { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit =async (e) => {
        e.preventDefault();
        const url=""
        try{
const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData), 
  });

  if (response.ok) {
    console.log('Login successful');
  } else {
    console.error('Login failed');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
};
  return (
    
    <div>
              <form onSubmit={handleSubmit}>
        <div className="container w-25">
          <h1 style={{padding:"5px"}}>Welcome</h1>
          <label className='mt-3' htmlFor="email"><b>Email Address</b></label>
          <input
          className='mt-5'
            type="email"
            placeholder="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="pwd"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="pwd"
            value={formData.psw}
            onChange={handleChange}

            required
          />
          <button className="mt-3"onClick={handleSubmit} href="/products" type="submit"> Login</button>
        </div>
        <br />
      </form>

    </div>
  )
}

export default Login