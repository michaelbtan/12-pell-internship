import React from 'react';
import './InternshipCard.css'
import { Link } from 'react-router-dom'

export default function InternshipCard(props) {
  console.log(props)
  return (
    <div className="internship_card">
      <img src={props.image} alt='Internship Pic' />
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link to={`/internships/${props.id}`}>See More</Link>
      </div>
    </div>
  )
}
