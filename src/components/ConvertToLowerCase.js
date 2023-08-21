import React,{useState} from 'react'

export default function ConvertToLowerCase() {
function handleupclick(){
let lowercasetext = text.toLowerCase();
 setText(lowercasetext)
}
function handeleonchange(event){
    setText(event.target.value)

}

    const [text, setText] = useState("hlo");
  return (
    <div>
         <div className="mb-3">
        <label htmlFor="My Box" className="form-label">LowerCase</label>
        <textarea className="form-control" id="myBox" value={text} onChange={handeleonchange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>convert to lowercase</button> 
    </div>
  )
}

//import ConvertToLowerCase from './components/ConvertToLowerCase';