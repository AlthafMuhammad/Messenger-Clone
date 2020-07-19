import React,{ forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
import FlipMove from 'react-flip-move';


const Message=React.forwardRef(({message,username},ref) => {
    const isUser= username===message.username;
    return (
            <div className="messageBox">
                <div  ref={ref} className={`message ${isUser && 'message__user'}`} >
                <div ref={ref} className="mess__username" >
                   
                   {!isUser && `${message.username || 'Unknown User'}:` }
               
                </div>
                    
                    <Card style={{borderRadius:'1.3em',lineHeight:'1.34',width:'fit-content'}} >
                        <CardContent className={isUser?'message__userCard' : 'message__guestCard'} style={{paddingTop:'6px',paddingRight:'12px',paddingBottom:'7px',paddingLeft:'12px'}}>
                            <Typography>
                                {message.message}
                                
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        
        
    )
})

export default Message;
