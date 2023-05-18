import * as React from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Radio from './Radio'
export default function ResponsiveDialog() {
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
    <>
    
     
        <IconButton
            onClick={handleClickOpen}
            size="small"
            sx={{ ml: 1 }}
          
          >
            <TranslateIcon  id='black'/>
          </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Select Language"}
        </DialogTitle>

        <DialogContent>
   
 
<Radio/>

          
        </DialogContent>
        <DialogActions>
         
          <Button fullWidth onClick={handleClose} autoFocus>
            SELECT
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
