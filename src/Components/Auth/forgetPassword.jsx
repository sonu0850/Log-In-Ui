import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { forGet } from '../../store/authSlice/authSlice';

const forgetPassword = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
          email: '',
          
    },
    validationSchema: Yup.object({
     
      email: Yup.string().email('Invalid email address').required('Email Required'),
      
    }),
    onSubmit: values => {
      dispatch(forGet(values)).unwrap().then((response)=>{
        if(response.success===true){
          
        }
      })
  },
  });
  return (
    <div className="loginbg">
      <div className="container">
    <div className="leftsec">
      
        
    </div>
    </div>
    <div class="forgot-container w-100">
    <form onSubmit={formik.handleSubmit} className='forgot-form'>
      <img className='puma' src="" alt="" />
    <div className="forgeth1">
    <h1>Forget Password</h1>
    </div>
    
      

      <label htmlFor="email">Please Enter Your email We will send link on your Mail for Resetting the Password</label>
      <input className='ein mb-4'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email? (
        <div className='mb-3 text-danger'>{formik.errors.email}</div>
      ) : null}
      

      <div className="forgotbtn d-flex  border-2 ">
     <div className="goback">
    <Link to="/">  <button onClick={()=>navigate("/")} type="submit" >Go Back </button></Link>
     </div>
      <div className="sendemail">
      <button type="submit" >Send Email </button>
      </div>
      </div>
      <div class="bottom-text">
    </div>
    </form>
    </div>
    </div>
    
  );
};
export default forgetPassword;