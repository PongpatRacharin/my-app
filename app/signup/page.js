'use client';
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // email
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('');
  // password 
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // confirm password 
  const [confirmpassword, setConfirmPassword] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  
  let isValid = true;

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // reset error
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!email) {
      setEmailError('Invalid username');
      isValid = false;
    }
    if (!password || password.length < 6 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    }
    if (password !== confirmpassword || !confirmpassword) {
      setConfirmPasswordError('Invalid Confirm password');
      isValid = false;
    }

    if(isValid){
      console.log('Form submitted:', { email, password, confirmpassword });
    }
  };


  return (
    <main>
      <div className="container">
        <div className='form-container'>
          <div className='title'>
            <h1>Sign Up</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              Email <span style={{ color: 'red' }}>*</span>
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              <input type='text' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              Password <span style={{ color: 'red' }}>*</span>
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              Confirm Password <span style={{ color: 'red' }}>*</span>
              {confirmpasswordError && <div style={{ color: 'red' }}>{confirmpasswordError}</div>}
              <input type='password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button type="submit">
              Sign up
            </button>
          </form>

          <div className='label-container'>
            <span>Already has an account?</span>
            <Link href="/">
              <span className='span-signup'>Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );

}
