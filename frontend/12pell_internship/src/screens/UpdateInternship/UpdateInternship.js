import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getInternship, updateInternship } from '../../utilities/InternshipCalls'
import './UpdateInternship.css'
import Layout from '../../components/Layout/Layout.js'

export default function UpdateInternship() {

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
    fetchInternship()
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
              type="text"
              value={internship.title}
              placeholder="Title"
              onChange={(e) => handleChange(e)}
              id="title"
            />
            <label>Industry</label>
            <input
              type="text"
              value={internship.industry}
              placeholder="Industry"
              onChange={(e) => handleChange(e)}
              id="price"
            />
            <label>Description</label>
            <input
              type="text"
              value={internship.description}
              placeholder="Description of Internship"
              onChange={(e) => handleChange(e)}
              id="description"
            />
            <label>Img Url</label>
            <input
              type="url"
              value={internship.image}
              placeholder="Image Url"
              onChange={(e) => handleChange(e)}
              id="img"
            />
            <label>Paid?</label>
            <select
              id="setPaid_unpaid"
              name="setPaid_unpaid"
              onChange={(e) => handleChange(e)}
            >
              <option value="null">Select Category</option>
              <option value="true">True </option>
              <option value="false"> False</option>
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