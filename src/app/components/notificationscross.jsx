import Grid from '@mui/material/Unstable_Grid2';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const notificationscore = () => {
    return ( 
        <>
         
        
        
          
            
    
     
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  // style={{ minHeight: '100vh' }}
>
<NotificationsNoneIcon   sx={{
                    color: "green",
                    fontSize: "10rem"
                  }}/>
  {/* <Grid item xs={3}>
   <LoginForm />
  </Grid>    */}
     <Typography variant="subtitle1" gutterBottom>
        Your notifications live here
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
      Follow your favorite Space to get notified.
      </Typography>
</Grid> 
          
            
          
        </>
     );
}
 
export default notificationscore;