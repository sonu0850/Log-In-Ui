import React from "react";
import { NavLink } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { upDate } from "../../store/authSlice/authSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useParams();
  console.log("token======================+++++++++++++++++++++++ ", token);
  const formik = useFormik({
    initialValues: {
      newpassword: "",
      conformpassword: "",
    },
    validationSchema: Yup.object({
      newpassword: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      conformpassword: Yup.string()
        .max(12, "Must be 12 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("newpassword"), null], "password not match"),
    }),
    onSubmit: (values) => {
      console.log("valueswwwwwwwwwwwwwwwwwww ", values, token);
      dispatch(upDate({values:values, token:token}))
        .unwrap()
        .then((response) => {
          console.log("response111111111111111111", response);
          if (response.success === true) {
              navigate("/")
          }
        });
    },
  });
  return (
    <div className="updatebg">
      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className=" text-start">Change Password</h3>
        </div>
        <div className="updatecard-body ">
          <form
            className="form"
            role="form"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="inputPasswordNew">New Password</label>
              <input
                id="newpassword"
                name="newpassword"
                type="newpassword"
                className="form-control form-control-lg"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newpassword}
              />
              {formik.touched.newpassword && formik.errors.newpassword ? (
                <div className="text-danger">{formik.errors.newpassword}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="inputPasswordNewVerify">Conform Password</label>
              <input
                id="conformpassword"
                name="conformpassword"
                type="conformpassword"
                className="form-control form-control-lg"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.conformpassword}
              />
              {formik.touched.conformpassword &&
              formik.errors.conformpassword ? (
                <div className="text-danger">
                  {formik.errors.conformpassword}
                </div>
              ) : null}
              <span className="form-text small text-muted">
                To confirm, type the new password again.
              </span>
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
