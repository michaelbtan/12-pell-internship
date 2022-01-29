import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.js'
import { getMentors } from '../../utilities/MentorCalls.js'
import MentorCard from '../../components/MentorCard/MentorCard.js'
import './MentorListings.css'


export default function MentorListings() {

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const foundMentors = await getMentors();
      setMentors(foundMentors);
    }
    fetchMentors()
  }, [])

  return (
    <Layout>
      <h1 className="mentor_listing_header">Mentors</h1>
      <div className="mentor_listings_container">
        {mentors.map((mentor) => (
          <div className="filter_mentor_container">
            <MentorCard
              name={mentor.name}
              bio={mentor.bio}
              imageURL={mentor.imageURL}
              id={mentor.id} />
           </div>
            ))}
      </div>
    </Layout>
  )}
