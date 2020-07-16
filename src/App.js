import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button,
  

} from 'react-bootstrap';

function App() {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([]);

  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>MESSENGER</h1>
      <form>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <Button type="submit" onClick={sendMessage}>Send Message</Button>
      </form>

      {
        messages.map(messages=>(
          <p>{messages}</p>
        ))
      }
    </div>
  );
}

export default App;
