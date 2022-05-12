import React from 'react'
import { Container, FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Box } from '@mui/material';

const ColourSelect = ({updateColour, id}) => {
    const [color, setColor] = React.useState('');

    const handleChange = (e) => {
        if(updateColour(e.target.value)){
            setColor(e.target.value);
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