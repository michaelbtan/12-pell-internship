import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.js'
import { getInternships } from '../../utilities/InternshipCalls.js'
import InternshipCard from '../../components/InternshipCard/InternshipCard.js'
import FilterContainer from '../../components/FilterContainer/FilterContainer.js'


export default function InternshipListings() {

  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      const foundInternships = await getInternships();
      setInternships(foundInternships);
    }
    fetchInternships()
  }, [])

  return (
    <Layout>
      <div className="internship_listings_container">
        <div className="filter_container">
          <FilterContainer />
        </div>
        <div className="internship_cards">
          {internships.map((internship) => (
            <InternshipCard title={internship.title}
              description={internship.description}
              image={internship.image}
              id={internship.id} />
          ))}
        </div>
      </div>
    </Layout>
  )}
