import { useEffect, useState } from 'react'
import { getInternship } from '../../utilities/InternshipCalls.js'
import { Link, useParams } from 'react-router-dom'
import DeleteInternship from '../../components/DeleteInternship/DeleteInternship.js'


export default function InternshipDetails() {
  const [internship, setInternship] = useState([])

  const params = useParams()
  
  useEffect(() => {
    const fetchInternship = async () => {
      const foundInternship = await getInternship(params.id);
      setInternship(foundInternship);
      console.log.log(foundInternship)
    }
    fetchInternship()
  }, [params.id])

  return (
    <div>
      <h1>Internship Detail</h1>
      <h1>{internship.title}</h1>
      <h2>{internship.mentor}</h2>
      <Link to='/updateinternship'>Edit Internship</Link>
      <DeleteInternship />
    </div>
  )}
