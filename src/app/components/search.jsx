import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      elevation={3}
      square={false}
      variant="outlined"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 900,borderRadius: 10 }}
    >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon id='black'/>
      </IconButton>
      <InputBase
        sx={{ mr: 10, flex: 1 }}
        placeholder="Food, groceries, drinks, etc."
        inputProps={{ 'aria-label': 'Search STREETS FOODS' }}
      />
  
     
    </Paper>
  );
}