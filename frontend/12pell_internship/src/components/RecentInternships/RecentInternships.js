import {useState, useEffect } from 'react';
import { getInternships } from '../../utilities/InternshipCalls.js'
import InternshipCard from '../../components/InternshipCard/InternshipCard.js'


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
        <div className="internship_cards">
          {internships.map((internship) => (
            <InternshipCard title={internship.title} description={internship.description} image={internship.image}/>
          ))}
        </div>
  )}
