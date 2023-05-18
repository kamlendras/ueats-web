import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Avatar from "@mui/material/Avatar";
import Avatarcross from './Avatarcross'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
     
      <IconButton 
            onClick={handleClickOpen}
            size="small"
            sx={{ ml: 1 }}
       
          >
            <Avatar sx={{ width: 32, height: 32 }}>K</Avatar>
          </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
            id='black'
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon id='black'/>
            </IconButton>
            <Typography id='black' sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Account
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'1rem'}}>
        <Avatarcross />
        </div>
      </Dialog>
    </div>
  );
}
