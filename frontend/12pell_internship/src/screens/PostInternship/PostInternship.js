import React from "react";
import "./PostInternship.css";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { createInternship } from "../../utilities/InternshipCalls";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [paid_unpaid, setPaid_unpaid] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubmit = {
      title,
      description,
      image,
      industry,
      paid_unpaid,
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
              id="price"
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
              value={image}
              placeholder="Image Url"
              onChange={(e) => setImage(e.target.value)}
              id="img"
            />
            <label>Paid?</label>
            <select
              id="setPaid_unpaid"
              name="setPaid_unpaid"
              onChange={(e) => setPaid_unpaid(e.target.value)}
            >
              <option value="null">Select Category</option>
              <option value="true">True </option>
              <option value="false"> False</option>
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
