import { useEffect, useState } from 'react'
import { getInternship } from '../../utilities/InternshipCalls.js'
import { Link, useParams } from 'react-router-dom'
import DeleteInternship from '../../components/DeleteInternship/DeleteInternship.js'
import Layout from '../../components/Layout/Layout.js'
// import { getMentor } from '../../utilities/MentorCalls.js'
import './InternshipDetails.css'

export default function InternshipDetails() {
  const [internship, setInternship] = useState([])
  // const [mentors, setMentors] = useState([])

  const params = useParams()
  
  useEffect(() => {
    const fetchInternship = async () => {
      const foundInternship = await getInternship(params.id)
      setInternship(foundInternship)
    }
    fetchInternship()
  }, [params.id])

  // const mentorLinkId = internship.mentor.slice(0, 1);
  // console.log(mentorLinkId);


  return (
    <Layout>
      <div className="internship_details_container">
        <div className="internship_details_image">
          <img src={internship.imageURL} alt="Internship Image" height="500px" width="500px" />
        </div>
        <div className="internship_details_info">
          <h1 className="internship_details_title">{internship.title}</h1>
          <h1 className="internship_details_industry">{internship.industry}</h1>
          <h3 className="internship_details_description">{internship.description}</h3>
          <div className="internship_edit_delete">
            <Link to={`/updateinternship/${internship.id}`}>Edit Internship</Link>
            <DeleteInternship />
          </div>
          <div className="internship_details_mentor">
          <h2>{internship.mentor}</h2>
          </div>
        </div>
      </div>
    </Layout>
  )}
