import { makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';

const useStyles = makeStyles((theme)=>({
  root:{
    // margin:'auto',
    // minHeight:'100vh',
    // backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/teamwork.PNG"})`,
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'cover',
    // opacity:'0.5'

  },

}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
    </div>
  );
}

export default App;
