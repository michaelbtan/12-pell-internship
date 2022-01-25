import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './screens/Home/Home.js'
import About from './screens/About/About.js'
import Contact from './screens/Contact/Contact.js'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/internships' element={null} />
        <Route path='/mentors' element={null} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
