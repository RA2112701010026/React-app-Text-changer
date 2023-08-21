import React,{useState} from 'react'



export default function TextForm(props) {
 function handleupclick(){
  console.log(text);
  let uppercaseText=text.toUpperCase();
  setText(uppercaseText);
 };
 function handeleonchange(event){
  console.log("hi");
  setText(event.target.value);
 };
 function handleloclick(){
  console.log(text);
  let lowercase=text.toLowerCase();
  setText(lowercase);
 }



function click1(){
  let text = "";
   setText(text);
 };
 
 

 const [text, setText] = useState("hlo");
  return (
    <>
      <div className="container" style={{color:props.pmode==='dark'?'#d7cece':'black'}} >
        <div className="mb-3">
        <label htmlFor="My Box" className="form-label">{props.hi} </label>
        <textarea className="form-control" id="myBox"  value={text} onChange={handeleonchange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button> 
        <button className="btn btn-danger mx-3" onClick={click1}>Clear</button> 
        <button className="btn btn-primary mx-3" onClick={handleloclick}>convert to Lowercase</button> 
      </div>
      <div className="container my-3"style={{color:props.pmode==='dark'?'#d7cece':'black'}}>
        <h2> your text data  </h2>
        <p> No.of characters: {text.length}</p>
        <p>No. of words: {text.split(" ").length}</p>
        <h3>your text data preview</h3>
        <div className="container my-2"style={{color:props.pmode==='dark'?'#d7cece':'black'}}>
          <p>{text}</p>
        </div>
      </div>
   </>
   
  )
}
