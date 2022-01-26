import React from 'react';
import './Signup.css'

export default function Signup() {
  return (
    <div className="signup_container">
      <div className="signup_card">
        <div className="signup_header">
        </div>
        <div className="signup_form">
          <input
            className="signup_input"
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
