
'use client'
import AppImage from "@/components/common/AppImage";
import Link from 'next/link';
import React from 'react';

const ForgetPasswordArea = () => {
  return (
    <>
      <div className="register-area">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-xl-5">
              <div className="register-card">
                <h2>Reset Password</h2>
                <p>Already have an account?<Link className="ms-1" href="/login">Log In</Link></p>
                <div className="register-form mt-5">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group mb-4">
                      <input className="form-control" type="email" placeholder="Email or Username" required />
                    </div>
                    <button className="btn btn-warning w-100" type="submit">Reset Password</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="register-thumbnail mt-5 mt-md-0">
                <AppImage src="/assets/img/illustrator/4.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordArea;