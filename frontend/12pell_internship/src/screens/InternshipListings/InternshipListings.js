import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.js'
import { getInternship } from '../../utilities/InternshipCalls.js'
import InternshipCard from '../../components/InternshipCard/InternshipCard.js'

export default function InternshipListings() {

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      const foundInternships = await getInternship();
      setInternships([foundInternships]);
    }
    fetchInternships()
  }, [])

  return (
    <Layout>
      <div>
        {internships.map((internship) => (
          <InternshipCard title={internship.title} />
        ))}
      </div>
    </Layout>
  )}
