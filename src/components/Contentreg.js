import * as React from 'react';
import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import {db} from "./Firebasea";
import {firebase} from "./Firebasea";

export default function AddressForm() {
  const user = useSelector(selectUser);
  const  [input , setInput] = useState('');
  
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setdob] = useState("");

  const addinfo = e => {
    e.preventDefault();  
    db.collection('info').add({
      name: user.displayName,
     LastName: {lastname},
     Address: {address},
     dob:  {dob}

    })
    alert("Added succesfully");
    setLastname("");
    setAddress("");

    setdob("");
    
  }


  return (
    <React.Fragment>
        <Container maxWidth="md">
      <h3>{user.displayName}</h3>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          value={address}
          onChange={(e) => setAddress(e.target.value)}
            required
            id="address1"
            name="address1"
            label="Address "
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          value={dob}
          onChange={(e) => setdob(e.target.value)}
            id="dob"
            name="dob"
            label="Dob"
            
            type="date"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
       <Button variant="outline" onClick={addinfo} >Add the user</Button>
      </Grid>
      </Container>
    </React.Fragment>
  );
}