import { Container } from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'
import ColourSelect from './ColourSelect'
import { Box } from '@mui/material'
import { PlayersContext } from '../contexts/PlayersContext'
import axios from 'axios'

const PlayerSelect = ({ id }) => {
  const { currentUID, p1, p2, p3, p4, setP1, setP2, setP3, setP4 } = useContext(PlayersContext);
  const [colour, setColour] = useState('white');

  useEffect(() => {
    if (currentUID !== 'null') {
      axios.get(`https://firestore.googleapis.com/v1/projects/fire-gl/databases/(default)/documents/users/${currentUID}`)
        .then(res => {
          switch (id) {
            case "1":
              setP1(res.data.fields.p1.stringValue);
              setColour(res.data.fields.p1.stringValue);
              break;
            case "2":
              setP2(res.data.fields.p2.stringValue);
              setColour(res.data.fields.p2.stringValue);
              break;
            case "3":
              setP3(res.data.fields.p3.stringValue);
              setColour(res.data.fields.p3.stringValue);
              break;
            case "4":
              setP4(res.data.fields.p4.stringValue);
              setColour(res.data.fields.p4.stringValue);
              break;
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      setColour('white');
    }
  }, [currentUID]);


  const chooseColour = (c) => {
    switch (id) {
      case "1":
        if (c != p2 && c != p3 && c != p4) {
          setP1(c);
          break;
        }
        else {
          return false;
        }
      case "2":
        if (c !== p1 && c != p3 && c != p4) {
          setP2(c);
          break;
        }
        else {
          return false;
        }
      case "3":
        if (c != p1 && c != p2 && c != p4) {
          setP3(c);
          break;
        }
        else {
          return false;
        }
      case "4":
        if (c != p1 && c != p2 && c != p3) {
          setP4(c);
          break;
        }
        else {
          return false;
        }
    }
    setColour(c);
    return true;
  }

  return (
    <Box bgcolor={colour} className='playerBox'>
      <h2>Player {id}</h2>
      <ColourSelect updateColour={chooseColour} id={id} c={colour}/>
    </Box>
  )
}

export default PlayerSelect