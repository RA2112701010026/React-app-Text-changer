import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Alert from './components/Alert';
import React,{useState} from 'react';


function App() {
 
  const [mode,setMode] = useState("dark");
  const [alert,setAlert] = useState(null);

 const showAlert = (message,type)=>{
    setAlert({message:message,
    type:type})
  }

    function Rowan(){
        if(mode==='light' )
        {
            setMode('dark');
            document.body.style.backgroundColor ='#696969';
            showAlert("Dark mode has been enabled","sucess")
        }
        else{
          setMode('light')
          document.body.style.backgroundColor ='white'
          showAlert("Light mode has been enabled","danger")
        }
    }


    return (
    <>

  <Navbar title="TextChanger" pmode={mode}  Ronald={Rowan} />
  
  <Alert alert={alert}/>
      
          <div className='container my-3'>
    <TextForm hi="Change you text to uppercase" />
    </div>
          
        




  


 

</>
  );
}

export default App;
