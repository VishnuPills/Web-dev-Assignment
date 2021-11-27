import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import { auth } from './Firebasea';
import {logout} from '../features/userSlice';


export default function ButtonAppBar() {

  const dispatch =useDispatch()

  const logoutnow=(e)=>{
      dispatch(logout())
      auth.signOut();

    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignment
          </Typography>
        
          <Button color="inherit" onClick={logoutnow}>Logout</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}