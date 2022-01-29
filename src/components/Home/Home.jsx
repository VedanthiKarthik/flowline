import React from 'react'

import useStyles from '../../styles/homeStyle'
import MyCarousal from './Carousal'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {

    const classes = useStyles()
    return (
        <div id='home' className={classes.homeWrapper}>
            <MyCarousal />
            <div className={classes.description}>
                <div className={classes.desc}>
                    <div className={classes.desc1}><i>In today’s fiercely competitive markets; A customer needs instant access to wide ranging business
                        solutions and also needs support that is fast and close at hand.</i>
                    </div>
                    <div className={classes.desc1}><i>This is what we, as Flowline Engineers
                        bring to the table. As a local single window solution in utilities and services, we are pioneers of Utility
                        Management.</i>
                    </div>
                </div>
            </div>
            <div className={classes.descWrapper}>
                <div className={classes.descWrapper1}>
                    <div className={classes.desc2}><i>'A ONE STOP SHOP FOR ALL YOUR UTILITY NEEDS'</i></div>
                    <div className={classes.desc2}><b>VISION -</b><i> INDUSTRY LEADERS IN UTILITY MANAGEMENT</i></div>
                    <div className={classes.desc2}><b>MISSION -</b><i> EXCELLENCE THROUGH CUSTOMER FOCUS</i></div>
                </div>
            </div>
        </div>
    )
}

export default Home
