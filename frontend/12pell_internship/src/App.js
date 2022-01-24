import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './screens/Home/Home.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/internships' element={null} />
        <Route path='/mentors' element={null} />
        <Route path='/contact' element={<contact />} />
        <Route path='/about' element={<about />} />
      </Routes>
    </div>
  );
}

export default App;
