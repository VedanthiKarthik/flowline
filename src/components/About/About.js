import { Box, Card, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import aboutStyles from '../../styles/aboutStyles'
import clientLogos from '../../images/clientLogo'
import wave from '../../images/wave.png'
import aboutUsImg from '../../images/compressors/C4.jpg'
import Clients from './Clients'


const About = () => {
    console.log(clientLogos.map(({ name, url }, index) => url))
    const classes = aboutStyles()

    return (
        <div id='about' className={classes.aboutWrapper}>
            {/* <img src={wave} alt='wave' className={classes.wave} /> */}

            <div className={classes.aBody}>
                <div className={classes.aImgWrapper}>
                    <img src={aboutUsImg} alt='abtImg' />
                    <Clients />
                </div>
                <div className={classes.aDetailsText}>
                    <h1 className={classes.typoHeader}>
                        About Us
                    </h1>
                    <div className={classes.aDetails}>
                        In today’s fiercely competitive markets; a customer needs instant access to wide ranging business solutions and also needs support that is fast and close at hand. This is what we, as Flowline Engineers bring to the table. As a local single window solution in utilities and services, we are pioneers of Utility Management.
                    </div>
                    <div className={classes.aDetails}>
                        Established in 1992, we have evolved over the course of the past few decades to be the brand to be reckoned with when it comes to utilities. The organization can be viewed under 4 verticals.
                    </div>
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li>CUSTOMER FOCUS</li>
                    </ul>
                    <div>As a utility solution provider, we operate on customer requirement and interests and give the customer the best solution by customizing our products to match the customer’s needs, thus enriching the Customer's business. Customer focus has been the hallmark of Flowline Engineers.</div>
                    <ul>
                        <li>CUSTOMER SPECIFIC SOLUTIONS</li>
                    </ul>
                    <div>We not only provide solutions based on our products but also provide consultation in Air, Water and Steam Engineering. Working with the customer to provide the best technical expertise, products and inculcating cost savings into this package has been Flowline’s forte since 1992.</div>
                    <ul>
                        <li>24/7 - IMPECCABLE SERVICE</li>
                    </ul>
                    <div>We offer spares, 24/7 services, Annual Maintenance Contracts, Breakdown support in addition to our sales support. Flowline’s impeccable service record is a matter of pride for the organization. The accords we have got for our service team is priceless, making the team the backbone of the organization.</div>
                </div>
            </div>
            {/*   <div className={classes.clientsWrapper}>
                <Grid container alignItems="center" justifyContent="space-around" align='center' >
                    {clientLogos.map(({ name, url }, index) => (
                        <Grid item xs={4} md={2} key={index} >
                            <div className={classes.imgHolder}>
                                <img src={url} alt={name} className={classes.media} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div> */}

        </div>
    )
}

export default About
