import {useState, useEffect } from 'react';
import { getInternships } from '../../utilities/InternshipCalls.js'
import InternshipCard from '../../components/InternshipCard/InternshipCard.js'
import './RecentInternships.css'

export default function RecentInternships() {

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      const foundInternships = await getInternships();
      const featuredInternships = foundInternships.slice(-3)
      setInternships(featuredInternships);
    }
    fetchInternships()
  }, [])

  return (
    <div className="internship_listing_container">

      {internships.map((internship) => (
          <div className="recent_internship_cards">
          <InternshipCard
            title={internship.title}
            description={internship.description}
            image={internship.image} />
          </div>
          ))}
    </div>
  )}
