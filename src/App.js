import { makeStyles } from '@material-ui/core';
import { FullscreenExit } from '@material-ui/icons';
import React from 'react';
// import './App.css'
import Header from './Components/Header/Header';

const useStyles = makeStyles((theme)=>({
  root:{
    clear:'both',
    // margin:'auto',
    backgroundColor:'white',
    // backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/images/image1.png"})`,
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'cover',
    
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