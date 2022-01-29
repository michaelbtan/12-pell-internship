import React from "react";
import "./PostInternship.css";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { createInternship } from "../../utilities/InternshipCalls";
import { getMentors } from "../../utilities/MentorCalls";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [paid, setPaid] = useState("");
  const [mentors, setMentors] = useState([])
  const [mentor, setMentor] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMentors = async () => {
      const foundMentors = await getMentors();
      setMentors(foundMentors);
    }
    fetchMentors()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubmit = {
      title,
      description,
      imageURL,
      industry,
      paid,
      mentor,
    };
    await createInternship(newSubmit);
    navigate("/");
  };

  return (
    <Layout>
      <div className="createInternship_container">
        <div className="createInternship_card">
          <h1 className="createInternship_title">Submit a New Internship</h1>
          <p className="createInternship_description">
            Add a new internship to the collection
          </p>
          <form className="createInternship_form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />
            <label>Industry</label>
            <input
              type="text"
              value={industry}
              placeholder="Industry"
              onChange={(e) => setIndustry(e.target.value)}
              id="industry"
            />
            <label>Description</label>
            <input
              type="text"
              value={description}
              placeholder="Description of Internship"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
            <label>Img Url</label>
            <input
              type="url"
              value={imageURL}
              placeholder="Image Url"
              onChange={(e) => setImageURL(e.target.value)}
              id="imageURL"
            />
            <label>Paid?</label>
            <select
              id="paid"
              name="setPaid"
              onChange={(e) => setPaid(e.target.value)}
            >
              <option value="null">Select</option>
              <option value="true">True </option>
              <option value="false"> False</option>
            </select>
            <label>Mentor</label>
            <select
              id="setMentor"
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

            <button className="createInternship_button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
