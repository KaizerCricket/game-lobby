import React, { useState, useContext, useEffect } from 'react'
import { Container, FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { PlayersContext } from '../contexts/PlayersContext'
import { Box } from '@mui/material';
import axios from 'axios';

const ColourSelect = ({ updateColour, id, c }) => {
    const { currentUID } = useContext(PlayersContext);
    const [color, setColor] = useState('');

    useEffect(() => {
        setColor(c);
        console.log(c);
    }, [c]);

    const updateServerColours = (c) => axios.post('https://us-central1-fire-gl.cloudfunctions.net/updateColours',
        {
            uid: currentUID,
            player: id,
            colour: c
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    const handleChange = (e) => {
        if (updateColour(e.target.value)) {
            setColor(e.target.value);
            updateServerColours(e.target.value);
        }
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Colour</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="Choose Colour"
                onChange={handleChange}
            >
                <MenuItem value={'blue'}>Blue</MenuItem>
                <MenuItem value={'red'}>Red</MenuItem>
                <MenuItem value={'yellow'}>Yellow</MenuItem>
                <MenuItem value={'green'}>Green</MenuItem>
                <MenuItem value={'purple'}>Purple</MenuItem>
                <MenuItem value={'orange'}>Orange</MenuItem>
            </Select>
        </FormControl>
    )
}

export default ColourSelect