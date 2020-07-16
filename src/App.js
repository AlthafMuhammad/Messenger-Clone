import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';


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
        <FormControl>
          <InputLabel>Enter Message...</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
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
