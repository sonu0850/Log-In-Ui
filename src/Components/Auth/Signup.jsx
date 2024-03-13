import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/authSlice/authSlice";
import Signupimg from '../../assets/signnnn.png'



const SignupForm = () => {
  const Navigate = useNavigate();
  const dispatch=useDispatch()
  const selector= useSelector((state)=>state.authSlice)
  const loading= selector.loading;
  const [showPassword, setshowPassword] = useState(false); 
  const [signShowPassword, setsignShowPassword] = useState(false); 
const  TogglePassword =()=>{
  setshowPassword(!showPassword)
}
const  ToggleconformPassword =()=>{
  setsignShowPassword(!signShowPassword)
}
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required(" Email Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirm_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("password"), null], "password not match"),
    }),
    onSubmit: (values) => {
      dispatch(signUp(values))
    
    },
  });
  return (
    <div className="signupimg flex justify-center items-center">
      <div className="signupleftimg">
<img src={Signupimg} alt="" width={500} />
      </div>
      <form onSubmit={formik.handleSubmit} className=" container-form ">
          <div className="signp ">
            <h1>Sign Up</h1>
          </div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{background:"transparent"}}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="">{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            style={{background:"transparent"}}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{background:"transparent"}}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <div className="position-relative">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{background:"transparent"}}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{fontSize:"15px"}}>{formik.errors.password}</div>
          ) : null}

          <div className='position-absolute mx-auto' style={{right:"100px", top:"20px"}} onClick={TogglePassword}> {showPassword ? < FaRegEye /> : <FaEyeSlash />} </div>
          </div>
          
          <div className="position-relative">
          <label htmlFor="confirm_password">Conform Password</label>
          <input
            id="confirm_password"
            name="confirm_password"
            type={signShowPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm_password}
          style={{background:"transparent"}}
            
          />
          
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <div>{formik.errors.confirm_password}</div>
          ) : null}{" "}
          <p className='position-absolute mx-auto' style={{right:"100px", top:"20px"}} onClick={ToggleconformPassword}> {signShowPassword ? < FaRegEye /> : <FaEyeSlash />} </p>
          </div>
        
          <br />
          <button type="Signup" className="mt-4 ms-4">
            Sign Up
          </button>
          <p className=" mt-2">
           
              If you have already Account ? <Link to="/" className="ms-1 " onClick={() => Navigate("/")}>
              Log In
            </Link>
           
          </p>
          
        </form>
    </div>
  );
};
export default SignupForm;
