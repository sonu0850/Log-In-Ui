import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/authSlice/authSlice";


const LogIn = () => {
  const token =localStorage.getItem("token")
useEffect(()=>{
  if(token){
    navigate("/Home")
  }
},[token])
 
const   dispatch = useDispatch()
const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false);
  const TogglePassword = () => {
    setshowPassword(!showPassword);
  };
  

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Password Required"),
    }),
    onSubmit: (values) => {
      dispatch(logIn(values)).unwrap().then((res)=>{
       console.log("ttt", res);
       if (res.success===true) {
         navigate('/Home');
         localStorage.setItem('token', res.token)
       }
      })
  
      
    },
  });
  return (
    <div className="container">
     
      <div className="col-12">
        <div className="loginbg ">
          <div className="container ">
            <div className="leftimg absolute ">
              <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1710313625~exp=1710314225~hmac=8be3f513eb37f414fd457909b05f90be4420053f30c183b688f07015f4c124cb" alt="" />
            </div>
          
          </div>
          <div className="login-container w-100">
            <form onSubmit={formik.handleSubmit} className="login-form">
              

              <h1>Log In</h1>
              <p>Please login to your account</p>

              <label htmlFor="email">Email Address</label>
              <input
                className="ein"
                id="email"
                placeholder="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className=" text-danger">{formik.errors.email}</div>
              ) : null}

              <div className="loginput position-relative">
                <label className="ms-0" htmlFor="password">
                  Password
                </label>
                <input
                  className="input-group "
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-danger  ">{formik.errors.password}</div>
                ) : null}
                <div
                  className="conform-eye position-absolute"
                  style={{ top: "60px", right: "15px" }}
                  onClick={TogglePassword}
                >
                  {" "}
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}{" "}
                </div>
              </div>

              <button type="submit" className="logbtn">
                Log In
              </button>
              <div className="bottom-text">
                <p>Don't have an account? </p>
                <button
                  className="signupbtn"
                  onClick={() => navigate("/signUp")}
                >
                  Sign Up
                </button>
                <p>
                  {" "}
                  <Link
                    to="forgetPassword"
                    onClick={() => navigate("/forgetPassword")}
                  >
                    Forgot password?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
