import { makeStyles } from '@material-ui/core';
import React from 'react';
// import './App.css'
import Header from './Components/Navbar/Header';

const useStyles = makeStyles((theme)=>({
  root:{
    
    // margin:'auto',
    minHeight:'100vh',
    backgroundColor:'gray',
    // backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/images/image1.png"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // opacity:'0.5'

  },

}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default App;