import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Text as been converted to upperCases","success")
    }
    const handleloClick = () =>{
      // console.log("clicked")
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Text as been converted to lowerCases","success")
  }
  const handleClearClick = () =>{
    let newText=""
    setText(newText)
    props.showAlert("Text as been Cleared!!!","success")
}
    const handleOnChange =(event) =>{
        console.log("onchanged")
        setText(event.target.value)
    }
    const handleCopyClick = () =>{
      let text = document.getElementById("Mytext")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text Copied to clipboard","success")
      
  }
    const [text,setText] = useState('')
  return ( 
   <>
   <div className='conatainer' style={{color : props.mode===`dark`?`white`:`black`}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode===`dark`?`grey`:`white`,color : props.mode===`dark`?`white`:`black`}} id="Mytext" rows="8"></textarea>
 </div>
 <button className='btn btn-primary mx-2' onClick={handleUpClick}>change to UpperCase</button>
 <button className='btn btn-primary mx-2' onClick={handleloClick}>change to LowerCase</button>
 <button className='btn btn-primary mx-2' onClick={handleClearClick}>ClearText</button>
 <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
 

   </div>
   <div className='conatainer my-3' style={{color : props.mode===`dark`?`white`:`black`}}>
    <h1>Your text count</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
   
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter you text to preview"}</p>
   </div>
   
 </>
    
  )
}
