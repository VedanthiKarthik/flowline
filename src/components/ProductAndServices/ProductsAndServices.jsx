import { CardActionArea, CardMedia, CardActions, Typography, CardContent, Card, Grid, Fade, Grow, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import Nav from '../Nav/Nav'
import pNsImg from '../../images/p&sImg'
import pAnds from '../../styles/productsAndServices'
// import pbg from '../../images/pbg1.png'

const ProductsAndServices = () => {
    const classes = pAnds()
    return (
        <div id='products' className={classes.pAndsWrapper}>
            <hr className={classes.divider} />
            {/* <Nav /> */}
            <Fade in={true} timeout={2000}>
                <h1 className={classes.typoHeader}>
                    {`Products & Services`}
                </h1>
            </Fade>
            <div className={classes.psContainer}>
                {pNsImg.map((data, index) => (
                    index <= 2 && <ProductCard index={index} data={data} key={index} />
                ))}
                <Grow in={true}
                    timeout={pNsImg.length * 100}
                >
                    {/* <div className={classes.arrowWrappper}>

                    </div> */}
                    <Link to='/products&servies#main'>
                        <div className={classes.center}>

                            <div className={classes.round}>
                                <span className={`${classes.s} ${classes.s1}`}></span>
                                <span className={`${classes.s} ${classes.s2}`}></span>

                            </div>

                        </div>
                    </Link>
                </Grow>
            </div>
            <hr className={classes.divider} />
            {/* <Divider variant="middle" /> */}
        </div>
    )
}

export default ProductsAndServices


const ProductCard = ({ index, data }) => {

    const handleClick = (title) => {
        // e.preventDefault();
        console.log('The link was clicked.' + title);
    };

    const classes = pAnds()
    return (

        <Grow in={true}
            timeout={(index + 1) * 1000}
        >
            <div className={classes.p}>
                <div className={classes.pContainer}>
                    <div className={classes.imageContainer}>
                        <img src={data.url} alt={data.title} className={classes.image} />
                    </div>
                    <div className={classes.detailsContainer}>
                        <div className={classes.title}><u>{data.title}</u></div>


                        {/* <ul> */}
                        {data.description !== undefined ?
                            <div className={classes.description}>
                                {data.description}
                            </div> : null}
                    </div>
                </div>
            </div>
        </Grow>
    )
}
