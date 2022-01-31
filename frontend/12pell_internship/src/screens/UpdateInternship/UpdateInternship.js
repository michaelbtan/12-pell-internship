import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getInternship, updateInternship } from '../../utilities/InternshipCalls'
import './UpdateInternship.css'
import Layout from '../../components/Layout/Layout.js'
import { getMentors } from "../../utilities/MentorCalls";

export default function UpdateInternship() {

  const navigate = useNavigate();

  const [mentors, setMentors] = useState([])
  const [mentor, setMentor] = useState()
  const [internship, setInternship] = useState({
    title: "",
    description: "",
    industry: "",
    image: "",
    paid_unpaid: "",
    mentor:"",
  })

  const params = useParams()
  
  useEffect(() => {
    const fetchInternship = async () => {
      const foundInternship = await getInternship(params.id)
      setInternship(foundInternship)
    }
    const fetchMentors = async () => {
      const foundMentors = await getMentors();
      setMentors(foundMentors);
    }
    fetchInternship()
    fetchMentors()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setInternship({
      ...internship,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateInternship(params.id, internship)
    navigate('/')
  }

  return (
    <Layout>
      <div className="updateInternship_container">
        <div className="updateInternship_card">
          <h1 className="updateInternship_title">Update Internship</h1>
          <p className="updateInternship_description">
            Update internship from the collection
          </p>
          <form className="updateInternship_form">
            <label>Title</label>
            <input
              placeholder="Update title"
              value={internship.title}
              name="title"
              onChange={(e) => handleChange(e)}
            />
            <label>Industry</label>
            <input
              placeholder="Industry"
              value={internship.industry}
              name="industry"
              onChange={(e) => handleChange(e)}
            />
            <label>Description</label>
            <input
              placeholder={internship.description}
              value={internship.description}
              name="description"
              onChange={(e) => handleChange(e)}
            />
            <label>Img Url</label>
            <input
              placeholder={internship.imageURL}
              value={internship.imageURL}
              name="imgURL"
              onChange={(e) => handleChange(e)}
            />
            <label>Paid?</label>
            <select
              name="paid"
              onChange={(e) => handleChange(e)}
            >
              <option value="null">Select</option>
              <option value="true">True </option>
              <option value="false"> False</option>
            </select>
            <label>Mentor</label>
            <select
              name="setMentor"
              onChange={(e) => setMentor(e.target.value)}
            >
              <option value="null">Select</option>
              {
                mentors.map(mentor => (
                <option value={`https://pella3.herokuapp.com/mentors/${mentor.id}/`}>
                  {mentor.name}</option>
                ))
              }
            </select>

            <button className="createInternship_button" onClick={(e) => handleSubmit(e)}>
              Update
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )





}