import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
export default function ResponsiveDialog() {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }



  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

          <Paper   onClick={handleClickOpen}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <PlaceRoundedIcon  id='black'/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Delhi,India"
        inputProps={{ 'aria-label': 'Search STREETS FOODS' }}
      />
  
     
    </Paper>


      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Deliver to"}
        </DialogTitle>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount"></InputLabel> */}
          <FilledInput color='Secondary'
            id="filled-adornment-amount" label="fullWidth"
            startAdornment={<InputAdornment position="start"><PlaceRoundedIcon/></InputAdornment>}
          />
        </FormControl>
        <DialogActions>
        <Button  fullWidth  onClick={handleClick}
       autoFocus   variant="contained">Auto Detect</Button>
      
      </DialogActions>
        <DialogActions>
       
          <Button fullWidth onClick={handleClose} autoFocus variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}