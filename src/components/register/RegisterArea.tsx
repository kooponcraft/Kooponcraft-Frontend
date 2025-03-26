'use client'
import Link from 'next/link';
import AppImage from "@/components/common/AppImage";
import React, { FormEvent, useState } from 'react';
import appAxios from '@/config/axios';

const RegisterArea = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const res = await appAxios.post('/createUser', {
      username,
      email,
      password,
      });

      if (res.status === 201) {
        console.log('User registered successfully:', res.data);

        // Optionally, redirect the user or show a success message
      } else {
        console.error('Unexpected response:', res);
      }
    } catch (error: any) {
        if (error.response) {
        console.error('Error response:', error.response.data);
        // Optionally, display error messages to the user
      } else {
        console.error('Error:', error.message);
      }
    } finally {
      setLoading(false); // Reset loading state after submission
    }
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

                <form className="register-form mt-5" onSubmit={register}>
                    <div className="form-group mb-4">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading} // Disable field when loading
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={loading} // Disable field when loading
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label
                        className="label-psswd"
                        htmlFor="registerPassword"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? 'Hide' : 'Show'}
                      </label>
                      <input
                        className="form-control"
                        id="registerPassword"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading} // Disable field when loading
                      />
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        id="rememberMe"
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        disabled={loading} // Disable checkbox when loading
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        I agree to all terms &amp; conditions.
                      </label>
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? 'Registering...' : 'Register Now'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="register-thumbnail mt-5 mt-md-0">
                <AppImage src="/assets/img/illustrator/4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default RegisterArea;