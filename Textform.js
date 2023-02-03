// import React from 'react'
// import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        console.log("Clear was clicked"+ text);
        let newText = '';
        setText(newText)
    }

    const handleOnCopy = ()=>{
      var text = document.getElementById("my-text");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleOnexetraSpace = ()=>{
      // console.log("space  was clicked"+ text);
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }

  

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }


    const [text, setText] = useState();
    
  return (
    <>
{/* <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

<div className=" container mb-3">
 <h1>{props.heading}</h1>
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="my-text" rows="5"></textarea>
  <button type="button" class="btn btn-outline-success  mx-1 my-1" onClick={handleUpClick}>UPPER CASE</button>
  <button type="button" class="btn btn-outline-success mx-1 my-1" onClick={handleLoClick}>LOWER CASE</button>
  <button type="button" class="btn btn-outline-success mx-1 my-1" onClick={handleClearClick}>CLEAR</button>
  <button type="button" class="btn btn-outline-success mx-1 my-1" onClick={handleOnCopy}>TEXT COPY</button>
  <button type="button" class="btn btn-outline-success mx-1 my-1" onClick={handleOnexetraSpace}>Extra space</button>

</div>
  <div>
    <div className="container my-3">
     {/* <h3>YOUR TEXT SUMMRY</h3> */}
    {/* <p>{text.split(" ").length} words {text.lenght} and charactors</p> */}
    {/* <p>{0.008 * text.split().length} Time Read </p> */}
    <h3 my-4>Preview</h3>
    <p>{text}</p>
    </div>
  </div>
  </>
  )
}

