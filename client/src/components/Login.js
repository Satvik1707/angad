import React, { useState } from "react";
import left_pic from "../images/video.jpg";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginuser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Creditials");
    } else {
      window.alert("Login Successfully");
    }
    history.push("/");
  };

  return (
    <>
      <section className="login shadow p-3 mb-5 bg-white rounded">
        <div className="container ">
          <div className="logincontainer">
            <div className="loginimage">
              <figure>
                <img className="leftpic" src={left_pic} alt="sidepic" />
              </figure>
              <NavLink to="/signup" className="side-link">
                create an account
              </NavLink>
            </div>
            <div className="loginform">
              <h2 className="loginform-title">Sign in</h2>
              <form method="POST" className="login-name">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="login"
                    id="signup"
                    className="loginform-submit btn-primary"
                    value="Log in"
                    onClick={loginuser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
