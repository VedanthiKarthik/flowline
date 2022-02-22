import React from 'react'
import footerStyle from '../../styles/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Twitter } from '@mui/icons-material';
const Footer = () => {

    const classes = footerStyle()
    return (
        <footer className={classes.footerMain}>
            <div className={classes.detailsWrapper}>
                <div className={classes.header}>Contact At</div>
                {/* <div className={`${classes.details} `}>
                    <div className={classes.contactIcon}>
                        <PhoneIcon fontSize="small" sx={{ color: 'white' }} />
                    </div>
                    <div className={classes.detail}>(080) 26780725, 41237150</div>
                </div>
                <div className={classes.details}>
                    <div className={classes.contactIcon}>
                        <EmailIcon fontSize="small" sx={{ color: 'white' }} />
                    </div>
                    <div className={classes.detail}>admin@flowlineblr.com</div>
                </div>
                <div className={classes.details}>
                    <div className={classes.contactIcon}>
                        <LocationOnIcon fontSize="small" sx={{ color: 'white' }} />
                    </div>
                    <div className={classes.detail} >
                        <div>
                            <div>Bangalore</div>
                            <div className={classes.addr}>147, 18th Main, 7th Cross, BTM 2nd Stage, 560 078</div>
                        </div>
                        <div >
                            <div>Bangalore</div>
                            <div className={classes.addr}>147, 18th Main, 7th Cross, BTM 2nd Stage, 560 078</div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className={classes.dimeDetails}>
                <div className={classes.header}>Our Company</div>
                <div className={classes.subHeader}>Partners:
                    <span>D.Dwarkanath, D.Sreesha, Amith Deshmukh, Bharath Deshmukh</span>
                </div>
                <div className={classes.subHeader}>Bangalore Office:
                    <span>2400 Sq. Feet</span>
                </div>
                <div className={classes.subHeader}>Mysore Office
                    <span>1600 Sq. Feet</span>
                </div>
            </div>
            <div className={classes.followUs}>
                <div className={classes.header}>Follow Us</div>
                <div className={classes.followIcon}>
                    <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <div className={classes.followIcon}>
                    <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <div className={classes.followIcon}>
                    <Twitter fontSize="large" sx={{ color: 'white' }} />
                </div> 
            </div> */}
        </footer>
    )
}

export default Footer
