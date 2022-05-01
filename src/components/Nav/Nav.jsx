import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Contact from '../Contact/Contact';
import Logo from '../../images/logo1.png'
import '../../styles/nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';




const pages = [
    {
        "page": "Home",
        'id': '#home'
    },
    {
        "page": "Products and Services",
        'id': '#products'
    },
    {
        "page": "About",
        'id': '#about'
    }]

const Nav = (props) => {
    const [selectedPage, setSelectedPage] = React.useState(0)
    const [dialogisOpen, setDialog] = React.useState(false)
    const [location, setLocation] = React.useState('#home')
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawerWidth = 240;

    const handleClick = (index, id) => {
        setSelectedPage(index);
        setLocation(id)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        window.location.href = location
    }, [location])


    const drawer = (
        <div>
            {/* <Toolbar sx={{ position: 'relative', marginBottom: "15px" }}>
                <div className="logo-wrapper">
                    <img src={Logo} alt='Flowline-logo' className="logo-img" />
                    <div className="company-name">FLOWLINE</div>
                </div></Toolbar>
            <Divider sx={{ borderColor: "var(--color-text)" }} /> */}
            <List sx={{ paddingTop: "30%" }}>
                {pages.map(({ page, id }, index) => (
                    <ListItem button key={index} onClick={() => {
                        handleClick(index, id);
                        handleDrawerToggle()
                    }}>
                        <ListItemText primary={page} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <AppBar position='sticky' className="appbar">
            <Toolbar variant="dense" sx={{ position: "relative" }}>
                <div className="logo-wrapper">
                    <img src={Logo} alt='Flowline-logo' className="logo-img" />
                    <div className="company-name">FLOWLINE</div>
                </div>
                <Box sx={{ display: { xs: 'flex' } }} id="myTopnav">
                    {pages.map((page, index) => (
                        <Button
                            key={index}
                            className={"nav-button " + (location === page.id ? "selected" : '')}
                            onClick={() => { handleClick(index, page.id); }}
                        >
                            {page.page}
                        </Button>
                    ))}
                    <Button
                        className="nav-button"
                        onClick={() => setDialog(true)}
                    >Contact</Button>
                    <MenuIcon fontSize='large' className="icon" onClick={handleDrawerToggle} />
                </Box>
                <Contact isOpen={dialogisOpen} setDialog={setDialog} />


                <Box
                    component="nav"
                    aria-label="sm-nav-drawer"
                >
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        className="drawer"
                    >
                        {drawer}
                    </Drawer>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Nav



