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
  const handleClick = () => {
    // reset error
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if(!email){
      setEmailError('Invalid username')
    }
    if (!password || password.length < 6 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordError('Invalid password');
    }
    if (password !== confirmpassword || !confirmpassword){
      setConfirmPasswordError("Invalid Confirm password")
    }

  }
  return (
    <main>
      <div className="container">
        <div className='form-container'>
          <div className='title'>
            <h1>Sign Up</h1>
          </div>
        
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
          <div>
            Confirm Password <span style={{color : 'red'}}>*</span>
            {confirmpasswordError && <div style={{ color: 'red' }}>{confirmpasswordError}</div>}
            <input type='password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
          </div>

          <button onClick={handleClick}>
          Sign up
           {/* <AiOutlineArrowRight/> */}
            </button>
          <div className='label-container'>
            <span>Already has an account?</span>
            <Link href="/">
            <span className='span-signup'>Sign in</span>
            </Link>
            </div>
        </div>
      </div>
    </main>
  )

}
