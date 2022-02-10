import React from 'react'
import footerStyle from '../../styles/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {

    const classes = footerStyle()
    return (
        <footer className={classes.footerWrapper}>
            <>
                <div><b>Tel : (080) 26780725, 41237150</b></div>
                <div><b>Email : admin@flowlineblr.com</b></div>
            </>
            <><FacebookIcon sx={{ color: 'white' }} />
                <InstagramIcon sx={{ color: 'white' }} />
                <YouTubeIcon sx={{ color: 'white' }} />
            </>
        </footer>
    )
}

export default Footer
