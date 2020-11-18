import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Messege.css'


// forward ref wraps messege in addtional funtionality

const Messege = forwardRef(({username, messege}, ref)  => {
    const isUser = username === messege.username;

    return (
        <div>
            <div ref={ref} className={`messege ${isUser && 'messege_user'} `}>
            <Card className={isUser ? "messege__userCard" : "messege__guestCard"}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${messege.username || 'unknown user'} :`} {messege.messege}
                    </Typography>
                </CardContent>
            </Card>
            </div>
            <h2></h2>
        </div>
    )
})

export default Messege
