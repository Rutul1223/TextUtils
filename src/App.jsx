import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TextForm from './components/textform/TextForm'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/about/About';
import Footer from './components/footer/Footer'

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#181818'
      document.body.style.backgroundColor = 'black'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/' element={<TextForm heading="Enter a Text " mode={mode} />} />
          </Routes>
        </div>
          <Footer mode={mode}/>
      </Router>
    </>
  )
}

export default App
