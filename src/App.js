import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container} from '@mui/material'
import { Box } from '@mui/material'
import PlayerSelect from './components/PlayerSelect';
import { Grid } from '@mui/material';
import { PlayersContext } from './contexts/PlayersContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Other from './Other';
import LogIn from './components/LogIn';

function App() {

  const [p1, setP1] = useState('white');
  const [p2, setP2] = useState('white');
  const [p3, setP3] = useState('white');
  const [p4, setP4] = useState('white');

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Container>
            <LogIn/>
          </Container>
        }/>
        <Route path='/lobby' element={
          <Container>
            <h1>Game Lobby</h1>
            <Grid container spacing={4} mt="10px">
              <PlayersContext.Provider value={{ p1, p2, p3, p4, setP1, setP2, setP3, setP4 }}>
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
            <Link to='/other'>
              <p>
                Go to Other
              </p>
            </Link>
          </Container>
        } />

        <Route path='/other' element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
