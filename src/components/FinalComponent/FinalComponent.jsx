import React from 'react'
// import finalStyling from '../../styles/finalCompStyling'
import '../../styles/finalComp.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';


const FinalComponent = () => {
    // const classes = finalStyling()
    return (
        <div className='foot-wrapper'>
            <div className='contacts'>
                <h3>Contact Us</h3>
                <div className='contact-mail'>
                    <div className='mail-icon'>
                        <EmailIcon fontSize='small' sx={{ color: 'white' }} />
                    </div>
                    <div className='mail-text'>admin@flowlineblr.com</div>
                </div>
                <div className='contact-tel'>
                    <div className='tel-icon'>
                        <PhoneIcon fontSize='small' sx={{ color: 'white' }} />
                    </div>
                    <div className='tel-text'>(080) 26780725, 41237150</div>
                </div>
                <div className='contact-address'>
                    <div className='address-icon'>
                        <LocationOnIcon fontSize='small' sx={{ color: 'white' }} />
                    </div>
                    <div className='address-text'>
                        <div className='address'>
                            <h4>Bangalore</h4>
                            <p>147, 18th Main, 7th Cross, BTM 2nd Stage, 560 078</p>
                        </div>
                        <div className='address'>
                            <h4>Bangalore</h4>
                            <p>147, 18th Main, 7th Cross, BTM 2nd Stage, 560 078</p>
                        </div>
                        <div className='address'></div>

                    </div>
                </div>
            </div>
            <div className='company-details'>
                <h3>Our Company</h3>
                <div className='detail'>
                    Partners:<span>D.Dwarkanath, D.Sreesha, Amith Deshmukh, Bharath Deshmukh</span>
                </div>
                <div className='detail'>Bangalore Office:
                    <span>2400 Sq. Feet</span>
                </div>
                <div className='detail'>Mysore Office
                    <span>1600 Sq. Feet</span>
                </div>
            </div>
            <div className='follow-us'>
                <h3>Reach Us</h3>
                <div className='follow-us-icon-wrapper'>
                    <div className='follow-us-icon'>
                        <FacebookIcon fontSize='large' sx={{ color: 'white' }} />
                    </div>
                    <div className='follow-us-icon'>
                        <Twitter fontSize='large' sx={{ color: 'white' }} />
                    </div>
                    <div className='follow-us-icon'>
                        <InstagramIcon fontSize='large' sx={{ color: 'white' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalComponent