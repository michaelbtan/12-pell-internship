import { useState, useEffect } from 'react';
import { getMentors } from '../../utilities/MentorCalls.js'
import MentorCard from '../../components/MentorCard/MentorCard.js'
import './FeaturedMentors.css'


export default function MentorListings() {

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const foundMentors = await getMentors();
      // const featuredMentors = foundMentors[Math.floor(Math.random() * foundMentors.length)]
      setMentors(foundMentors);
    }
    fetchMentors()
  }, [])

  return (
      <div className="featured_mentors_container">
      {mentors.map((mentor) => (
        <div className="featured_mentorcard">
        <MentorCard
            name={mentor.name}
            bio={mentor.bio} />
        </div>
        ))}
      </div>
  )}
