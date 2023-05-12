import React, { useState } from "react";

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //console.log(email, password)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div className="card m-5 " style={{ width:500 }}>
      <h3 className="text-center mt-2">Login In</h3>
      <form onSubmit={ handleSubmit }>
        <div className="form-group m-3">
          <label className="mb-1">Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div className="form-group m-3">
          <label className="mb-1">Password</label>
          <input
            className="form-control"
            type="text"
            name="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <button type="submit" className="btn btn-success m-3" disabled= { !email.trim() || !password.trim() }>Iniciar Sesión</button>
      </form>    
    </div>
  )
}

export default Login;