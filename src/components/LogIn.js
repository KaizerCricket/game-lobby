import React, { Fragment } from 'react'
import {
    Box, Button, Container, TextField
} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LogIn = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePass = (e) => {
        setPass(e.target.value);
    };

    const auth = getAuth()

    const signIn = () => signInWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                console.log("pizza!");
                                // ...
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorMessage);
                            });

    /*
    axios.post('https://us-central1-fire-gl.cloudfunctions.net/addMessage', {
        text: 'pizza',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    */
    return (
        <Container>
            <h1>
                Log In
            </h1>
            <Box className='logInBox'>
                <TextField fullWidth id="outlined-required" label="Email Address"
                    onChange={changeEmail}
                />
                <TextField fullWidth id="outlined-password-input" label="Password" type="password"
                    onChange={changePass}
                />
                <Button variant='contained'
                    onClick={signIn}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}

export default LogIn