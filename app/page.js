'use client';
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  // email
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('');
  // password 
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // boolean flag for validation errors
  const [validationErrors, setValidationErrors] = useState(false);

  let isValid = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset error
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Invalid username');
      isValid = false;
    }
    if (!password || password.length < 6 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    }

    if(isValid){
      router.push("/landingpage")
    }
  };

  return (
    <main>
      <div className="container">
        <div className='form-container'>
          <div className='title'>
            <h1>Welcome Back!</h1>
            <h2>Sign in to your account to continue</h2>
          </div>
        
          <form onSubmit={handleSubmit}>
          <div>
            Email <span style={{color : 'red'}}>*</span>
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            <input type='text' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
          <div>
            Password <span style={{color : 'red'}}>*</span>
            {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div>Forgot password?</div>
          <button type='submit'>
            Sign in
          {/* <AiOutlineArrowRight/> */}
          </button>
          </form>
          <div className='label-container'>
            <span>Don't have an account?</span>
            <Link href="/signup">
            <span className='span-signup'>Sign up</span>
            </Link>
            </div>
        </div>
      </div>
    </main>
  )

}
