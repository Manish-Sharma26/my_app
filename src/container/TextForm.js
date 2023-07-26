import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick = () =>{
        // text.trim();
        // console.log(text.split(' '));
        let newText =text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked");
        let newText =text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleCopy = () =>{
        // console.log("Uppercase was clicked");
        let text = document.getElementById('mybox');
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to clipboard","success");
    }
    
    const handleClear= () =>{
        // console.log("Uppercase was clicked");
        setText('');
        props.showAlert("Text removed","success");
    }
    const handleOnChange = (event) =>{
        // console.log("Change was clicked");
        setText(event.target.value);
    }
    const handleCapClick = (event) =>{
        // console.log("Change was clicked");
        let newText=text.split(' ');
        newText=newText.map(item => (item[0].toUpperCase()+item.slice(1).toLocaleLowerCase()));
        console.log(newText);
        setText(newText.join(' '));
        props.showAlert("Converted to Capitalised case","success");
    }
    
    function TextToSpeech(){

        const Speech=new SpeechSynthesisUtterance();
        const message=document.getElementById('mybox').value
        Speech.lang='eng';
        Speech.text=message;
        window.speechSynthesis.speak(Speech);
        props.showAlert("Reading the text","success");
    }

    function count(){
        let newText=text.replace(/\s+/g,' ').trim();
        // console.log(newText.split(' '));
        if(newText.split(' ')[0]=== "" && newText.split(' ').length ===1){
            return 0;
        }
        return newText.split(' ').length
    }

    function countLetter(){
        let newText=text.replace(/\s+/g,'').trim();
        return newText.length;
    }
    return (
        <>
        <div className='container my-2 ' style={{color : props.mode ==='dark' ? 'white' :'black'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
                {/* <label htmlFor="mybox" className="form-label"></label> */}
                <textarea className="form-control" placeholder='Enter your Text' id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light' ? 'white' :'#030a38', color: props.mode ==='light' ? 'black':'white',border: props.mode === 'light' ? '1px solid black':'1px solid white'}}></textarea>
            </div>
            <div className="container mx-0 my-2 p-0 ">
                    <button className="btn btn-outline-primary mb-2 me-3" disabled={text.length===0} onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-outline-primary mb-2 me-3" disabled={text.length===0}  onClick={handleLowClick}>Lowercase</button>
                    <button className="btn btn-outline-primary mb-2 me-3" disabled={text.length===0}  onClick={handleCapClick}>Capitalised case</button>
                    <button className="btn btn-outline-primary mb-2 me-3" disabled={text.length===0}  onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-outline-primary mb-2 me-3" disabled={text.length===0}  onClick={TextToSpeech}>Read Aloud</button>
                    <button className="btn btn-outline-danger mb-2 " disabled={text.length===0}  onClick={handleClear}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3" style={{color : props.mode ==='dark' ? 'white' :'black'}}>
        <h5>Your text summary: </h5>
        <p  >{count()+((count() < 2)?' word ':' words ')  + 'and '+ countLetter() + ((countLetter() < 2)?' letter ':' letters ')}</p>
        <p>Reading Time: {0.008 * count()} minutes</p>
        <h5>Preview:</h5>
        <p>{text.length === 0 ? "Nothing to preview":text}</p>
        </div>
        </>
    )
}
