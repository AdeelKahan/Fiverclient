import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar, Toolbar, IconButton, Typography, Container, Link, CssBaseline, Paper, Grid, ButtonGroup, Button
    
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
    gridPaper: {
        flexGrow: 1,
        marginTop: '10em',
        
        

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '10em',
        boxShadow: '5em',
        background:'#303f9f',
        color:'white'
        
        
    },
    salesTax: {
        textAlign: 'center',
        marginRight:'40em',
        marginTop:'-40em'
        // marginTop: '15em'
    },
    // card: {
    //     width: '70em',
    //     height: '50em',
    //     border: 'none',
    //     boxShadow: 'none',
    //     marginLeft: '200px'

    // },

    image:{
        marginTop: '0px',
        marginLeft:'38em'
        // width: ,
        // height: "50%",   
},
supportLang:{
    color:'inherit',
    marginLeft:'10em',
    marginTop:'3em'
}


}));


const Header = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
            <CssBaseline>
                <AppBar position='static' style={{boxShadow:'none'}}>
                    {/* <Container disableGutters={false} > */}
                    <Toolbar>
                        <Typography variant='h5' style={{ flexGrow: 1}} noWrap>
                            Zip-Tax
                </Typography>
                        <Typography style={{ paddingLeft: '1em'}}>
                            <Link href="#" style={{color: 'white' }}>HOME</Link>
                        </Typography>
                        <Typography style={{ paddingLeft: '1em' }}>
                            <Link href="#" style={{color: 'white' }}>PRICING</Link>
                        </Typography>
                        <Typography style={{ paddingLeft: '1em' }}>
                            <Link href="#" style={{color: 'white' }}>SALES&LOOKUP</Link>
                        </Typography>
                        <Typography style={{ paddingLeft: '1em' }}>
                            <Link href="#" style={{color: 'white' }}>DOCUMENTATION</Link>
                        </Typography>
                        <IconButton color='inherit' aria-label='account' style={{ paddingLeft: '1em' }}>
                            <AccountCircle />
                        </IconButton>

                    </Toolbar>

                    {/* </Container> */}
                </AppBar>

                <Container maxwidth="sm">
                    
                    <div className={classes.image}>
                        <img src={'/assets/images/team.png'} />

                    </div>
                    

                    <div className={classes.salesTax}>
                        <h1 style={{fontSize:'2rem' ,color:'#303f9f'}}>SALES TAX API SERVICE</h1>
                        <h2 style={{fontSize:'2.5rem', lineHeight:'3.5rem' ,color:'darkGray'}}>AUTOMATE YOUR SALES TAX PROCESS</h2>

                        <ButtonGroup variant="contained" color="primary">
                            <Button>Learn More</Button>
                            <Button>Pricing</Button>
                        </ButtonGroup>
                    </div>

                        {/* <Card className={classes.images}>

                            <CardMedia
                                className={classes.media}
                                image="/assets/images/image1.png"
                                title="teamwork"
                            /> */}



                        {/* </Card> */}
               


                    <div className={classes.gridPaper}>
                        <Grid 
                        container spacing={6}>
                            <Grid item xs={4} 
                         container>
                                <Paper className={classes.paper}  container>Programmetic API
                    <p>Connect our API to your website or application for on-demand sales tax data.</p></Paper>
                            </Grid>
                            <Grid item xs={4} container>
                                <Paper className={classes.paper}>Online Lookup
                    <p>Our online lookup service provides full sales tax data lookups via account portal.</p></Paper>
                            </Grid>
                            <Grid item xs={4} container>
                                <Paper className={classes.paper}>24/7 support
                    <p>Have questions for us? Use our support portal or contact us today!</p></Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={6} style={{ marginTop: '-9em' }}>
                            <Grid item xs={4}  container>
                                <Paper className={classes.paper}>Mobile Application
                    <p>Use our mobile application on the go to retrieve sales tax rates for any location.</p></Paper>
                            </Grid>
                            <Grid item xs={4} container>
                                <Paper className={classes.paper}>Online documentation
                    <p>We provide detailed documentation to help you connect your service to our API. Get started today!</p></Paper>
                            </Grid>
                            <Grid item xs={4} container>
                                <Paper className={classes.paper}>Account portal access
                    <p>Access our portal to view account details, lookup rates, and manage your subscription.</p>
                                </Paper>
                            </Grid>
                        </Grid>

                    </div>
                    {/* Support Languages */}

                    <Toolbar>
                        <Grid>
                            <Typography>
                                <h1 className={classes.supportLang}>We Are Support A Many Languages</h1>
                            </Typography>
                        </Grid>
                    </Toolbar>








        </Container>
        </CssBaseline>
        </React.Fragment>
    );
}

export default Header;