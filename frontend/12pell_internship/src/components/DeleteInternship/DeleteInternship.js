import { deleteInternship } from '../../utilities/InternshipCalls.js'
import { useParams, useNavigate } from 'react-router-dom'


export default function DeleteInternship() {

  const params = useParams()
  const navigate = useNavigate()
  
  const handleDelete = () => {
    deleteInternship(params.id)
    navigate('/')
  }

  return (
    <div className="delete_internship_button">
      <button className="delete_button" onClick={handleDelete}>Delete</button>
    </div>
  )}
