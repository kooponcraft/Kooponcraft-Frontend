
'use client'
import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';

const RegisterArea = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <>
      <div className="register-area">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center justify-content-between">
          <div className="col-12 col-md-6 col-xl-5">
            <div className="register-card">
              <h2>Create your free account</h2>
              <p>Already have an account?
                <Link className="ms-1 hover-primary" href="/login">Log In</Link>
              </p>
               
              <div className="register-form mt-5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-4">
                    <input className="form-control" type="email" placeholder="Email" required />
                  </div>
                  <div className="form-group mb-4">
                    <input className="form-control" type="text" placeholder="Username" required />
                  </div>
                  <div className="form-group mb-4">
                    <input className="form-control" type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group mb-4">
                    <label className="label-psswd" htmlFor="registerPassword" onClick={togglePasswordVisibility}> {passwordVisible ? 'Hide' : 'Show'}</label>
                    <input className="form-control" id="registerPassword"  type={passwordVisible ? 'text' : 'password'} placeholder="Password" required />
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" id="rememberMe" type="checkbox" value="" checked />
                    <label className="form-check-label" htmlFor="rememberMe">I agree to all terms &amp; conditions.</label>
                  </div>
                  <button className="btn btn-primary w-100" type="submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="register-thumbnail mt-5 mt-md-0"><Image layout="fill" src="/assets/img/illustrator/4.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterArea;