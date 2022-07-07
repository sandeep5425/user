import React, { useState } from 'react';


export default function Register() {
  const [data,setData] = useState({fname:"",lname:"",age:"",mobNumber:"",email:"",password:"",password2:""})
  const handelRegister = (e)=>{
    e.preventDefault();
    if(data.password !==data.password2){
      return;
    }
    fetch("localhost://8080/api/user",{method:"post",body:data})
    .then(res=>res.json())
    console.log("Registered Sucessfully");
  }

  const handleInputChange = (e) => {
    setData((ps)=>({
      ...ps,[e.target.name]:e.target.value
    }));
  };

  return (
    <>
    <form className='container form' onSubmit={handelRegister}>
    <div class="mb-3">
    <label for="userName" class="form-label">First Name</label>
    <input type="text" value={data.fname} onChange={handleInputChange} class="form-control" name='fname' id="userName"/>
  </div>
  <div class="mb-3">
    <label for="userName" class="form-label">Last Name</label>
    <input type="text" value={data.lname} class="form-control" onChange={handleInputChange} name='lname' id="userName"/>
  </div>                      
  <div class="mb-3">
    <label for="userAge" class="form-label">Age</label>
    <input type="number" value={data.age} onChange={handleInputChange} name='age' class="form-control" id="userAge"/>
  </div>
  <div class="mb-3">
    <label for="userPhoneNo" class="form-label">Phone Number</label>
    <input type="number" value={data.mobNumber} onChange={handleInputChange} name='mobNumber' class="form-control" id="userPhoneNo"/>
  </div>
  <div class="mb-3">
    <label for="userEmail" class="form-label">Email address</label>
    <input type="email" value={data.email} onChange={handleInputChange} name='email' class="form-control" id="userEmail" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="userPassword" class="form-label">Password</label>
    <input type="password" value={data.password} onChange={handleInputChange} name='password' class="form-control" id="userPassword"/>
  </div>
  <div class="mb-3">
    <label for="userPassword" class="form-label">Confirm Password</label>
    <input type="password" value={data.password2} onChange={handleInputChange} name='password2' class="form-control" id="userPassword"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<h5 align ="center">
  already have an account?
<button type="submit" class="btn btn-primary"><a id="mylink" href="./login">Login</a>
</button></h5>
    </>
  )
}