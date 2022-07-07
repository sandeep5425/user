import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export var loginStatus = false;
function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    var res = await fetch(`localhost://8080/api/user?email=${data.email}&password=${data.password}`)
    if(res.arrayBuffer().length>0) {
      loginStatus = true;
      history.push("/");
    }
  };

  const handleInputChange = (e) => {
    setData((ps)=>({
      ...ps,[e.target.name]:e.target.value
    }));
  };

  return (
    <>
      <form className="container form" method="get" onClick={login}>
        <div class="mb-3">
          <label for="userEmail" class="form-label">
            Email address
          </label>
          <input
            value={data.email}
            onChange={  handleInputChange}
            name="email"
            type="email"
            class="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="userPassword" class="form-label">
            Password
          </label>
          <input
            value={data.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            class="form-control"
            id="userPassword"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <h5 align="center">
        new user?
        <button type="register" class="btn btn-primary">
          <a id="mylink" href="./register">
            Register
          </a>
        </button>
        <h5>
          <i>
            <u>
              <a id="mylink" href="./signin">
                forget password
              </a>
            </u>
          </i>
        </h5>
      </h5>
    </>
  );
}

export default Login;
