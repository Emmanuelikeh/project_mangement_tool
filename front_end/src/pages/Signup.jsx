import React, { useState } from 'react'
import "./Signup.css"
import {Link} from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repassword, setRePassword] = useState("");

  function handleSignup(e){
    e.preventDefault();
   }
  

  return (

    <div className='container'>
    <div className='row'>
    <div className='col col-md-5 signup__bg'></div>
    <div className='col col-md-7 d-flex align-items-center justify-content-center flex-direction-colums'>
      <form className='form-style' onSubmit={handleSignup}>
      <div class="mb-3">
          <label for="exampleInputName" class="form-label">UserName</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='John Doe' onChange={e => setName(e.target.value)} value={name}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='@example.com' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">Re-enter Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setRePassword(e.target.value)} value={repassword} />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
        <div className='py-4'>
          <p className='text-center'>
            Already have an account <Link to="/login">Login</Link>
          </p>

        </div>
    </form>
    </div>
    </div>
  </div>
  )
}

export default Signup