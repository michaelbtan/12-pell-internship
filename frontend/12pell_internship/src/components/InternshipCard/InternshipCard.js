import React from 'react';
import './InternshipCard.css'

export default function InternshipCard(props) {
  return (
    <div className="internship_card">
      <img src='/' alt='Internship Pic' />
      <div>
      <h1>{props.title}</h1>
      <p>description</p>
        <button>See More</button>
      </div>
    </div>
  )}
