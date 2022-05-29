import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { Box, Button, Container, Grid } from '@mui/material'
import PlayerSelect from './components/PlayerSelect';
import { PlayersContext } from './contexts/PlayersContext';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount'
import ProfilePicture from './components/ProfilePicture';

function App() {

  const [currentUID, setUID] = useState('null');
  const [p1, setP1] = useState('white');
  const [p2, setP2] = useState('white');
  const [p3, setP3] = useState('white');
  const [p4, setP4] = useState('white');
  const auth = getAuth()

  const logOff = () => {
    signOut(auth)
    setUID('null')
  }

  useEffect(() => {
    console.log(currentUID);
  }, [currentUID]);


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Container>
            <PlayersContext.Provider value={{ currentUID, setUID }}>
              <CreateAccount />
              <LogIn />
              <Box className='btn'>
                <Button variant='contained' component={Link} to='/lobby'>
                  Enter
                </Button>
              </Box>
              <ProfilePicture />
            </PlayersContext.Provider>

          </Container>
        } />
        <Route path='/lobby' element={
          <Container>
            <h1>Game Lobby</h1>
            <Grid container spacing={4} mt="10px">
              <PlayersContext.Provider value={{ currentUID, p1, p2, p3, p4, setUID, setP1, setP2, setP3, setP4 }}>
                <Grid item xs={6}>
                  <PlayerSelect id="1" />
                </Grid>
                <Grid item xs={6}>
                  <PlayerSelect id="2" />
                </Grid>
                <Grid item xs={6}>
                  <PlayerSelect id="3" />
                </Grid>
                <Grid item xs={6}>
                  <PlayerSelect id="4" />
                </Grid>
              </PlayersContext.Provider>
            </Grid>
            <Box className='btn'>
              <Button variant='contained' component={Link} to='/' onClick={logOff}>
                Sign Out
              </Button>
            </Box>
          </Container>
        } />

      </Routes>
    </Router>
  );
}

export default App;
