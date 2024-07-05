import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {
  const [text, setText] = useState('')

  const toUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className='mb-4'>Enter texts</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-dark" onClick={toUppercase}>Conevert to Uppercase</button>
      </div>
    </>
  )
}

export default App
