import React from 'react';
import './Signin.css'

export default function Signin() {
  return (
    <div className="signin_container">
      <div className="signin_card">
        <div className="signin_header">
        </div>
        <div className="signin_form">
          <input
            className="signin_input"
            required
            type="text"
            name="email"
            // value={form.email}
            placeholder="Enter Email"
            // onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )}