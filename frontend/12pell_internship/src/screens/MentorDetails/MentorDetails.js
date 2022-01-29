import { useEffect, useState } from 'react'
import { getMentor } from '../../utilities/MentorCalls.js'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.js'

export default function InternshipDetails() {
  const [mentor, setMentor] = useState([])

  const params = useParams()
  
  useEffect(() => {
    const fetchMentor = async () => {
      const foundMentor = await getMentor(params.id);
      setMentor(foundMentor);
      console.log.log(foundMentor)
    }
    fetchMentor()
  }, [params.id])

  return (
    <Layout>
    <div>
      <h1>Mentor Detail</h1>
      <h1>{mentor.name}</h1>
      <h2>{mentor.bio}</h2>
    </div>
    </Layout>
  )}
