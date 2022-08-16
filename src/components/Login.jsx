import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showsignin, setShowSignin] = useState(false);
  const [message, setMessage] = useState("");
  const Toggle = () => {
    setShowSignin(!showsignin);
  };
  const navigate = useNavigate();
  const signupFn = () => {
    const fstname = document.getElementById("fstname").value;
    const lstname = document.getElementById("lstname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cnfpassword = document.getElementById("cnfpassword").value;
    if (fstname && lstname && email && password && cnfpassword) {
      localStorage.setItem("fstname", fstname);
      localStorage.setItem("lstname", lstname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

    }
    
    setMessage("User Signed Up Successfully...");
  };
  const loginFn = () => {
    let email = document.getElementById("email1").value;
    let password1 = document.getElementById("password1").value;
    let mail = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    console.log(mail, email, password, password1);
    if (mail && password) {
      if (email === mail && password === password1) {
        setMessage("Login successfully");
        navigate("/home");
      } else {
        setMessage("Please fill correct credential");
      }
    } else {
      setMessage("Please create an account");
    }
  };
  return (
    <div className="col-md-12  vh-100"
    style={{ background: "#3f51b5" }}>
    <h1 className="p-5  justify-content-center align-items-center " style={{ color: "white" }}><svg xmlns="http://www.w3.org/2000/svg" style={{ color: "white" }} width="48" height="48" viewBox="0 0 48 48"><path d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z"/></svg> Food's Restaurent</h1>
    <div
      className="pt-5 d-flex justify-content-center align-items-center"
    >
      <div className="card m-5 p-5">
        <div className="row">
          <div className="col">
            {showsignin ? (
              <div className="bg-white">
                <div>
                  <h1>Create Account</h1>
                  <div
                    className="text-center text-info"
                    onClick={Toggle}
                    style={{ cursor: "pointer" }}
                  >
                    Already a member? Login{" "}
                  </div>
                </div>
                <div className="">
                  <form>
                    <input
                      type="text"
                      className="border rounded m-1 w-100 p-1 "
                      placeholder=" First name"
                      autoFocus
                      required
                      id="fstname"
                    />
                    <br />
                    <input
                      type="text"
                      className="border rounded m-1 w-100 p-1"
                      placeholder=" Last name"
                      autoFocus
                      required
                      id="lstname"
                    />
                    <br />
                    <input
                      type="email"
                      className="border rounded m-1 w-100 p-1"
                      placeholder=" Email"
                      autoFocus
                      required
                      id="email"
                    />
                    <br />
                    <input
                      type="password"
                      id="password"
                      className="border rounded m-1 p-1 w-100"
                      placeholder=" Password"
                      autoFocus
                      required
                    />
                    <br />
                    <input
                      type="password"
                      className="border rounded m-1 w-100 p-1"
                      placeholder=" Confirm password"
                      id="cnfpassword"
                      autoFocus
                      required
                    />
                    <br />
                    <button
                      style={{ background: "#3f51b5" }}
                      className="d-flex justify-content-center btn btn-primary w-100 my-1 p-1"
                      onClick={signupFn}
                    >
                      Sign Up{" "}
                    </button>
                  </form>
                  <b className="text-secondry">{message}</b>
                </div>
              </div>
            ) : (
              <div className="  bg-white">
                <div>
                  <h1>Please Login</h1>
                  <div
                    className="text-center text-info"
                    onClick={Toggle}
                    style={{ cursor: "pointer" }}
                  >
                    Not a member? Signup{" "}
                  </div>
                </div>
                <div className="w-100">
                  <div>
                    <input
                      type="email"
                      className="border rounded m-1 p-1 w-100"
                      placeholder=" Email"
                      id="email1"
                      autoFocus
                      required
                    />
                    <br />
                    <input
                      type="password"
                      className="border rounded m-1 p-1 w-100"
                      placeholder=" Password"
                      id="password1"
                      autoFocus
                      required
                    />
                    <br />

                    <button
                      style={{ background: "#3f51b5" }}
                      className="d-flex justify-content-center  btn btn-primary w-100 m-1 p-1"
                      onClick={loginFn}
                    >
                      Signin
                    </button>
                    <b className="text-danger">{message}</b>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
