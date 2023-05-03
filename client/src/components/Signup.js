import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import side from "../images/side.png";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfully");
      console.log("Registration successfully");

      history.push("/login");
    }
  };

  return (
    <>
      <section className="signup shadow p-3 mb-5 bg-white rounded">
        <div className="container ">
          <div className="signupcontainer">
            <div className="signupform">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-name " id="register-form">
                <div className="form-group">
                  <label htmlFor="name"> Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit btn-primary"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signupimage">
              <figure>
                <img className="sidepic" src={side} alt="sidepic" />
              </figure>
              <NavLink to="/login" className="side-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
