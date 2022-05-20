import React, { Fragment } from 'react'
import {
    Box, Button, Container, TextField
} from '@mui/material'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <Container className='center'>
            <h1>
                Log In
            </h1>
            <Box className='logInBox'>
                <TextField fullWidth id="outlined-required" label="Email Address"/>
                <TextField fullWidth id="outlined-password-input" label="Password" type="password"/>
                <Button component={Link} to="/lobby" variant='contained'>
                    Login
                </Button>
            </Box>
        </Container>
    )
}

export default LogIn