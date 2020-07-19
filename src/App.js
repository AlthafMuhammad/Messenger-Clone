import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel, Container, Grid } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



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
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" style={{marginTop:'3px'}} />
        <h2>Welcome {username}</h2>
        <div className="form_container">
          <form className="app__form">
            <FormControl className="app__formControl">
              <Input className="app__input" placeholder="Enter message..." value={input} onChange={e=>setInput(e.target.value)}/>
              <IconButton className="app__iconButton" disabled={!input.replace(/\s/g, '').length} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon/></IconButton>
            </FormControl>
          </form>
        </div>

        <FlipMove className="messages_container" style={{'z-index': '-1'}}>
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
