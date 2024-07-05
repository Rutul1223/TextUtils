import React from 'react'
import { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState('')

    const toUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
    }
    const coppyText = () => {
        navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2 className='mb-4'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea 
                        className="form-control" value={text} 
                        onChange={handleOnChange} 
                        rows="8"
                        style={{ backgroundColor: props.mode==='dark'? 'black' : 'white',color: props.mode==='dark'?'white':'#042743' }}
                    >
                </textarea>
                </div>
                <button className="btn btn-dark mx-1 my-1" onClick={toUppercase}>Conevert to Uppercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={toLowercase}>Conevert to Lowercase</button>
                <button className="btn btn-dark mx-1 my-1" onClick={clearText}>Clear text</button>
                <button className="btn btn-dark mx-1 my-1" onClick={coppyText}>Coppy text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            </div>
        </>
    )
}

export default TextForm