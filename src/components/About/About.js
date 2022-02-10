import { Box, Card, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import aboutStyles from '../../styles/aboutStyles'
import clientLogos from '../../images/clientLogo'
import wave from '../../images/wave.png'

const About = () => {
    console.log(clientLogos.map(({ name, url }, index) => url))
    const classes = aboutStyles()

    return (
        <div id='about' className={classes.aboutWrapper}>
            <img src={wave} alt='wave' className={classes.wave} />
            <h1 className={classes.typoHeader}>
                Clients
            </h1>
            <div className={classes.clientsWrapper}>
                <Grid container alignItems="center" justifyContent="space-around" align='center' >
                    {clientLogos.map(({ name, url }, index) => (
                        <Grid item xs={4} md={2} key={index} >
                            <div className={classes.imgHolder}>
                                <img src={url} alt={name} className={classes.media} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
            {/* <Box sx={{ my: 2 }}></Box> */}
            <div className={classes.bottomGrid}>
                <div className={classes.branches}>
                    <h1 className={classes.typoHeader}>
                        Branches
                    </h1>
                    <div className={classes.branchWrapper}>
                        <Card className={classes.branchHolder}>
                            <Typography variant='subtitle1' className={classes.branch}><u>Bangalore</u></Typography>
                            <Typography variant='body1' className={classes.branchDetails}>147, 18th Main, 7th Cross, BTM 2nd Stage, Bangalore – 560 078</Typography>
                            <Typography variant='body1' className={classes.branchDetails}>(080) 26780725, 41237150</Typography>
                            <Typography variant='body1' className={classes.branchDetails}> admin@flowlineblr.com</Typography>
                        </Card>
                        <Card className={classes.branchHolder}>
                            <Typography variant='subtitle1' className={classes.branch}><u>Bangalore</u></Typography>
                            <Typography variant='body1' className={classes.branchDetails}>147, 18th Main, 7th Cross, BTM 2nd Stage, Bangalore – 560 078</Typography>
                            <Typography variant='body1' className={classes.branchDetails}>(080) 26780725, 41237150</Typography>
                            <Typography variant='body1' className={classes.branchDetails}> admin@flowlineblr.com</Typography>
                        </Card>
                    </div>
                </div>



                <div className={classes.branches}>
                    <h1 className={classes.typoHeader}>
                        Establishment
                    </h1>
                    <div className={classes.branchWrapper}>
                        <Card className={classes.edetails}>
                            {/* <Typography variant='subtitle2' className={classes.branch}>Bangalore</Typography> */}
                            <Typography variant='body1' className={classes.branchDetails}><u><b>Partners</b> </u>   :    D.Dwarkanath, D.Sreesha, Amith Deshmukh, Bharath Deshmukh</Typography>
                            {/* <Typography variant='body1' className={classes.branchDetails}><u><b>Office Area</b></u> : 2 Offices</Typography> */}
                            <Typography variant='body1' className={classes.branchDetails}> <u><b>Bangalore Office</b></u> : 2400 Sq. Feet </Typography>
                            <Typography variant='body1' className={classes.branchDetails}><u><b> Mysore Office</b></u> : 1600 Sq. Feet </Typography>
                            <Typography variant='body1' className={classes.branchDetails}> <u><b>Factory</b></u> : 2 Nos. </Typography>
                            {/* <Typography variant='body2' className={classes.branchDetails}> Bangalore Office : 2400 Sq. Feet </Typography> */}
                            {/* <Typography variant='body2' className={classes.branchDetails}> Bangalore Office : 2400 Sq. Feet </Typography> */}

                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
