import Layout from '../../components/Layout/Layout.js'
import './Contact.css'

export default function Contact() {
  return (
    <Layout>
      <div className="contact_container">
        <div className="contact_form">
          <form action="https://formsubmit.co/tanmichael858@gmail.com" method="POST" className="contact_form">
          <label className="form_labels" for="form_name">Name</label>
          <input className="form_inputs" type="text" id="form_name" name="name" required/>
          <label className="form_labels">Subject</label>
          <input className="form_inputs" type="text" name="_subject" required/>
          <label className="form_labels">Email</label>
          <input className="form_inputs" type="email" name="email" required />
          <label className="form_labels">Message</label>
          <input className="form_inputs" type="text-area" name="message" required />
          <button className="submit_form_button" type="submit">Send</button>
          </form>
        </div>
        <div className="contact_container">
          <div className="contact_bar">
            <h1 className="contact_text">Hours</h1>
            <h2 className="contact_text">Everyday</h2>
            <h3 className="contact_text">9:00 AM - 10:00PM</h3>
            <h1 className="contact_text">Location</h1>
            <h3 className="contact_text">12C Pell St, New York, NY 10013 USA</h3>
          </div>
        </div>
      </div>
    </Layout>
  )}
