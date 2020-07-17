import React,{ forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
import FlipMove from 'react-flip-move';


const Message=forwardRef(({message,username},ref) => {
    const isUser= username===message.username;
    return (
        <div ref={ref} className={isUser?'message message__user':'message'}>
            <Card >
                <CardContent className={isUser?'message__userCard' : 'message__guestCard'}>
                    <Typography color="white" variant="h5" component="h2">
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
})

export default Message;
