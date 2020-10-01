import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Link, CssBaseline } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const Navbar = () => {
    return (
        <CssBaseline>
            <AppBar position='static' style={{background:'lightGray'}}>
                {/* <Container disableGutters={false} > */}
                <Toolbar>
                    <Typography variant='h5' style={{ flexGrow: 1 , color:'#3f51b5' }}>
                        Zip-Tax
                </Typography>
                    <Typography style={{ paddingLeft: '1em',color:'#3f51b5' }}>
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



    );
}

export default Navbar;