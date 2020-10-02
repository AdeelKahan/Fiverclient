import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, Container, Link, CssBaseline, Paper, Grid,ButtonGroup,Button,
Card,CardActionArea,CardMedia } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:'50em',
       
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop:'10em',
        boxShadow:'5em'
    },
    midle:{
        textAlign:'center',
        marginTop:'10em'
    },
    card:{
        // opacity:'0.5',
        width:'70em',
        height:'50em',
        border:'none',
        boxShadow:'none',
    //    marginTop:'10em',
       marginRight:'50em'

    },

    images:{
        
        width:'60em',
    },
    media: {
        height: '50em',
      },
}));


const Header = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
        <CssBaseline>
            <AppBar position='static'>
                {/* <Container disableGutters={false} > */}
                <Toolbar>
                    <Typography variant='h5' style={{ flexGrow: 1 }}>
                        Zip-Tax
                </Typography>
                    <Typography style={{ paddingLeft: '1em', color: 'white' }}>
                        <Link href="#">HOME</Link>
                    </Typography>
                    <Typography style={{ paddingLeft: '1em' }}>
                        <Link href="#">PRICING</Link>
                    </Typography>
                    <Typography style={{ paddingLeft: '1em' }}>
                        <Link href="#">SALES&LOOKUP</Link>
                    </Typography>
                    <Typography style={{ paddingLeft: '1em' }}>
                        <Link href="#">DOCUMENTATION</Link>
                    </Typography>
                    <IconButton color='inherit' aria-label='account' style={{ paddingLeft: '1em' }}>
                        <AccountCircle />

                    </IconButton>

                </Toolbar>

                {/* </Container> */}
            </AppBar>
        </CssBaseline>
        <Container maxwidth="sm">
                
                <div className={classes.card} style={{border:'none'}}>
                    <Card className={classes.images}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/assets/images/image1.png"
                                title="teamwork"
                            />
                        </CardActionArea>

                        <div className={classes.midle}>
                    <h1>SALES TAX API SERVICE</h1>
                    <h3>AUTOMATE YOUR SALES TAX PROCESS</h3>

                    <ButtonGroup variant="contained" color="primary">
                        <Button>Learn More</Button>
                        <Button>Pricing</Button>
                    </ButtonGroup>
                </div>
                    </Card>
                </div>



              
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>Programmetic API
                    <p>Connect our API to your website or application for on-demand sales tax data.</p></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Online Lookup
                    <p>Our online lookup service provides full sales tax data lookups via account portal.</p></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>24/7 support
                    <p>Have questions for us? Use our support portal or contact us today!</p></Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginTop:'-10em'}}>
                <Grid item xs>
                    <Paper className={classes.paper}>Mobile Application
                    <p>Use our mobile application on the go to retrieve sales tax rates for any location.</p></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Online documentation
                    <p>We provide detailed documentation to help you connect your service to our API. Get started today!</p></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Account portal access
                    <p>Access our portal to view account details, lookup rates, and manage your subscription.</p>
                    </Paper>
                </Grid>
            </Grid>


        </div>


        </Container>
        </React.Fragment>
    );
}

export default Header;