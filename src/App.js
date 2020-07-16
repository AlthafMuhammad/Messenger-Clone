import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input,setInput]= useState("");
  const [messages,setMessages]= useState([{username:'',text:''}]);
  const [username,setUsername]= useState('');

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, []);

  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages,{username: username, text:input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>MESSENGER</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter Message...</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message=>(
          <Message username={username} message={message}/>
          
        ))
      }
    </div>
  );
}

export default App;
