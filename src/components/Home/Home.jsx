import React from 'react'

import MyCarousal from './Carousal'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TyperText from './TyperText';
import Nav from '../Nav/Nav';
import '../../styles/home.css'

const Home = () => {

    return (
        <div id='home' className="home-wrapper">
            <MyCarousal />
            <div className='typer'>
                <TyperText />
            </div>
            <div className="description">
                <p ><i>{`In today’s fiercely competitive markets; A customer needs instant access to wide ranging business
                        solutions and also needs support that is fast and close at hand.`}</i>
                </p>
                <p ><i>{`This is what we, as Flowline Engineers
                        bring to the table. As a local single window solution in utilities and services, we are pioneers of Utility
                        Management.`}</i>
                </p>
            </div>
        </div>
    )
}

export default Home
