import React from 'react';
import Layout from '../../components/Layout/Layout.js'
import AboutBanner from './AboutBanner.js'
import './About.css'


export default function About() {
  return (
    <Layout>
      <div className="about_container">
        <div className="about_header">
          <h1 className="about_header_h1">WELCOME TO 12 PELL</h1>
          <p className="about_header_p">Located in the Chinatown NYC, 12 Pell is a lifestyle store dedicated to personal care and style. We aim to redefine and reinvent the standard retail and grooming experience. 12 Pell is a place for relaxation and leisure. Our mission is to build a community that shares a passion for what we do - in art and in entrepreneurship
          We are proud to offer our customers a wide range of hairstyles, treatments, looks and helpful products that reflect their individuality and personal taste. Stop by today!</p>
        </div>
      </div>
      <AboutBanner />
        {/* <div>
          <p>At 12 Pell, we train and invest in all our employees to help empower and inspire them to be more than barbers. Our team is thoroughly trained not only to deliver the service to the next level but actively listen and help engage one client with another if they see fit. We are CONNECTORS. WE ARE IMPACTORS. We are here help make a DIFFERENCE.</p>
        </div> */}
    </Layout>
  )}
