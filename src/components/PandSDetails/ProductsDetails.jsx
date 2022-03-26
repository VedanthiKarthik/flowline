import React from 'react'
import prodDetails from '../../styles/productDetails'
import ps from '../../images/p&sImg'
import '../../styles/productDetails.css'

const ProductsDetails = () => {

    const classes = prodDetails()



    return (
        <div className='p-s-wrapper'>
            {ps.map((data, index) => (
                data.type === 'product' &&
                <div className='product-wrapper'>
                    <div className='product-text'>
                        <div className='product-title'>{data.title}</div>

                        <ul>
                            {data.description !== undefined ?
                                <li className="p-description">
                                    {data.description}
                                </li> : null}

                            {data.Filters !== undefined ?
                                <li className="p-description">
                                    {data.Filters}
                                </li> : null}

                            {data.Softener !== undefined ?
                                <li className="p-description">
                                    {data.Softener}
                                </li> : null}

                            {data.ROPlant !== undefined ?
                                <li className="p-description">
                                    {data.ROPlant}
                                </li> : ''}

                            {data.DMMBPlants !== undefined ?
                                <li className="p-description">
                                    {data.DMMBPlants}
                                </li> : ''}

                            {data.FilterSoftener !== undefined ?
                                <li className="p-description">
                                    {data.FilterSoftener}
                                </li> : ''}


                            {data.d0 !== undefined ?
                                <li className="p-description">
                                    {data.d0}
                                    <ul>
                                        <li>{data.l1}</li>
                                        <li>{data.l2}</li>
                                        <li>{data.l3}</li>
                                        <li>{data.l4}</li>
                                    </ul>
                                </li> : ''}

                            {data.cdescription !== undefined ?
                                <li className="p-description">
                                    {data.cdescription}
                                    <ul>
                                        <li>{data.c1}</li>
                                        <li>{data.c2}</li>
                                        <li>{data.c3}</li>
                                        <li>{data.c4}</li>
                                        <li>{data.c5}</li>
                                        <li>{data.c6}</li>
                                    </ul>
                                </li> : ''}
                        </ul>
                    </div>
                    <div className='product-image-wrapper'>
                        <div className='product-image'>
                            <img src={data.url} alt={data.title}
                            />
                        </div>
                    </div>
                </div>))
            }
        </div>
        // <div className={classes.psWrapper}>
        //     {ps.map((data, index) => (
        //         data.type === 'product' &&
        //         <div key={index} className={`${classes.pWrapper} ${index % 2 == 1 ? classes.pEven : ''}`}>
        //             {console.log(index)}
        //             <div className={classes.dataWrapper}>
        //                 <div className={classes.pTitle}>{data.title}</div>
        //                 <ul>
        //                     {data.description !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.description}
        //                         </li> : null}
        //                     {data.Filters !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.Filters}
        //                         </li> : null}
        //                     {data.Softener !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.Softener}
        //                         </li> : <></>}
        //                     {data.ROPlant !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.ROPlant}
        //                         </li> : ''}
        //                     {data.DMMBPlants !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.DMMBPlants}
        //                         </li> : ''}
        //                     {data.FilterSoftener !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.FilterSoftener}
        //                         </li> : ''}
        //                     {data.d0 !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.d0}
        //                             <ul>
        //                                 <li>{data.l1}</li>
        //                                 <li>{data.l2}</li>
        //                                 <li>{data.l3}</li>
        //                                 <li>{data.l4}</li>
        //                             </ul>
        //                         </li> : ''}
        //                     {/* {data.d1 !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.d1}
        //                         </li> : ''} */}
        //                     {data.cdescription !== undefined ?
        //                         <li className={classes.p-description}>
        //                             {data.cdescription}
        //                             <ul>
        //                                 <li>{data.c1}</li>
        //                                 <li>{data.c2}</li>
        //                                 <li>{data.c3}</li>
        //                                 <li>{data.c4}</li>
        //                                 <li>{data.c5}</li>
        //                                 <li>{data.c6}</li>
        //                             </ul>
        //                         </li> : ''}
        //                 </ul>
        //             </div>
        //             <div className={`${classes.imgWrapper} ${index % 2 === 1 ? classes.evenimg : ''}`}>
        //                 {/* <div className={classes.imgContainer}> */}
        //                 <img src={data.url} alt={data.title} className={`${classes.image} `} />
        //                 {/* </div> */}
        //             </div>
        //         </div>
        //     ))}
        // </div>
    )
}




export default ProductsDetails
