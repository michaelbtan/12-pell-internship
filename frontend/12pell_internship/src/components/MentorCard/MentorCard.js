import React from 'react';
import './MentorCard.css'

export default function MentorCard(props) {
  return (
    <div className="mentor_card">
      <img src='/' alt='Mentor Pic' />
      <div>
        <h1>{props.name}</h1>
      <p>{props.bio}</p>
        <button>See More</button>
      </div>
    </div>
  )}
