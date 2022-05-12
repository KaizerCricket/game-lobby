import { Container } from '@mui/material'
import React, { useState, useContext } from 'react'
import ColourSelect from './ColourSelect'
import { Box } from '@mui/material'
import { PlayersContext } from '../contexts/PlayersContext'

const PlayerSelect = ({ id }) => {
  const { p1, p2, p3, p4, setP1, setP2, setP3, setP4 } = useContext(PlayersContext);
  const [colour, setColour] = useState('white');

  function chooseColour(c) {
    switch (id) {
      case "1":
        if (c != p2 && c != p3 && c != p4) {
          setP1(c);
          break;
        }
        else{
          return false;
        }
      case "2":
        if (c !== p1 && c != p3 && c != p4) {
          setP2(c);
          break;
        }
        else{
          return false;
        }
      case "3":
        if (c != p1 && c != p2 && c != p4) {
          setP3(c);
          break;
        }
        else{
          return false;
        }
      case "4":
        if (c != p1 && c != p2 && c != p3) {
          setP4(c);
          break;
        }
        else{
          return false;
        }
    }
    setColour(c);
    return true;
  }

  return (
    <Box bgcolor={colour} className='playerBox'>
      <h2>Player {id}</h2>
      <ColourSelect updateColour={chooseColour} id={id} />
    </Box>
  )
}

export default PlayerSelect