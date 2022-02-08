import { CardActionArea, CardMedia, CardActions, Typography, CardContent, Card, Grid, Fade, Grow, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import pNsImg from '../../images/p&sImg'
import pAnds from '../../styles/productsAndServices'
import pbg from '../../images/pbg1.png'

const ProductsAndServices = () => {
    const classes = pAnds()
    return (
        <div id='products' className={classes.pAndsWrapper}>
            <hr className={classes.divider} />
            {/* <Nav /> */}
            <Fade in={true} timeout={2000}>
                {/* <Typography variant='h4' className={classes.typoHeader}>
                    {`Products & Services`}
                </Typography> */}
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
                    <Link to='/products&servies'>
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
                        {/* {data.Filters !== undefined ? 
                                <li >
                                    {data.Filters}
                                </li> : null}
                            {data.Softener !== undefined ?
                                <li >
                                    {data.Softener}
                                </li> : <></>}
                            {data.ROPlant !== undefined ?
                                <li >
                                    {data.ROPlant}
                                </li> : ''}
                            {data.DMMBPlants !== undefined ?
                                <li >
                                    {data.DMMBPlants}
                                </li> : ''}
                            {data.FilterSoftener !== undefined ?
                                <li >
                                    {data.FilterSoftener}
                                </li> : ''}
                            {data.d0 !== undefined ?
                                <li >
                                    {data.d0}
                                    <ul>
                                        <li>{data.l1}</li>
                                        <li>{data.l2}</li>
                                        <li>{data.l3}</li>
                                        <li>{data.l4}</li>
                                    </ul>
                                </li> : ''}
                            {/* {data.d1 !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.d1}
                                </li> : ''} 
                            {data.cdescription !== undefined ?
                                <li >
                                    {data.cdescription}
                                    <ul>
                                        <li>{data.c1}</li>
                                        <li>{data.c2}</li>
                                        <li>{data.c3}</li>
                                        <li>{data.c4}</li>
                                        <li>{data.c5}</li>
                                        <li>{data.c6}</li>
                                    </ul>
                                </li> : ''}  */}
                        {/* </ul> */}

                    </div>
                </div>
            </div>
        </Grow>
    )
}
