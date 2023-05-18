import * as React from 'react';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Grid from "@mui/material/Grid";
import Link2 from "@mui/material/Link";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const avatarcross = () => {
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

// beta
const [open1, setOpen1] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
    return (  
        <>
         <MenuItem onClick={handleClose}>
          <Grid container columnSpacing={2}>
            <Grid xs={2}>
              <img src="./avatar.svg" width={46} height={46} />
            </Grid>
            <Grid xs={10}>
              <Grid xs={12}>
                <ListItemText> 
                  {/* KSINGH */}
                  Selected: {selectedValue}
                </ListItemText>
              </Grid>
              <Grid xs={12}>
                <ListItemText> @KSINGH</ListItemText>
              </Grid>
              <Grid xs={12}>
                <Link2 href="#" underline="none" fontSize="medium">
                  {"Manage your Universal Account"}
                </Link2>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <img src="./switchaccountsfilled.svg" height={30} width={30} />
          </ListItemIcon>

          <ListItemText> Switch account</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <img src="./signout.svg" height={30} width={30} />
          </ListItemIcon>
          Sign out
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <img src="./theme.svg" height={30} width={30} />
          </ListItemIcon>
          <ListItemText> Appearance: Device theme</ListItemText>
          <ListItemIcon>
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
       

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <img src="./settings.svg" height={26} width={26} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <img src="./help.svg" height={26} width={26} />
          </ListItemIcon>
          Help
        </MenuItem>
 
        </>
    );
}
 
export default avatarcross;