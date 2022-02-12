import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

import navStyles from '../../styles/navStyles'
// import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
// import { Dialog, DialogTitle } from '@material-ui/core';

import Logo from '../../images/logo1.png'

const pages = [
    {
        "page": "Home",
        // "link": "/",
        'id': '#home'
    },
    {
        "page": "Products and Services",
        // "link": "/products",
        'id': '#products'
    },
    {
        "page": "About",
        // "link": "/about",
        'id': '#about'
    }]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = () => {

    const classes = navStyles()

    const [selectedPage, setSelectedPage] = React.useState(0)
    const [dialogisOpen, setDialog] = React.useState(false)
    const [location, setLocation] = React.useState('#home')

    const handleClick = (index, id) => {
        setSelectedPage(index);

        setLocation(id)
        // window.location.href = location
        // console.log(id, window.location.href)
    }

    return (
        // <div className={classes.navWrapper}>
        <AppBar position='sticky' className={classes.appbar}>
            <Toolbar variant="dense">
                <div className={classes.logoWrapper}>
                    <img src={Logo} alt='' className={classes.logo} />
                    <div className={classes.companyName}>FLOWLINE</div>
                </div>
                <Box sx={{ display: { xs: 'flex' } }}>
                    {pages.map((page, index) => (
                        // <Link key={page.page} to={page.link} style={{ textDecoration: "none" }}>
                        <Button
                            key={index}
                            className={`${classes.navbtn}  ${location === page.id ? classes.navbtnSelect : ''}`}
                            // onClick={() => }
                            onClick={() => { handleClick(index, page.id); window.location.href = page.id }}
                        >
                            {page.page}
                        </Button>

                        // </Link>
                    ))}
                    <Button
                        className={classes.navbtn}
                        onClick={() => setDialog(true)}
                    >Contact</Button>
                </Box>
                <Contact isOpen={dialogisOpen} setDialog={setDialog} />
            </Toolbar>
        </AppBar>
        // </div>
    )
}

export default Nav



