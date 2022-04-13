import "../App.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";


const Register1 = () => {
  var auth = JSON.stringify(localStorage.getItem("auth"));

  console.log("this is auth string :" + auth);
  const nav = useNavigate();

  const [input, setInput] = useState({
    username: "",

    password: "",
    role: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setInput((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,

        [name]: value,
      };
    });
  };

  const showdata = (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8090/subs", {
          username: input.username,

          password: input.password,
          role: input.role,
        })

        .then((response) => {
          console.log(response.data.response);
          const a = localStorage.setItem("auth",JSON.stringify(response.data.response))

          nav("/Login2")
          alert("Registered Succesfully")
        })
    } catch (error) {
      console.log("error is", error)
    };
  }

  return (
    <>
     <div>
       


       

        <section class="vh-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                      <p class="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter username"
                          onChange={inputEvent}
                          value={input.username}
                          required
                        />
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          onChange={inputEvent}
                          value={input.password}
                          required
                        />
                        <label class="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>
                      <div style={{ width: "300px", height: "50px" }}>
                        <label htmlFor="role" style={{ color: "white" }}>
                          Choose a Role:
                        </label>

                        <select
                          name="role"
                          id="role"
                          value={input.role}
                          onChange={inputEvent}
                        >
                          <option value="NA">Register as</option>

                          <option value="user">user</option>

                          <option value="admin">admin</option>
                        </select>
                      </div>

                      <button type="submit" onClick={showdata}>
                        Register
                      </button>

                      <div class="d-flex justify-content-center text-center mt-4 pt-1"></div>
                      <Link to="/Login2">login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      
    </>
  );
};

export default Register1;
