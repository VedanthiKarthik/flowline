import React from 'react'
import '../../styles/carousal.css'
// import carousal from '../../styles/carousalAnimation'
import imgs from '../../images/carousal'
import { Carousel } from "react-responsive-carousel";
import carousal from '../../styles/carousalAnimation'

const MyCarousal = () => {

    const classes = carousal()

    const [selectedImg, setImg] = React.useState(3)
    console.log(imgs.length)
    return (
        // <div className={classes.cWrapper}>
        <div className={classes.cWrapper}>
            <div className={classes.headerTitle}>
                {/* <p >FlowLine</p>     */}
            </div>
            <Carousel autoPlay
                showStatus={false} showIndicators={false} showArrows={false}
                showThumbs={false} infiniteLoop className={classes.c} interval={5000}>

                {imgs.map(({ id, url }, index) => (
                    <img src={url} alt={id} key={index} className={classes.imgs}
                    // className={`${classes.imgs} ${selectedImg === index ? classes.imgTop : ''} `}
                    />
                    //  <p className="legend">Legend 2</p>
                ))}
            </Carousel>

        </div>
        // </div>
    )
}

export default MyCarousal







// "../../images/img_3.jpg"