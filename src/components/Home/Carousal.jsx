import React from 'react'
// import '../../styles/carousal.css'
import imgs from '../../images/carousal'
import { Carousel } from "react-responsive-carousel";
import '../../styles/carousal.css'
const MyCarousal = () => {
    return (
        <div className="carousal-wrapper">
            {/* <div className="carousal-"> */}
            {/* <div className={classes.headerTitle}> */}
            {/* <p >FlowLine</p>     */}
            {/* </div> */}
            <Carousel autoPlay
                showStatus={false} showIndicators={false} showArrows={false}
                showThumbs={false} infiniteLoop interval={10000}>

                {imgs.map(({ id, url }, index) => (
                    <img src={url} alt={id} key={index} className="carousal-images"
                    // className={`${classes.imgs} ${selectedImg === index ? classes.imgTop : ''} `}
                    />
                    //  <p className="legend">Legend 2</p>
                ))}
            </Carousel>

            {/* </div> */}
        </div>
    )
}

export default MyCarousal







// "../../images/img_3.jpg"