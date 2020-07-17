import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

function Message( {message,username} ) {
    const isUser= username===message.username;
    return (
        <div className={isUser?'message message__user':'message'}>
            <Card >
                <CardContent className={isUser?'message__userCard' : 'message__guestCard'}>
                    <Typography color="white" variant="h5" component="h2">
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
}

export default Message;
