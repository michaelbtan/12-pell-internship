import React from 'react';
import Header from '../../components/Header/Header.js'
import Layout from '../../components/Layout/Layout.js'
import InternshipCard from '../../components/InternshipCard/InternshipCard.js'
import MentorCard from '../../components/MentorCard/MentorCard.js'


export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <div>
        </div>
        <InternshipCard />
        <MentorCard />
      </Layout>
    </div>
  )
}
