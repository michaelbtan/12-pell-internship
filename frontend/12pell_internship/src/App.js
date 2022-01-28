import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './screens/Home/Home.js'
import About from './screens/About/About.js'
import Contact from './screens/Contact/Contact.js'
import Account from './screens/Account/Account.js'
import InternshipListings from './screens/InternshipListings/InternshipListings.js'
import InternshipDetails from './screens/InternshipDetails/InternshipDetails.js'
import MentorListings from './screens/MentorListings/MentorListings.js'
import MentorDetails from './screens/MentorDetails/MentorDetails.js'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/internships' element={<InternshipListings />} />
        <Route path='/internships/:id' element={<InternshipDetails />} />
        <Route path='/mentors' element={<MentorListings />} />
        <Route path='/mentors/:id' element={<MentorDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
