import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImage from "../images/homebg.png";
import { div } from "@tensorflow/tfjs";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    async function ProceedLoginusingAPI(e) {
        e.preventDefault();
    
        let inputObj = { username: username, password: password };
    
        if (validate()) {
          try {
            const response = await fetch("http://127.0.0.1:8000/WebApp/login/", {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(inputObj),
            });
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              toast.success("Success");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("jwttoken", response.jwtToken);
              usenavigate("/");
            } else {
              toast.error("Please Enter valid credentials");
            }
          } catch (err) {
            toast.error("Login Failed due to :" + err.message);
          }
        } else {
          // toast.error("Please fill out all the fields");
        //   console.log("Please fill out all the fields!");
        }
      }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div>
            <div className="login-container-main d-flex justify-content-center align-items-center">
        <form
          onSubmit={ProceedLoginusingAPI}
          className="row justify-content-center pt-4 pb-4 shadow-lg rounded-4 w-50"
        >
          <div
            className="text-center fs-1 fw-semibold"
            style={{ color: "green" }}
          >
            Login
          </div>
          <div className="col-md-9 mt-2 mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => usernameupdate(e.target.value)}
            />
          </div>
          <div className="col-md-9">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
            />
          </div>
          <div className="col-md-8 row justify-content-around mt-5">
            <button className="login-btn col-md-4" type="submit">
              Login
            </button>
            <Link
              className="newUser-btn text-center col-md-4 text-decoration-none"
              to={"/register"}
            >
              New User
            </Link>
          </div>
        </form>
      </div>
        </div>
    );
}

export default Login;