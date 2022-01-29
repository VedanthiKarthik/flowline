import React from 'react'
import prodDetails from '../../styles/productDetails'
import ps from '../../images/p&sImg'

const ServiceDetails = () => {

    const classes = prodDetails()

    return (
        <div className={classes.psWrapper}>
            {ps.map((data, index) => (
                data.type === 'service' &&
                <div key={index} className={classes.pWrapper}>
                    <div className={classes.dataWrapper}>
                        <div className={classes.pTitle}>{data.title}</div>
                        <ul>
                            {data.description !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.description}
                                </li> : null}
                            {data.Filters !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.Filters}
                                </li> : null}
                            {data.Softener !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.Softener}
                                </li> : <></>}
                            {data.ROPlant !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.ROPlant}
                                </li> : ''}
                            {data.DMMBPlants !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.DMMBPlants}
                                </li> : ''}
                            {data.FilterSoftener !== undefined ?
                                <li className={classes.pdescription}>
                                    {data.FilterSoftener}
                                </li> : ''}
                            {data.d0 !== undefined ?
                                <li className={classes.pdescription}>
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
                                </li> : ''} */}
                            {data.cdescription !== undefined ?
                                <li className={classes.pdescription}>
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
                    <div className={classes.imgWrapper}>
                        {/* <div className={classes.imgContainer}> */}
                        <img src={data.url} alt={data.title} className={classes.image} />
                        {/* </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}




export default ServiceDetails
