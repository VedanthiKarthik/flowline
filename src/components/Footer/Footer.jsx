import React from 'react'
import footerStyle from '../../styles/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {

    const classes = footerStyle()
    return (
        <div className={classes.footerWrapper}>
            <footer>
                <>
                    <div><b>Tel : (080) 26780725, 41237150</b></div>
                    <div><b>Email : admin@flowlineblr.com</b></div>
                </>
                <><FacebookIcon sx={{ color: 'red' }} />
                    <InstagramIcon sx={{ color: 'red' }} />
                    <YouTubeIcon sx={{ color: 'red' }} />
                </>
            </footer>
        </div>
    )
}

export default Footer
