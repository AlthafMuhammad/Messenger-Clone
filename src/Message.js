import React,{ forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
import FlipMove from 'react-flip-move';


const Message=forwardRef(({message,username},ref) => {
    const isUser= username===message.username;
    return (
        <div ref={ref} className={isUser?'message message__user':'message'}>
            <Card style={{borderRadius:'1.3em',lineHeight:'1.34'}}>
                <CardContent className={isUser?'message__userCard' : 'message__guestCard'} style={{paddingTop:'6px',paddingRight:'12px',paddingBottom:'7px',paddingLeft:'12px'}}>
                    <Typography>
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
})

export default Message;
