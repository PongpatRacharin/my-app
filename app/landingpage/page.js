'use client';

import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {

  return (
    <main>
      <div className="container" style={{textAlign : 'center'}}>
        <div className='form-container'>
          <div className='title'>
            <h1>Landing Page</h1>
            <h2>Quote of the day</h2>
          </div>
          <div className='box-sd'>
          <p style={{color:'gray'}}>
          <span style={{textAlign:'left'}}>“</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
          <span style={{textAlign:'right'}}>”</span>
          <span>-John Does</span>
          </p>
        </div>
        <Link href="/"><div style={{marginTop:100, color:'purple', fontSize:14, fontWeight:'bold'}}>Sign Out</div></Link>
        </div>
      </div>
    </main>
  )

}
