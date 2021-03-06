import React, { useState, useContext } from 'react'
import {
    Box, Button, Container, TextField
} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { PlayersContext } from '../contexts/PlayersContext'

const CreateAccount = () => {

    const { currentUID, setUID } = useContext(PlayersContext);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePass = (e) => {
        setPass(e.target.value);
    };

    const auth = getAuth()

    const signUp = () => createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                setUID(user.uid);
                                // ...
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorMessage, errorCode);
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
                Create Account
            </h1>
            <Box className='logInBox'>
                <TextField fullWidth id="outlined-required" label="Email Address"
                    onChange={changeEmail}
                />
                <TextField fullWidth id="outlined-password-input" label="Password" type="password"
                    onChange={changePass}
                />
                <Button variant='contained'
                    onClick={signUp}
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    )
}

export default CreateAccount