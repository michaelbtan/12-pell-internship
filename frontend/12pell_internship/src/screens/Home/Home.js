import React from 'react';
import Header from '../../components/Header/Header.js'
import Layout from '../../components/Layout/Layout.js'
import RecentInternships from '../../components/RecentInternships/RecentInternships.js'
import FeaturedMentors from '../../components/FeaturedMentors/FeaturedMentors.js'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <div className="body_container">
          <div className="body_home">
            <h1>New Internship Opportunities</h1>
            <RecentInternships />
            <h1>Featured Mentors</h1>
            <FeaturedMentors />
          </div>
        </div>
      </Layout>
    </div>
  )
}
