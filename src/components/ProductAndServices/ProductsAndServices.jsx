import { CardActionArea, CardMedia, CardActions, Typography, CardContent, Card, Grid, Fade, Grow, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import pNsImg from '../../images/p&sImg'
import "../../styles/prod-and-serservice-main.css"

const ProductsAndServices = () => {

    return (
        <div id='products'>
            <div className="prod-service-wrapper">
                <hr className="divider" />
                <div className="heading-wrapper">
                    <h1 className="heading">
                        {`Products & Services`}
                    </h1>
                    <div className="line"></div>
                </div>
                <div className='card-container'>
                    {pNsImg.map((data, index) => (
                        index <= 5 &&
                        <ProductandServiceCard index={index} data={data} key={index} />
                        // <ProductCard index={index} data={data} key={index} />
                        // <CircularProductCard index={index} data={data} key={index} />
                    ))}

                    {/* <Link to='/products&servies#main'>
                    <div className="link-container">
                        <div className="shape-round">
                            <span className="arrow-common arrow-up"></span>
                            <span className="arrow-common arrow-bottom"></span>
                        </div>
                    </div>
                </Link> */}


                    {/* <Grow in={true}
                    timeout={pNsImg.length * 100}
                >
                    <Link to='/products&servies#main'>
                        <div className="link-container">
                            <div className="shape-round">
                                <span className="arrow-common arrow-up"></span>
                                <span className="arrow-common arrow-bottom"></span>
                            </div>
                        </div>
                    </Link>
                </Grow> */}
                </div>
            </div>
            <hr className="divider" />

        </div>
    )
}

export default ProductsAndServices


// const ProductCard = ({ index, data }) => {
//     return (
//         <Grow in={true}
//             timeout={(index + 1) * 1000}
//         >
//             <Link to="/products&servies#main">
//                 <div className="card" >
//                     <div className="card-content-wrapper">
//                         <div className="card-img-wrapper">
//                             <img src={data.url} alt={data.title} className="card-img" />
//                         </div>
//                         <div className="card-text">
//                             <div className="card-title"><u>{data.title}</u></div>
//                             {/* <ul> */}
//                             {data.description !== undefined ?
//                                 <div className="card-description">
//                                     {data.description}
//                                 </div> : null}
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </Grow>
//     )
// }


const ProductandServiceCard = ({ index, data }) => {
    return (
        <Link to="/products&servies#main">
            <div className="p-s-card-wrapper">
                <img src={data.url} alt={data.title} className="p-s-image" />
                <div className="p-s-content">
                    <div className="p-s-card-text">{data.title}</div>
                </div>
                {/* <div className="p-s-text">{data.title}</div> */}
                {/* <img src={data.url} alt={data.title} className="p-s-card-img" /> */}
            </div>
        </Link>
    )
}


// const CircularProductCard = ({ index, data }) => {
//     return (
//         <div className="circular-card-wrapper">
//             <div className="circular-card">
//                 <h2>{data.title}</h2>
//             </div>
//         </div>
//     )
// }