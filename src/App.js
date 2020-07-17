import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';



function App() {
  const [input,setInput]= useState("");
  const [messages,setMessages]= useState([{username:'',message:''}]);
  const [username,setUsername]= useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, []);

  const sendMessage=(e)=>{
    e.preventDefault();

    db.collection('messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter Message...</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id,message})=>(
            <Message key={id} username={username} message={message}/>
            
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
