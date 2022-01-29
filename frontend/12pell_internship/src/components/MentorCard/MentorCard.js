import React from 'react';
import { Link } from 'react-router-dom'
import './MentorCard.css'

export default function MentorCard(props) {
  return (
    <div className="mentor_card">
      <img src={props.imageURL} height="250px" width="250px" alt='Mentor Pic' />
      <div>
        <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <Link to={`/mentors/${props.id}`}>See More</Link>
      </div>
    </div>
  )}
